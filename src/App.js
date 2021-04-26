import React from 'react';
import * as ROUTES from './Routes_System/routes';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {HOME,Browse,SignUp,Login,Payment,Profile,MyList} from './Pages';
import {IsUserRedirect, ProtectedBrowse,ProtectedPaymentGateway} from './restrictions/routes';
import { AuthListner} from './custom-hooks';

export default function App() {

  const user = null;  
  //const user = AuthListner();
  //console.log(user);

 // const user = null;
  
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

    {/* <ProtectedPaymentGateway user={user} path={ROUTES.payment}>
      <Payment />
     </ProtectedPaymentGateway> */}
     </Switch>

     <Route exact path ={ROUTES.profile}>
        <Profile />
    </Route>
    <Route exact path ={ROUTES.payment}>
        <Payment/>
    </Route>
    <Route exact path ={ROUTES.MyList}>
      <MyList />
    </Route>
    </Router>
  );
}

