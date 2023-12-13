import express from 'express';
import { getAllRecipesAction, getNewestRecipesAction } from '@/controller/recipeController';

const api = express.Router();

api.get('/recipes', getAllRecipesAction);

api.get('/newestRecipes', getNewestRecipesAction);

export default api;
