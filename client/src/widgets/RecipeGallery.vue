<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] justify-center gap-[27px] 2xl:grid-cols-[repeat(3,325px)]
      3xl:gap-[54px] 3xl:grid-cols-[repeat(3,346px)]"
  >
    <RecipeCard
      v-for="recipe in recipesSource"
      :key="recipe.recipeId"
      :image="recipe.recipeImage"
      :recipe-name="recipe.recipeName"
      :likes="recipe.likesCount"
      @onCardClick="recipe.recipeId > 0 ? openRecipeDetails(recipe.recipeId) : ''"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, type Ref, watch } from 'vue';
import Recipe from '@/models/Recipe';
import { getNewestRecipes, getRecipesPage } from '@/services/recipesServices';
import { useRecipesStore } from '@/stores/recipesStore';

import RecipeCard from '@/components/cards/RecipeCard.vue';

const recipesStore = useRecipesStore();

const props = defineProps({
  ownData: {
    type: Boolean,
    default: false,
  },
  recipesArray: {
    type: Array<Recipe>,
    default: [],
  },
  infinityScroll: {
    type: Boolean,
    default: false,
  },
});

/** Source for recipes in infinity scroll widget mode */
const infinityScrollRecipes: Ref<Recipe[]> = ref([]);

/** Value of scroll Y */
const scrollY: Ref<number> = ref(window.scrollY);

watch(scrollY, async (newValue: number): Promise<void> => {
  if (newValue + window.innerHeight >= document.documentElement.scrollHeight) {
    await loadRecipesPage();
  }
});

/**
 * Get recipes data source
 * @returns {Recipe[]} Recipes data source
 */
const recipesSource = computed<Recipe[]>(() => {
  let source: Recipe[] = [];

  if (props.ownData) {
    source = props.recipesArray;
  } else if (!props.infinityScroll) {
    source = recipesStore.newestRecipes;
  } else {
    source = infinityScrollRecipes.value;
  }

  // Filter by selected category
  const filteredSource = source.filter((recipe) => recipe.dishType === recipesStore.getSelectedCategoryFullName);

  // If newest recipes source, fill empty places with recipes without data
  if (!props.ownData && !props.infinityScroll && filteredSource.length < 9) {
    const recipesAmountToFill = 9 - filteredSource.length;
    for (let i = 0; i < recipesAmountToFill; i++) {
      filteredSource.push(new Recipe(-1 * i, '', 0, '', '', -1, [], [], '', 0));
    }
  }

  return filteredSource;
});

/**
 * Get last recipe id from filtered array of recipes
 * @returns {number} Last recipe id from filtered array, if array is empty returns `1`
 */
const lastRecipeIdFromCategory = computed<number>(() => {
  if (recipesSource.value.length === 0) return 1;
  return recipesSource.value[recipesSource.value.length - 1].recipeId;
});

/**
 * Open recipe details page after click the recipe card
 * @param {number} recipeId Recipe id
 */
const openRecipeDetails = (recipeId: number): void => {
  console.log(`Clicked card with id: ${recipeId}`);
};

/** Load another recipes page */
const loadRecipesPage = async (): Promise<void> => {
  const recipesPage = await getRecipesPage(lastRecipeIdFromCategory.value, recipesStore.getSelectedDishCategoryId);
  infinityScrollRecipes.value = infinityScrollRecipes.value.concat(recipesPage);
};

/** Logic to do when mount */
const mountLogic = (): void => {
  window.addEventListener('scroll', (): void => {
    scrollY.value = window.scrollY;
  });
};

onMounted(async (): Promise<void> => {
  mountLogic();
  if (props.ownData) return;
  if (props.infinityScroll) { await loadRecipesPage(); return; }
  if (recipesStore.newestRecipes.length !== 0) return;
  const result = await getNewestRecipes();
  recipesStore.setNewestRecipes(result);
});
</script>
