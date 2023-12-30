<template>
  <nav class="flex gap-x-[30px] items-center lg:gap-x-[36px]">
    <RouterLink
      class="flex-1"
      :to="{ name: 'home' }"
    >
      <LogoIcon class="md:w-auto md:h-[80px] 2xl:h-[100px]" />
    </RouterLink>

    <ActionButton @clickAction="goToExplorePage()">
      Explore
    </ActionButton>

    <!-- Container for navbar links -->
    <div
      class="absolute top-[25px] right-[25px] w-[190px] p-[15px] bg-white shadow-[0_6px_25px_0px_rgba(0,0,0,0.2)]
        rounded-[8px] z-[1] md:top-[45px] md:right-[45px] lg:flex lg:static lg:shadow-none lg:top-auto lg:right-auto
        lg:p-0 lg:w-auto"
      :class="isMenuActive ? 'block' : 'hidden'"
    >
      <div class="flex justify-end mb-[42px] lg:hidden">
        <button @click="toggleMenu()" name="exit-menu" aria-label="exit-menu"
        >
          <ExitMenuIcon />
        </button>
      </div>

      <div class="flex items-end flex-col gap-y-[25px] mb-[37px] lg:flex-row lg:items-center lg:gap-x-[18px] lg:mb-0 lg:mr-[18px]">
        <template v-if="userStore.isUserLoggedIn">
          <LinkButton go-to="#/my-recipes">My Recipes</LinkButton>
          <LinkButton go-to="#/create-recipe">Create recipe</LinkButton>
        </template>
        <template v-else>
          <LinkButton go-to="login">Login</LinkButton>
          <LinkButton go-to="register">Create Account</LinkButton>
        </template>
      </div>

      <div v-if="userStore.isUserLoggedIn" class="flex justify-end items-center pt-[18px] border-t-solid border-t-[1px] border-t-black lg:border-t-0 lg:pt-0">
        <LinkButton is-button @click-action="handleLogout()">Logout</LinkButton>
        <div class="w-[1px] h-[22px] ml-[12px] mr-[10px] bg-black lg:h-[33px] lg:mx-[16px]"></div>
        <p class="mr-[16px] text-black text-[.9375rem] font-medium font-playfair lg:mr-[24px] lg:text-[1.25rem]">
          {{ userStore.user?.username }}
        </p>
        <div class="w-[40px] h-[40px] rounded-[50%] overflow-hidden border-solid border-[1px] border-black lg:w-[58px] lg:h-[58px]">
          <img class="w-full max-h-auto" :src="AvatarTest" alt="avatar" title="avatar">
        </div>
      </div>
    </div>

    <button
      class="lg:hidden"
      name="menu"
      aria-label="side-menu"
      @click="toggleMenu()"
    >
      <MenuIcon />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

import LogoIcon from '@/components/icons/common/LogoIcon.vue';
import MenuIcon from '@/components/icons/menu/MenuIcon.vue';
import ExitMenuIcon from '@/components/icons/menu/ExitMenuIcon.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';

import AvatarTest from '@/assets/images/AvatarTest.png';

const userStore = useUserStore();
const router = useRouter();

/** Side menu active status */
const isMenuActive: Ref<boolean> = ref(false);

/** Toggle side menu active status */
const toggleMenu = (): void => {
  isMenuActive.value = !isMenuActive.value;
};

/** Redirect to explore view */
const goToExplorePage = (): void => console.log('Go to explore page');

/** Handle logout action */
const handleLogout = (): void => {
  userStore.logout();
  router.push({ name: 'home' });
};
</script>
