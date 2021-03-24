import React from 'react';
import * as ROUTES from '../Routes_System/routes';
import {Header} from '../components';
import logo from '../BingeBoxLogo.png';
import {Profiles} from '../components';

export default function SelectProfilesContainer({user,setProfiles}){
    return (
        <>
        <Header bg ={false}>
            <Header.Frame>
                <Header.Logo imageLink={ROUTES.HOME} src={logo} alt="Bing Box" />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title>Who's watching Bing Box ?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={()=>setProfiles({displayName:user.displayName ,photoURL:user.photoURL})}>
                    <Profiles.picture src ={user.photoURL}></Profiles.picture>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
        </>
    );
}