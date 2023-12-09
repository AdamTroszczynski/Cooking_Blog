<template>
  <RouterLink
    class="link link-neutral no-underline font-playfair font-normal text-[.9375rem] text-black"
    :to="linkTarget"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  linkTarget: {
    type: String,
    required: true,
  },
});
</script>
