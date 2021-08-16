import { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import LandingPage from './views/LandingPage';
import NotFoundPage from './views/NotFoundPage';
import AuthPage from './views/AuthPage';
import ProfilePage from './views/ProfilePage';
import { UserContext } from './context/UserContext';

const Routes = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <Router>
      {loggedIn ? (
        <ProfilePage path="/profile" />
      ) : (
        <Redirect from="/profile" to="/login" noThrow />
      )}
      <LandingPage path="/" />
      <AuthPage path="/login" />
      <NotFoundPage path="*" />
    </Router>
  );
};

export default Routes;
