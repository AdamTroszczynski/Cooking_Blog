<template>
    <footer class="flex flex-col py-10 pl-10 pr-12 w-full text-black border rounded-[15px] relative xl:p-[60px]">
        <div
            class="absolute flex justify-center items-center w-[145px] h-[105px] z-10 bg-white left-[150px] top-[-50px] 
            lg:w-[280px] lg:h-[190px] lg:left-[550px] lg:top-[-120px]
            xl:w-[332px] xl:h-[240px] xl:left-[70%]">
            <footerIcon class="w-[94px] h-[90px] lg:w-[180px] lg:h-[170px] xl:w-[216px] xl:h-[207px]"></footerIcon>
        </div>

        <div class="flex flex-col lg:flex-row lg:gap-[140px] xl:gap-[182px]">
            <div>
                <h1 class="font-merri text-[1.563rem] font-bold opacity-80 lg:text-[2.188rem]">Recipy</h1>
                <h2
                    class="mb-[15px] mt-[20px] font-playfair text-[0.75rem] leading-[25px] 
                    lg:max-w-[260px] lg:text-[0.938rem] lg:mt-[25px] lg:mb-[20px]">
                    Cook, Share, Enjoy - Your Culinary Journey with Recipy Begins Here!
                </h2>
                <actionButton class="w-[118px] h-[35px] font-merri text-[0.7rem] min-h-0 lg:w-[158px] lg:h-[48px]">Start
                    Cooking</actionButton>
            </div>

            <div class="flex flex-col my-[65px] lg:mt-[70px] xl:mt-[80px]">
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
            <div class="lg:mt-[70px] xl:mt-[80px]">
                <h2 class="mb-[20px] font-playfair text-[0.935rem]">Project created by:</h2>
                <ul class="flex flex-col gap-[16px] font-playfair text-[0.75rem]">
                    <li>Mikołaj Szymczuk</li>
                    <li>Adam Troszczyński</li>
                    <li>Gracjan Janiszewski</li>
                    <li>Bartłomiej Muszyński</li>
                    <li>Aleksandra Nowacki</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import ActionButton from "@/components/buttons/ActionButton.vue";
import LinkButton from "@/components/buttons/LinkButton.vue";
import FooterIcon from "./icons/FooterIcon.vue";
</script>
