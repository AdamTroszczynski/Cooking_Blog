<template>
  <div
    class="flex justify-between items-center pl-[19px] overflow-hidden rounded-[6px] border-solid border-black
      border-[1px] text-black text-[.75rem] font-playfair transition-colors duration-200 ease-in-out delay-[50] group hover:bg-black
      hover:text-white xl:pl-[24px] xl:rounded-[8px] xl:text-[.9375rem]"
  >
    {{ checkValue(ingredient.name) }}

    <div
      class="flex justify-center py-[8px] px-[16px] min-w-[72px] rounded-l-[6px] bg-black text-white transition-colors
        delay-[50] duration-200 ease-in-out group-hover:bg-white group-hover:text-black xl:px-[20px]"
    >
      {{ checkValue(ingredient.qua) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Ingredient from '@/models/Ingredient';
import type { PropType } from 'vue';

defineProps({
  ingredient: {
    type: Object as PropType<Ingredient>,
    default: () => {},
  }
});

/**
 * Return 'empty' if value is wrong
 * @param {string} value value to check
 */
const checkValue = (value: string): string => {
  return value ? value === '' ? 'empty' : value : 'empty';
};
</script>
