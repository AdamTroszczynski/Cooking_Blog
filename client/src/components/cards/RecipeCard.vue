<template>
  <div
    class="px-[15px] pt-[15px] pb-[18px] bg-white border-solid border-[1px] border-black rounded-[15px]
      3xl:px-[16px] 3xl:pt-[16px] 3xl:pb-[20px]"
    @click="emitClickedCard()"
    data-test="RecipeCardEmitDiv"
  >
    <div
      class="h-[200px] mb-[15px] border-solid border-[1px] border-black rounded-[15px] bg-center bg-cover bg-no-repeat
        3xl:h-[214px] 3xl:mb-[16px]"
      :style="{ 'background-image': `url(${imageUrl})` }"
    ></div>

    <div class="flex justify-between items-center gap-x-[20px] font-playfair text-black text-[.9375rem]" data-test="RecipeCardRecipeDiv">
      <span class="truncate">{{ recipeName }}</span>
      <div class="flex items-center gap-x-[9px]">
        <StarIcon />

        <div class="flex items-center gap-x-[5px]">
          <HeartIcon />
          <div class="text-[.75rem]" data-test="RecipeCardLikesDiv">{{ likes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { STATIC_IMAGES_URL } from '@/const/commonConst';
import testRecipeImage from '@/assets/images/TestRecipeImage.jpg';

import StarIcon from '@/components/icons/common/StarIcon.vue';
import HeartIcon from '@/components/icons/common/HeartIcon.vue';

const props = defineProps({
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

/**
 * Return image url based on prop value
 * @returns {string} recipe image url
 */
const imageUrl = computed<string>(() => props.image === 'test' ? testRecipeImage : `${STATIC_IMAGES_URL}/${props.image}`);

/** Emit event when user click recipe card */
const emitClickedCard = (): void => emit('onCardClick');
</script>
