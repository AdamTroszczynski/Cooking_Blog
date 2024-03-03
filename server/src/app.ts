import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import fileUpload from 'express-fileupload';
import { BASE_CLIENT_URL, PREVIEW_CLIENT_URL, RECIPE_API_PATH, AUTH_API_PATH, STATIC_API_PATH } from '@/const/commonConst';
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
  app.use(cors({ origin: [BASE_CLIENT_URL, PREVIEW_CLIENT_URL] }));

  // Routes setup
  // app.use('/static', express.static(path.join(__dirname, '../public')));
  app.use(STATIC_API_PATH, staticAssets);
  app.use(AUTH_API_PATH, authApi);
  app.use(RECIPE_API_PATH, recipeApi);

  return app;
};

export default createApp();
