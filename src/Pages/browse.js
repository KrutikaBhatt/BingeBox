import React, { useContext} from 'react';
import {useContexthook} from '../custom-hooks';
import selectionFilter from '../selection_map/selection-map';
import {BrowseContainer} from '../Container/browse';
import {FirebaseContext} from '../context/firebase';

export default function Browse(){

    const {firebase} =useContext(FirebaseContext);
    
    const {series} = useContexthook('series');
    const {films} = useContexthook('films');
    const {India} = useContexthook('India');
    //console.log(user.uid);


    const slides = selectionFilter({series,films,India});



    return(
    <BrowseContainer slides ={slides}/>
    );
}