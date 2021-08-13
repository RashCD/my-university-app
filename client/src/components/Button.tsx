import React from 'react';
import mergeClass, { ClassValue } from 'clsx';
import Styles from '../assets/styles/components/Button.module.scss';

export type buttonTypes = {
  onButtonClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactChild;
  className?: ClassValue;
};

const Button = (props: buttonTypes) => {
  const { onButtonClick = () => {}, type = 'button' } = props;
  return (
    <button
      type={type}
      className={mergeClass(Styles.button, props.className)}
      onClick={onButtonClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
