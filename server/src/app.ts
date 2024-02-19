import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import fileUpload from 'express-fileupload';
import { BASE_CLIENT_URL } from '@/const/commonConst';
import authApi from '@/router/authApi';
import recipeApi from '@/router/recipeApi';
import staticAssets from '@/router/staticAssets';

/** Prepare app object and return it */
export const createApp = (): Express => {
  const app: Express = express();

  // Extra modules setup
  app.use(json());
  app.use(fileUpload({
      limits: {
        fileSize: 10000000, // Around 10MB
      },
      abortOnLimit: true
  }));
  app.use(helmet());
  app.use(cors({ origin: BASE_CLIENT_URL }));

  // Routes setup
  // app.use('/static', express.static(path.join(__dirname, '../public')));
  app.use('/static', staticAssets);
  app.use('/api/auth', authApi);
  app.use('/api/recipe', recipeApi);

  return app;
};
