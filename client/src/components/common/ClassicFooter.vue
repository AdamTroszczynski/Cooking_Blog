<template>
  <footer
    class="flex flex-col relative py-[40px] pl-[40px] pr-[48px] text-black bg-white border rounded-[15px] lg:pt-[60px]
      lg:px-[60px] lg:pb-[63px]"
  >
    <div
      class="flex justify-center items-center absolute top-0 right-[10%] w-[145px] h-[105px] bg-white
        translate-y-[-50%] lg:w-[230px] lg:h-[200px] lg:right-[20%] 3xl:w-[322px] 3xl:h-[240px] 3xl:right-[297px]"
    >
      <SushiIllustration class="lg:w-[160px] lg:h-auto 3xl:w-[216px]" />
    </div>

    <section class="mb-[20px] lg:md-[25px]">
      <h3 class="opacity-80 font-merri text-[1.5625rem] font-bold lg:text-[2.1875rem]">
        Recipy
      </h3>
    </section>

    <div class="lg:flex lg:gap-x-[5%] xl:gap-x-[10%] 3xl:gap-x-[182px]">
      <section class="mb-[65px]">
        <p class="mb-[15px] font-playfair text-[0.75rem] leading-[25px] lg:mb-[20px] lg:max-w-[352px] lg:text-[.9375rem]">
          Cook, Share, Enjoy - Your Culinary Journey with Recipy Begins Here! 🍽️✨
        </p>

        <ActionButton @clickAction="router.push({ name: 'explore' })" data-test="ClassicFooterButton">Start Cooking</ActionButton>
      </section>

      <section class="flex flex-col gap-y-[20px] mb-[65px]">
        <div class="flex gap-[18px]">
          <LinkButton go-to="https://github.com/Amanowsky/Cooking_Blog" is-normal-link>Source</LinkButton>
          <LinkButton go-to="#/contact">Contact</LinkButton>
          <LinkButton go-to="/explore">Explore</LinkButton>
        </div>

        <div class="flex gap-[20px]">
          <LinkButton go-to="#/youtube">
            <YoutubeIcon />
          </LinkButton>

          <LinkButton go-to="#/instagram">
            <InstagramIcon />
          </LinkButton>

          <LinkButton go-to="#/facebook">
            <FacebookIcon />
          </LinkButton>
        </div>
      </section>

      <section>
        <h3 class="mb-[20px] font-playfair text-[.9375rem]">Project created by:</h3>
        <div class="flex flex-col gap-[16px] font-playfair text-[0.75rem]">
          <p>Mikołaj Szymczuk</p>
          <p>Adam Troszczyński</p>
          <p>Gracjan Janiszewski</p>
          <p>Bartłomiej Muszyński</p>
          <p>Aleksander Nowacki</p>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import ActionButton from '@/components/buttons/ActionButton.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import YoutubeIcon from '@/components/icons/socialMedia/YoutubeIcon.vue';
import InstagramIcon from '@/components/icons/socialMedia/InstagramIcon.vue';
import FacebookIcon from '@/components/icons/socialMedia/FacebookIcon.vue';
import SushiIllustration from '@/components/decorations/SushiIllustration.vue';

const router = useRouter();
</script>
