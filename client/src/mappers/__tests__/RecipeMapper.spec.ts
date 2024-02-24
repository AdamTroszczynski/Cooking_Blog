import { describe, it, expect } from 'vitest';
import Recipe from '@/models/Recipe';
import Step from '@/models/Step';
import Ingredient from '@/models/Ingredient';
import RecipeMapper from '@/mappers/RecipeMapper';

describe('RecipeMapper.ts', () => {
  describe('mapObjectToRecipe', () => {
    it('should return Recipe object if input is correct', () => {
      const testObject = {
        recipeId: 1,
        recipeName: 'testName',
        created: 1,
        difficultLevel: 'testLevel',
        dishType: 'testType',
        userId: 1,
        steps: [new Step(1, 'testStepContent')],
        ingredients: [new Ingredient(1, 'testIngredient', 'testQua')],
        recipeImage: 'testUrl',
        likesCount: 1,
      };
      const expectedResult = new Recipe(
        testObject.recipeId,
        testObject.recipeName,
        testObject.created,
        testObject.difficultLevel,
        testObject.dishType,
        testObject.userId,
        testObject.steps,
        testObject.ingredients,
        testObject.recipeImage,
        testObject.likesCount
      );

      const result = RecipeMapper.mapObjectToRecipe(testObject);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapToRecipes', () => {
    it('should return array of Recipe object if input is correct', () => {
      const testObjects = [
        {
          recipeId: 1,
          recipeName: 'testName',
          created: 1,
          difficultLevel: 'testLevel',
          dishType: 'testType',
          userId: 1,
          steps: [new Step(1, 'testStepContent')],
          ingredients: [new Ingredient(1, 'testIngredient', 'testQua')],
          recipeImage: 'testUrl',
          likesCount: 1,
        },
        {
          recipeId: 2,
          recipeName: 'testName2',
          created: 2,
          difficultLevel: 'testLevel2',
          dishType: 'testType2',
          userId: 2,
          steps: [new Step(1, 'testStepContent2')],
          ingredients: [new Ingredient(1, 'testIngredient2', 'testQua2')],
          recipeImage: 'testUrl2',
          likesCount: 2,
        },
      ];
      const expectedResult = [
        new Recipe(
          testObjects[0].recipeId,
          testObjects[0].recipeName,
          testObjects[0].created,
          testObjects[0].difficultLevel,
          testObjects[0].dishType,
          testObjects[0].userId,
          testObjects[0].steps,
          testObjects[0].ingredients,
          testObjects[0].recipeImage,
          testObjects[0].likesCount
        ),
        new Recipe(
          testObjects[1].recipeId,
          testObjects[1].recipeName,
          testObjects[1].created,
          testObjects[1].difficultLevel,
          testObjects[1].dishType,
          testObjects[1].userId,
          testObjects[1].steps,
          testObjects[1].ingredients,
          testObjects[1].recipeImage,
          testObjects[1].likesCount
        ),
      ];

      const result = RecipeMapper.mapToRecipes(testObjects);
      expect(result).toEqual(expectedResult);
    });
  });
});
