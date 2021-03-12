import React from 'react';
import * as ROUTES from './Routes_System/routes';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import {HOME,Browse,SignUp,Login,Payment} from './Pages';
import {IsUserRedirect, ProtectedBrowse} from './restrictions/routes';
import { AuthListner} from './custom-hooks';

export default function App() {

  //const user = null; - No longer need to setup this .
  const user = AuthListner();
  console.log(user);
  
  return(
    <Router>
      <Switch>
      <IsUserRedirect user ={user} loggedInPath ={ROUTES.browse} path = {ROUTES.signup}>
        <SignUp />
      </IsUserRedirect>

      <IsUserRedirect user ={user} loggedInPath ={ROUTES.browse} path = {ROUTES.login}>
        <Login />
        </IsUserRedirect>

        <ProtectedBrowse user={user} path={ROUTES.browse}>
        <Browse />
      </ProtectedBrowse>

      <IsUserRedirect user ={user} loggedInPath ={ROUTES.browse} path = {ROUTES.HOME} exact>
        <HOME />
    </IsUserRedirect>

    <ProtectedBrowse user={user} path={ROUTES.payment}>
      <Payment />
     </ProtectedBrowse>
     </Switch>
    </Router>
  );
}

