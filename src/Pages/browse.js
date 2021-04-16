import React from 'react';
import {useContexthook} from '../custom-hooks';
import selectionFilter from '../selection_map/selection-map';
import {BrowseContainer} from '../Container/browse';

export default function Browse(){
    const {series} = useContexthook('series');
    const {films} = useContexthook('films');
    const {India} = useContexthook('India');
    const slides = selectionFilter({series,films,India});
    console.log(slides);
    return(
    <BrowseContainer slides ={slides}/>
    );
}