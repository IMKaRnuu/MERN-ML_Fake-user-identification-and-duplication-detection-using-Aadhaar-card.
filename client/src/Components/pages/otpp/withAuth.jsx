import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }
    return <Component />;
  };
  return AuthRoute;
};

export default withAuth;
