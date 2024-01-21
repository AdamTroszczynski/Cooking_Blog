import axios from 'axios';
import { RECIPE_API_URL } from '@/const/commonConst';
import type { DifficultLevel, DishCategory } from '@/types/commonTypes';
import Recipe from '@/models/Recipe';
import RecipeMapper from '@/mappers/RecipeMapper';
import DishCategoryMapper from '@/mappers/DishCategoryMapper';
import DifficultLevelMapper from '@/mappers/DifficultLevelMapper';

/**
 * Get all dish categories
 * @returns {Promise<DishCategory[]>} Array of dish categories
 */
export const getDishCategories = async (): Promise<DishCategory[]> => {
  const response = await axios.get(`${RECIPE_API_URL}/dishCategories`);
  const data = response.data;
  return DishCategoryMapper.mapToDishCategories(data);
};

/**
 * Get all difficult levels
 * @returns {Promise<DifficultLevel[]>} Array of difficult levels
 */
export const getDifficultLevels = async (): Promise<DifficultLevel[]> => {
  const response = await axios.get(`${RECIPE_API_URL}/difficultLevels`);
  const data = response.data;
  return DifficultLevelMapper.mapToDifficultLevels(data);
};

/**
 * Get newest recipes
 * @returns {Promise<Recipe[]>} Array of newest recipes
 */
export const getNewestRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${RECIPE_API_URL}/newestRecipes`);
  const data = response.data;
  return RecipeMapper.mapToRecipes(data);
};

/**
 * Save new recipe into database
 * @param {Recipe} recipeToSave New recipe to save
 */
export const saveRecipe = async (recipeToSave: Recipe): Promise<Recipe> => {
  const response = await axios.post(`${RECIPE_API_URL}/createRecipe`, { recipe: recipeToSave });
  const data = response.data;
  return RecipeMapper.mapObjectToRecipe(data);
};

/**
 * Save new recipe image
 * @param {any} files files to upload
 */
export const uploadRecipeImage = async (files: any): Promise<void> => {
  await axios.post(`${RECIPE_API_URL}/uploadRecipeImage`, {files},
    {headers: { 'Content-Type': 'multipart/form-data' }});
};
