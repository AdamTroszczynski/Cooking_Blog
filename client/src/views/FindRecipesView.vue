<template>
  <div class="p-[25px] ">
    <NavigationBar></NavigationBar>
    <h1 class="text-[1.875rem] font-merri font-bold mt-[90px] mb-[118px] text-center">
      Find Recipe!
    </h1>
    <div class="px-[17px] flex flex-col lg:flex-row-reverse lg:justify-between">

    <div class="flex-1">
    <DishCategories></DishCategories>
    </div>

    <div class="">
      <FindModule></FindModule>
    </div>
    </div>

    <RecipeGallery></RecipeGallery>

    <ClassicFooter></ClassicFooter>

  </div>
</template>

<script setup lang="ts">
import NavigationBar from "../components/common/NavigationBar.vue";
import DishCategories from "../widgets/DishCategories.vue";
import FindModule from "../widgets/FindModule.vue";
import RecipeGallery from "../widgets/RecipeGallery.vue";
import ClassicFooter from "../components/common/ClassicFooter.vue";
import { ref } from "vue";




</script>
