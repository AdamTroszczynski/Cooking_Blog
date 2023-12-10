<template>
    <div class="flex flex-col justify-center">
<h2 class="text-black text-[1.125rem] font-playfair pb-[20px]">Select dish category</h2>
<ul class="text-black flex flex-wrap gap-[20px]">
    <li v-for="dish in dishes" :key="dish.name" class="flex flex-col justify-center items-center">
        <categoryBox @click-action="setActive" class="w-[78px] h-[78px]" :isSelected="dish.name === isActive" :name="dish.name"><component :is="dish.component" :isActive="dish.name === isActive"></component></categoryBox>
        <h3 class="mt-[8px] font-playfair text-[0.75rem]">{{ dish.name }}</h3>
    </li>
    
</ul>
</div>
</template>

<script setup lang="ts">
import DessertIcon from './icons/category/DessertIcon.vue';
import FastfoodIcon from './icons/category/FastfoodIcon.vue';
import BreakfastIcon from './icons/category/BreakfastIcon.vue';
import DrinksIcon from './icons/category/DrinksIcon.vue';
import PizzaIcon from './icons/category/PizzaIcon.vue';
import LunchIcon from './icons/category/LunchIcon.vue';
import CategoryBox from './layoat/CategoryBox.vue';
import {ref} from "vue"

const dishes =[{component: DessertIcon, name: "Dessert"}, {component: FastfoodIcon, name: "Fast Food"}, {component: BreakfastIcon, name: "Breakfast"},
{component: DrinksIcon, name: "Drinks"}, {component: PizzaIcon, name: "Pizza"}, {component: LunchIcon, name: "Lunch"}]

const isActive = ref('Dessert')



/**
 * Set active category box
 * @param {string} data name from categoryBox
 */

const setActive = (data:string):void => {
    isActive.value = data
}



</script>