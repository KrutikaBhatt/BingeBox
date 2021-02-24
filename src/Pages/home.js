import React from 'react';
import {JumbotronContainer} from '../Container/jumbotron';
import {FAQsContainer } from '../Container/faqs';
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/header';

export default function HOME(){
    return(
        <>
        <HeaderContainer >
        <JumbotronContainer />
        <FAQsContainer />
        <FooterContainer />
        </HeaderContainer>
        </>
    );
}