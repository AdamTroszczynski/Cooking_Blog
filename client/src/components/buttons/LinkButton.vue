<template>
  <RouterLink :to="linkTarget" class="link link-neutral no-underline font-[playfair] font-normal text-[15px] text-black">
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
