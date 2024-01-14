import type { Request, Response } from 'express';
import RecipeMapper from '@/mappers/RecipeMapper';
import Recipe from '@/models/Recipe';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { getAllRecipes, getNewestRecipes, getDishCategories, createRecipe } from '@/services/recipeService';
import type { DishCategory } from '@/types/commonTypes';
import RequestError from '@/models/errors/RequestError';

/**
 * Get all recipes action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getAllRecipesAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getAllRecipes();
    const recipes: Recipe[] = RecipeMapper.mapToRecipes(result.rows);
    res.status(StatusCodesEnum.OK).json(recipes);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Get newest recipes action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getNewestRecipesAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const dishCategoryIds = [1, 2, 3, 4, 5, 6];
    const recipes: Recipe[] = [];
    for (const categoryId of dishCategoryIds) {
      const result = await getNewestRecipes(categoryId);
      recipes.push(...RecipeMapper.mapToRecipes(result.rows));
    };

    res.status(StatusCodesEnum.OK).json(recipes);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Get dish categories action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getDishCategoriesAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getDishCategories();
    const dishCategories: DishCategory[] = result.rows;
    res.status(StatusCodesEnum.OK).json(dishCategories);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Create recipe action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const createRecipeAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const recipeData: Recipe = req.body;
    const result = await createRecipe(recipeData); // Assuming you have a createRecipe function
    const createdRecipe: Recipe = RecipeMapper.mapToRecipes(result.rows[0])[0];
    res.status(StatusCodesEnum.Created).json(createdRecipe);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Add recipe to favorites action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const addToFavoriteAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = Number(req.params.userId);
    const recipeId = Number(req.params.recipeId);

    if (isNaN(userId) || isNaN(recipeId)) {
      throw new Error('Invalid user or recipe ID');
    }

    const result = await addToFavorite(userId, recipeId); // Assuming you have an addToFavorite function
    const favoriteRecipe: Favorite = result.rows[0]; // Adjust the type according to your schema

    res.status(StatusCodesEnum.Created).json(favoriteRecipe);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Remove recipe from favorites action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const removeFromFavoriteAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = Number(req.params.userId);
    const recipeId = Number(req.params.recipeId);

    if (isNaN(userId) || isNaN(recipeId)) {
      throw new Error('Invalid user or recipe ID');
    }

    const result = await removeFromFavorite(userId, recipeId); // Assuming you have a removeFromFavorite function

    if (result.rowCount > 0) {
      res.status(StatusCodesEnum.OK).json({ message: 'Recipe removed from favorites successfully' });
    } else {
      res.status(StatusCodesEnum.NotFound).json({ message: 'Recipe not found in favorites' });
    }
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};
