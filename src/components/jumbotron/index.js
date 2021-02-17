import React from 'react';
import {Container,Inner,Pane,Title,subTitle,Image} from './styles/jumbotron';

export default function Jumbotron({ children,direction ='row', ...restProps}){
    return (
        <Inner direction={direction}>
           {children}
        </Inner>
    );
}

Jumbotron.Container = function JumbotronContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.subTitle = function Jumbotronsubtitle({children,...restProps}){
    return <subTitle {...restProps}>{children}</subTitle>;
};

Jumbotron.Image = function JumbotronImage({children,...restProps}){
    return <Image {...restProps} />;
};