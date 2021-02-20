import faqsData from '../fixtures/faqs.json';
import React from 'react';
import {FAQs} from '../components';
import OptingForm from '../components/OptForm';

export function FAQsContainer(){
    return(
        <FAQs>
            <FAQs.Title>
                Frequently Asked Questions 
            </FAQs.Title>
            {faqsData.map(item =>(
                <FAQs.Item key={item.id}>
                    <FAQs.Header>{item.header}</FAQs.Header>
                    <FAQs.Body>{item.body}</FAQs.Body>
                </FAQs.Item>
            ))}

            <FAQs.Item />
            <OptingForm>
                <OptingForm.Input placeholder ="Enter Your Email Adress"></OptingForm.Input>
               
                <OptingForm.Button>Subscribe </OptingForm.Button>
                <OptingForm.Break />
                <OptingForm.Text>Ready to watch? Enter your email to create or start the 
                    membership </OptingForm.Text>
            </OptingForm>
        </FAQs>

    );
}