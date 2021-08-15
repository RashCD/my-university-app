import axios from 'axios';
import { SignupFormValues } from '../components/SignupForm';

const requestSignup = (params: SignupFormValues) => {
  const formData = new FormData();

  for (const key in params) {
    formData.append(key, params[key as keyof SignupFormValues]);
  }

  axios.post('/api/signup', params);
};

export default requestSignup;
