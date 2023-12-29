<template>
  <ViewWrapper>
    <NavigationBar />
    <SignInUpTwoColumnsWrapper
      is-register-layout
      @on-submit="handleRegister()"
    >
      <template #heading>
        Start your culinary adventure !
      </template>
      <template #form>
        <ClassicInput placeholder="Username" name="username" icon-type="user" />
        <ClassicInput placeholder="Email" name="email" icon-type="email" />
        <ClassicInput placeholder="Password" name="password" is-password icon-type="lock" />
        <ClassicInput placeholder="Repeat Password" name="passwordRepeat" is-password icon-type="lock" />
      </template>
    </SignInUpTwoColumnsWrapper>
  </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import SignInUpTwoColumnsWrapper from '@/components/layout/SignInUpTwoColumnsWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';

/** Register user */
const handleRegister = (): void => {
  console.log('Register user');
};
</script>
