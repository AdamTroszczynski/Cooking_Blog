import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import ViewWrapper from "@/components/layout/ViewWrapper.vue";

describe('ViewWrapper.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(ViewWrapper, config);};

  describe('Slots', () => {
    it('should render contents in default slot', () => {
      createComponent({
        slots: {
          default: 'testSlot'
        }
      });
      expect(wrapper.find('[data-test="ViewWrapperMainDiv"]').text()).toContain('testSlot');
    })
  })

})

