import React from 'react';
import mergeClass, { ClassValue } from 'clsx';
import Styles from '../assets/styles/components/Button.module.scss';

export type buttonTypes = {
  onButtonClick: (event: React.MouseEvent) => void;
  children?: React.ReactChild;
  className?: ClassValue;
};

const Button = (props: buttonTypes) => {
  return (
    <button
      type="button"
      className={mergeClass(Styles.button, props.className)}
      onClick={props.onButtonClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
