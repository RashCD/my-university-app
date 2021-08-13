import React from 'react';
import Styles from '../assets/styles/components/Input.module.scss';

type InputPropTypes = {
  id: string;
  type?: string;
  label?: string;
  placeholder?: string;
  register: any;
  errors?: {
    [key: string]: {
      message?: string;
    };
  };
};

const Input = (props: InputPropTypes) => {
  const {
    id,
    label = '',
    type = 'text',
    placeholder = '',
    register,
    errors = {},
  } = props;
  return (
    <div className={Styles.inputContainer}>
      <label className={Styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={Styles.input}
        type={type}
        id={id}
        {...register}
        placeholder={placeholder}
      />
      {errors[id] && <p>{errors[id].message}</p>}
    </div>
  );
};

export default Input;
