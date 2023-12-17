<template>
  <ViewWrapper>
    <NavigationBar />

    <main class="my-[200px]">
      <DishCategories />
    </main>

    <ClassicFooter />
  </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicFooter from '@/components/common/ClassicFooter.vue';

import DishCategories from '@/widgets/DishCategories.vue';
</script>
