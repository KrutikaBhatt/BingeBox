import React, { useContext ,useState,useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';
import axios from 'axios';
import '../styles/profilePage.css';
export default function Profile(){

    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [content,setcontent] = useState([]);
    const [passwordReset,setpasswordReset] = useState('Reset the password');

    useEffect(()=>{
            
        const api = 'http://localhost:8080/api/getUser/'+user.uid;
        console.log(api);
        axios.get(api).then((res) =>{
            setcontent(res.data);
<<<<<<< HEAD
            //console.log(res.data);
=======
            console.log(res.data);
>>>>>>> earlier-changes-v2
        })
        .catch((error)=>{
            console.log("Error occurred due to Continue Watching");
            console.log(error.message);
        });
    },[user.uid]);
    const Passwordreset = ()=>{

        var auth = firebase.auth();
        var emailAddress = content.emailId;
        if(emailAddress === ''){
            console.log("Error in sending email");
        }
        else{
        console.log(emailAddress);
        auth.sendPasswordResetEmail(emailAddress).then(function() {
            setpasswordReset("Reset Link sent to your Email");
        }).catch(function(error) {
            console.log(error.message);
        });
    }
    }
    console.log("The user Info :",content);
    return(
        <>
        <div className ='form_class'>
            <div className ="Incenter">
                <h2>Your Profile</h2>
                <div className="drag_area"><img src={`/images/users/${user.photoURL}.png`} alt ="Your Icon"/></div>

                <div className="formInput">
                    <h2>Name :&nbsp;&nbsp;</h2>
                    <div className ="formChildren">
                        {user.displayName}
                    </div>
                </div>
                <div className="formInput">
                    <h2>Email :&nbsp;&nbsp;</h2>
                    <div className ="formChildren">
                        {content.emailId}
                    </div>
                </div>
                <div className="formInput">
                    <h2>Plan :&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                    <div className ="formChildren">
                        {content.plan}
                    </div>
                </div>
                <div className="validity">
                    <h2>Validity :</h2>
                    <div className ="formChildren">
                        {content.valid_till}
                    </div>
                </div>
                <div className="button_class">
                    <div className="profileButton" onClick={Passwordreset}>
                        {passwordReset}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}