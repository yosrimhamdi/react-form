import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  if (props.isLoggedIn) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};

export default ProtectedRoute;
