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

/**
 * Create a new recipe
 * @param {Recipe} recipeData Recipe data
 * @returns {Promise<QueryResult>} Query result
 */
export const createRecipe = async (recipeData: Recipe): Promise<QueryResult> => {
  try {
    const { recipeName, difficultLevel, dishType, steps, ingredients, recipeImage, userId } = recipeData;

    if (!recipeName || !difficultLevel || !dishType || !steps || !ingredients || !recipeImage || !userId) {
      throw new Error('Invalid recipe data');
    }

    const sql = `
      INSERT INTO recipes (recipename, difficultlevelid, dishtypeid, steps, ingredients, recipeimage, userid)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`;

    const ingredientsString = JSON.stringify(ingredients);
    const stepsString = JSON.stringify(steps);

    return await query(sql, [recipeName, difficultLevel, dishType, stepsString, ingredientsString, recipeImage, userId]);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create recipe');
  }
};

/**
 * Add recipe to favorites
 * @param {number} userId User ID
 * @param {number} recipeId Recipe ID
 * @returns {Promise<QueryResult>} Query result
 */
export const addToFavorite = async (userId: number, recipeId: number): Promise<QueryResult> => {
  try {
    // Check if the user and recipe exist before adding to favorites
    const userExists = await checkUserExists(userId);
    const recipeExists = await checkRecipeExists(recipeId);

    if (!userExists || !recipeExists) {
      throw new Error('User or recipe not found');
    }

    const sql = `
      INSERT INTO favorite (userid, recipeid)
      VALUES ($1, $2)
      RETURNING *`;

    return await query(sql, [userId, recipeId]);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to add recipe to favorites');
  }
};

/**
 * Remove recipe from favorites
 * @param {number} userId User ID
 * @param {number} recipeId Recipe ID
 * @returns {Promise<QueryResult>} Query result
 */
export const removeFromFavorite = async (userId: number, recipeId: number): Promise<QueryResult> => {
  try {
    const sql = `
      DELETE FROM favorite
      WHERE userid = $1 AND recipeid = $2
      RETURNING *`;

    return await query(sql, [userId, recipeId]);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to remove recipe from favorites');
  }
};


