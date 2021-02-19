import React from 'react';
import App from './App';
import {render} from 'react-dom';
import { GlobalStyle } from './globalStyles';


render(
  <>
  <GlobalStyle />
  <App />,
  </>,
  document.getElementById('root')
);