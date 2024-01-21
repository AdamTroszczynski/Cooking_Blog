import Ingredient from '@/models/Ingredient';

export default class IngredientMapper {
  /**
   * Map normal object to single Ingredient object
   * @param {any} obj
   * @returns {Ingredient} Ingredient object
   */
  public static mapObjectToIngredient(obj: any): Ingredient {
    return new Ingredient(obj.id, obj.name, obj.qua);
  }

  /**
   * Map data to ingredients array
   * @param {string} data encoded ingredients data
   * @returns {Ingredient[]} Ingredient array
   */
  public static mapToIngredients(data: string): Ingredient[] {
    const ingredients: Ingredient[] = [];
    this.decodeIngredients(data).forEach((el, index) => {
      const [ name, qua ] = el.split('/');
      ingredients.push(this.mapObjectToIngredient({ id: index + 1, name, qua }));
    });

    return ingredients;
  }

  /**
   * Return array of ingredients
   * @param {string} dataToEncode string data to encode
   * @returns {string[]} array of steps
   */
  private static decodeIngredients(dataToEncode: string): string[] {
    return dataToEncode.split('|');
  }
};
