import express, { Express, Request, Response } from 'express';
import fs from 'fs';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from server!' });
});

app.post('/api/login', (req: Request, res: Response) => {
  res.json({ message: req.body });
});

app.post('/api/signup', (request: Request, respond: Response) => {
  const filePath = './user.json';

  fs.readFile(filePath, { encoding: 'utf8', flag: 'a+' }, (error, data) => {
    if (error) {
      throw error;
    }

    const oldContent = data && JSON.parse(data);
    const newContent = request.body;
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

  respond.json({ message: 'User registered' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
