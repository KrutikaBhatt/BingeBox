import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/login_header';
import {Login_Form} from '../components';
import * as ROUTES from '../Routes_System/routes';

export default function Login(){

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailId,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const forgotFlag = false;
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

        console.log(emailAddress);
        auth.sendPasswordResetEmail(emailAddress).then(function() {
            
        }).catch(function(error) {
            console.log(error.message);
        });
    }
    return(
        <>
    <HeaderContainer>
        <Login_Form>
            <Login_Form.Title>
                Log In
            </Login_Form.Title>
            {error && <Login_Form.Error>{error}</Login_Form.Error>}
            {forgotFlag && <Login_Form.Error>You have received the Password reset mail to your given email Address </Login_Form.Error>}

            <Login_Form.Base onSubmit={handleLogin} method ="POST">

                <Login_Form.Input placeholder = "Email Adress" value ={emailId} onChange={({target}) => setEmail(target.value)} />
                <Login_Form.Input placeholder = "Enter Password here " value ={password} onChange={({target}) => setPassword(target.value)} />
                <Login_Form.Submit disabled ={isInvalid} type = "submit">
                    Log In
                </Login_Form.Submit>
                <center><Login_Form.Text ><a href ="" onClick ={forgetPassword}>Forgot Password</a></Login_Form.Text></center>
            </Login_Form.Base>
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