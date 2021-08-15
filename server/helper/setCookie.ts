import { Response } from 'express';
import { random } from './random';

export const setCookie = ({
  name = 'cookieName',
  randomLength = 10,
  maxAgeDay = 2,
  response,
}: {
  name?: string;
  randomLength?: number;
  maxAgeDay?: number;
  response: Response;
}) => {
  const randomString = random(randomLength);

  return response.cookie(name, randomString, {
    maxAge: maxAgeDay * 24 * 60 * 60 * 1000, // 2 days (default)
    httpOnly: true,
  });
};
