import React from 'react';
import {Container,Title} from './styles/payment';

export default function Payment({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Payment.Title = function PaymentTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}