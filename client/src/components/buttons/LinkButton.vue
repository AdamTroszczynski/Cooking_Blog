<template>
  <router-link :to="linkTarget">
    <span class="link link-neutral text-black font-[playfair] text-[15px] font-normal no-underline">
      <slot></slot>
    </span>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  linkTarget: {
    type: String,
    required: true,
  },
});
</script>
