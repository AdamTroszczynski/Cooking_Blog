import Recipe from '@/models/Recipe';
import Step from '@/models/Step';
import Ingredient from '@/models/Ingredient';

export const getNewRecipe = () => new Recipe(0, '', 0, '', '', 0,
  [new Step(1, 'Step 1'), new Step(2, 'Step 2'), new Step(3, 'Step 3')],
  [new Ingredient(1, '', ''), new Ingredient(2, '', ''), new Ingredient(3, '', ''), new Ingredient(4, '', '')], '', 0);
