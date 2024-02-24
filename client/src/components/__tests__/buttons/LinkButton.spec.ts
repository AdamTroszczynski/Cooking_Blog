import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import LinkButton from '@/components/buttons/LinkButton.vue';
import { RouterLink } from 'vue-router';

describe('LinkButton.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {
    wrapper = mount(LinkButton, {
      global: {
        stubs: ['RouterLink'],
      },
      ...config,
    })
  };
  const findRouterLink = () => wrapper.findComponent(RouterLink);
  const findLink = () => wrapper.find('[data-test="LinkButtonMainLink"]');
  const findButton = () => wrapper.find('[data-test="LinkButtonMainButton"]');

  describe('Props', () => {
    it('should render only LinkButtonMainLink if prop.isNormalLink is true', async () => {
      createComponent({
        props: {
          isNormalLink: true
        }
      });

      expect(findLink().exists()).toBe(true);
      expect(findButton().exists()).toBe(false);
      expect(findRouterLink().exists()).toBe(false);
    });

    it('should render only LinkButtonMainButton if prop.isButton is true', () => {
      createComponent({
        props: {
          isButton: true
        }
      });

      expect(findButton().exists()).toBe(true);
      expect(findLink().exists()).toBe(false);
      expect(findRouterLink().exists()).toBe(false);
    });

    it('should render only RouterLink if prop.isNormalLink and prop.isButton are false', () => {
      createComponent();

      expect(findRouterLink().exists()).toBe(true);
      expect(findButton().exists()).toBe(false);
      expect(findLink().exists()).toBe(false);
    });

    it('should set goTo based on prop.goTo', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
        }
      });

      expect(findRouterLink().props()['to']).toBe('testPath');
      await wrapper.setProps({ isNormalLink: true });
      expect(findLink().attributes()['href']).toBe('testPath');
    });
  });

  describe('Emits', () => {
    it('should emit clickAction if button is clicked', async () => {
      createComponent({
        props: {
          isButton: true
        }
      });

      await findButton().trigger('click');
      expect(wrapper.emitted().clickAction).toBeDefined();
    });
  });

  describe('Slots', () => {
    it('should render contents in default slot', async () => {
      createComponent({
        props: {
          isNormalLink: true,
          isButtonLink: false
        },
        slots: {
          default: 'testContent'
        }
      });

      expect(findLink().text()).toContain('testContent');
      await wrapper.setProps({ isNormalLink: false, isButton: true });
      expect(findButton().text()).toContain('testContent');
    });
  });
});
