import { RouteComponentProps } from '@reach/router';
import React from 'react';
import AppHeader from '../components/AppHeader';
import Cookie from '../util/cookie';

const ProfilePage = (props: RouteComponentProps) => {
  const userEncoded = Cookie.get('user', '');
  const removePrefixes =
    userEncoded[0] === 'j' ? userEncoded.substr(2) : userEncoded;
  const userProfileStringify = decodeURIComponent(removePrefixes);
  const userProfile = JSON.parse(userProfileStringify);

  return (
    <div className="app">
      <AppHeader title="Profile" />
      <div className="app-main">
        <p>Username</p>
        <p style={{ fontWeight: 'bold', color: 'black' }}>
          {userProfile.username}
        </p>
        <p>Country of Origin</p>
        <p style={{ fontWeight: 'bold', color: 'black' }}>
          {userProfile.country}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
