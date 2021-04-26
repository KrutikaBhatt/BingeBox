import  {useState,useContext,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function AuthListner(){
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const {firebase} = useContext(FirebaseContext);

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
        
        return () => listner();
    },[]);
 // eslint-disable-next-line
    return {user};
}