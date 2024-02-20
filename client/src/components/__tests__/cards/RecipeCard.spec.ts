import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import RecipeCard from "@/components/cards/RecipeCard.vue";
import { STATIC_IMAGES_URL } from "@/const/commonConst";

describe('RecipeCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(RecipeCard,config)};

  describe('Props', () => {
    it('should render recipeName value based on prop.recipeName', () => {
      createComponent({
        props: {
          recipeName: 'testName'
        }
      });
      expect(wrapper.find('[data-test="RecipeCardRecipeDiv"]').text()).toContain('testName');
    });
    it('should render likes value based on prop.likes', () => {
      createComponent({
        props: {
          likes: 2
        }
      });
      expect(wrapper.find('[data-test="RecipeCardLikesDiv"]').text()).toContain('2');
    });
    it('should set styles based on prop.image', async () => {
      createComponent({
        props: {
          image: 'testImage.jpg'
        }
      });
      expect(wrapper.find('[data-test="RecipeCardImageDiv"]').attributes().style).toBe(`background-image: url(${STATIC_IMAGES_URL}/testImage.jpg);`);
    })
  });

  describe('Emits', () => {
    it('should emit onCardClick if RecipeCardEmitDiv is clicked', async () => {
      createComponent();
      await wrapper.find('[data-test="RecipeCardEmitDiv"]').trigger('click');
      expect(wrapper.emitted().onCardClick).toBeDefined();
    })

  });
})
