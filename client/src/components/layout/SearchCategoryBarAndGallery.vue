<template>
  <ViewWrapper>
    <NavigationBar />

    <header class="mt-[80px] 2xl:mt-[100px]">
      <h1 class="text-black text-center font-merri text-[1.875rem] font-bold 2xl:text-[3.4375rem]" data-test="SearchCategoryBarAndGalleryHeader">
        <slot name="heading"></slot>
      </h1>
    </header>

    <main class="mt-[118px] mb-[279px] 2xl:mt-[146px]">
      <section class="mb-[60px] xl:flex xl:flex-row-reverse xl:items-center xl:justify-between 3xl:w-[1146px] 3xl:mx-auto">
        <div class="xl:w-[50%] 2xl:w-[65%] 3xl:w-[55%]">
          <DishCategories stay-small />
        </div>

        <div class="mt-[100px] md:w-[50%] xl:w-auto xl:mt-0 2xl:w-[330px]">
          <p class="mb-[20px] text-black font-playfair">Search for recipe</p>
          <ClassicInput placeholder="eg. pancakes" name="search" icon-type="user" />
        </div>
      </section>

      <section data-test="SearchCategoryBarAndGalleryContentSection">
        <slot name="content"></slot>
      </section>
    </main>

    <ClassicFooter />
  </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicFooter from '@/components/common/ClassicFooter.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';

import DishCategories from '@/widgets/DishCategories.vue';
</script>
