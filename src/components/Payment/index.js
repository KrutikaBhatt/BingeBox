import React from 'react';
import {Container,Title,Button,Col,SubTitle,Emp,Price_box,Head} from './styles/payment';

export default function Payment({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Payment.Title = function PaymentTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};


Payment.Button = function PaymentButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>;
};

Payment.SubTitle = function PaymentSunTitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Payment.Col = function PaymenetCol({children, ...restProps}){
    return <Col {...restProps} >{children}</Col>;
};

Payment.PriceBox = function Pricebox({children,...restProps}){
    return <Price_box {...restProps}>{children}</Price_box>;
};

Payment.emphasis = function Emphasis({children,...restProps}){
    return <Emp {...restProps}>{children}</Emp>;
};

Payment.Head = function PHeader({children,...restProps}){
    return <Head {...restProps}>{children}</Head>
};