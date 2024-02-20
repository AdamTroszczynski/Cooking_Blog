import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import SectionWithInputs from "@/components/layout/SectionWithInputs.vue";


describe('SectionWithInputs.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(SectionWithInputs, config);};

  describe('Props', () => {
    it('should render heading value based on prop.heading', () => {
      createComponent({
        props: {
          heading: 'testHeading'
        }
      });
      expect(wrapper.find('[data-test="SectionWithInputsMainHeader"]').text()).toBe('testHeading');
    })
  })

  describe('Slots', () => {
    it('should render contents in nextToHeading slot', () => {
      createComponent({
        slots: {
          nextToHeading: 'testSlot1',
        }
      });
      expect(wrapper.find('[data-test="SectionWithInputsHeaderDiv"]').text()).toContain('testSlot1')
    })
    it('should render contents in sectionBody slot', () => {
      createComponent({
        slots: {
          sectionBody: 'testSlot2'
        }
      });
      expect(wrapper.find('[data-test="SectionWithInputsBodyDiv"]').text()).toContain('testSlot2')
    })
  })
})

