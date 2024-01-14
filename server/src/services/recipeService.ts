import { query } from '@/services/db';
import type { QueryResult } from 'pg';
import Recipe from '@/models/Recipe';

/**
 * Get all recipes
 * @returns {Promise<QueryResult>} Query result
 */
export const getAllRecipes = async (): Promise<QueryResult> => {
  const sql = ' SELECT recipeid, recipename, created, dl.levelname, dt.dishtypename, userid, steps, ingredients, recipeimage, likescount FROM recipes INNER JOIN difficultlevels dl ON recipes.difficultlevelid = dl.difficultlevelid INNER JOIN dishTypes dt ON recipes.dishtypeid = dt.dishtypeid';
  return await query(sql);
};

/**
 * Get newest recipes from specific dish type category
 * @param {number} dishTypeId Dish type id
 * @returns {Promise<QueryResult>} Query result
 */
export const getNewestRecipes = async (dishTypeId: number): Promise<QueryResult> => {
  const sql = 'SELECT recipeid, recipename, created, dl.levelname, dt.dishtypename, userid, steps, ingredients, recipeimage, likescount FROM recipes INNER JOIN difficultlevels dl ON recipes.difficultlevelid = dl.difficultlevelid INNER JOIN dishtypes dt ON recipes.dishtypeid = dt.dishtypeid WHERE dt.dishtypeid = $1 ORDER BY created DESC LIMIT 9';
  return await query(sql, [dishTypeId]);
};

/**
 * Get all dish categories from database
 * @returns {Promise<QueryResult>} Query result
 */
export const getDishCategories = async (): Promise<QueryResult> => {
  const sql = 'SELECT dishtypeid, dishtypename FROM dishtypes';
  return await query(sql);
};

/**
 * Get all recipes of a specific user
 * @param {number} userId User id
 * @returns {Promise<QueryResult>} Query result
 */
export const getUserRecipes = async (userId: number): Promise<QueryResult> => {
  const sql = 'SELECT recipeid, recipename, created, dl.levelname, dt.dishtypename, userid, steps, ingredients, recipeimage, likescount FROM recipes INNER JOIN difficultlevels dl ON recipes.difficultlevelid = dl.difficultlevelid INNER JOIN dishtypes dt ON recipes.dishtypeid = dt.dishtypeid WHERE userid = $1';
  return await query(sql, [userId]);
};

/**
 * Update a specific recipe
 * @param {number} recipeId Recipe id
 * @param {Recipe} recipeData Recipe data
 * @returns {Promise<QueryResult>} Query result
 */
export const updateRecipe = async (recipeId: number, recipeData: Recipe): Promise<QueryResult> => {
  try {
    const { recipeName, difficultLevel, dishType, steps, ingredients, recipeImage } = recipeData;

    if (!recipeName || !difficultLevel || !dishType || !steps || !ingredients || !recipeImage) {
      throw new Error('Invalid recipe data');
    }

    const sql = `UPDATE recipes SET recipename = $1, difficultlevelid = $2, dishtypeid = $3, steps = $4, ingredients = $5, recipeimage = $6 WHERE recipeid = $7 RETURNING *`;
    const ingredientsString = JSON.stringify(ingredients);
    const stepsString = JSON.stringify(steps);

    return await query(sql, [recipeName, difficultLevel, dishType, stepsString, ingredientsString, recipeImage, recipeId]);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to update recipe');
  }
};
