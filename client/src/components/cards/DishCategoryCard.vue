<template>
  <div
    class="flex flex-col gap-y-[9px] items-center"
    :class="staySmall ? '' : '2xl:gap-y-[12px]'"
  >
    <div
      class="flex justify-center items-center w-[78px] h-[78px] border-solid border-[1px] border-black rounded-[9px]"
      :class="[
        isSelected ? 'bg-black' : 'bg-white',
        staySmall ? '' : '2xl:w-[123px] 2xl:h-[123px] 2xl:rounded-[15px]'
      ]"
      @click="emitOnSelect()"
    >
      <component
        :is="getIcon"
        class="w-[55%] h-auto"
        v-bind="{ pathClass: isSelected ? 'fill-white' : 'fill-black' }"
      />
    </div>

    <p
      class="text-[.75rem] font-playfair text-black"
      :class="staySmall ? '' : '2xl:text-[.9375rem]'"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';

import BreakfastIcon from '@/components/icons/dishCategories/BreakfastIcon.vue';
import DessertIcon from '@/components/icons/dishCategories/DessertIcon.vue';
import DrinkIcon from '@/components/icons/dishCategories/DrinkIcon.vue';
import FastfoodIcon from '@/components/icons/dishCategories/FastfoodIcon.vue';
import LunchIcon from '@/components/icons/dishCategories/LunchIcon.vue';
import PizzaIcon from '@/components/icons/dishCategories/PizzaIcon.vue';

const prop = defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
    validator(value: string): boolean {
      return ['breakfast', 'dessert', 'drinks', 'fastfood', 'lunch', 'pizza'].includes(value);
    },
  },
  staySmall: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /** Emit event after click card */
  (e: 'onSelect', data: string): void;
}>();

/** Return icon based on card name prop */
const getIcon = computed<Component>(() => {
  switch (prop.name) {
    case 'breakfast': return BreakfastIcon;
    case 'dessert': return DessertIcon;
    case 'drinks': return DrinkIcon;
    case 'fastfood': return FastfoodIcon;
    case 'lunch': return LunchIcon;
    case 'pizza': return PizzaIcon;
    default: return BreakfastIcon;
  }
});

/** Emit event after click card */
const emitOnSelect = () => emit('onSelect', prop.name);
</script>
