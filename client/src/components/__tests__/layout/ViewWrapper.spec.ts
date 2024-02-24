import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import ViewWrapper from '@/components/layout/ViewWrapper.vue';

describe('ViewWrapper.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(ViewWrapper, config); };
  const findMainDiv = () => wrapper.find('[data-test="ViewWrapperMainDiv"]');

  describe('Slots', () => {
    it('should render contents in default slot', () => {
      createComponent({
        slots: {
          default: 'testSlot'
        }
      });

      expect(findMainDiv().text()).toContain('testSlot');
    });
  });
});

