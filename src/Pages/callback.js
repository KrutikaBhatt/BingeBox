import React,{ useContext ,useState,useEffect} from 'react';
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/payment_header';
import {PaymentComp} from '../components';
import * as ROUTES from '../Routes_System/routes';
import {FirebaseContext} from '../context/firebase';
import { NavLink, useHistory } from 'react-router-dom';
export default function Callback(){ 
    const history = useHistory();
    const {firebase} =useContext(FirebaseContext);
    return(
        <>
        <HeaderContainer >
            <PaymentComp>
                <PaymentComp.Title>You have successfully created the account!!<br /><br /> Please SignIn to your account</PaymentComp.Title>
                <PaymentComp.Button onClick = {() =>{
                    firebase.auth().signOut();
                  history.push(ROUTES.login)}}>Log In</PaymentComp.Button>
            </PaymentComp>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}