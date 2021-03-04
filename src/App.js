import React from 'react';
import * as ROUTES from './Routes_System/routes';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {HOME,Browse,SignUp,Login,Payment} from './Pages';
import {IsUserRedirect, ProtectedBrowse} from './restrictions/routes';

export default function App() {

  const user = null;
  
  return(
    <Router>
      <Route exact path="/signup">
        <SignUp />
      </Route>

      <IsUserRedirect user ={user} loggedInPath ={ROUTES.browse} path = {ROUTES.login}>
        <Login />
        </IsUserRedirect>

        <ProtectedBrowse user={user} path={ROUTES.browse} >
        <Browse />
      </ProtectedBrowse>

      <IsUserRedirect user ={user} loggedInPath ={ROUTES.browse} path = {ROUTES.HOME} exact>
        <HOME />
    </IsUserRedirect>
    <Route exact path ="/payment">
      <Payment />
    </Route>
    </Router>
  );
}

