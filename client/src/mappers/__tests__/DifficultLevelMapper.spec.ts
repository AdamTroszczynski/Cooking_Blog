import {describe, it, expect} from "vitest"
import DifficultLevelMapper from "../DifficultLevelMapper";

  describe('mapObjectToDifficultLevel()', () => {
    it('should return DifficultLevel object if input is correct', () => {
      const testObject = {
        difficultlevelid: 1,
        levelname: 'test'
      };
      const expectResult = {
        id: 1,
        levelName: 'test'
      }

      const result = DifficultLevelMapper.mapObjectToDifficultLevel(testObject);

      expect(result).toEqual(expectResult)
    })
  })

  describe('mapToDifficultLevels()', () => {
    it('should return array of DifficultLevel objects if input is correct',() => {
      const testObjects = [{difficultlevelid: 1, levelname: 'test'},{difficultlevelid:2, levelname: 'test2'}];
      const expectResult = [{id: 1, levelName: 'test'},{id: 2, levelName: 'test2'}]

      const result = DifficultLevelMapper.mapToDifficultLevels(testObjects);

      expect(result).toEqual(expectResult);
    })
  })


