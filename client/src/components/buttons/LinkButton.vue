<template>
  <a
    v-if="isNormalLink"
    :class="linkStyles"
    :href="goTo"
  >
    <slot></slot>
  </a>

  <button
    v-else-if="isButton"
    :class="linkStyles"
    @click="emit('clickAction')"
  >
    <slot></slot>
  </button>

  <RouterLink
    v-else
    :class="linkStyles"
    :to="goTo"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
  goTo: {
    type: String,
    default: '#/link'
  },
  isNormalLink: {
    type: Boolean,
    default: false,
  },
  isButton: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Style classes for link component */
const linkStyles = 'link link-neutral no-underline font-playfair font-normal text-[.75rem] text-black lg:text-[.9375rem]';
</script>
