import Step from '@/models/Step';
import Ingredient from '@/models/Ingredient';

export default class Recipe {
  recipeId: number;
  recipeName: string;
  created: number;
  difficultLevel: string;
  dishType: string;
  userId: number;
  steps: Step[];
  ingredients: Ingredient[];
  recipeImage: string;
  likesCount: number;

  constructor(
    recipeId: number, recipeName: string, created: number,
    difficultLevel: string, dishType: string, userId: number,
    steps: Step[], ingredients: Ingredient[], recipeImage: string, likesCount: number
  ) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.created = created;
    this.difficultLevel = difficultLevel;
    this.dishType = dishType;
    this.userId = userId;
    this.steps = steps;
    this.ingredients = ingredients;
    this.recipeImage = recipeImage;
    this.likesCount = likesCount;
  }
}
