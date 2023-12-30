<template>
  <ViewWrapper>
    <NavigationBar />
    <SignInUpTwoColumnsWrapper @on-submit="handleLogin()">
      <template #heading>
        Enter to Recipy world !
      </template>
      <template #form>
        <ClassicInput placeholder="Username" name="username" icon-type="user" />
        <ClassicInput placeholder="Password" name="password" is-password icon-type="lock" />
      </template>
    </SignInUpTwoColumnsWrapper>
  </ViewWrapper>
</template>

<script setup lang="ts">
import { login } from '@/services/userServices';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import SignInUpTwoColumnsWrapper from '@/components/layout/SignInUpTwoColumnsWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';

const userStore = useUserStore();
const router = useRouter();

/** Login user */
const handleLogin = async (): Promise<void> => {
  try {
    const result = await login('user1', 'testuser');
    userStore.login(result.user, result.token);
    router.push({ name: 'home' });
  } catch (err) {
    console.log(err);
  }
};
</script>
