import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {sendDatabase} from '../database';

const config ={
    apiKey: "AIzaSyABL60xF8Ml1QlyUN4lcThXIB_LtysaT9M",
    authDomain: "bingbox-f22d8.firebaseapp.com",
    projectId: "bingbox-f22d8",
    databaseURL: 'https://bingbox-f22d8.firebaseapp.com',
    storageBucket: "bingbox-f22d8.appspot.com",
    messagingSenderId: "8042230020",
    appId: "1:8042230020:web:1333fa3305f682141da051"
};

const firebase = Firebase.initializeApp(config);
//sendDatabase(firebase);
export {firebase};