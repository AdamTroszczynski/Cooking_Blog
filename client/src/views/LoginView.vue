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
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
import type { LoginForm } from '@/types/commonTypes';

import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import SignInUpTwoColumnsWrapper from '@/components/layout/SignInUpTwoColumnsWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';

const userStore = useUserStore();
const router = useRouter();

/** Login schema with all validation rules */
const loginSchema = object({
  username: string().required('Please enter a username').min(3, 'Username must be at least 3 characters'),
  password: string().required('Please enter a password'),
});

const { validate, meta, values } = useForm<LoginForm>({ validationSchema: loginSchema });

/** Login user */
const handleLogin = async (): Promise<void> => {
  try {
    validate();
    if (meta.value.valid) {
      const result = await login(values.username, values.password);
      userStore.login(result.user, result.token);
      router.push({ name: 'home' });
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
