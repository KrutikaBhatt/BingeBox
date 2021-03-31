import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background ,Container,Logo,ButtonLink,Feature,Text , FeatureCallOut,Link, Group} from './styles/header';

export default function Header({bg =true,children,...restProps}){
    return bg ? <Background {...restProps}>{children}</Background> :children;
}

Header.Frame =function HeaderFrame({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    );
};
Header.Callout = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
  };

  Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };

Header.Logo  = function HeaderLogo({imageLink,...restProps}){
    return(
        <ReactRouterLink to={imageLink}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
  };
  
Header.ButtonLink = function HeaderButton({children , ...restProps}){
    return (<ButtonLink {...restProps}>{children}</ButtonLink>);
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };

  Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };
  