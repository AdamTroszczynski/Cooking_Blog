<template>
  <div>
    <h3 class="mb-[20px] font-playfair text-[1.125rem] text-black lg:mb-[25px] lg:text-[1.5625rem]">
      Select dish category
    </h3>

    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(78px,1fr))] gap-[25px] justify-items-start 2xl:gap-[37px]
        2xl:grid-cols-[repeat(auto-fill,minmax(123px,1fr))]"
    >
      <DishCategoryCard
        v-for="dishType in recipesStore.dishCategories"
        :key="dishType.name"
        :name="dishType.name"
        :is-selected="recipesStore.selectedDishCategory === dishType.name"
        @onSelect="handleOnSelect"
      >
        {{ dishType.fullName }}
      </DishCategoryCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecipesStore } from '@/stores/recipesStore';

import DishCategoryCard from '@/components/cards/DishCategoryCard.vue';

const recipesStore = useRecipesStore();

/** Change current selected category */
const handleOnSelect = (newCategory: string) => {
  recipesStore.setDishCategory(newCategory);
};
</script>
