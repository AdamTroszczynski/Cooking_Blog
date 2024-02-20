import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import SignInUpTwoColumnsWrapper from "@/components/layout/SignInUpTwoColumnsWrapper.vue";
import ActionButton from "@/components/buttons/ActionButton.vue";

describe('SignInUpTwoColumnsWrapper.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(SignInUpTwoColumnsWrapper, config);};

  describe('Props', () => {
    it('should render value in ActionButton based on prop.isRegisterLayout', async () => {
      createComponent({
        props: {
          isRegisterLayout: true
        }
      });
      expect(wrapper.find('[data-test="SignInUpTwoColumnsWrapperActionButton"]').text()).toContain('Create Account')
      expect(wrapper.find('[data-test="SignInUpTwoColumnsWrapperActionButton"]').text()).not.toContain('Login')
      await wrapper.setProps({isRegisterLayout: false});
      expect(wrapper.find('[data-test="SignInUpTwoColumnsWrapperActionButton"]').text()).not.toContain('Create Account')
      expect(wrapper.find('[data-test="SignInUpTwoColumnsWrapperActionButton"]').text()).toContain('Login')
    })
  });

  describe('Emits', () => {
    it('should emit onSubmit if ActionButton is clicked', async () =>{
      createComponent();
      await wrapper.findComponent(ActionButton).trigger('click');
      expect(wrapper.emitted().onSubmit).toBeDefined();
   })
  });

  describe('Slots', () => {
    it('shoud render contents in heading slot', () => {
      createComponent({
        slots: {
          heading: 'testContent'
        }
      });
      expect(wrapper.find('[data-test="SignInUpTwoColumnsWrapperHeading"]').text()).toContain('testContent');
    });

    it('shoud render contents in form slot', () => {
      createComponent({
        slots: {
          form: 'testContent'
        }
      });
      expect(wrapper.find('[data-test="SignInUpTwoColumnsWrapperForm"]').text()).toContain('testContent');
    })
  });
})
