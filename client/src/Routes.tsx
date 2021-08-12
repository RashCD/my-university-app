import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import NotFoundPage from './views/NotFoundPage';

const Routes = () => {
  return (
    <Router>
      <LandingPage path="/" />
      <NotFoundPage path="*" />
    </Router>
  );
};

export default Routes;
