import  {useState,useContext,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';
import axios from 'axios';
import userEvent from '@testing-library/user-event';


export default function ContiueWatchhook(target){
    console.log(target);
    const [content,setcontent] = useState([]);  // By default will be an array
    const {firebase} = useContext(FirebaseContext);

    useEffect(()=>{
        
        const api = 'http://localhost:8080/movie/showContinueWatching/'+target
        console.log(api);
        axios.get(api).then((res) =>{
            setcontent(res.data);
        })
        .catch((error)=>{
            console.log("Error occurred due to UseContext hooks");
            console.log(error.message);
        });
    },[]);

    return {[target]:content};
}