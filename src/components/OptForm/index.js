import React from 'react';
import {Container,Input,Text,Button,Break} from './styles/optForm';
export default function OptingForm({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    );
}

OptingForm.Input = function OptingFormInput({...restProps}){
    return <Input {...restProps}/>;
};

OptingForm.Button = function OptingFormButton({children,...restProps}){
    return (
        <Button {...restProps}>
            {children}
            <img src ="/images/icons/chevron-right.png" alt ="Subscribe now" />
        </Button>
    );
};

OptingForm.Text = function OptingFormText({children,...restProps}){
    return (
       <Text {...restProps}>
           {children}
       </Text>
    );
};

OptingForm.Break = function OptingFormBreak({...restProps}){
    return (
        <Break {...restProps}>
        </Break>
    );
};