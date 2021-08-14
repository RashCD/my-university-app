import React, { FormEvent } from 'react';
import CTAButton from './CTAButton';
import Input from './Input';
import Styles from '../assets/styles/components/Form.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SignupFormValues = {
  username: string;
  password: string;
  confirm_password: string;
  country: string;
};

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match')
    .required('this is a required field'),
  country: yup.string(),
});

type SignupFormTypes = {
  onFormSubmit: (event: FormEvent) => void;
};

const SignupForm = (props: SignupFormTypes) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <form
      action="submit"
      className={Styles.form}
      onSubmit={handleSubmit(props.onFormSubmit)}
    >
      <Input
        id="username"
        label="Username"
        placeholder="Enter Your Username"
        register={register('username')}
        errors={errors}
      />
      <Input
        id="password"
        label="Password"
        placeholder="Enter Your Password"
        register={register('password')}
        errors={errors}
      />
      <Input
        id="confirm_password"
        label="Confirm Password"
        placeholder="Enter Again Your Password"
        register={register('confirm_password')}
        errors={errors}
      />
      <Input
        id="country"
        label="Country"
        placeholder="Enter Your Country of Origin"
        register={register('country')}
        errors={errors}
      />
      <CTAButton type="submit">Signup</CTAButton>
    </form>
  );
};

export default SignupForm;
