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
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import SignInUpTwoColumnsWrapper from '@/components/layout/SignInUpTwoColumnsWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';

/** Login user */
const handleLogin = (): void => {
  console.log('Login user');
};
</script>
