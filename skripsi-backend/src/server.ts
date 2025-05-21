import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Succecss get the v1 API');
});

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});
