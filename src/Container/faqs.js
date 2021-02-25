import faqsData from '../fixtures/faqs.json';
import React from 'react';
import {FAQs , OptingForm} from '../components';


export function FAQsContainer(){
    return(
        <div>
        <FAQs>
            <FAQs.Title>
                Frequently Asked Questions 
            </FAQs.Title>
            <FAQs.Frame>
            {faqsData.map(item =>(
                <FAQs.Item key={item.id}>
                    <FAQs.Header>{item.header}</FAQs.Header>
                    <FAQs.Body>{item.body}</FAQs.Body>
                </FAQs.Item>
            ))}
            </FAQs.Frame>
        
            <OptingForm>
                <OptingForm.Input placeholder ="Enter Your Email Adress"></OptingForm.Input>
               
                <OptingForm.Button>Try it now</OptingForm.Button>
                <OptingForm.Break /> 
                <OptingForm.Text>Ready to watch? Enter your email to create or restart your
                    membership </OptingForm.Text>
            </OptingForm>
     </FAQs>
       </div>

    );
}