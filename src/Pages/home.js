import React from 'react';
import {JumbotronContainer} from '../Container/jumbotron';
import {FAQsContainer } from '../Container/faqs';
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/header';
import {OptingForm} from '../components';
import {Feature} from '../components';

export default function HOME(){
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
            
            <OptingForm.Button>Try it now</OptingForm.Button>
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