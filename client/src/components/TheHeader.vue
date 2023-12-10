<template>
  <div class="flex justify-between items-center w-full">
    <logoIcon class="w-[120px] h-[60px] sm:w-[140px] sm:h-[80px] lg:w-[180px] lg:h-[100px]"></logoIcon>
    <div class="flex justify-center items-center gap-6">
      <actionButton class="h-[35px] w-[83px] text-[.700rem] min-h-0 sm:h-[48px] sm:w-[111px] sm:text-[.800rem]">Explore
      </actionButton>
      <button class="lg:hidden">
        <menuIcon></menuIcon>
      </button>
      <div class="hidden lg:block lg:flex lg:items-center">
        <ul class="flex gap-4">
          <li v-for="link in setLinks" :key="link.name">
            <linkButton :linkTarget="`/`">{{ link.name }}</linkButton>
          </li>
        </ul>
        <div class="flex justify-center items-center gap-6" :class="setDisplay">
          <span
            class="ml-7 text-[1.25rem] font-playfair text-[black] font-medium relative 
            before:content-[''] before:block before:w-px before:h-[33px] before:bg-black before:absolute before:left-[-14px]"
            >{{ user.name }}</span>
          <div class="avatar">
            <div class="w-[58px] rounded-full">
              <img :src="user.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LogoIcon from "./icons/LogoIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import ActionButton from "./buttons/ActionButton.vue";
import LinkButton from "./buttons/LinkButton.vue";

const PATHS = {
  logged: [
    {
      name: 'My Recipes',
      path: '/',
    },
    {
      name: 'Create recipe',
      path: '/',
    },
    {
      name: 'Logout',
      path: '/',
    },
  ],
  notLogged: {
    login: {
      name: 'Login',
      path: '/',
    },
    createAccount: {
      name: 'Create Account',
      path: '/',
    },
  },
};

const prop = defineProps({
  isLogged: {
    type: Boolean,
    required: true,
  },
  user: {
    type: Object,
    required: true
  }
});

/**
 * Return links paths and names object
 * @returns {string} links paths and names object
 */
const setLinks = computed((): object =>
  prop.isLogged ? PATHS.logged : PATHS.notLogged
);

/**
 * Return status account details display classes
 * @returns {string} status account details display classes
 */
const setDisplay = computed((): string => (prop.isLogged ? 'block' : 'hidden'));
</script>
