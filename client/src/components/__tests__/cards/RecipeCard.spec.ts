import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import RecipeCard from '@/components/cards/RecipeCard.vue';
import { STATIC_IMAGES_URL } from '@/const/commonConst';

describe('RecipeCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(RecipeCard, config) };
  const findRecipeDiv = () => wrapper.find('[data-test="RecipeCardRecipeDiv"]');
  const findLikesDiv = () => wrapper.find('[data-test="RecipeCardLikesDiv"]');
  const findEmitDiv = () => wrapper.find('[data-test="RecipeCardEmitDiv"]');
  const findImageDiv = () => wrapper.find('[data-test="RecipeCardImageDiv"]');

  describe('Props', () => {
    it('should render recipeName value based on prop.recipeName', () => {
      createComponent({
        props: {
          recipeName: 'testName'
        }
      });

      expect(findRecipeDiv().text()).toContain('testName');
    });

    it('should render likes value based on prop.likes', () => {
      createComponent({
        props: {
          likes: 2
        }
      });

      expect(findLikesDiv().text()).toContain('2');
    });

    it('should set styles based on prop.image', async () => {
      createComponent({
        props: {
          image: 'testImage.jpg'
        }
      });

      expect(findImageDiv().attributes().style).toBe(`background-image: url(${STATIC_IMAGES_URL}/testImage.jpg);`);
    });
  });

  describe('Emits', () => {
    it('should emit onCardClick if RecipeCardEmitDiv is clicked', async () => {
      createComponent();

      await findEmitDiv().trigger('click');
      expect(wrapper.emitted().onCardClick).toBeDefined();
    });
  });
});
