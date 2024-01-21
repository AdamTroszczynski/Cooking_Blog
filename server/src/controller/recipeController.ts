import type { Request, Response } from 'express';
import RecipeMapper from '@/mappers/RecipeMapper';
import Recipe from '@/models/Recipe';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { getAllRecipes, getNewestRecipes, getDishCategories, getDifficultLevels } from '@/services/recipeService';
import type { DishCategory, DifficultLevel } from '@/types/commonTypes';
import RequestError from '@/models/errors/RequestError';
import type { UploadedFile } from 'express-fileupload';

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
 * Get difficult levels action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getDifficultLevelsAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getDifficultLevels();
    const difficultLevels: DifficultLevel[] = result.rows;
    res.status(StatusCodesEnum.OK).json(difficultLevels);
  } catch (err) {
    res.status(StatusCodesEnum.ServerError).json(new RequestError(ErrorMessagesEnum.ServerError, err));
  }
};

/**
 * Create new recipe action action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const createRecipeAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK).json({ msg: 'ok' });
};

/**
 * Upload recipe image action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const uploadRecipeImageAction = (req: Request, res: Response) => {
  const image = req.files!['files[]'] as UploadedFile;

  if (!image) {
    return res.status(StatusCodesEnum.BadRequest).json(new RequestError(ErrorMessagesEnum.ResourceError, null));
  }

  if (!/^image/.test(image.mimetype)) {
    return res.status(StatusCodesEnum.BadRequest).json(new RequestError(ErrorMessagesEnum.ResourceError, null));
  }

  image.mv(__dirname + '/../public/recipeImages/' + image.name.split(' ').join(''));
  res.status(StatusCodesEnum.OK).json({ msg: 'Image uploaded successfully'});
};
