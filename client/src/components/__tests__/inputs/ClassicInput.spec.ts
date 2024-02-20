import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import ClassicInput from "@/components/inputs/ClassicInput.vue";
import UserIcon from "@/components/icons/inputs/UserIcon.vue";
import EmailIcon from "@/components/icons/inputs/EmailIcon.vue";
import LockIcon from "@/components/icons/inputs/LockIcon.vue";
import { nextTick } from "vue";

describe('ClassicInput.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {wrapper = mount(ClassicInput, config);};

  describe('Props', () => {
    it('should set name to input based on prop.name', () => {
      createComponent({
        props: {
          name: 'testName',
        }
      });
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').attributes()['name']).toBe('testName');
    })

    it('should set placeholder to input based on prop.placeholder', () => {
      createComponent({
        props: {
          name: 'testName',
          placeholder: 'testPlaceholder',
        }
      });
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').attributes()['placeholder']).toBe('testPlaceholder');
    })

    it('should render type of input based on prop.isPassword', async () => {
      createComponent({
        props: {
          name: 'testName',
          isPassword: true
        }
      });
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').attributes()['type']).toBe('password');
      await wrapper.setProps({isPassword: false});
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').attributes()['type']).toBe('text');
    })

    it('should set input classes based on prop.noIcon', async () => {
      createComponent({
        props: {
          name: 'testName',
          noIcon: true,
        }
      });
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').classes()).toContain('pr-[22px]');
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').classes()).not.toContain('pr-[65px]');
      await wrapper.setProps({noIcon: false});
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').classes()).toContain('pr-[65px]');
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').classes()).not.toContain('pr-[22px]');
    })

    it('should set input value based on prop.initValue', async () => {
      createComponent({
        props: {
          name: 'testName',
          initValue: 'testValue'
        }
      });
      await nextTick();
      expect(wrapper.find('[data-test="ClassicInputMainInput"]').element.value).toBe('testValue');
    })

    it('should render user icon if prop.iconType is not exists', () => {
      createComponent({
        props: {
          name: 'testName'
        }
      });
      expect(wrapper.find('[data-test="ClassicInputIconDiv"]').findComponent(UserIcon).exists()).toBe(true);
    })

    it('should render icon based on prop.iconType', async() => {
      createComponent({
        props: {
          name: 'testName',
          iconType: 'user'
        }
      });
      expect(wrapper.find('[data-test="ClassicInputIconDiv"]').findComponent(UserIcon).exists()).toBe(true);
      await wrapper.setProps({iconType: 'email'});
      expect(wrapper.find('[data-test="ClassicInputIconDiv"]').findComponent(EmailIcon).exists()).toBe(true);
      await wrapper.setProps({iconType: 'lock'});
      expect(wrapper.find('[data-test="ClassicInputIconDiv"]').findComponent(LockIcon).exists()).toBe(true);
    })
  })
  })
