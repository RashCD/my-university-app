import React from 'react';
import Button, { buttonTypes } from '../components/Button';
import Styles from '../assets/styles/components/CTAButton.module.scss';
import mergeClass from 'clsx';

const CTAButton = (props: buttonTypes) => {
  const { children, className, ...rest } = props;
  return (
    <Button className={mergeClass(Styles.cta, className)} {...rest}>
      {children}
    </Button>
  );
};

export default CTAButton;
