import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useRecipesStore } from '@/stores/recipesStore';
import { cookies } from '@/utils/cookiesClient';
import { getUserFromToken } from '@/services/userServices';
import { RECIPY_TOKEN_COOKIE_NAME } from '@/const/commonConst';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import CreateRecipeView from '@/views/CreateRecipeView.vue';

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
      meta: { requiresAuth: false, onlyWhenLogout: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false, onlyWhenLogout: true },
    },
    {
      path: '/create-recipe',
      name: 'crateRecipe',
      component: CreateRecipeView,
      meta: { requiresAuth: true },
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

/** Function to run logic before each route enter */
const beforeRouteEnterSetup = async (): Promise<void> => {
  const recipesStore = useRecipesStore();
  await recipesStore.loadDishCategories(); // Load categories if not loaded
  await recipesStore.loadDifficultLevels(); // Load difficult levels if not loaded
};

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  await beforeRouteEnterSetup();
  const token = cookies.get(RECIPY_TOKEN_COOKIE_NAME);

  if (token && !userStore.isUserLoggedIn) {
    try {
      const user = await getUserFromToken(token._value);
      userStore.login(user, token._value);
    } catch (err) {
      userStore.logout();
      return next({ name: 'login' });
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
