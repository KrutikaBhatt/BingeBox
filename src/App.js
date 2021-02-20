import React from 'react';
import {JumbotronContainer} from './Container/jumbotron';
import {FooterContainer} from './Container/footer';
import { FAQsContainer } from './Container/faqs';
export default function App() {
  return(
    <>
  <JumbotronContainer />,
  <FAQsContainer />,
  <FooterContainer />
  </>
  );
}

