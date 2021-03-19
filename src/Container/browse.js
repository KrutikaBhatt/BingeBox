import React, { useContext } from 'react';
import SelectProfileContainer from './profiles';
import {FirebaseContext} from '../context/firebase';

export function BrowseContainer({slides}){
    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    return(
        <SelectProfileContainer user={user} />
        
    );
}