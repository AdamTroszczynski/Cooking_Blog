import { expect, describe, it, vi } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import NavigationBar from '@/components/common/NavigationBar.vue';
import { createTestingPinia } from '@pinia/testing';

vi.mock('vue-router');

describe('ClassicFooter.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {
    wrapper = mount(NavigationBar, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
        stubs: {
          LinkButton: true,
          RouterLink: false,
        },
      },
      ...config,
    });
  };
  const findMenu = () => wrapper.find('[data-test="NavigationBarMenu"]');
  const findButton = () => wrapper.find('[data-test="NavigationBarButton"]');

  describe('Logic', () => {
    it('should show Menu if isMenuActive is true', async () => {
      createComponent();

      expect(findMenu().classes()).toContain('hidden');
      await findButton().trigger('click');
      expect(findMenu().classes()).not.toContain('hidden');
      expect(findMenu().classes()).toContain('block');
    });
  });
});
