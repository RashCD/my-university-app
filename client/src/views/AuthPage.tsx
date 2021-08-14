import { RouteComponentProps } from '@reach/router';
import React from 'react';
import AppHeader from '../components/AppHeader';

const AuthPage = (props: RouteComponentProps) => {
  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">
        <p>test</p>
      </main>
    </div>
  );
};

export default AuthPage;
