import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import LinkButton from "@/components/buttons/LinkButton.vue";
import { RouterLink } from "vue-router";

describe('LinkButton.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {
    wrapper = mount(LinkButton,{
      global: {
        stubs: ['RouterLink'],
      },
      ...config,
  })};

  const findRouterLink = () => wrapper.findComponent(RouterLink);

  describe('Props', () => {
    it('should render only LinkButtonMainLink if prop.isNormalLink is true', async () => {
      createComponent({
        props: {
          isNormalLink: true
        }
      });
      expect(wrapper.find('[data-test="LinkButtonMainLink"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="LinkButtonMainButton"]').exists()).toBe(false);
      expect(findRouterLink().exists()).toBe(false);
    })

    it('should render only LinkButtonMainButton if prop.isButton is true', () => {
      createComponent({
        props: {
          isButton: true
        }
      });
      expect(wrapper.find('[data-test="LinkButtonMainButton"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="LinkButtonMainLink"]').exists()).toBe(false);
      expect(findRouterLink().exists()).toBe(false);
    })

    it('should render only RouterLink if prop.isNormalLink and prop.isButton are false', () => {
      createComponent();
      expect(findRouterLink().exists()).toBe(true);
      expect(wrapper.find('[data-test="LinkButtonMainButton"]').exists()).toBe(false);
      expect(wrapper.find('[data-test="LinkButtonMainLink"]').exists()).toBe(false);
    })

    it('should set goTo based on prop.goTo', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
        }
      });
      expect(findRouterLink().props()['to']).toBe('testPath');
      await wrapper.setProps({isNormalLink: true});
      expect(wrapper.find('[data-test="LinkButtonMainLink"]').attributes()['href']).toBe('testPath');
    })
  });

  describe('Emits', () => {
    it('should emit clickAction if button is clicked', async () => {
      createComponent({
        props: {
          isButton: true
        }
      });
      await wrapper.find('[data-test="LinkButtonMainButton"]').trigger('click');
      expect(wrapper.emitted().clickAction).toBeDefined();
    })
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
      expect(wrapper.find('[data-test="LinkButtonMainLink"]').text()).toContain('testContent');
      await wrapper.setProps({isNormalLink: false, isButton: true});
      expect(wrapper.find('[data-test="LinkButtonMainButton"]').text()).toContain('testContent');
    })
  })
})
