import React, { useContext ,useState,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from '../Routes_System/routes';
import axios from 'axios';
import {Loading} from '../components';
import { SelectProfileContainer } from '../Container/profiles';
import '../styles/profilePage.css';
export default function Profile(){

    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [profile,setProfile] = useState({});

    return(
        <>
        <div className ='form_class'>
            <div className ="Incenter">
                <h2>Your Profile</h2>
                <div className="drag_area"><img src={`/images/users/${user.photoURL}.png`} alt ="Your Icon"/></div>

                <div className="formInput">
                    <h2>Name :</h2>
                    <div className ="formChildren">
                        {user.displayName}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}