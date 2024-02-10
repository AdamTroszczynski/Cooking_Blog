import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useRecipesStore } from '@/stores/recipesStore';
import { cookies } from '@/utils/cookiesClient';
import { getUserFromToken } from '@/services/userServices';
import { RECIPY_TOKEN_COOKIE_NAME } from '@/const/commonConst';

import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import CreateEditRecipeView from '@/views/CreateEditRecipeView.vue';
import ExploreView from '@/views/ExploreView.vue';
import MyRecipesView from '@/views/MyRecipesView.vue';
import RecipeDetailsView from '@/views/RecipeDetailsView.vue';

/** Load recipe with id from param (`next() is required after calling this function`) */
const loadRecipeWithParamId = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> => {
  try {
    const recipesStore = useRecipesStore();
    const recipeId = to.params.recipeId;
    if (!recipeId) return next('home');
    await recipesStore.loadSingleRecipe(Number(recipeId));
    if (recipesStore.singleRecipe === null) return next('home');
  } catch (err) {
    next('home');
  }
};

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
      component: CreateEditRecipeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/edit-recipe/:recipeId',
      name: 'editRecipe',
      component: CreateEditRecipeView,
      meta: { requiresAuth: true, edit: true },
      beforeEnter: async (to, from, next) => {
        await loadRecipeWithParamId(to, from , next);
        const recipesStore = useRecipesStore();
        const userStore = useUserStore();
        if (recipesStore.singleRecipe?.userId === userStore.user?.userId) {
          next();
        } else {
          next('home');
        }
      },
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView,
      meta: { requiresAuth: false },
    },
    {
      path: '/my-recipes',
      name: 'myRecipes',
      component: MyRecipesView,
      meta: { requiresAuth: true },
    },
    {
      path: '/recipe-details/:recipeId',
      name: 'recipeDetails',
      component: RecipeDetailsView,
      meta: { requiresAuth: false },
      beforeEnter: async (from, to, next) => {
        await loadRecipeWithParamId(from, to, next);
        next();
      },
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
      const user = await getUserFromToken(token);
      userStore.login(user, token);
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
