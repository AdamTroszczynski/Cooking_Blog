import Recipe from '@/models/Recipe';
import StepMapper from '@/mappers/StepMapper';
import IngredientMapper from '@/mappers/IngredientMapper';

export default class RecipeMapper {
  /**
   * Map single object to Recipe object
   * @param {any} obj Object to map
   * @returns {Recipe} Recipe object
  */
  public static mapObjectToRecipe(obj: any): Recipe {
    return new Recipe(
      obj.recipeid,
      obj.recipename,
      obj.created,
      obj.levelname,
      obj.dishtypename,
      obj.userid,
      StepMapper.mapToSteps(obj.steps),
      IngredientMapper.mapToIngredients(obj.ingredients),
      obj.recipeimage,
      obj.likescount
    );
  }

  /**
   * Map data set to Recipe objects array
   * @param {any} data Data to map
   * @returns {Recipe} Recipe objects array
   */
  public static mapToRecipes(data: any[]): Recipe[] {
    return data.map((recipe) => this.mapObjectToRecipe(recipe));
  }
};
