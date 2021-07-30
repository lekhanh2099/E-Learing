import React from "react";
import { Redirect, Route } from "react-router-dom";

export function IsUserRedirect({
  component: Component,
  user,
  loggedInPath,
  children,
  ...restPops
}) {
  return (
    <Route
      {...restPops}
      render={(props) => {
        if (!user) {
          return <Component {...props}>{children}</Component>;
        }
        if (user) {
          return (
            <Redirect
              {...props}
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, loggedInPath, ...restPops }) {
  return (
    <Route
      {...restPops}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
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

export function ProtectedAminRoute({
  user,
  children,
  loggedInPath,
  ...restPops
}) {
  return (
    <Route
      {...restPops}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
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
