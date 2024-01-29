<template>
  <ViewWrapper>
    <NavigationBar></NavigationBar>
    <div class="3xl:flex 3xl:flex-col 3xl:items-end">

      <header class="flex flex-col 3xl:flex-row-reverse 3xl:gap-[23px]">
        <div>
          <section
            class="w-[325px] 3xl:w-[951px] h-[325px] 3xl:h-[412px] mt-[60px] 3xl:mt-[95px] p-[5px] rounded-[15px] border border-black relative">
            <h1 class="w-[100%] text-center absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-merri text-[1.875rem] 3xl:text-[2.8125rem] font-[700] text-white">Recipe Title</h1>
            <div class="w-[100%] h-[100%] rounded-[12px] flex justify-center items-center bg-center bg-cover brightness-50" :style="{'background-image': `url(${STATIC_IMAGES_URL}/theSzakszulke.jpg)`}">
            </div>
          </section>

          <div class="mt-[40px] flex justify-between">
            <section class="w-[159px] 3xl:w-auto  flex flex-wrap gap-[12px] 3xl:items-center 3xl:gap-14px">
              <h2 class="text-[1rem] 3xl:text-[1.25rem] font-[400] font-playfair text-black 3xl:mr-[21px]">Created by {{
                author }}</h2>
              <ActionButton :isColored="true">Edit</ActionButton>
              <ActionButton>Delete</ActionButton>
            </section>

            <section
              class="w-[113px] 3xl:w-auto h-[47px] 3xl:h-auto flex flex-col 3xl:flex-row items-end gap-[15px] 3xl:gap-[45px] 3xl:items-center">
              <div class="flex gap-[10px] items-center">
                <h3 class="text-[0.75rem] 3xl:text-[1rem] font-playfair font-[400] text-black">Add to favourite</h3>
                <StarIcon class="w-[16px] 3xl:w-[22px]"></StarIcon>
              </div>
              <div class="flex gap-[10px] items-center">
                <h3 class="text-[0.75rem] 3xl:text-[1rem] font-playfair font-[400] text-black">Likes</h3>
                <HeartIcon class="3xl:w-[22px]"></HeartIcon><span
                  class="text-center text-[0.75rem] 3xl:text-[0.875rem] font-[400] text-black">{{ likes }}</span>
              </div>
            </section>
          </div>
        </div>

        <section
          class="w-[325px] 3xl:w-[465px] h-min mt-[80px] 3xl:mt-[95px] p-[25px] 3xl:p-[59px] rounded-[11px] 3xl:rounded-[15px] border border-black">
          <h2 class="font-playfair text-black text-[1.25rem] 3xl:text-[1.875rem] font-[400]">Ingredients</h2>
          <div class="flex flex-col gap-[8px] 3xl:gap-[10px] mt-[25px]">
            <div :key=ing.name v-for="ing in ingredients">
              <div
                class="pl-[19px] 3xl:pl-[24px] flex justify-between items-center w-[274px] 3xl:w-[347px] h-[32px] 3xl:h-[41px]  border border-black rounded-[6px] 3xl:rounded-[8px]">
                <span class="font-playfair font-[400] text-[0.75rem] 3xl:text-[0.9375rem] text-black"> {{ ing.name
                }}</span>
                <ActionButton
                  class="w-[72px] 3xl:w-[91px] text-[0.75rem] 3xl:text-[0.9375rem] 3xl:h-[41px] font-[400] font-playfair">
                  {{ ing.amount }}</ActionButton>
              </div>
            </div>
          </div>
        </section>

      </header>

      <main
        class=" mt-[65px] 3xl:mt-[146px] flex flex-col items-center w-[325px] 3xl:w-[952px] gap-[25px] 3xl:gap-[40px]">
        <h2 class="text-black font-playfair text-[1.25rem] 3xl:text-[1.875rem]">Instruction</h2>
        <div class="flex flex-col gap-[25px] 3xl:gap-[40px]">
          <div
            class="flex flex-col px-[25px] 3xl:px-[100px] py-[50px] 3xl:py-[66px] w-[100%] h-[270px] 3xl:h-[248px] border border-black rounded-[15px]"
            :key="step" v-for="(step, index) in steps">
            <h4 class="text-black font-playfair text-[1.25rem] 3xl:text-[1.5625rem] font-[700]">Step {{ index + 1 }}</h4>
            <span class="text-black font-playfair text-[1rem] 3xl:text-[1rem] leading-[25px]">{{ step }}</span>
          </div>
        </div>
      </main>

    </div>
    <ClassicFooter class="mt-[132px]"></ClassicFooter>
  </ViewWrapper>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicFooter from '@/components/common/ClassicFooter.vue';
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';
import StarIcon from '@/components/icons/common/StarIcon.vue';
import HeartIcon from '@/components/icons/common/HeartIcon.vue';
import { STATIC_IMAGES_URL } from '@/const/commonConst';

const author = "Adam";
const likes = 10;

const ingredients = [{ name: "Marchewka", amount: "500g" }, { name: "Mąka", amount: "250g" }, { name: "Woda", amount: "1 L" }];

const steps = ["Obierz marchewkę tak aby wyglądała na obraną całkowicie", "Szymczyk dostaliśmy 4 z projektu na sieci jak coś bo pewnie nie wiesz a tutaj na pewno przeczytasz hehe", "lorem ipsum donec icasladnia"]


</script>
