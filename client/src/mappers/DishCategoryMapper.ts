import type { DishCategory } from '@/types/commonTypes';

export default class DishCategoryMapper {
  /**
     * Map single object to DishCategory object
     * @param {any} obj Object to map
     * @returns {DishCategory} DishCategory object
    */
  public static mapObjectToDishCategory(obj: any): DishCategory {
    return {
      id: obj.dishtypeid,
      name: (obj.dishtypename as string).replace(' ', '').toLowerCase(),
      fullName: obj.dishtypename
    };
  }

  /**
   * Map data set to DishCategory objects array
   * @param {any} data Data to map
   * @returns {DishCategory} objects array
   */
  public static mapToDishCategories(data: any[]): DishCategory[] {
    return data.map((category) => this.mapObjectToDishCategory(category));
  }
}
