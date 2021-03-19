import React from 'react';
import * as ROUTES from '../Routes_System/routes';
import {Header} from '../components';
import logo from '../BingeBoxLogo.png';

export function SelectProfileContainer({user,setProfile}){
    return (
        <>
        <Header bg ={false}>
            <Header.Frame>
                <Header.Logo imageLink={ROUTES.HOME} src={logo} alt="Bing Box" />
            </Header.Frame>
        </Header>
        <Profile>
            <Profile.Title>Who's watching Bing Box ?</Profile.Title>
            <Profile.List>
                <Profile.User>
                    <Profile.picture src ={user.photoURL}></Profile.picture>
                    <Profile.Name>{user.displayName}</Profile.Name>
                </Profile.User>
            </Profile.List>
        </Profile>
        </>
    );
}