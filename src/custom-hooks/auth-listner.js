import  {useState,useContext,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function AuthListner(){
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const {firebase} = useContext(FirebaseContext);

    //Fucking Magic
    useEffect(() => {
        const listner = firebase.auth().onAuthStateChanged((authUser)=>{
            if(authUser){
                localStorage.setItem('authUser',JSON.stringify(authUser));
                setUser(authUser);
            }else{
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        //Clean up the listner
        //Make sure this gets cleaned up for better transistion
        return () => listner();
    },[]);

    return {user};
}