import React from 'react';
import { useHistory } from 'react-router-dom';
import {JumbotronContainer} from '../Container/jumbotron';
import {FAQsContainer } from '../Container/faqs';
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/header';
import {OptingForm} from '../components';
import {Feature} from '../components';
import * as ROUTES from '../Routes_System/routes';

export default function HOME(){

    const history = useHistory();

    return(
        <>
        <HeaderContainer >
            <Feature>
                <Feature.Title>
                    Unlimited films, TV Programme and more!!
                </Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime!</Feature.SubTitle>
            
        <OptingForm>
            <OptingForm.Input placeholder ="Enter Your Email Adress"></OptingForm.Input>
            
            <OptingForm.Button onClick={() =>{history.push(ROUTES.signup)}}>Try It Now</OptingForm.Button>

            <OptingForm.Break /> 
            <OptingForm.Text>Ready to watch? Enter your email to create or restart your
                membership </OptingForm.Text>
        </OptingForm>
        </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FAQsContainer />
        <FooterContainer />
        
        </>
    );
}