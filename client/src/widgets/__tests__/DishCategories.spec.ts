import { expect, describe, it, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { VueWrapper, mount } from '@vue/test-utils';
import DishCategories from '@/widgets/DishCategories.vue'

describe('DishCategories.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {
    wrapper = mount(DishCategories, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
      ...config,
    });
  };
  const findHeader = () => wrapper.find('[data-test="DishCategoriesHeader"]');
  const findMainDiv = () => wrapper.find('[data-test="DishCategoriesMainDiv"]');

  describe('Props', () => {
    it('should set classes based on prop.staySmall to DishCategoriesHeader', async () => {
      createComponent({
        props: {
          staySmall: true
        }
      });

      expect(findHeader().classes()).not.toContain('lg:mb-[25px]');
      expect(findHeader().classes()).not.toContain('lg:text-[1.5625rem]');
      await wrapper.setProps({ staySmall: false });
      expect(findHeader().classes()).toContain('lg:mb-[25px]');
      expect(findHeader().classes()).toContain('lg:text-[1.5625rem]');
    })

    it('should set classes based on prop.staySmall to DishCategoriesMainDiv', async () => {
      createComponent({
        props: {
          staySmall: true
        }
      });

      expect(findMainDiv().classes()).not.toContain('2xl:gap-[37px]');
      expect(findMainDiv().classes()).not.toContain('2xl:grid-cols-[repeat(auto-fill,minmax(123px,1fr))]');
      await wrapper.setProps({ staySmall: false });
      expect(findMainDiv().classes()).toContain('2xl:gap-[37px]');
      expect(findMainDiv().classes()).toContain('2xl:grid-cols-[repeat(auto-fill,minmax(123px,1fr))]');
    });
  });
});
