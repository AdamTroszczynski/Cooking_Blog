import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import DishCategoryCard from '@/components/cards/DishCategoryCard.vue';
import BreakfastIcon from '@/components/icons/dishCategories/BreakfastIcon.vue';
import DessertIcon from '@/components/icons/dishCategories/DessertIcon.vue';
import DrinkIcon from '@/components/icons/dishCategories/DrinkIcon.vue';
import FastfoodIcon from '@/components/icons/dishCategories/FastfoodIcon.vue';
import LunchIcon from '@/components/icons/dishCategories/LunchIcon.vue';
import PizzaIcon from '@/components/icons/dishCategories/PizzaIcon.vue';

describe('DishCategoryCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(DishCategoryCard, config) };
  const findMainDiv = () => wrapper.find('[data-test="DishCategoryCardMainDiv"]');
  const findHeader = () => wrapper.find('[data-test="DishCategoryCardHeaderDiv"]');
  const findParagraph = () => wrapper.find('[data-test="DishCategoryCardMainParagraph"]');
  const findBreakfastIcon = () => wrapper.findComponent(BreakfastIcon);

  describe('Props', () => {
    it('should set classses based on prop.isSelected', async () => {
      createComponent({
        props: {
          name: 'breakfast',
          isSelected: true
        }
      });

      expect(findMainDiv().classes()).toContain('bg-black');
      expect(findMainDiv().classes()).not.toContain('bg-white');
      await wrapper.setProps({ isSelected: false });
      expect(findMainDiv().classes()).not.toContain('bg-black');
      expect(findMainDiv().classes()).toContain('bg-white');
    });

    it('should set classes based on prop.staySmall', async () => {
      createComponent({
        props: {
          name: 'breakfast',
          staySmall: true
        }
      });

      expect(findHeader().classes()).not.toContain('2xl:gap-y-[12px]');
      expect(findMainDiv().classes()).not.toContain('2xl:w-[123px]');
      expect(findMainDiv().classes()).not.toContain('2xl:h-[123px]');
      expect(findMainDiv().classes()).not.toContain('2xl:rounded-[15px]');
      expect(findParagraph().classes()).not.toContain('2xl:text-[.9375rem]')

      await wrapper.setProps({ staySmall: false });
      expect(findHeader().classes()).toContain('2xl:gap-y-[12px]');
      expect(findMainDiv().classes()).toContain('2xl:w-[123px]');
      expect(findMainDiv().classes()).toContain('2xl:h-[123px]');
      expect(findMainDiv().classes()).toContain('2xl:rounded-[15px]');
      expect(findParagraph().classes()).toContain('2xl:text-[.9375rem]')
    });

    it('should set pathClass to component based on prop.isSelected', async () => {
      createComponent({
        props: {
          name: 'breakfast',
          isSelected: true
        }
      });

      expect(findBreakfastIcon().props().pathClass).toBe('fill-white');
      await wrapper.setProps({ isSelected: false });
      expect(findBreakfastIcon().props().pathClass).toBe('fill-black');
    });

    it('should render icon based on prop.name', async () => {
      createComponent({
        props: {
          name: 'breakfast'
        }
      });

      expect(findMainDiv().findComponent(BreakfastIcon).exists()).toBe(true);
      await wrapper.setProps({ name: 'dessert' });
      expect(findMainDiv().findComponent(DessertIcon).exists()).toBe(true);
      await wrapper.setProps({ name: 'drinks' });
      expect(findMainDiv().findComponent(DrinkIcon).exists()).toBe(true);
      await wrapper.setProps({ name: 'fastfood' });
      expect(findMainDiv().findComponent(FastfoodIcon).exists()).toBe(true);
      await wrapper.setProps({ name: 'lunch' });
      expect(findMainDiv().findComponent(LunchIcon).exists()).toBe(true);
      await wrapper.setProps({ name: 'pizza' });
      expect(findMainDiv().findComponent(PizzaIcon).exists()).toBe(true);
    });
  });

  describe('Emits', () => {
    it('should emit onSelect if MainDiv is clicked', async () => {
      createComponent({
        props: {
          name: 'breakfast'
        }
      });

      await findMainDiv().trigger('click');
      expect(wrapper.emitted().onSelect).toBeDefined();
      expect(wrapper.emitted().onSelect[0]).toEqual(['breakfast']);
    });
  });

  describe('Slots', () => {
    it('should render contents in default slot', () => {
      createComponent({
        props: {
          name: 'breakfast'
        },
        slots: {
          default: 'testContent'
        }
      });

      expect(findParagraph().text()).toContain('testContent');
    });
  });
});
