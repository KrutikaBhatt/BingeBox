import React from 'react';
import * as ROUTES from '../Routes_System/routes';
import {Header} from '../components';
import logo from '../BingeBoxLogo.png';
import {Profiles} from '../components';

export function SelectProfileContainer({user,setProfile}){
    return (
        <>
        <Header bg ={false}>
            <Header.Frame>
                <Header.Logo imageLink={ROUTES.HOME} src={logo} alt="Binge Box" />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title>Who's watching Binge Box ?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={()=>setProfile({displayName:user.displayName ,photoURL:user.photoURL})} data-testid="user-profile">
                    <Profiles.picture src ={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
        </>
    );
}