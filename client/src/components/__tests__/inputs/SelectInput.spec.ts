import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import SelectInput from '@/components/inputs/SelectInput.vue';

describe('selectInput.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(SelectInput, config); };
  const findHeader = () => wrapper.find('[data-test="SelectInputHeaderDiv"]');
  const findSelectDiv = () => wrapper.find('[data-test="SelectInputSelectDiv"]');
  const findOptionsDiv = () => wrapper.findAll('[data-test="SelectInputOptionDiv"]');
  const findOptionDiv = () => wrapper.find('[data-test="SelectInputOptionDiv"]');

  describe('Props', () => {
    it('should set name based on prop.name', () => {
      createComponent({
        props: {
          name: 'testName',
        }
      });

      expect(findHeader().attributes()['name']).toBe('testName');
    });

    it('should set tabindex based on prop.tabindex', () => {
      createComponent({
        props: {
          tabindex: 0
        }
      });

      expect(findHeader().attributes()['tabindex']).toBe('0');
    });

    it('should render selected value based on prop.placeholder', () => {
      createComponent({
        props: {
          placeholder: 'testPlaceholder'
        }
      });

      expect(findSelectDiv().text()).toContain('testPlaceholder');
    });

    it('should render all option based on prop.data', async () => {
      createComponent({
        props: {
          data: ['testData1', 'testData2']
        }
      });

      await findSelectDiv().trigger('click');
      expect(findOptionsDiv()).toHaveLength(2);
    });
  });

  describe('Emits', () => {
    it('should emit event with prop.data[0] when option is clicked', async () => {
      createComponent({
        props: {
          data: ['testData1']
        }
      });

      await findSelectDiv().trigger('click');
      await findOptionDiv().trigger('click');
      expect(wrapper.emitted().input).toBeDefined();
      expect(wrapper.emitted().input[0]).toEqual(['testData1']);
    });
  });

  describe('Logic', () => {
    it('should render available options div if SelectInputSelectDiv is cliced', async () => {
      createComponent({
        props: {
          data: ['testData1']
        }
      });

      expect(findOptionDiv().exists()).toBe(false);
      await findSelectDiv().trigger('click');
      expect(findOptionDiv().exists()).toBe(true);
    });
  });
});
