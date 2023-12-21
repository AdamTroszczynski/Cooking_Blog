import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import { BASE_URL, BASE_CLIENT_URL } from '@/const/commonConst';
import api from '@/router/api';
import staticAssets from '@/router/staticAssets';

dotenv.config();

const app: Express = express();

app.use(json());
app.use(helmet());
app.use(cors({ origin: BASE_CLIENT_URL }));
// app.use('/static', express.static(path.join(__dirname, '../public')));
app.use('/api', api);
app.use('/static', staticAssets);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${BASE_URL}:${port}`);
});
