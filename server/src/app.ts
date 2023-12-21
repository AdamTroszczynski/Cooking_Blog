import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import { BASE_URL, BASE_CLIENT_URL } from '@/const/commonConst';
import authApi from '@/router/authApi';
import recipeApi from '@/router/recipeApi';
import staticAssets from '@/router/staticAssets';

dotenv.config();

const app: Express = express();

app.use(json());
app.use(helmet());
app.use(cors({ origin: BASE_CLIENT_URL }));
// app.use('/static', express.static(path.join(__dirname, '../public')));
app.use('/static', staticAssets);
app.use('/api/auth', authApi);
app.use('/api/recipe', recipeApi);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${BASE_URL}:${port}`);
});
