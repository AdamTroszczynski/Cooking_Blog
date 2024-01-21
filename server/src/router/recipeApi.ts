import express from 'express';
import {
  getAllRecipesAction,
  getNewestRecipesAction,
  getDishCategoriesAction,
  uploadRecipeImageAction,
  createRecipeAction,
  getDifficultLevelsAction,
} from '@/controller/recipeController';

const recipeApi = express.Router();

recipeApi.get('/recipes', getAllRecipesAction);

recipeApi.get('/newestRecipes', getNewestRecipesAction);

recipeApi.get('/dishCategories', getDishCategoriesAction);

recipeApi.get('/difficultLevels', getDifficultLevelsAction);

recipeApi.post('/uploadRecipeImage', uploadRecipeImageAction);

recipeApi.post('/createRecipe', createRecipeAction);

export default recipeApi;
