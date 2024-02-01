<template>
  <div class="text-black">Recipe details view for recipe with id: {{ recipe.recipeId }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRecipesStore } from '@/stores/recipesStore';
import Recipe from '@/models/Recipe';

const recipesStore = useRecipesStore();

/**
 * Get current loaded recipe
 * @returns {Recipe} Loaded current recipe
 */
const recipe = computed<Recipe>(() => recipesStore.singleRecipe!);
</script>
