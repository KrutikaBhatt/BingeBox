import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/login_header';
import {Login_Form} from '../components';
import * as ROUTES from '../Routes_System/routes';
import { isElementOfType } from 'react-dom/test-utils';

export default function Login(){

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailId,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const isInvalid = password ==''||emailId == '';
    //Firebase Work here --
    const handleLogin =(event) =>{
        event.preventDefault();

        return firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password)
          .then(() => {
            history.push(ROUTES.browse);
          })
          .catch((error) => {
            setEmail('');
            setPassword('');
            setError(error.message);
          });
    };

    const forgetPassword = ()=>{

        var auth = firebase.auth();
        var emailAddress = emailId;
        if(emailAddress == ''){
            setError("Please enter the email Field");
        }
        else{
        console.log(emailAddress);
        setError("Password reset link sent to your email Address");
        auth.sendPasswordResetEmail(emailAddress).then(function() {
            
        }).catch(function(error) {
            console.log(error.message);
        });
    }
    }
    return(
        <>
    <HeaderContainer>
        <Login_Form>
            <Login_Form.Title>
                Log In
            </Login_Form.Title>
            {error && <Login_Form.Error>{error}</Login_Form.Error>}

            <Login_Form.Base onSubmit={handleLogin} method ="POST">

                <Login_Form.Input placeholder = "Email Adress" value ={emailId} onChange={({target}) => setEmail(target.value)} />
                <Login_Form.Input placeholder = "Enter Password here " value ={password} onChange={({target}) => setPassword(target.value)} />
                <Login_Form.Submit disabled ={isInvalid} type = "submit">
                    Log In
                </Login_Form.Submit>
                
            </Login_Form.Base>
            <center><Login_Form.resetPassword ><p onClick ={forgetPassword} style={{color: "white"}}>Forgot Password</p></Login_Form.resetPassword></center>
            <Login_Form.Text> New to Binge Box? <Login_Form.Link to="/signup">Sign up now!</Login_Form.Link>
            </Login_Form.Text>

            <Login_Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more
            </Login_Form.TextSmall>
        </Login_Form>
    </HeaderContainer>
    <FooterContainer />
    </>
    );
}