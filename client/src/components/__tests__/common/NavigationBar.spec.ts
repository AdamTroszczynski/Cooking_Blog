import { expect, describe, it, vi, type Mock, beforeEach } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";
import NavigationBar from "@/components/common/NavigationBar.vue";
import { createTestingPinia } from "@pinia/testing";

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

  describe("Logic", () => {
    it('should show Menu if isMenuActive is true', async () => {
      createComponent();
      expect(wrapper.find('[data-test="NavigationBarMenu"]').classes()).toContain('hidden');
      await wrapper.find('[data-test="NavigationBarButton"]').trigger('click');
      expect(wrapper.find('[data-test="NavigationBarMenu"]').classes()).not.toContain('hidden');
      expect(wrapper.find('[data-test="NavigationBarMenu"]').classes()).toContain('block');
    });
  });
});
