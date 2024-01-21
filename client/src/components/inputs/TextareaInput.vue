<template>
  <label class="form-control">
    <div class="relative">
      <textarea
        :id="name"
        style="box-shadow: none;"
        class="input w-full px-[25px] py-[22px] h-[143px] input-bordered rounded-[12px] border-black !bg-transparent font-playfair text-black
          text-[.75rem] placeholder-black focus:border-blue focus:outline-none focus-within:outline-none 3xl:h-[178px]
          3xl:pl-[26px] 3xl:text-[.9375rem]"
        :placeholder="placeholder"
        v-model="value"
        :name="name"
      ></textarea>
    </div>

    <div v-if="errorMessage" class="label">
      <span class="label-text-alt text-pastelRed font-playfair">
        - {{ errorMessage }}
      </span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  initValue: {
    type: String,
    default: '',
  },
});

/** Catch value and errors from field (input component) */
const { errorMessage, value } = useField(() => props.name);

onMounted((): void => {
  if (props.initValue !== '') {
    value.value = props.initValue;
  }
});
</script>
