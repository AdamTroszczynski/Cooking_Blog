<template>
  <div
    class="md:mx-[5%] lg:mx-0 lg:flex lg:justify-between lg:items-center lg:gap-x-[12%] xl:gap-x-[20%]
      3xl:mt-[25px] 3xl:gap-x-[0]"
  >
    <div class="lg:flex-1">
      <header class="mt-[70px] mb-[48px] 3xl:mt-0 3xl:mb-[80px]">
        <h1
          class="max-w-[300px] mx-auto text-black font-merri text-center text-[1.875rem] font-bold leading-[45px]
            lg:text-left lg:mx-0 3xl:max-w-[561px] 3xl:text-[3.4375rem] 3xl:leading-[70px]"
          data-test="SignInUpTwoColumnsWrapperHeading"
        >
          <slot name="heading"></slot>
        </h1>
      </header>

      <main class="px-[15px] lg:px-0">
        <div class="flex flex-col gap-y-[30px] mb-[40px] 3xl:gap-y-[40px] 3xl:mb-[50px] 3xl:max-w-[329px]"
        data-test="SignInUpTwoColumnsWrapperForm">
          <slot name="form"></slot>
        </div>

        <ActionButton
          class="w-full 3xl:w-auto"
          @clickAction="emitAuthAction()"
          data-test="SignInUpTwoColumnsWrapperActionButton"
        >
          {{ isRegisterLayout ? 'Create Account' : 'Login' }}
        </ActionButton>
      </main>
    </div>

    <div
      class="hidden justify-center items-center mx-[15px] mt-[50px] h-[400px] border-[1px] border-black
        border-solid rounded-[15px] sm:flex lg:mx-0 lg:w-[500px] 2xl:h-[500px] 3xl:w-[681px] 3xl:h-[746px]"
    >
      <ChefIllustration class="scale-x-[-1] 3xl:w-[408px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue';
import ChefIllustration from '@/components/decorations/ChefIllustration.vue';

defineProps({
  isRegisterLayout: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /** Emit submit event */
  (e: 'onSubmit'): void;
}>();

/** Emit submit event */
const emitAuthAction = (): void => emit('onSubmit');
</script>
