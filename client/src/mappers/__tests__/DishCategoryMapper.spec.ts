import {describe, it, expect} from "vitest"
import DishCategoryMapper from "../DishCategoryMapper"

describe('mapObjectToDishCategory',() => {
  it('should return DishCategory object if input is correct and dishTypeName has not space', () => {
    const testObject = {
      dishtypeid: 1,
      dishtypename: 'test',
    };
    const expectedResult = {
      id: 1,
      name: 'test',
      fullName: 'test'
    };

    const result = DishCategoryMapper.mapObjectToDishCategory(testObject);

    expect(result).toEqual(expectedResult);
  })

  it('should return DishCategory object if input is correct and dishTypeName has spaces', () => {
    const testObject = {
      dishtypeid: 1,
      dishtypename: 'test test'
    };
    const expectedResult = {
      id: 1,
      name: 'testtest',
      fullName: 'test test'
    };

    const result = DishCategoryMapper.mapObjectToDishCategory(testObject);

    expect(result).toEqual(expectedResult);
  })

  it('should return DishCategory object if input is correct and dishTypeName has UpperCase', () => {
    const testObject = {
      dishtypeid: 1,
      dishtypename: 'Test'
    };
    const expectedResult = {
      id: 1,
      name: 'test',
      fullName: 'Test'
    };

    const result = DishCategoryMapper.mapObjectToDishCategory(testObject);

    expect(result).toEqual(expectedResult);
  })

  it('should return DishCategory object if input is correct and dishTypeName has spaces and UpperCase', () => {
    const testObject = {
      dishtypeid: 1,
      dishtypename: "Test Test"
    };
    const expectedResult = {
      id: 1,
      name: 'testtest',
      fullName: 'Test Test'
    };

    const result = DishCategoryMapper.mapObjectToDishCategory(testObject);

    expect(result).toEqual(expectedResult);
  })
})

describe('mapToDishCategories()', () => {
  it('should return array of DishCategory objects if input is correct', () => {
    const testObjects = [{dishtypeid: 1, dishtypename: 'test'},{dishtypeid: 2, dishtypename: 'test2'}];
    const expectedResult = [{id: 1, name: 'test', fullName: 'test'},{id: 2, name: 'test2', fullName: 'test2'}];

    const result = DishCategoryMapper.mapToDishCategories(testObjects);

    expect(result).toEqual(expectedResult);
  })
})
