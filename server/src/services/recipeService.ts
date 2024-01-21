import { query } from '@/services/db';
import type { QueryResult } from 'pg';

/**
 * Get all recipes
 * @returns {Promise<QueryResult>} Query result
 */
export const getAllRecipes = async (): Promise<QueryResult> => {
  const sql = 'SELECT recipeid, recipename, created, dl.levelname, dt.dishtypename, userid, steps, ingredients, recipeimage, likescount FROM recipes INNER JOIN difficultlevels dl ON recipes.difficultlevelid = dl.difficultlevelid INNER JOIN dishTypes dt ON recipes.dishtypeid = dt.dishtypeid';
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
 * Get all difficult levels from database
 * @returns {Promise<QueryResult>} Query result
 */
export const getDifficultLevels = async (): Promise<QueryResult> => {
  const sql = 'SELECT difficultlevelid, levelname FROM difficultlevels';
  return await query(sql);
};
