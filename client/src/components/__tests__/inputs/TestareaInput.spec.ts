import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import { nextTick } from "vue";
import TextareaInput from "@/components/inputs/TextareaInput.vue";

describe('TextareaInput.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(TextareaInput, config)};

  describe('Props', () => {
    it('should set name based on prop.name', () => {
      createComponent({
        props: {
          name: 'testName'
        }
      });
      expect(wrapper.find('[data-test="TextareaInputMainTextarea"]').attributes()['name']).toBe('testName');
    });

    it('should set placeholder based on prop.placeholder', () => {
      createComponent({
        props: {
          name: 'testName',
          placeholder: 'testPlaceholder'
        }
      });
      expect(wrapper.find('[data-test="TextareaInputMainTextarea"]').attributes()['placeholder']).toBe('testPlaceholder');
    });

    it('should set value based on prop.initValue', async () => {
      createComponent({
        props: {
          name: 'testName',
          initValue: 'testValue'
        }
      });
      await nextTick();
      expect(wrapper.find('[data-test="TextareaInputMainTextarea"]').element.value).toBe('testValue');
    })
  })
})
