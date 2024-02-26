<template>
  <ViewWrapper>
    <NavigationBar />

    <header class="flex flex-col items-center mt-[80px] lg:flex-row lg:justify-between 2xl:mt-[114px]">
      <h1 class="mb-[20px] text-black font-merri text-[1.875rem] font-bold lg:mb-0 2xl:text-[3.4375rem]">
        {{ isEdit ? 'Edit Recipe' : 'Create Recipe' }}
      </h1>

      <div class="flex gap-x-[12px]">
        <ActionButton @clickAction="save()">Save</ActionButton>
        <ActionButton is-white @clickAction="cancel()">Cancel</ActionButton>
      </div>
    </header>

    <main class="grid grid-cols-1 gap-[15px] mt-[50px] mb-[171px] md:grid-cols-2 lg:grid-cols-3 2xl:mt-[35px] 2xl:gap-[20px] 3xl:mb-[663px]">
      <section class="h-[350px] p-[5px] border-solid border-[1px] border-black rounded-[15px] lg:col-span-2 3xl:h-[453px]">
        <label
          class="block relative w-full h-full py-[57px] px-[45px] bg-blue/10 rounded-[12px] 2xl:flex 2xl:justify-center 2xl:items-center
            bg-no-repeat bg-center bg-cover before:absolute before:top-0 before:left-0 before:bg-white/50 before:w-full before:h-full"
          :style="{ 'background-image': `url(${imagePreviewUrl})` }"
        >
          <div
            class="flex justify-center items-center flex-col gap-y-[25px] relative h-full border-dashed border-blue border-[1px] rounded-[10px]
              2xl:w-[324px] 2xl:h-[324px] 2xl:gap-y-[33px]"
          >
            <input class="hidden" type="file" name="image" @change="setRecipeImage">
            <FastfoodIcon class="w-[90px] h-auto 2xl:w-[128px]" path-class="fill-blue" />
            <h3 class="text-blue text-[.75rem] font-playfair font-normal 2xl:text-[.9375rem]">
              Click to add recipe image
            </h3>
          </div>
        </label>
      </section>

      <SectionWithInputs heading="Basic information">
        <template #sectionBody>
          <ClassicInput placeholder="Recipe Name" name="recipeName" no-icon />
          <SelectInput name="difficulty" placeholder="Difficulty" :data="difficultLevelNames" v-model="recipe.difficultLevel" />
          <SelectInput name="dishtype" placeholder="Dish Type" :data="dishCategoryNames" v-model="recipe.dishType" />
        </template>
      </SectionWithInputs>

      <SectionWithInputs heading="Ingredients">
        <template #nextToHeading>
          <ActionButton @clickAction="addIngredient()">
            Add ingredient
          </ActionButton>
        </template>

        <template #sectionBody>
          <div
            class="flex items-center gap-x-[6px]"
            v-for="ingredient in recipe.ingredients"
            :key="ingredient.id"
          >
            <ClassicInput class="w-full" placeholder="Name" :name="`ingredient${ingredient.id}`" no-icon :init-value="ingredient.name" />
            <ClassicInput placeholder="Quantity" :name="`quantity${ingredient.id}`" no-icon :init-value="ingredient.qua" />
            <button
              class="btn w-[47px] h-auto rounded-[12px] bg-black 3xl:h-[58px] 3xl:w-[54px]"
              @click="removeIngredient(ingredient.id)"
            >
              <TrashIcon class="h-auto 3xl:w-[15px]" />
            </button>
          </div>
        </template>
      </SectionWithInputs>

      <SectionWithInputs class="lg:col-span-2" heading="Steps">
        <template #nextToHeading>
          <ActionButton @clickAction="addStep()">
            Add step
          </ActionButton>
        </template>

        <template #sectionBody>
          <div
            class="relative"
            v-for="step in recipe.steps"
            :key="step.stepNumber"
          >
            <TextareaInput placeholder="Write step content here ..." :name="`step${step.stepNumber}`" :init-value="step.stepContent" />
            <button
              class="btn absolute bottom-[calc(7px+10px)] right-[10px] p-0 w-[33px] h-[36px] min-h-[36px] rounded-[8px] bg-black
                3xl:w-[37px] 3xl:h-[40px]"
              @click="removeStep(step.stepNumber)"
            >
              <TrashIcon class="w-[9px] h-auto 3xl:w-[10px]" />
            </button>
          </div>
        </template>
      </SectionWithInputs>
    </main>

    <ClassicFooter />
  </ViewWrapper>
</template>

<script setup lang="ts">
import { ref, type Ref, watch, computed, onUpdated, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useForm } from 'vee-validate';
import Recipe from '@/models/Recipe';
import Ingredient from '@/models/Ingredient';
import Step from '@/models/Step';
import { saveRecipe, uploadRecipeImage, updateRecipe } from '@/services/recipesServices';
import { useRecipesStore } from '@/stores/recipesStore';
import { useUserStore } from '@/stores/userStore';
import { getNewRecipe } from '@/utils/recipeHelpers';
import { STATIC_IMAGES_URL } from '@/const/commonConst';

import NavigationBar from '@/components/common/NavigationBar.vue';
import ClassicFooter from '@/components/common/ClassicFooter.vue';
import ViewWrapper from '@/components/layout/ViewWrapper.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';
import FastfoodIcon from '@/components/icons/dishCategories/FastfoodIcon.vue';
import TrashIcon from '@/components/icons/common/TrashIcon.vue';
import SectionWithInputs from '@/components/layout/SectionWithInputs.vue';
import ClassicInput from '@/components/inputs/ClassicInput.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import SelectInput from '@/components/inputs/SelectInput.vue';

const recipeStore = useRecipesStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const { values, setFieldValue } = useForm();

/** New recipe object */
const recipe: Ref<Recipe> = ref(getNewRecipe());

/** Current ingredient id */
const ingredientCurrentId: Ref<number> = ref(5);

/** Current step id */
const stepCurrentId: Ref<number> = ref(4);

/** Image data to upload */
const imageToUpload: Ref<any> = ref(null);

/** Store previous image to replace image correctly when user would like to change recipe image */
const previousImage: Ref<string> = ref('');

/** Image preview url when user use upload input */
const imagePreview: Ref<string> = ref('#');

/** Update recipe objects' values */
watch(values, (): void => {
  recipe.value.recipeName = values.recipeName;
  recipe.value.ingredients.forEach((ingredient) => {
    ingredient.name = values[`ingredient${ingredient.id}`] ? values[`ingredient${ingredient.id}`] : ingredient.name;
    ingredient.qua = values[`quantity${ingredient.id}`] ? values[`quantity${ingredient.id}`] : ingredient.qua;
  });

  recipe.value.steps.forEach((step) => {
    step.stepContent = values[`step${step.stepNumber}`] ? values[`step${step.stepNumber}`] : step.stepContent;
  });
});

/**
 * Return recipe ingredients array
 * @returns {Ingredient[]} array of ingredients
 */
const ingredients = computed<Ingredient[]>(() => recipe.value.ingredients);

/**
 * Return recipe steps array
 * @returns {Step[]} array of steps
 */
const steps = computed<Step[]>(() => recipe.value.steps);

/**
 * Returns array of dish category names
 * @returns {DishCategory[]} array of dish category names
 */
const dishCategoryNames = computed<string[]>(() => recipeStore.dishCategories.map((dishtype) => dishtype.fullName));

/**
 * Returns array of difficult level names
 * @returns {DifficultLevel[]} array of
 */
const difficultLevelNames = computed<string[]>(() => recipeStore.difficultLevels.map((difficultLevel) => difficultLevel.levelName));

/**
 * Return true if current view should be in edit mode
 * @returns {boolean} true is edit mode enable
 */
const isEdit = computed<boolean>(() => route.meta.edit ? true : false);

/**
 * Return image preview url based on image upload input value
 * @returns {string} image preview url
 */
const imagePreviewUrl = computed<string>(() => {
  if (imageToUpload.value === null) {
    return `${STATIC_IMAGES_URL}/${recipe.value.recipeImage}`;
  }

  return imagePreview.value;
});

/** Create/Save new recipe */
const save = async (): Promise<void> => {
  const preparedRecipeToSave = {
    recipeId: recipe.value.recipeId,
    recipeName: recipe.value.recipeName,
    userId: userStore.user?.userId,
    recipeIngredients: recipe.value.ingredients,
    recipeSteps: recipe.value.steps,
    difficultLevel: recipeStore.difficultLevels.filter((dl) => dl.levelName === recipe.value.difficultLevel)[0].id,
    dishType: recipeStore.dishCategories.filter((dc) => dc.fullName === recipe.value.dishType)[0].id,
    recipeImage: recipe.value.recipeImage,
  };

  if (!isEdit.value) {
    await saveRecipe(preparedRecipeToSave, userStore.token);
  } else {
    await updateRecipe(preparedRecipeToSave, userStore.token);
  }

  if (imageToUpload.value !== null) {
    await uploadRecipeImage(imageToUpload.value, userStore.user!.userId, userStore.token, previousImage.value);
  }
  recipeStore.setDishCategory(recipe.value.dishType.replace(' ', '').toLowerCase());
  router.push({ name: 'myRecipes' });
};

/** Cancel operation and redirect to home view */
const cancel = (): void => {
  router.push({ name: 'home' });
};

/** Add ingredient field */
const addIngredient = (): void => {
  recipe.value.ingredients.push(new Ingredient(ingredientCurrentId.value, '', ''));
  ingredientCurrentId.value++;
};

/**
 * Remove ingredient field
 * @param {number} ingredientId Ingredient id
 */
const removeIngredient = (ingredientId: number): void => {
  recipe.value.ingredients = ingredients.value.filter((ingredient) => ingredient.id !== ingredientId);
  if (ingredients.value.length === 0) {
    ingredientCurrentId.value = 1;
  }
}

/** Add step field */
const addStep = (): void => {
  recipe.value.steps.push(new Step(stepCurrentId.value, `Step ${stepCurrentId.value}`));
  stepCurrentId.value++;
};

/**
 * Remove step field
 * @param {number} stepId Step id
 */
const removeStep = (stepId: number): void => {
  recipe.value.steps = steps.value.filter((step) => step.stepNumber !== stepId);
  if (steps.value.length === 0) {
    stepCurrentId.value = 1;
  }
};

/** Set recipe image */
const setRecipeImage = async (e: any) => {
  const files = e.target.files;
  const file = files[0];
  recipe.value.recipeImage = userStore.user?.userId + '/' + (file.name as string).split(' ').join('');
  imageToUpload.value = files;

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  } else {
    imagePreview.value = '#';
  }
};

/** Update all inputs */
const refreshInputs = (): void => {
  setFieldValue('recipeName', recipe.value.recipeName);

  recipe.value.ingredients.forEach((ingredient) => {
    setFieldValue(`ingredient${ingredient.id}`, ingredient.name);
    setFieldValue(`quantity${ingredient.id}`, ingredient.qua);
  });

  recipe.value.steps.forEach((step) => {
    setFieldValue(`step${step.stepNumber}`, step.stepContent);
  });
};

/** Load data to editor */
const prepareRecipeToEdit = (): void => {
  if (!isEdit.value) {
    recipe.value = getNewRecipe();
  } else {
    recipe.value = recipeStore.singleRecipe as Recipe;
    previousImage.value = recipe.value.recipeImage;
  }

  refreshInputs();
};

onMounted((): void => {
  prepareRecipeToEdit();
});

onUpdated(async (): Promise<void> => {
  prepareRecipeToEdit();
});
</script>
