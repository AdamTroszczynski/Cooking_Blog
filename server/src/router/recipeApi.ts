import express from 'express';
import {
  getAllRecipesAction,
  getNewestRecipesAction,
  getDishCategoriesAction,
  getDifficultLevelsAction,
  getSingleRecipeAction,
  getRecipePageAction,
  uploadRecipeImageAction,
  createRecipeAction,
} from '@/controller/recipeController';
import { verifyToken } from '@/middleware/auth';

const recipeApi = express.Router();

recipeApi.get('/recipes', getAllRecipesAction);

recipeApi.get('/recipesPage', getRecipePageAction);

recipeApi.get('/newestRecipes', getNewestRecipesAction);

recipeApi.get('/singleRecipe/:recipeId', getSingleRecipeAction);

recipeApi.get('/dishCategories', getDishCategoriesAction);

recipeApi.get('/difficultLevels', getDifficultLevelsAction);

recipeApi.post('/uploadRecipeImage', verifyToken, uploadRecipeImageAction);

recipeApi.post('/createRecipe', verifyToken, createRecipeAction);

export default recipeApi;
