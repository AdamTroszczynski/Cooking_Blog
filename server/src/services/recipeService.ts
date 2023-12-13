import { query } from '@/services/db';

/** Get all recipes */
export const getAllRecipes = async () => {
  const sql = `
    SELECT recipeid, recipename, created, dl.levelname, dt.dishtypename, userid, steps, ingredients, recipeimage, likescount
    FROM recipes
    INNER JOIN difficultlevels dl ON recipes.difficultlevelid = dl.difficultlevelid
    INNER JOIN dishTypes dt ON recipes.dishtypeid = dt.dishtypeid
  `;

  return await query(sql);
};

/**
 * Get newest recipes from specific dish type category
 * @param {number} dishTypeId Dish type id
 */
export const getNewestRecipes = async (dishTypeId: number) => {
  const sql = `
    SELECT recipeid, recipename, created, dt.dishtypename, userid, steps, ingredients, recipeimage, likescount
    FROM recipes
    INNER JOIN dishtypes dt ON recipes.dishtypeid = dt.dishtypeid
    WHERE dt.dishtypeid = $1
    ORDER BY created DESC LIMIT 9;
  `;

  return await query(sql, [dishTypeId]);
};
