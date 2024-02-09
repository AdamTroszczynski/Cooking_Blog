<template>
  <div class="p-[25px] border-solid border-[1px] border-black rounded-[12px] xl:p-[59px]">
    <h3 class="mb-[25px] text-black text-[1.25rem] font-playfair xl:text-[1.875rem]">
      Ingredients
    </h3>

    <div class="flex flex-col gap-y-[8px] xl:gap-y-[10px]">
      <template v-if="ingredients.length > 0">
        <SingleIngredient
          v-for="ingredient in ingredients"
          :key="ingredient.id"
          :ingredient="ingredient"
        />
      </template>

      <div v-else class="text-black text-[.75rem] font-playfair">
        No ingredients
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Ingredient from '@/models/Ingredient';

import SingleIngredient from '@/components/cards/SingleIngredient.vue';

defineProps({
  ingredients: {
    type: Array<Ingredient>,
    default: () => [],
  },
});
</script>
