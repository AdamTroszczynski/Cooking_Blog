import axios from 'axios';
import { RECIPE_API_URL } from '@/const/commonConst';
import type { DishCategory } from '@/types/commonTypes';
import Recipe from '@/models/Recipe';
import RecipeMapper from '@/mappers/RecipeMapper';
import DishCategoryMapper from '@/mappers/DishCategoryMapper';

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
 * Get newest recipes
 * @returns {Promise<Recipe[]>} Array of newest recipes
 */
export const getNewestRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${RECIPE_API_URL}/newestRecipes`);
  const data = response.data;
  return RecipeMapper.mapToRecipes(data);
};
