import Recipe from '@/models/Recipe';

export default class RecipeMapper {
  /**
   * Map single object to Recipe object
   * @param {any} obj Object to map
   * @returns {Recipe} Recipe object
  */
  public static mapObjectToRecipe(obj: any): Recipe {
    return new Recipe(
      obj.recipeId,
      obj.recipeName,
      obj.created,
      obj.difficultLevel,
      obj.dishType,
      obj.userId,
      obj.steps,
      obj.ingredients,
      obj.recipeImage,
      obj.likesCount
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
}
