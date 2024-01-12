import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import httpLogger from 'morgan';
import connectDB from './config/db';
dotenv.config();
import errorHandler from './middlewares/errorHandler';

/* CONFIGURATION */
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors({ origin: '*' }));
server.use(helmet());
server.use(httpLogger('dev'));

/* ROUTES */
const baseUrl = process.env.BASE_API_URL || '/api';
server.get(baseUrl, (_, res) => {
  return res.json({ success: true, message: 'The server is up' });
});
server.use(errorHandler);

connectDB();

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log('Server is listening at port: ', port);
});
