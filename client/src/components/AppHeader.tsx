import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Styles from '../assets/styles/components/AppHeader.module.scss';
import Button from './Button';
import Icon from './Icon';
import BackIcon from '../assets/icons/back.svg';

const MOBILE_SIZE = 500;

const AppHeader = (props: { title?: string }) => {
  const isLanding = window.location.pathname === '/';

  const [isMobileSize, setIsMobileSize] = useState(
    window.innerWidth < MOBILE_SIZE ? true : false
  );

  const iconSize = isMobileSize ? 20 : 30;

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_SIZE}px)`);

    const onChangeListener = (event: MediaQueryListEvent) => {
      setIsMobileSize(event.matches);
    };

    mediaQuery.addEventListener('change', onChangeListener);

    return () => mediaQuery.removeEventListener('change', onChangeListener);
  }, []);

  return (
    <header className={Styles.appHeader}>
      {!isLanding && (
        <Button
          className={Styles.backButton}
          onButtonClick={() => navigate(-1)}
        >
          <>
            <Icon
              src={BackIcon}
              size={iconSize}
              color="white"
              alt="back icon"
            />
            BACK
          </>
        </Button>
      )}
      <h1 className={Styles.title}>{props.title || ''}</h1>
    </header>
  );
};

export default AppHeader;
