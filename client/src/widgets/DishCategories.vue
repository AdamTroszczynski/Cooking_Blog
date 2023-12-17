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
        v-for="dishType in cardsData"
        :key="dishType.name"
        :name="dishType.name"
        :is-selected="selectedCategory === dishType.name"
        @onSelect="handleOnSelect"
      >
        {{ dishType.fullName }}
      </DishCategoryCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

import DishCategoryCard from '@/components/cards/DishCategoryCard.vue';

type CardData = {
  name: string;
  fullName: string;
};

/** Dish cards data */
const cardsData: CardData[] = [
  { name: 'breakfast', fullName: 'Breakfast' },
  { name: 'dessert', fullName: 'Dessert' },
  { name: 'drink', fullName: 'Drink' },
  { name: 'fastfood', fullName: 'Fast Food' },
  { name: 'lunch', fullName: 'Lunch' },
  { name: 'pizza', fullName: 'Pizza' },
];

/** Selected dish category */
const selectedCategory: Ref<string> = ref(cardsData[0].name);

/** Change current selected category */
const handleOnSelect = (newCategory: string) => {
  selectedCategory.value = newCategory;
};
</script>
