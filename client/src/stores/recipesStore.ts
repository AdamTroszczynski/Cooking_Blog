import { ref, type Ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { DishCategory, DifficultLevel } from '@/types/commonTypes';
import Recipe from '@/models/Recipe';
import { getDishCategories, getDifficultLevels, getSingleRecipe } from '@/services/recipesServices';

export const useRecipesStore = defineStore('recipesStore', () => {
  const selectedDishCategory: Ref<string> = ref('breakfast');
  const newestRecipes: Ref<Recipe[]> = ref([]);
  const dishCategories: Ref<DishCategory[]> = ref([]);
  const difficultLevels: Ref<DifficultLevel[]> = ref([]);
  const exploreRecipes: Ref<Recipe[]> = ref([]);
  const userRecipes: Ref<Recipe[]> = ref([]);
  const singleRecipe: Ref<Recipe|null> = ref(null);

  /**
   * Get full name of dish category
   * @returns {string} Full dish category name
   */
  const getSelectedCategoryFullName = computed<string>(() => {
    return dishCategories.value.filter((category) => category.name === selectedDishCategory.value)[0].fullName;
  });

  /**
   * Get selected dish category id
   * @returns {number} selected dish category id
   */
  const getSelectedDishCategoryId = computed<number>(() => {
    return dishCategories.value.filter((category) => category.name === selectedDishCategory.value)[0].id;
  });

  /**
   * Set new value for `selectedDishCategory`
   * @param {string} newCategory New dish category value to set
   */
  const setDishCategory = (newCategory: string): void => {
    selectedDishCategory.value = newCategory;
  };

  /**
   * Set value for newestRecipes state
   * @param {Recipe[]} value New value for newestRecipes state
   */
  const setNewestRecipes = (value: Recipe[]): void => {
    newestRecipes.value = value;
  };

  /** Load dish categories if not loaded */
  const loadDishCategories = async (): Promise<void> => {
    if (dishCategories.value.length !== 0) return;
    const result = await getDishCategories();
    dishCategories.value = result;
  };

  /** Load difficult levels if not loaded */
  const loadDifficultLevels = async (): Promise<void> => {
    if (difficultLevels.value.length !== 0) return;
    const result = await getDifficultLevels();
    difficultLevels.value = result;
  };

  /**
   * Load single recipe with id: `recipeId`
   * @param {number} recipeId Recipe id
   */
  const loadSingleRecipe = async (recipeId: number): Promise<void> => {
    const recipe = await getSingleRecipe(recipeId);
    singleRecipe.value = recipe;
  };

  return {
    selectedDishCategory,
    newestRecipes,
    dishCategories,
    difficultLevels,
    exploreRecipes,
    userRecipes,
    singleRecipe,
    getSelectedCategoryFullName,
    getSelectedDishCategoryId,
    setDishCategory,
    setNewestRecipes,
    loadDishCategories,
    loadDifficultLevels,
    loadSingleRecipe,
  };
});
