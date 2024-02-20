<template>
  <label class="form-control">
    <div class="relative">
      <input
        :id="name"
        style="box-shadow: none;"
        class="input w-full pl-[22px] h-[50px] input-bordered rounded-[12px] border-black !bg-transparent font-playfair text-black
          text-[.75rem] placeholder-black focus:border-blue focus:outline-none focus-within:outline-none 3xl:h-[58px]
          3xl:pl-[26px] 3xl:text-[.9375rem]"
        :class="noIcon ? 'pr-[22px] 3xl:pr-[26px]' : 'pr-[65px] 3xl:pr-[75px]'"
        :type="isPassword ? 'password' : 'text'"
        :placeholder="placeholder"
        v-model="value"
        :name="name"
        data-test="ClassicInputMainInput"
      />

      <div
        v-if="!noIcon"
        class="flex justify-center items-center absolute top-0 right-0 w-[53px] h-[50px] border-l-[1px]
        border-l-black border-l-solid 3xl:w-[61px] 3xl:h-[58px]"
        data-test="ClassicInputIconDiv"
      >
        <component class="w-[16px] h-auto 3xl:w-[20px]" :is="getIcon"/>
      </div>
    </div>

    <div v-if="errorMessage" class="label">
      <span class="label-text-alt text-pastelRed font-playfair">
        - {{ errorMessage }}
      </span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, type Component, onMounted } from 'vue';
import { useField } from 'vee-validate';

import EmailIcon from '@/components/icons/inputs/EmailIcon.vue';
import LockIcon from '@/components/icons/inputs/LockIcon.vue';
import UserIcon from '@/components/icons/inputs/UserIcon.vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
  noIcon: {
    type: Boolean,
    default: false,
  },
  initValue: {
    type: String,
    default: '',
  },
  iconType: {
    type: String,
    default: 'user',
    validator(value: string): boolean {
      return ['user', 'email', 'lock'].includes(value);
    },
  },
});

/** Catch value and errors from field (input component) */
const { errorMessage, value } = useField<string>(() => props.name);

/**
 * Return icon based on prop value
 * @returns {Component} Icon component
 */
const getIcon = computed<Component>(() => {
  switch (props.iconType) {
    case 'user': return UserIcon;
    case 'email': return EmailIcon;
    case 'lock': return LockIcon;
    default: return UserIcon;
  }
});

onMounted((): void => {
  if (props.initValue !== '') {
    value.value = props.initValue;
  }
});
</script>
