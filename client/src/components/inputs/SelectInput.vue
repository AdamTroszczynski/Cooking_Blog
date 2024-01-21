<template>
  <div :id="name" :name="name" class="relative" :tabindex="tabindex" @blur="open = false">
    <!-- Main input container (selected option here) -->
    <div
      class="flex items-center justify-between w-full px-[25px] py-[22px] h-[50px] border-solid border-[1px] rounded-[12px] border-black
        !bg-transparent font-playfair text-black text-[.75rem] 3xl:h-[58px] 3xl:px-[26px] 3xl:text-[.9375rem]"
      @click="open = !open"
    >
      {{ selected }}

      <DownArrowIcon
        class="h-auto 3xl:w-[17px]"
        :class="open ? 'rotate-[180deg]' : ''"
      />
    </div>

    <!-- Available options -->
    <div
      v-if="open"
      class="absolute w-full top-[65px] left-0 py-[22px] bg-white rounded-[12px] border-solid border-[1px] border-black
        text-black text-[.75rem] font-playfair z-[1] 3xl:text-[.9375rem]"
    >
      <div
        class="w-full py-[22px] px-[25px] first:pt-0 last:pb-0 border-b-[1px] border-b-black border-b-solid last:border-none
          3xl:px-[26px]"
        v-for="(option, index) in data"
        :key="index"
        @click="selectOption(option as string)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, computed } from 'vue';

import DownArrowIcon from '@/components/icons/common/DownArrowIcon.vue';

const props = defineProps({
  data: {
    type: Array<String>,
    default: [],
  },
  name: {
    type: String,
    default: '',
  },
  tabindex: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  /** Emit event after select new option */
  (e: 'input', option: string): void;
}>();

/** Input selected option */
const selectedOption: Ref<string> = ref('');

/** Select input active status */
const open: Ref<boolean> = ref(false);

/**
 * Return selected option or empty message
 * @returns {string} selected option or empty message
 */
const selected = computed<string>(() => selectedOption.value === '' ? props.placeholder : selectedOption.value);

/**
 * Set new option as selected
 * @param {string} newOption new selected option
 */
const selectOption = (newOption: string): void => {
  selectedOption.value = newOption;
  open.value = false;
  emit('input', newOption);

};
</script>
