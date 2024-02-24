import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import SectionWithInputs from '@/components/layout/SectionWithInputs.vue';

describe('SectionWithInputs.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(SectionWithInputs, config); };
  const findMainHeader = () => wrapper.find('[data-test="SectionWithInputsMainHeader"]');
  const findHeaderDiv = () => wrapper.find('[data-test="SectionWithInputsHeaderDiv"]');
  const findBodyDiv = () => wrapper.find('[data-test="SectionWithInputsBodyDiv"]');

  describe('Props', () => {
    it('should render heading value based on prop.heading', () => {
      createComponent({
        props: {
          heading: 'testHeading'
        }
      });

      expect(findMainHeader().text()).toBe('testHeading');
    });
  });

  describe('Slots', () => {
    it('should render contents in nextToHeading slot', () => {
      createComponent({
        slots: {
          nextToHeading: 'testSlot1',
        }
      });

      expect(findHeaderDiv().text()).toContain('testSlot1');
    });

    it('should render contents in sectionBody slot', () => {
      createComponent({
        slots: {
          sectionBody: 'testSlot2'
        }
      });

      expect(findBodyDiv().text()).toContain('testSlot2');
    });
  });
});

