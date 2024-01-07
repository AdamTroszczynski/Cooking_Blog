import { ref, type Ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { DishCategory } from '@/types/commonTypes';
import Recipe from '@/models/Recipe';
import { getDishCategories } from '@/services/recipesServices';

export const useRecipesStore = defineStore('recipesStore', () => {
  const selectedDishCategory: Ref<string> = ref('breakfast');
  const newestRecipes: Ref<Recipe[]> = ref([]);
  const dishCategories: Ref<DishCategory[]> = ref([]);

  /**
   * Get full name of dish category
   * @returns {string} Full dish category name
   */
  const getSelectedCategoryFullName = computed<string>(() => {
    return dishCategories.value.filter((category) => category.name === selectedDishCategory.value)[0].fullName;
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

  return {
    selectedDishCategory,
    newestRecipes,
    dishCategories,
    getSelectedCategoryFullName,
    setDishCategory,
    setNewestRecipes,
    loadDishCategories,
  };
});
