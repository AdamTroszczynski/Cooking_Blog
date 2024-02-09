<template>
  <div
    class="px-[25px] py-[50px] border-solid border-black border rounded-[15px] text-black font-playfair leading-[25px]
      hover:bg-black hover:text-white transition-colors duration-200 ease-in-out xl:px-[100px] xl:py-[66px]"
  >
    <div class="mb-[15px] text-[20px] font-bold xl:text-[1.5625rem] xl:mb-[24px]">
      {{ stepHeading }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  stepHeading: {
    type: String,
    default: '',
  },
});
</script>
