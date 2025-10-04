import dotenv from 'dotenv';
import cors from 'cors';
import express, { Request, Response } from 'express';
import AuthRouter from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use(express.json());
app.use('/api', AuthRouter);
const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to the spicarr coding');
});

app.listen(port, () => {
  console.log(`server is running at http://${host}:${port}`);
});
