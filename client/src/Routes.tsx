import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import NotFoundPage from './views/NotFoundPage';
import AuthPage from './views/AuthPage';

const Routes = () => {
  return (
    <Router>
      <LandingPage path="/" />
      <AuthPage path="/login" />
      <NotFoundPage path="*" />
    </Router>
  );
};

export default Routes;
