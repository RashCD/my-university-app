import { Response } from 'express';
import { random } from './random';

export const setCookie = ({
  name = 'cookieName',
  content,
  maxAgeDay = 2,
  response,
}: {
  name?: string;
  maxAgeDay?: number;
  content?: string | object;
  response: Response;
}) => {
  const randomString = random(10);

  return response.cookie(name, content || randomString, {
    path: '/',
    maxAge: maxAgeDay * 24 * 60 * 60 * 1000, // 2 days (default)
  });
};
