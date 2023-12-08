<template>
  <button class="px-6 btn" :class="[setButtonColor, setButtonBorder]">
    <span class="font-[merri] text-[15px] font-black text-white normal-case"
      ><slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const prop = defineProps({
  isBlue: {
    type: Boolean,
    default: false,
  },
  biggerBorderRadius: {
    type: Boolean,
    default: false,
  },
});

/**
 * Return status button classes
 * @returns {string} status button classes
 */
const setButtonColor = computed((): string =>
  prop.isBlue ? "bg-[blue]" : "bg-[#000000]"
);

/**
 * Return status button classes
 * @returns {string} status button classes
 */
const setButtonBorder = computed((): string =>
  prop.biggerBorderRadius ? "rounded-[12px]" : "rounded-[8px]"
);
</script>
