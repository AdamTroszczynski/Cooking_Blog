<template>
<footer class="flex flex-col py-10 pl-10 pr-12 w-full text-black border rounded-[15px] relative">
<div class="absolute flex justify-center items-center w-[145px] h-[105px] z-10 bg-white left-[150px] top-[-50px]"><footerIcon class="w-[94px] h-[90px]"></footerIcon></div>
<h1 class="font-merri text-[1.563rem] font-bold opacity-80">Recipy</h1>
<h2 class="mb-[15px] mt-[20px] font-playfair text-[0.75rem] leading-[25px]">Cook, Share, Enjoy - Your Culinary Journey with Recipy Begins Here!</h2>
<actionButton class="w-[118px] h-[35px] font-merri text-[0.7rem] min-h-0">Start Cooking</actionButton>
<div class="flex flex-col my-[65px]">
    <div class="mb-[20px] flex gap-[18px]">
        <linkButton :linkTarget="`/`">Source</linkButton>
        <linkButton :linkTarget="`/`">Contact</linkButton>
        <linkButton :linkTarget="`/`">Explore</linkButton>
    </div>
    <div class="flex gap-[18px]">
        <linkButton :linkTarget="`/`">[yt]</linkButton>
        <linkButton :linkTarget="`/`">[insta]</linkButton>
        <linkButton :linkTarget="`/`">[fb]</linkButton>
    </div>
</div>
<h2 class="mb-[20px] font-playfair text-[0.935rem]">Project created by:</h2>
<ul class="flex flex-col gap-[16px] font-playfair text-[0.75rem]">
    <li>Mikołaj Szymczuk</li>
    <li>Adam Troszczyński</li>
    <li>Gracjan Janiszewski</li>
    <li>Bartłomiej Muszyński</li>
    <li>Aleksandra Nowacki</li>
</ul>
</footer>



</template>

<script setup lang="ts">
import ActionButton from "@/components/buttons/ActionButton.vue"
import LinkButton from "@/components/buttons/LinkButton.vue"
import FooterIcon from "./icons/FooterIcon.vue";
</script>