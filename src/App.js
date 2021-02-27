import React from 'react';
import * as ROUTES from './Routes_System/routes';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {HOME,Browse,SignUp,Login,Payment} from './Pages';

export default function App() {
  return(
    <Router>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path ={ROUTES.HOME}>
        <HOME />
    </Route>
    <Route exact path ="/payment">
      <Payment />
    </Route>
    </Router>
  );
}

