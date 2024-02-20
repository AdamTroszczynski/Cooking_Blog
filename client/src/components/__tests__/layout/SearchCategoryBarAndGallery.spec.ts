import {expect, describe, it} from "vitest";
import {VueWrapper, mount} from "@vue/test-utils";
import SearchCategoryBarAndGallery from "@/components/layout/SearchCategoryBarAndGallery.vue";


describe('SearchCategoryBarAndGallery.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {
    wrapper = mount(SearchCategoryBarAndGallery,{
      global: {
        stubs: {
          ViewWrapper: false,
          NavigationBar: true,
          DishCategories: true,
          ClassicInput: true,
          ClassicFooter: true
        }
      },
      ...config,
  })};

  describe('Slots', () => {
    it('should render contents in heading slot', () => {
      createComponent({
        slots: {
          heading: 'testContent'
        }
      });
      expect(wrapper.find('[data-test="SearchCategoryBarAndGalleryHeader"]').text()).toContain('testContent');
    });

    it('should render contents in content slot', () => {
      createComponent({
        slots: {
          content: 'testContent'
        }
      });
      expect(wrapper.find('[data-test="SearchCategoryBarAndGalleryContentSection"]').text()).toContain('testContent');
    })
  });
})
