import axios from 'axios';
import { LoginFormValues } from '../components/LoginForm';

const requestLogin = (params: LoginFormValues) => {
  const formData = new FormData();

  for (const key in params) {
    formData.append(key, params[key as keyof LoginFormValues]);
  }

  return axios.post('/api/login', params);
};

export default requestLogin;
