import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import ClassicInput from '@/components/inputs/ClassicInput.vue';
import UserIcon from '@/components/icons/inputs/UserIcon.vue';
import EmailIcon from '@/components/icons/inputs/EmailIcon.vue';
import LockIcon from '@/components/icons/inputs/LockIcon.vue';
import { nextTick } from 'vue';

describe('ClassicInput.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(ClassicInput, config); };
  const findInput = () => wrapper.find('[data-test="ClassicInputMainInput"]');
  const findIcon = () => wrapper.find('[data-test="ClassicInputIconDiv"]');

  describe('Props', () => {
    it('should set name to input based on prop.name', () => {
      createComponent({
        props: {
          name: 'testName',
        }
      });

      expect(findInput().attributes()['name']).toBe('testName');
    });

    it('should set placeholder to input based on prop.placeholder', () => {
      createComponent({
        props: {
          name: 'testName',
          placeholder: 'testPlaceholder',
        }
      });

      expect(findInput().attributes()['placeholder']).toBe('testPlaceholder');
    });

    it('should render type of input based on prop.isPassword', async () => {
      createComponent({
        props: {
          name: 'testName',
          isPassword: true
        }
      });

      expect(findInput().attributes()['type']).toBe('password');
      await wrapper.setProps({ isPassword: false });
      expect(findInput().attributes()['type']).toBe('text');
    });

    it('should set input classes based on prop.noIcon', async () => {
      createComponent({
        props: {
          name: 'testName',
          noIcon: true,
        }
      });

      expect(findInput().classes()).toContain('pr-[22px]');
      expect(findInput().classes()).not.toContain('pr-[65px]');
      await wrapper.setProps({ noIcon: false });
      expect(findInput().classes()).toContain('pr-[65px]');
      expect(findInput().classes()).not.toContain('pr-[22px]');
    });

    it('should set input value based on prop.initValue', async () => {
      createComponent({
        props: {
          name: 'testName',
          initValue: 'testValue'
        }
      });

      await nextTick();
      expect(findInput().element.value).toBe('testValue');
    });

    it('should render user icon if prop.iconType is not exists', () => {
      createComponent({
        props: {
          name: 'testName'
        }
      });

      expect(findIcon().findComponent(UserIcon).exists()).toBe(true);
    });

    it('should render icon based on prop.iconType', async () => {
      createComponent({
        props: {
          name: 'testName',
          iconType: 'user'
        }
      });

      expect(findIcon().findComponent(UserIcon).exists()).toBe(true);
      await wrapper.setProps({ iconType: 'email' });
      expect(findIcon().findComponent(EmailIcon).exists()).toBe(true);
      await wrapper.setProps({ iconType: 'lock' });
      expect(findIcon().findComponent(LockIcon).exists()).toBe(true);
    });
  });
});
