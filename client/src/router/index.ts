import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useRecipesStore } from '@/stores/recipesStore';
import { cookies } from '@/utils/cookiesClient';
import { getUserFromToken } from '@/services/userServices';
import { RECIPY_TOKEN_COOKIE_NAME } from '@/const/commonConst';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false, onlyWhenLogout: true, },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false, onlyWhenLogout: true, },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: { name: 'home' },
    }
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const recipesStore = useRecipesStore();
  await recipesStore.loadDishCategories(); // Load categories if not loaded
  const token = cookies.get(RECIPY_TOKEN_COOKIE_NAME);

  if (token && !userStore.isUserLoggedIn) {
    try {
      const user = await getUserFromToken(token);
      userStore.login(user, token);
    } catch (err) {
      userStore.logout();
      next({ name: 'login' });
    }
  }

  if (!to.meta.requiresAuth && !userStore.isUserLoggedIn) {
    next();
  } else if (to.meta.requiresAuth && !userStore.isUserLoggedIn) {
    next({ name: 'login' });
  } else if (!to.meta.requiresAuth && to.meta.onlyWhenLogout && userStore.isUserLoggedIn) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
