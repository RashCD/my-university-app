import express, { Express, Request, Response } from 'express';
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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
