import path from 'path';
import dotenv from 'dotenv';
import { existsSync } from 'fs';

const APP_ROOT = path.resolve(__dirname);
const DEV_ENV_PATH = `${APP_ROOT}/../.env`;
const TEST_ENV_PATH = `${APP_ROOT}/../.env.test.local`;

/** Load env variables based on NODE_ENV value */
export const loadEnv = (): void => {
  if (process.env.NODE_ENV === 'test' && !existsSync(DEV_ENV_PATH)) return;
  else if (process.env.NODE_ENV !== 'test' && !existsSync(TEST_ENV_PATH)) return;

  dotenv.config({
    override: true,
    path: process.env.NODE_ENV === 'test' ? TEST_ENV_PATH : DEV_ENV_PATH,
  });
}
