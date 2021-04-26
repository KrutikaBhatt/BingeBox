import  {useState,useContext,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function useContexthook(target){
    const [content,setcontent] = useState([]);  // By default will be an array
    const {firebase} = useContext(FirebaseContext);
    useEffect(()=>{
        firebase.firestore().collection(target).get().then((snapshot)=>{
            const allContent = snapshot.docs.map((contentdoc)=>({
                ...contentdoc.data(),
                docId:contentdoc.id,
            }));

            setcontent(allContent);
        })
        .catch((error)=>{
            console.log("Error occurred due to UseContext hooks");
            console.log(error.message);
        });
    },[]); 
    // eslint-disable-next-line
    return {[target]:content};
}