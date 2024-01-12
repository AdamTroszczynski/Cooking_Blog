import { ref, type Ref, computed } from 'vue';
import { defineStore } from 'pinia';
import User from '@/models/User';
import { cookies } from '@/utils/cookiesClient';
import { RECIPY_TOKEN_COOKIE_NAME } from '@/const/commonConst';

export const useUserStore = defineStore('userStore', () => {
  const user: Ref<User | null> = ref(null);
  const token: Ref<string> = ref('');
  const isLogged: Ref<boolean> = ref(false);

  /**
   * Check if user is logged in
   * @returns {boolean} True if user is correctly logged in
   */
  const isUserLoggedIn = computed<boolean>(() => {
    return isLogged.value && user.value !== null && token.value !== '';
  });

  /**
   * Login user
   * @param {User} newUser User data
   * @param {string} newToken Token
   */
  const login = (newUser: User, newToken: string): void => {
    user.value = newUser;
    token.value = newToken;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000)); // 1h expiration time
    cookies.set(RECIPY_TOKEN_COOKIE_NAME, token.value, { expires: expirationDate });
    isLogged.value = true;
  };

  /** Logout user, reset all user data */
  const logout = (): void => {
    user.value = null;
    token.value = '';
    cookies.remove(RECIPY_TOKEN_COOKIE_NAME);
    isLogged.value = false;
  };

  return {
    user,
    token,
    isLogged,
    isUserLoggedIn,
    login,
    logout,
  };
});
