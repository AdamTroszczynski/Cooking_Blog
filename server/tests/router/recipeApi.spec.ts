import request from 'supertest';
import app from '@/app';
import { client } from '@/services/db';
import { RECIPE_API_PATH } from '@/const/commonConst';

describe('recipeApi', (): void => {
  afterAll(async (): Promise<void> => {
    await client.end();
  });

  describe('/recipes', (): void => {
    it('[GET] It should response all recipes', async (): Promise<void> => {
      return request(app)
        .get(`${RECIPE_API_PATH}/recipes`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
        });
    });
  });
});
