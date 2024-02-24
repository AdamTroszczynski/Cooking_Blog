import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import SignInUpTwoColumnsWrapper from '@/components/layout/SignInUpTwoColumnsWrapper.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';

describe('SignInUpTwoColumnsWrapper.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(SignInUpTwoColumnsWrapper, config); };
  const findButton = () => wrapper.find('[data-test="SignInUpTwoColumnsWrapperActionButton"]');
  const findHeader = () => wrapper.find('[data-test="SignInUpTwoColumnsWrapperHeading"]');
  const findForm = () => wrapper.find('[data-test="SignInUpTwoColumnsWrapperForm"]');
  const findActionButton = () => wrapper.findComponent(ActionButton);

  describe('Props', () => {
    it('should render value in ActionButton based on prop.isRegisterLayout', async () => {
      createComponent({
        props: {
          isRegisterLayout: true
        }
      });

      expect(findButton().text()).toContain('Create Account');
      expect(findButton().text()).not.toContain('Login');
      await wrapper.setProps({ isRegisterLayout: false });
      expect(findButton().text()).not.toContain('Create Account');
      expect(findButton().text()).toContain('Login');
    });
  });

  describe('Emits', () => {
    it('should emit onSubmit if ActionButton is clicked', async () => {
      createComponent();

      await findActionButton().trigger('click');
      expect(wrapper.emitted().onSubmit).toBeDefined();
    });
  });

  describe('Slots', () => {
    it('shoud render contents in heading slot', () => {
      createComponent({
        slots: {
          heading: 'testContent'
        }
      });

      expect(findHeader().text()).toContain('testContent');
    });

    it('shoud render contents in form slot', () => {
      createComponent({
        slots: {
          form: 'testContent'
        }
      });

      expect(findForm().text()).toContain('testContent');
    });
  });
});
