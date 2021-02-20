import faqsData from '../fixtures/faqs.json';
import React from 'react';
import {FAQs} from '../components';

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
        </FAQs>
    );
}