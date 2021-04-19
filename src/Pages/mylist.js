import React, { useContext ,useState,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from '../Routes_System/routes';
import axios from 'axios';
import {Loading} from '../components';
import { SelectProfileContainer } from '../Container/profiles';
import '../styles/mylist.css';
export default function MyList(){

    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [content,setcontent] = useState([]);

    useEffect(()=>{
            
        const api = 'http://localhost:8080/movie/showWishList/'+user.uid;
        console.log(api);
        axios.get(api).then((res) =>{
            setcontent(res.data);
            //console.log(res.data);
        })
        .catch((error)=>{
            console.log("Error occurred due to Continue Watching");
            console.log(error.message);
        });
    },[user.uid]);

    //console.log("The user Info :",content);
    return(
        <>
        <div className="header_title">
            <h1>Hello {user.displayName}!</h1>
        </div>
        {content.length ===0 ?(<h2>No List</h2>):(
            <>
            <h2>Here your List</h2>
            </>
        )}
        </>
    );
}