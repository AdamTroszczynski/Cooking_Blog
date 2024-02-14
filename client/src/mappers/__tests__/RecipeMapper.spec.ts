import { describe, it, expect } from "vitest";
import Recipe from "@/models/Recipe";
import Step from "@/models/Step";
import Ingredient from "@/models/Ingredient";
import RecipeMapper from "../RecipeMapper";

describe('mapObjectToRecipe()', () => {
  it('should return Recipe object if input is correct', () => {
    const TestObject = {
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
      TestObject.recipeId,
      TestObject.recipeName,
      TestObject.created,
      TestObject.difficultLevel,
      TestObject.dishType,
      TestObject.userId,
      TestObject.steps,
      TestObject.ingredients,
      TestObject.recipeImage,
      TestObject.likesCount
    );

    const result = RecipeMapper.mapObjectToRecipe(TestObject);

    expect(result).toEqual(expectedResult);
  });
});

describe('mapToRecipes()', () => {
  it('should return array of Recipe object if input is correct', () => {
    const TestObjects = [
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
        TestObjects[0].recipeId,
        TestObjects[0].recipeName,
        TestObjects[0].created,
        TestObjects[0].difficultLevel,
        TestObjects[0].dishType,
        TestObjects[0].userId,
        TestObjects[0].steps,
        TestObjects[0].ingredients,
        TestObjects[0].recipeImage,
        TestObjects[0].likesCount
      ),
      new Recipe(
        TestObjects[1].recipeId,
        TestObjects[1].recipeName,
        TestObjects[1].created,
        TestObjects[1].difficultLevel,
        TestObjects[1].dishType,
        TestObjects[1].userId,
        TestObjects[1].steps,
        TestObjects[1].ingredients,
        TestObjects[1].recipeImage,
        TestObjects[1].likesCount
      ),
    ];

    const result = RecipeMapper.mapToRecipes(TestObjects);

    expect(result).toEqual(expectedResult);
  });
});
