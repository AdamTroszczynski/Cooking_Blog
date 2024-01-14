import type { Request, Response } from 'express';
import RecipeMapper from '@/mappers/RecipeMapper';
import Recipe from '@/models/Recipe';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { getAllRecipes, getNewestRecipes, getDishCategories } from '@/services/recipeService';
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
 * Get user's recipes action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getUserRecipesAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = Number(req.params.userId); // Convert the userId from string to number
    const result = await getUserRecipes(userId);
    const recipes: Recipe[] = RecipeMapper.mapToRecipes(result.rows);
    res.status(StatusCodesEnum.OK).json(recipes);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};
