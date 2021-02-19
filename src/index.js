import React from 'react';
import App from './App';
import {render} from 'react-dom';
import { GlobalStyles } from './globalStyles';
import 'normalize.css';

render(
  <>
  <GlobalStyles />
  <App />
  </>,
  document.getElementById('root')
);