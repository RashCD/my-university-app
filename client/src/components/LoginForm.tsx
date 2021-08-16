import CTAButton from './CTAButton';
import Input from './Input';
import Styles from '../assets/styles/components/Form.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type LoginFormValues = {
  username: string;
  password: string;
};

type LoginFormTypes = {
  onFormSubmit: (event: LoginFormValues) => void;
};

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

const LoginForm = (props: LoginFormTypes) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
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
        type="password"
        placeholder="Enter Your Password"
        register={register('password')}
        errors={errors}
      />
      <CTAButton type="submit">Login</CTAButton>
    </form>
  );
};

export default LoginForm;
