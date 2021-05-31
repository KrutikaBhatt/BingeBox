import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/header';
import {Login_Form as Form} from '../components';
import * as ROUTES from '../Routes_System/routes';

export default function SignUp(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const firestore = firebase.firestore();
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '' || password.length < 6;
    
    const handleSignup = (event) => {
        event.preventDefault();

        return firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
          .then((result) =>{
            result.user
              .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
              })
              .then(() => {
                var user = firebase.auth().currentUser;
                const data ={
                  emailId :emailAddress,
                  Name :firstName,
                  plan: '',
                  valid_till :'',
                  wishList :[],
                  continueWatching :[],
                  paymentHistory :[],
                };
                firestore.collection('users').doc(user.uid).set(data);
                user.sendEmailVerification().then(function() {
                }).catch(function(error) {
                });
                history.push(ROUTES.payment);
              })
            })

          .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          });
         
      };
    return(
        <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up" onclick="alert('Verification mail is sent to your Email-Id. Please verify!!');">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/login"> Log in Now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
    );
}