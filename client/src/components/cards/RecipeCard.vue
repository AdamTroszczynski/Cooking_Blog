<template>
  <div
    class="px-[15px] pt-[15px] pb-[18px] border-solid border-[1px] border-black rounded-[15px]
      3xl:px-[16px] 3xl:pt-[16px] 3xl:pb-[20px]"
    @click="emitClickedCard()"
  >
    <div
      class="h-[200px] mb-[15px] border-solid border-[1px] border-black rounded-[15px] bg-center bg-cover bg-no-repeat
        3xl:h-[214px] 3xl:mb-[16px]"
      :style="{ 'background-image': `url(${STATIC_IMAGES_URL}/${image})` }"
    ></div>

    <div class="flex justify-between items-center gap-x-[20px] font-playfair text-black text-[.9375rem]">
      <span class="truncate">{{ recipeName }}</span>
      <div class="flex items-center gap-x-[9px]">
        <StarIcon />

        <div class="flex items-center gap-x-[5px]">
          <HeartIcon />
          <div class="text-[.75rem]">{{ likes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { STATIC_IMAGES_URL } from '@/const/commonConst';

import StarIcon from '@/components/icons/common/StarIcon.vue';
import HeartIcon from '@/components/icons/common/HeartIcon.vue';

defineProps({
  image: {
    type: String,
    default: '',
  },
  recipeName: {
    type: String,
    default: '',
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits<{
  /** Emit event after click recipe card */
  (e: 'onCardClick'): void;
}>();

/** Emit event when user click recipe card */
const emitClickedCard = (): void => emit('onCardClick');
</script>
