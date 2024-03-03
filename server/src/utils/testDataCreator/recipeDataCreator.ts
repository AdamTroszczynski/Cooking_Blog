import bcrypt from 'bcrypt';
import { createDishCategory, createDifficultLevel, createRecipe } from '@/services/recipeService';
import { createUser } from '@/services/userService';

/** Create some test data */
export const createTestingData = async (): Promise<void> => {
  const testPassword = await bcrypt.hash('testuser', 10);
  await createUser(1, 'testUser', 'test@email.com', testPassword);

  await createDifficultLevel(1, 'Easy');
  await createDifficultLevel(2, 'Medium');
  await createDifficultLevel(3, 'Hard');

  await createDishCategory(1, 'Lunch');
  await createDishCategory(2, 'Breakfast');

  await createRecipe(1, 'testRecipe1', 1, 1, 1, 'step 1|step 2', 'ingredient/1|ingredient/2|ingredient/3', 'testImage.png');
  await createRecipe(2, 'testRecipe2', 2, 2, 1, 'step 1|step 2', 'ingredient/1|ingredient/2|ingredient/3', 'testImage.png');
  await createRecipe(3, 'testRecipe3', 2, 2, 1, 'step 1|step 2', 'ingredient/1|ingredient/2|ingredient/3', 'testImage.png');
  await createRecipe(4, 'testRecipe4', 3, 1, 1, 'step 1|step 2', 'ingredient/1|ingredient/2|ingredient/3', 'testImage.png');
  await createRecipe(5, 'testRecipe5', 1, 1, 1, 'step 1|step 2', 'ingredient/1|ingredient/2|ingredient/3', 'testImage.png');
};
