import React from 'react';
import {useContexthook} from '../custom-hooks';

export default function Browse(){
    const {series} = useContexthook('series');
    console.log(series);
    return(<p>From Browse</p>);
}