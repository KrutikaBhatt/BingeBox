import React from 'react';
import { PHeader } from '../components';
import * as ROUTES from '../Routes_System/routes';
import logo from '../BingeBoxLogo.png';

export function HeaderContainer({children}){
    return(
        <PHeader>
            <PHeader.Frame>
                <PHeader.Logo imageLink={ROUTES.HOME} alt="BingeBox Logo" src={logo}/>
                <PHeader.ButtonLink  to={ROUTES.HOME}>Log Out</PHeader.ButtonLink>
            </PHeader.Frame>
            {children}
        </PHeader>
    );
}