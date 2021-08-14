import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import Button from '../components/Button';
import Styles from '../assets/styles/views/AuthPage.module.scss';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

enum AuthType {
  LOGIN = 'login',
  SIGNUP = 'signup',
}

const AuthPage = (props: RouteComponentProps) => {
  const [buttonSelected, setButtonSelected] = useState(AuthType.LOGIN);

  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">
        <div className={Styles.container}>
          <Button
            className={
              buttonSelected !== AuthType.LOGIN && Styles.selectedRight
            }
            onButtonClick={() => setButtonSelected(AuthType.LOGIN)}
          >
            Login
          </Button>
          <Button
            className={
              buttonSelected !== AuthType.SIGNUP && Styles.selectedLeft
            }
            onButtonClick={() => setButtonSelected(AuthType.SIGNUP)}
          >
            Sign Up
          </Button>
          <div className={Styles.formContainer}>
            {buttonSelected === AuthType.LOGIN ? (
              <LoginForm onFormSubmit={() => {}} />
            ) : (
              <SignupForm onFormSubmit={() => {}} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
