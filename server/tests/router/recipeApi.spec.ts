import request from 'supertest';
import app from '@/app';
import jwt from 'jsonwebtoken';
import { client } from '@/services/db';
import { RECIPE_API_PATH, BASE_PROJECT_PATH } from '@/const/commonConst';
import { clearTables } from '@/services/adminServices';
import { createTestingData } from '@/utils/testDataCreator/recipeDataCreator';
import Recipe from '@/models/Recipe';
import { existsSync, rmSync } from 'fs';

describe('recipeApi', (): void => {
  beforeAll(async (): Promise<void> => {
    await clearTables();
    await createTestingData();
  });

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
          expect(Array.isArray(res.body)).toBeTruthy();
          expect(res.body.length).toEqual(5);

          const recipeObj = res.body.filter((recipe: Recipe) => recipe.recipeId === 1)[0];

          expect(recipeObj.recipeId).toBe(1);
          expect(recipeObj.recipeName).toBe('testRecipe1');
          expect(recipeObj.difficultLevel).toBe('Easy');
          expect(recipeObj.dishType).toBe('Lunch');
          expect(recipeObj.userId).toBe(1);
          expect(recipeObj.steps).toEqual([
            { stepNumber: 0, stepContent: 'step 1' },
            { stepNumber: 1, stepContent: 'step 2' }
          ]);
          expect(recipeObj.ingredients).toEqual([
            { id: 1, name: 'ingredient', qua: '1' },
            { id: 2, name: 'ingredient', qua: '2' },
            { id: 3, name: 'ingredient', qua: '3' }
          ]);
          expect(recipeObj.recipeImage).toBe('testImage.png');
          expect(recipeObj.likesCount).toBe(0);
        });
    });
  });

  describe('/recipesPage', (): void => {
    it('[GET] Should return single recipes page (with pagination)', async (): Promise<void> => {

    });
  });

  describe('/dishCategories', (): void => {
    it('[GET] It should response all dish categories', async (): Promise<void> => {
      return request(app)
        .get(`${RECIPE_API_PATH}/dishCategories`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(Array.isArray(res.body)).toBeTruthy();
          expect(res.body.length).toEqual(2);
          expect(res.body).toEqual([
            { dishtypeid: 1, dishtypename: 'Lunch' },
            { dishtypeid: 2, dishtypename: 'Breakfast' }
          ]);
        });
    });
  });

  describe('/difficultLevels', (): void => {
    it('[GET] It should response all difficult levels', async (): Promise<void> => {
      return request(app)
        .get(`${RECIPE_API_PATH}/difficultLevels`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(Array.isArray(res.body)).toBeTruthy();
          expect(res.body.length).toEqual(3);
          expect(res.body).toEqual([
            { difficultlevelid: 1, levelname: 'Easy' },
            { difficultlevelid: 2, levelname: 'Medium' },
            { difficultlevelid: 3, levelname: 'Hard' }
          ]);
        });
    });
  });

  describe('/singleRecipe/:recipeId', (): void => {
    it('[GET] It should response specific recipe details', async (): Promise<void> => {
      return request(app)
        .get(`${RECIPE_API_PATH}/singleRecipe/2`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(Array.isArray(res.body)).toBeFalsy();
          expect(res.body).toEqual(expect.objectContaining({
            recipeId: 2,
            recipeName: 'testRecipe2',
            difficultLevel: 'Medium',
            dishType: 'Breakfast',
            userId: 1,
            steps: [
              { stepNumber: 0, stepContent: 'step 1' },
              { stepNumber: 1, stepContent: 'step 2' }
            ],
            ingredients: [
              { id: 1, name: 'ingredient', qua: '1' },
              { id: 2, name: 'ingredient', qua: '2' },
              { id: 3, name: 'ingredient', qua: '3' }
            ],
            recipeImage: 'testImage.png',
            likesCount: 0
          }));
        });
    });
  });

  describe('/createRecipe', (): void => {
    it('[POST] It should correctly create new recipe', async (): Promise<void> => {
      const recipe = {
        recipeName: 'newRecipe',
        userId: 1,
        recipeIngredients: [],
        recipeSteps: [],
        difficultLevel: 2,
        dishType: 1,
        recipeImage: 'newTestImage.png',
      };

      const token = jwt.sign(
        { userid: 1, email: 'test@email.com' },
        process.env.TOKEN_KEY || 'abcd1234',
        { expiresIn: '1h' },
      );

      return request(app)
        .post(`${RECIPE_API_PATH}/createRecipe`)
        .set('x-access-token', token)
        .send({ recipe })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(expect.objectContaining({
            recipeId: 6,
            recipeName: 'newRecipe',
            difficultLevel: 'Medium',
            dishType: 'Lunch',
            userId: 1,
            steps: [{ stepNumber: 0, stepContent: '' }],
            ingredients: [{ id: 1, name: '' }],
            recipeImage: 'newTestImage.png',
            likesCount: 0
          }));
        });
    });
  });

  describe('/updateRecipe', (): void => {
    it('[PUT] It should correctly update recipe', async (): Promise<void> => {
      const recipe = {
        recipeId: 6,
        userId: 1,
        recipeName: 'updatedRecipeName',
        recipeIngredients: [],
        recipeSteps: [],
        difficultLevel: 2,
        dishType: 2,
        recipeImage: 'newTestImage.png',
      };

      const token = jwt.sign(
        { userid: 1, email: 'test@email.com' },
        process.env.TOKEN_KEY || 'abcd1234',
        { expiresIn: '1h' },
      );

      return request(app)
        .put(`${RECIPE_API_PATH}/updateRecipe`)
        .set('x-access-token', token)
        .send({ recipe })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(expect.objectContaining({
            recipeId: 6,
            recipeName: 'updatedRecipeName',
            difficultLevel: 'Medium',
            dishType: 'Breakfast',
            userId: 1,
            steps: [{ stepNumber: 0, stepContent: '' }],
            ingredients: [{ id: 1, name: '' }],
            recipeImage: 'newTestImage.png',
            likesCount: 0
          }));
        });
    });
  });

  describe('/uploadRecipeImage', (): void => {
    it('[POST] Should correctly save image on server', async (): Promise<void> => {
      const token = jwt.sign(
        { userid: 1, email: 'test@email.com' },
        process.env.TOKEN_KEY || 'abcd1234',
        { expiresIn: '1h' },
      );

      const userId = 1;
      const imageName = 'ChocolateCake.jpg';
      const testImage = `${BASE_PROJECT_PATH}/tests/testData/${imageName}`;
      const expectedImage = `${BASE_PROJECT_PATH}/public/recipeImages/${userId}/${imageName}`;

      return request(app)
        .post(`${RECIPE_API_PATH}/uploadRecipeImage`)
        .set('x-access-token', token)
        .set('Content-Type', 'multipart/form-data')
        .attach('files[]', testImage)
        .field('userId', userId)
        .expect(200)
        .then((res) => {
          expect(existsSync(expectedImage)).toBeTruthy();
          rmSync(expectedImage);
        });
    });
  });
});
