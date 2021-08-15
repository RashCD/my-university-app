import { navigate, RouteComponentProps } from '@reach/router';
import React, { useContext, useState } from 'react';
import AppHeader from '../components/AppHeader';
import Button from '../components/Button';
import Styles from '../assets/styles/views/AuthPage.module.scss';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import requestLogin from '../queries/requestLogin';
import requestSignup from '../queries/requestSignup';
import { UserContext } from '../context/UserContext';

enum AuthType {
  LOGIN = 'login',
  SIGNUP = 'signup',
}

const AuthPage = (props: RouteComponentProps) => {
  const { setLoggedIn } = useContext(UserContext);
  const [buttonSelected, setButtonSelected] = useState(AuthType.LOGIN);

  const loggedInCallback = () => {
    setLoggedIn(true);
    navigate('/profile', { replace: true });
  };

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
              <LoginForm
                onFormSubmit={(event) =>
                  requestLogin(event)
                    .then((res) => res.status === 200)
                    .then(loggedInCallback)
                    .catch((err) => alert(err.response.data.message))
                }
              />
            ) : (
              <SignupForm
                onFormSubmit={(event) =>
                  requestSignup(event)
                    .then((res) => res.status === 200)
                    .then(loggedInCallback)
                    .catch((err) => alert(err.response.data.message))
                }
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
