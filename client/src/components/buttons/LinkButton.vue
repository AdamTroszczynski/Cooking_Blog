<template>
  <RouterLink
    class="link link-neutral no-underline font-playfair font-normal text-[.75rem] text-black lg:text-[.9375rem]"
    :to="goTo"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  goTo: {
    type: String,
    required: true,
  },
});
</script>
