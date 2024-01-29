<template>
  <SearchCategoryBarAndGallery>
    <template #heading>
      Find recipe !
    </template>
    <template #content>
      <RecipeGallery infinity-scroll :search-value="values.search" />
    </template>
  </SearchCategoryBarAndGallery>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';

import SearchCategoryBarAndGallery from '@/components/layout/SearchCategoryBarAndGallery.vue';

import RecipeGallery from '@/widgets/RecipeGallery.vue';

const { values } = useForm();
</script>
