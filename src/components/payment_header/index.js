import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background ,Container,Logo,ButtonLink} from './styles/Pheader';

export default function PHeader({bg =true,children,...restProps}){
    return bg ? <Background {...restProps}>{children}</Background> :children;
}

PHeader.Frame =function HeaderFrame({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    );
};
PHeader.Logo  = function HeaderLogo({imageLink,...restProps}){
    return(
        <ReactRouterLink to={imageLink}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    );
};

PHeader.ButtonLink = function HeaderButton({children , ...restProps}){
    return (<ButtonLink {...restProps}>{children}</ButtonLink>);
};
