import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { cookies } from '@/utils/cookiesClient';
import { getUserFromToken } from '@/services/userServices';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import FindRecipesView from '@/views/FindRecipesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FindRecipesView,
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
  const token = cookies.get('recipy-user-token');

  if (token) {
    try {
      const user = await getUserFromToken(token._value);
      userStore.login(user, token._value);
    } catch (err) {
      userStore.logout();
      next({ name: 'home' });
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
