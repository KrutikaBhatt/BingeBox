import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../Routes_System/routes';
import logo from '../BingeBoxLogo.png';

export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo imageLink={ROUTES.HOME} alt="BingeBox Logo" src={logo}/>
                <Header.ButtonLink  to={ROUTES.signup}>SignUp</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}