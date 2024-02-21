import { expect, it, describe, beforeEach, afterEach } from "vitest";
import axios from "axios";
import { useRecipesStore } from "../recipesStore";
import { setActivePinia, createPinia } from "pinia";
import MockAdapter from "axios-mock-adapter";
import Recipe from "@/models/Recipe";
import Step from "@/models/Step";
import Ingredient from "@/models/Ingredient";
import { RECIPE_API_URL } from "@/const/commonConst";

describe('recipeStore.ts', () => {
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    mock.reset();
  })

  describe('Getters', () => {
    describe('getSelectedCategoryFullName()', () => {
      it('should return dishCategory fullname of selected category', () => {
        const store = useRecipesStore();
        store.dishCategories = [{
          id: 1,
          name: 'testName',
          fullName: 'testFullname'
        },{
          id: 2,
          name: 'testName2',
          fullName: 'testFullName2'
        }];

        store.selectedDishCategory = 'testName';
        expect(store.getSelectedCategoryFullName).toBe('testFullname');

        store.selectedDishCategory = 'testName2';
        expect(store.getSelectedCategoryFullName).toBe('testFullName2');
      });
    })
    describe('getSelectedDishCategoryId()', () => {
      it('should return dishCategory id of selected category', () => {
        const store = useRecipesStore();
        store.dishCategories = [{
          id: 1,
          name: 'testName',
          fullName: 'testFullname'
        },{
          id: 2,
          name: 'testName2',
          fullName: 'testFullName2'
        }];

        store.selectedDishCategory = 'testName';
        expect(store.getSelectedDishCategoryId).toBe(1);

        store.selectedDishCategory = 'testName2';
        expect(store.getSelectedDishCategoryId).toBe(2);
      })
    })

  });
  describe("Actions", () => {
    describe('setDishCategory()', () => {
      it('should set selectedDishCategory based on newCategory param', () => {
        const store = useRecipesStore();
        const dishCategory = 'testCategory'

        expect(store.selectedDishCategory).not.toBe('testCategory');
        store.setDishCategory(dishCategory);
        expect(store.selectedDishCategory).toBe('testCategory');
      })
    })
    describe('setNewestRecipes()', () => {
      it('should set newestRecipes based on value param', () => {
        const store = useRecipesStore();
        const newestRecipes = [new Recipe(1,'testName',1,'testLevel','testType',1,[new Step(1,'testContent')],[new Ingredient(1,'testName','testQua')],'testImg',0)];
        expect(store.newestRecipes).not.toEqual(newestRecipes);
        store.setNewestRecipes(newestRecipes);
        expect(store.newestRecipes).toEqual(newestRecipes);
      })
    })
    describe('loadDishCategories()', () => {
      it('should not set dishCategories if dishCategories is not empty', async () => {
        const store = useRecipesStore();
        const dishCategories = [{
          id: 1,
          name: 'testname',
          fullName: 'testFullname'
        }];
        const response = [
          { dishtypeid: 1, dishtypename: "responseName" },
          { dishtypeid: 2, dishtypename: "responseName2" },
        ];
        mock.onGet(`${RECIPE_API_URL}/dishCategories`).reply(201, response);

        store.dishCategories = dishCategories;
        await store.loadDishCategories();
        expect(store.dishCategories).toEqual(dishCategories);
      })
      it('should set dishCategories if dishCategories is empty', async () => {
        const store = useRecipesStore();
        const expectedResult = [{
          id: 1,
          name: 'testname',
          fullName: 'testName'
        },{
          id: 2,
          name: 'testname2',
          fullName: 'testName2'
        }]
        const response = [
          { dishtypeid: 1, dishtypename: "testName" },
          { dishtypeid: 2, dishtypename: "testName2" },
        ];
        mock.onGet(`${RECIPE_API_URL}/dishCategories`).reply(201, response);

        store.dishCategories = [];
        await store.loadDishCategories();
        expect(store.dishCategories).toEqual(expectedResult);
      })
    })
    describe('loadDifficultLevels()', () => {
      it('should not set dishCategories if dishCategories is not empty', async () => {
        const store = useRecipesStore();
        const difficultLevels = [{
          id: 1,
          levelName: 'testLevel'
        }, {
          id: 2,
          levelName: 'testLevel2'
        }];
        const response = [
          { difficultlevelid: 1, levelname: "responseName" },
          { difficultlevelid: 2, levelname: "responesName2" },
        ];
        mock.onGet(`${RECIPE_API_URL}/difficultLevels`).reply(201, response);

        store.difficultLevels = difficultLevels;
        await store.loadDifficultLevels();
        expect(store.difficultLevels).toEqual(difficultLevels);
      });
      it('should set dishCategories if dishCategories is not empty', async () => {
        const store = useRecipesStore();
        const expectedResult = [
          { id: 1, levelName: "testLevel" },
          { id: 2, levelName: "testLevel2" },
        ];
        const response = [
          { difficultlevelid: 1, levelname: "testLevel" },
          { difficultlevelid: 2, levelname: "testLevel2" },
        ];
        mock.onGet(`${RECIPE_API_URL}/difficultLevels`).reply(201, response);

        store.difficultLevels = [];
        await store.loadDifficultLevels();
        expect(store.difficultLevels).toEqual(expectedResult);
      });
    });
  });
});
