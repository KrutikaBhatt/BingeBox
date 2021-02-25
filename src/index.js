import React from 'react';
import App from './App';
import {render} from 'react-dom';
import { GlobalStyles } from './globalStyles';
import 'normalize.css';
import {firebase} from './Configurations/firebase.prod';

render(
  <>
  <GlobalStyles />
  <App />
  </>,
  document.getElementById('root')
);