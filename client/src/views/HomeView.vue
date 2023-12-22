<template>
  <ViewWrapper>
    <NavigationBar />

    <header class="relative mt-[60px] md:px-[10%] lg:px-0 lg:flex lg:justify-between lg:gap-x-[50px] lg:mt-[112px]">
      <div class="mb-[60px] px-[25px] text-center md:px-[10%] lg:px-0 lg:text-left">
        <h1
          class="mb-[30px] font-merri text-black font-bold text-[1.875rem] leading-[45px] lg:max-w-[615px]
            xl:mb-[50px] xl:text-[3.4375rem] xl:leading-[70px]"
        >
          Explore <span class="text-blue">Recipy</span>:
          Your Culinary Companion!
        </h1>

        <h2 class="font-playfair text-black text-[.75rem] leading-[20px] lg:max-w-[429px] xl:text-[1.25rem] xl:leading-[35px]">
          Dive into a world of unique recipes, blending tradition and innovation.
          Elevate your cooking experience with Recipy!
        </h2>
      </div>

      <div>
        <div class="flex gap-x-[15px] justify-end mb-[18px] lg:justify-start 2xl:mb-[54px]">
          <LinkButton :go-to="'#/source'">Source</LinkButton>
          <LinkButton :go-to="'#/explore'">Contact</LinkButton>
          <LinkButton :go-to="'#/explore'">Explore</LinkButton>
        </div>

        <div
          class="relative w-full h-[295px] bg-white border-solid border-[1px] border-black overflow-hidden
            rounded-[15px] z-[1] lg:w-[500px] 2xl:h-[411px] 3xl:w-[681px]"
        >
          <ChefIllustration class="absolute top-[40px] left-[50%] translate-x-[-50%] 2xl:w-[367px] 2xl:h-auto" />
        </div>
      </div>

      <div
        class="absolute bottom-[-25%] left-[71px] w-[1px] h-[520px] bg-black/20 md:left-[20%] lg:h-[300px]
          lg:bottom-[-50%] 4xl:h-[440px] 4xl:left-[176px] 4xl:bottom-[-55%]"
      >
        <div class="absolute bottom-[50px] py-[9px] translate-x-[-50%] bg-white 3xl:bottom-[85px]">
          <CanIllustration class="3xl:w-[77px] 3xl:h-auto" />
        </div>
      </div>
    </header>

    <main class="relative mb-[209px] 3xl:mb-[457px]">
      <div class="absolute top-[9%] left-[71px] w-[1px] h-[3383px] bg-black/20 sm:h-[2500px] md:left-[20%] lg:h-[2000px]
        3xl:h-[2363px] 3xl:top-[14.5%] 4xl:left-[176px]"
      >
        <div class="absolute top-[330px] py-[9px] translate-x-[-50%] bg-white 3xl:top-[543px]">
          <TacoIllustration class="3xl:w-[96px] 3xl:h-auto" />
        </div>
      </div>

      <div class="absolute top-[9%] right-[62px] w-[1px] h-[3266px] bg-black/20 sm:h-[2500px] md:right-[20%] lg:h-[2000px]
        3xl:h-[2772px] 3xl:top-[-13.5%] 4xl:right-[390px]"
      >
        <div class="absolute top-[92px] py-[9px] translate-x-[-65%] bg-white 3xl:top-[654px]">
          <NoodlesIllustration class="3xl:w-[426px] 3xl:h-auto" />
        </div>
      </div>

      <section class="relative mt-[180px] 3xl:mt-[288px]">
        <DishCategories />
      </section>

      <section class="relative mt-[434px] text-center 3xl:mt-[834px]">
        <h3 class="mb-[20px] font-playfair text-[1.125rem] text-black lg:mb-[25px] lg:text-[1.5625rem]">
          Latest recipes :)
        </h3>

        <RecipeGallery />

        <div class="mt-[50px] lg:mt-[101px]">
          <LinkButton
            class="text-[.9375rem] lg:text-[1.25rem]"
            :go-to="'#/Explore'"
          >
            Explore for more ...
          </LinkButton>
        </div>
      </section>
    </main>

    <ClassicFooter />
  </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicFooter from '@/components/common/ClassicFooter.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import ChefIllustration from '@/components/decorations/ChefIllustration.vue';
import CanIllustration from '@/components/decorations/CanIllustration.vue';
import TacoIllustration from '@/components/decorations/TacoIllustration.vue';
import NoodlesIllustration from '@/components/decorations/NoodlesIllustration.vue';

import DishCategories from '@/widgets/DishCategories.vue';
import RecipeGallery from '@/widgets/RecipeGallery.vue';
</script>
