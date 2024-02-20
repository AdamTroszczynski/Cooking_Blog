import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import DishCategoryCard from "@/components/cards/DishCategoryCard.vue";
import BreakfastIcon from "@/components/icons/dishCategories/BreakfastIcon.vue";
import DessertIcon from "@/components/icons/dishCategories/DessertIcon.vue";
import DrinkIcon from "@/components/icons/dishCategories/DrinkIcon.vue";
import FastfoodIcon from "@/components/icons/dishCategories/FastfoodIcon.vue";
import LunchIcon from "@/components/icons/dishCategories/LunchIcon.vue";
import PizzaIcon from "@/components/icons/dishCategories/PizzaIcon.vue";

describe('DishCategoryCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(DishCategoryCard,config)};

  describe('Props', () => {
    it('should set classses based on prop.isSelected', async () => {
      createComponent({
        props: {
          name: 'breakfast',
          isSelected: true
        }
      });
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).toContain('bg-black');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).not.toContain('bg-white');
      await wrapper.setProps({isSelected: false});
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).not.toContain('bg-black');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).toContain('bg-white');
    })

    it('should set classes based on prop.staySmall', async () => {
      createComponent({
        props: {
          name: 'breakfast',
          staySmall: true
        }
      });
      expect(wrapper.find('[data-test="DishCategoryCardHeaderDiv"]').classes()).not.toContain('2xl:gap-y-[12px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).not.toContain('2xl:w-[123px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).not.toContain('2xl:h-[123px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).not.toContain('2xl:rounded-[15px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainParagraph"]').classes()).not.toContain('2xl:text-[.9375rem]')
      await wrapper.setProps({staySmall: false});
      expect(wrapper.find('[data-test="DishCategoryCardHeaderDiv"]').classes()).toContain('2xl:gap-y-[12px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).toContain('2xl:w-[123px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).toContain('2xl:h-[123px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').classes()).toContain('2xl:rounded-[15px]');
      expect(wrapper.find('[data-test="DishCategoryCardMainParagraph"]').classes()).toContain('2xl:text-[.9375rem]')
    })

    it('should set pathClass to component based on prop.isSelected', async () => {
      createComponent({
        props: {
          name: 'breakfast',
          isSelected: true
        }
      });
      expect(wrapper.findComponent(BreakfastIcon).props().pathClass).toBe('fill-white');
      await wrapper.setProps({isSelected: false});
      expect(wrapper.findComponent(BreakfastIcon).props().pathClass).toBe('fill-black');
    })

    it('should render icon based on prop.name', async () => {
      createComponent({
        props: {
          name: 'breakfast'
        }
      });
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').findComponent(BreakfastIcon).exists()).toBe(true);
      await wrapper.setProps({name: 'dessert'});
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').findComponent(DessertIcon).exists()).toBe(true);
      await wrapper.setProps({name: 'drinks'});
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').findComponent(DrinkIcon).exists()).toBe(true);
      await wrapper.setProps({name: 'fastfood'});
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').findComponent(FastfoodIcon).exists()).toBe(true);
      await wrapper.setProps({name: 'lunch'});
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').findComponent(LunchIcon).exists()).toBe(true);
      await wrapper.setProps({name: 'pizza'});
      expect(wrapper.find('[data-test="DishCategoryCardMainDiv"]').findComponent(PizzaIcon).exists()).toBe(true);
    })
  });

  describe('Emits', () => {
    it('should emit onSelect if MainDiv is clicked', async () => {
      createComponent({
        props: {
          name: 'breakfast'
        }
      });
      await wrapper.find('[data-test="DishCategoryCardMainDiv"]').trigger('click');
      expect(wrapper.emitted().onSelect).toBeDefined();
      expect(wrapper.emitted().onSelect[0]).toEqual(['breakfast']);
    })
  })

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
      expect(wrapper.find('[data-test="DishCategoryCardMainParagraph"]').text()).toContain('testContent');
    })
  })
})
