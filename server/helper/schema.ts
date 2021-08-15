import * as yup from 'yup';

export const signupSchema = yup.object({
  body: yup.object({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
    country: yup.string(),
  }),
});
