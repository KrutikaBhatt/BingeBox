import React from 'react';
import App from './App';
import {render} from 'react-dom';
import { GlobalStyles } from './globalStyles';
import 'normalize.css';
import {firebase} from './Configurations/firebase.prod';
import {FirebaseContext} from './context/firebase';

render(
  <>
  <FirebaseContext.Provider value ={{firebase}}>
  <GlobalStyles />
  <App />
  </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);