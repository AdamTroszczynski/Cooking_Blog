<template>
    <button @click="emitEvent"  class="btn flex justify-center items-center border border-black rounded-[9px]" :class="setBackground">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

import { computed } from "vue";

const prop = defineProps({
    isSelected: {
        type: Boolean,
        required: false,
        default: false
    },
    name: {
        type: String,
        required: true
    }
})



const emit = defineEmits<{
  /** Emit event after click button */
  (e: "clickAction", data: string): void;
}>();


/** Emit event after click action */
const emitEvent = () => {
    emit('clickAction', prop.name)};

/**
 * Return status button classes
 * @returns {string} status button classes
 */
const setBackground = computed(():string => {
    return prop.isSelected ? 'bg-black' : 'bg-white'
})



</script>