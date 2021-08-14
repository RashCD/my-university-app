import React from 'react';
import Styles from '../assets/styles/components/Input.module.scss';
import mergeClass from 'clsx';

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
  const isError = Boolean(errors[id] && errors[id].message);

  return (
    <div className={Styles.inputContainer}>
      <label className={Styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={mergeClass(Styles.input, isError && Styles.inputError)}
        type={type}
        id={id}
        {...register}
        placeholder={placeholder}
      />
      {errors[id] && <p className={Styles.errorText}>*{errors[id].message}</p>}
    </div>
  );
};

export default Input;
