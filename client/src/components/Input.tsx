import React from 'react';

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
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register} placeholder={placeholder} />
      {errors[id] && <p>{errors[id].message}</p>}
    </>
  );
};

export default Input;
