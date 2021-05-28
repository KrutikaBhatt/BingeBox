import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {sendDatabase} from '../database';

const config ={
    apiKey: "",
    authDomain: "",
    projectId: "",
    databaseURL: '',
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebase = Firebase.initializeApp(config);
//sendDatabase(firebase);
export {firebase};