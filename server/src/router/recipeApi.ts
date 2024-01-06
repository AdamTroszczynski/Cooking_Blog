import express from 'express';
import { getAllRecipesAction, getNewestRecipesAction, getDishCategoriesAction } from '@/controller/recipeController';

const recipeApi = express.Router();

recipeApi.get('/recipes', getAllRecipesAction);

recipeApi.get('/newestRecipes', getNewestRecipesAction);

recipeApi.get('/dishCategories', getDishCategoriesAction);

export default recipeApi;
