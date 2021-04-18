import React, { useContext ,useState,useEffect} from 'react';
import {useContexthook} from '../custom-hooks';
import selectionFilter from '../selection_map/selection-map';
import {BrowseContainer} from '../Container/browse';
import {FirebaseContext} from '../context/firebase';
import axios from 'axios';
//import {ContiueWatchhook} from '../custom-hooks';

export default function Browse(){

    const {firebase} =useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    const {series} = useContexthook('series');
    const {films} = useContexthook('films');
    const {India} = useContexthook('India');
    //console.log(user.uid);


    const slides = selectionFilter({series,films,India});



    return(
    <BrowseContainer slides ={slides}/>
    );
}