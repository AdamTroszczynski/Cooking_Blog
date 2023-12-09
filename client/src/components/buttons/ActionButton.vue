<template>
  <button
    @click="emit('clickAction')"
    class="btn font-[merri] font-black normal-case px-6 text-[15px] text-white"
    :class="[setButtonColor, setButtonBorder]"
  >
    <slot></slot>
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

const emit = defineEmits<{
  /** Emit event after click button */
  (e: "clickAction"): void;
}>();
</script>
