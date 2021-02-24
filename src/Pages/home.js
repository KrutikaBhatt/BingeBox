import React from 'react';
import {JumbotronContainer} from '../Container/jumbotron';
import {FAQsContainer } from '../Container/faqs';
import {FooterContainer} from '../Container/footer';

export default function HOME(){
    return(
        <>
        <JumbotronContainer />,
        <FAQsContainer />,
        <FooterContainer />
        </>
    );
}