<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] justify-center gap-[27px] 2xl:grid-cols-[repeat(3,325px)]
      3xl:gap-[54px] 3xl:grid-cols-[repeat(3,346px)]"
  >
    <RecipeCard
      v-for="recipe in searchFilteredSource"
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
import { useRouter } from 'vue-router';
import { getNewestRecipes, getRecipesPage } from '@/services/recipesServices';
import { useRecipesStore } from '@/stores/recipesStore';
import { useUserStore } from '@/stores/userStore';

import RecipeCard from '@/components/cards/RecipeCard.vue';

const recipesStore = useRecipesStore();
const userStore = useUserStore();
const router = useRouter();

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
  userRecipes: {
    type: Boolean,
    default: false,
  },
  searchValue: {
    type: String,
    default: '',
  },
});

const RECIPES_LIMIT = 10;

/** Value of scroll Y */
const scrollY: Ref<number> = ref(window.scrollY);

/** I loading again status */
const isLoadedAgain: Ref<boolean> = ref(false);

/** No more recipes status */
const isNoMoreRecipes: Ref<boolean> = ref(false);

/**
 * Get explore or user recipes based on `userRecipes` prop value
 * @returns {Recipe[]} Array of recipes
 */
const exploreUserRecipes = computed<Recipe[]>(() => {
  return !props.userRecipes ? recipesStore.exploreRecipes : recipesStore.userRecipes;
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
    source = exploreUserRecipes.value;
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
 * Get recipes filtered byt `search value` prop
 * @returns {Recipe[]} Array of recipes filtered by search value prop
 */
const searchFilteredSource = computed<Recipe[]>(() => {
  return recipesSource.value.filter((recipe) => recipe.recipeName.includes(props.searchValue));
});

/**
 * Get last recipe id from filtered array of recipes
 * @returns {number} Last recipe id from filtered array, if array is empty returns `1`
 */
const lastRecipeIdFromCategory = computed<number>(() => {
  if (recipesSource.value.length === 0) return 1;
  return recipesSource.value[recipesSource.value.length - 1].recipeId;
});

watch(
  () => recipesStore.selectedDishCategory,
  () => {
    isLoadedAgain.value = false;
    isNoMoreRecipes.value = false;
  }
);

watch(scrollY, async (newValue: number): Promise<void> => {
  if (!props.infinityScroll) return;
  if (!isNoMoreRecipes.value && (newValue + window.innerHeight >= document.documentElement.scrollHeight - 300)) {
    const lengthBefore = exploreUserRecipes.value.length;
    await loadRecipesPage();
    const lengthAfter = exploreUserRecipes.value.length;
    if (lengthBefore === lengthAfter) {
      isNoMoreRecipes.value = true;
    }
  }
});

watch(recipesSource, async (newValue: Recipe[]): Promise<void> => {
  if (!props.infinityScroll) return;
  if (newValue.length === 0 && !isLoadedAgain.value) {
    isLoadedAgain.value = true;
    await loadRecipesPage();
  }
});

/**
 * Open recipe details page after click the recipe card
 * @param {number} recipeId Recipe id
 */
const openRecipeDetails = (recipeId: number): void => {
  router.push({ name: 'recipeDetails', params: { recipeId } });
};

/** Load another recipes page */
const loadRecipesPage = async (): Promise<void> => {
  const recipesPage = await getRecipesPage(lastRecipeIdFromCategory.value, recipesStore.getSelectedDishCategoryId, RECIPES_LIMIT, props.userRecipes, userStore.user?.userId, userStore.token);
  if (!props.userRecipes) {
    recipesStore.exploreRecipes = recipesStore.exploreRecipes.concat(recipesPage);
  } else {
    recipesStore.userRecipes = recipesStore.userRecipes.concat(recipesPage);
  }
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
