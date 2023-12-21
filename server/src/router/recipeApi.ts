import express from 'express';
import { getAllRecipesAction, getNewestRecipesAction } from '@/controller/recipeController';

const recipeApi = express.Router();

recipeApi.get('/recipes', getAllRecipesAction);

recipeApi.get('/newestRecipes', getNewestRecipesAction);

export default recipeApi;
