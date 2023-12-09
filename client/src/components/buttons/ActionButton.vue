<template>
  <button
    class="btn px-6 font-merri font-black normal-case text-[.9375rem] text-white"
    @click="emitEvent()"
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

const emit = defineEmits<{
  /** Emit event after click button */
  (e: "clickAction"): void;
}>();

/** Emit event after click action */
const emitEvent = () => emit('clickAction');

/**
 * Return status button classes
 * @returns {string} status button classes
 */
const setButtonColor = computed((): string => prop.isBlue ? "bg-[blue]" : "bg-[#000000]");

/**
 * Return status button classes
 * @returns {string} status button classes
 */
const setButtonBorder = computed((): string => prop.biggerBorderRadius ? "rounded-[12px]" : "rounded-[8px]");
</script>
