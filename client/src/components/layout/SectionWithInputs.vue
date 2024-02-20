<template>
  <section class="pt-[23px] pb-[34px] px-[18px] rounded-[15px] border-solid border-[1px] border-black">
    <div class="flex items-center justify-between mb-[23px] 3xl:mb-[33px]" data-test="SectionWithInputsHeaderDiv">
      <h3 class="text-black text-[1.125rem] font-playfair font-normal 2xl:text-[1.5625rem]" data-test="SectionWithInputsMainHeader">
        {{ heading }}
      </h3>
      <slot name="nextToHeading"></slot>
    </div>

    <div class="flex flex-col gap-y-[15px] 3xl:gap-y-[16px]" data-test="SectionWithInputsBodyDiv">
      <slot name="sectionBody"></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  heading: {
    type: String,
    default: '',
  },
});
</script>
