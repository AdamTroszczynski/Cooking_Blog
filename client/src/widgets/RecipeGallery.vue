<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] justify-center gap-[27px] 2xl:grid-cols-[repeat(3,325px)]
      3xl:gap-[54px] 3xl:grid-cols-[repeat(3,346px)]"
  >
    <RecipeCard
      v-for="i in 9"
      :key="i"
      image="Omelette.jpg"
      recipe-name="Lorem ipsum dolar"
      :likes="10"
      @onCardClick="openRecipeDetails(i)"
    />
  </div>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/cards/RecipeCard.vue';

/**
 * Open recipe details page after click the recipe card
 * @param {number} recipeId Recipe id
 */
const openRecipeDetails = (recipeId: number): void => {
  console.log(`Clicked card with id: ${recipeId}`);
};
</script>
