import express, { Express, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import validate from './helper/validate';
import { signupSchema } from './helper/schema';
import { User } from './helper/types';
import { setCookie } from './helper/setCookie';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../client/build')));

const filePath = './user.json';

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from server!' });
});

app.post(
  '/api/login',
  validate(signupSchema),
  (request: Request, response: Response) => {
    fs.readFile(filePath, { encoding: 'utf8', flag: 'a+' }, (error, data) => {
      if (error) {
        throw error;
      }

      const dataArray: User[] = data && JSON.parse(data);

      const { username, password } = request.body;

      const user =
        data &&
        dataArray.find(
          (data) => data.username === username && data.password === password
        );

      if (user) {
        setCookie({ response });

        response.json({ message: 'user found' });
      } else {
        response.json({ message: 'User not found. Try again' });
      }
    });
  }
);

app.post(
  '/api/signup',
  validate(signupSchema),
  (request: Request, response: Response) => {
    fs.readFile(filePath, { encoding: 'utf8', flag: 'a+' }, (error, data) => {
      if (error) {
        throw error;
      }

      const oldContent = data && JSON.parse(data);

      const newContent = {
        username: request.body.username,
        password: request.body.password,
        country: request.body.country || '',
      };

      const mergeContent = data
        ? JSON.stringify([...oldContent, newContent], null, 4)
        : JSON.stringify([newContent], null, 4);

      return fs.writeFile(filePath, mergeContent, (err) => {
        if (err) {
          throw err;
        }
        console.log('The file was saved!');
      });
    });

    setCookie({ response });

    response.json({ message: 'User registered' });
  }
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
