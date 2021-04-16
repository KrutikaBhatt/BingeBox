import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedBrowse({ user, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          if (user == null) {
            return children;
          }
  
          if (!user || user == null) {
            return (
              <Redirect
                to={{
                  pathname: '/signup',
                  state: { from: location },
                }}
              />
            );
          }
  
          return null;
        }}
      />
    );
  }
  
  
export function ProtectedPaymentGateway({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          //return children;
          return(
            <Redirect to={{
              pathname: '/browse',
              state:{from :location},
            }}
            />
          );
        }

        if (!user || user == null) {
          return (
            <Redirect
              to={{
                pathname: '/signup',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
