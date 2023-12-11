<template>
  <div class="flex flex-col p-[25px] justify-center items-center xl:items-start">
    <theNavibar :isLogged="true" :user="user"></theNavibar>
    <div class="flex flex-col xl:flex-row">
      <div class="flex flex-col justify-center items-center">
      <h1 class="mt-[76px] text-black text-[1.875rem] font-merri font-bold text-center xl:text-start">
        <p>Explore <span class="text-darkBlue">Recipy</span>:</p>
        <p>Your Culinary</p>
        <p>Companion!</p>
      </h1>
      <h2 class="mt-[30px] w-[273px] text-center text-black text-[0.75rem] font-playfair xl:text-start">
        Dive into a world of unique recipes, blending trandition and innovation. Elevate your cooking experince with Recipy!
      </h2>
    </div>
  
    <div class="mt-[60px] flex flex-col w-full items-end xl:items-start">
      <div class="flex gap-[15px]">
        <linkButton :linkTarget="`/`">Source</linkButton>
        <linkButton :linkTarget="`/`">Contact</linkButton>
        <linkButton :linkTarget="`/`">Explore</linkButton>
      </div>
      <div class="mt-[18px] px-[45px] w-[325px] h-[295px] flex justify-center items-center border border-black rounded-[15px] overflow-hidden">
        <chefIcon class="mt-[41px] mb-[-85px]"></chefIcon>
      </div>
    </div>
  </div>
  
    <canIcon class="mt-[58px] ml-[-170px]"></canIcon>
  
    
    <dishCategory class="mt-[69px] w-[276px] xl:w-[903px]"></dishCategory>
  
    <noodlesIcon class="mt-[120px] mr-[-150px]"></noodlesIcon>
  
    <tacoIcon class="mt-[92px] ml-[-170px]"></tacoIcon>
  
    <div>
      <h2 class="mt-[46px] text-black text-[1.125rem] font-playfair">Latest recipes ;)</h2>
      <p class="mt-[20px] text-black">W budowie</p>
      <h2 class="mt-[46px] text-black text-[0.938rem] font-playfair">Explore for more ...</h2>
    </div>
  
    <theFooter class="mt-[209px]"></theFooter>
  
  </div>
  </template>
  
  <script setup lang="ts">
  import TheNavibar from '@/components/TheNavibar.vue';
  import TheFooter from '@/components/TheFooter.vue';
  import DishCategory from '@/components/DishCategory.vue';
  import LinkButton from '@/components/buttons/LinkButton.vue';
  import CanIcon from "@/components/icons/mainPage/CanIcon.vue"
  import ChefIcon from "@/components/icons/mainPage/ChefIcon.vue"
  import NoodlesIcon from "@/components/icons/mainPage/NoodlesIcon.vue"
  import TacoIcon from "@/components/icons/mainPage/TacoIcon.vue"
  
  
  const user = {
    name: "Adam",
    img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
  }
  
  
  </script>
  