import type { DifficultLevel } from '@/types/commonTypes';

export default class DifficultLevelMapper {
  /**
     * Map single object to DifficultLevel object
     * @param {any} obj Object to map
     * @returns {DifficultLevel} DifficultLevel object
    */
  public static mapObjectToDifficultLevel(obj: any): DifficultLevel {
    return {
      id: obj.difficultlevelid,
      levelName: obj.levelname
    };
  }

  /**
   * Map data set to DifficultLevel objects array
   * @param {any} data Data to map
   * @returns {DifficultLevel} objects array
   */
  public static mapToDifficultLevels(data: any[]): DifficultLevel[] {
    return data.map((difficultLevel) => this.mapObjectToDifficultLevel(difficultLevel));
  }
}
