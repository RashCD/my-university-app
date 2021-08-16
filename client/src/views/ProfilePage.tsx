import { RouteComponentProps } from '@reach/router';
import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import Cookie from '../util/cookie';
import Styles from '../assets/styles/views/ProfilePage.module.scss';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const ProfilePage = (props: RouteComponentProps) => {
  const { setLoggedIn } = useContext(UserContext);
  const userEncoded = Cookie.get('user', '');
  const removePrefixes =
    userEncoded[0] === 'j' ? userEncoded.substr(2) : userEncoded;
  const userProfileStringify = decodeURIComponent(removePrefixes);
  const userProfile = JSON.parse(userProfileStringify);

  const onLogoutButtonPress = () => {
    setLoggedIn(false);
    Cookie.remove('user');
  };

  return (
    <div className="app">
      <AppHeader title="Profile" />
      <div className="app-main">
        <p className={Styles.secondText}>Username</p>
        <p className={Styles.mainText}>{userProfile.username}</p>
        <p className={Styles.secondText}>Country of Origin</p>
        <p className={Styles.mainText}>{userProfile.country}</p>
        <CTAButton
          className={Styles.logout}
          onButtonClick={onLogoutButtonPress}
        >
          Logout
        </CTAButton>
      </div>
    </div>
  );
};

export default ProfilePage;
