import React from 'react';
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/payment_header';
import planData from '../fixtures/plans.json';

import {PaymentComp} from '../components';
export default function Payment(){


    return(
        <>
        <HeaderContainer >

            <PaymentComp>
                <PaymentComp.Title> Choose the plan that’s right for you</PaymentComp.Title>
                <PaymentComp.SubTitle>Downgrade or upgrade at any time.</PaymentComp.SubTitle>
                {planData.map(item =>(
                    <PaymentComp.Col>
                        <PaymentComp.PriceBox>
                            <PaymentComp.Head key={item.id}>{item.header}</PaymentComp.Head>
                            <PaymentComp.emphasis>{item.Price}</PaymentComp.emphasis>
                            <li><strong>{item.video_quality}</strong> Video Quality</li>
                            <li><strong>{item.resolution}</strong> </li>
                            <li><strong>{item.onMobile}</strong></li>
                            <li><strong>{item.onTV}</strong></li>
                            <li>View on <strong>{item.concurrent_watches} Screens </strong>at same time</li>
                            <li><strong>{item.unlimited_movies}</strong></li>
                            <li><strong>{item.cancel}</strong></li>
                        </PaymentComp.PriceBox>
                        <PaymentComp.Button>Choose Plan</PaymentComp.Button>
                    </PaymentComp.Col>
                ))}
            
            </PaymentComp>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}