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
import { register } from '@/services/userServices';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { object, string, ref as yupRef } from 'yup';
import { useForm } from 'vee-validate';
import type { RegisterForm } from '@/types/commonTypes';

import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import SignInUpTwoColumnsWrapper from '@/components/layout/SignInUpTwoColumnsWrapper.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';

const userStore = useUserStore();
const router = useRouter();

/** Register schema with all validation rules */
const registerSchema = object({
  username: string().required('Please enter a username').min(3, 'Username must be at least 3 characters'),
  email: string().email().required('Please enter a email address'),
  password: string().required('Please enter a password'),
  passwordRepeat: string().oneOf([yupRef('password')], 'Passwords must be identical').required('Please enter a password'),
});

const { validate, meta, values } = useForm<RegisterForm>({ validationSchema: registerSchema });

/** Register user */
const handleRegister = async (): Promise<void> => {
  try {
    validate();
    if (meta.value.valid) {
      const result = await register(values.username, values.email, values.password, values.passwordRepeat);
      userStore.login(result.user, result.token);
      router.push({ name: 'home' });
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
