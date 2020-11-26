import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
const localVue = createLocalVue();

describe("Dropdown.vue", () => {
    let wrapper!: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = mount(Dropdown, {
            localVue
        });
    });

    it("dropdown is closed when ESC is pressed", () => {
        wrapper.setData({
            open: true
        });
        wrapper.trigger("keydown.esc");
        expect(wrapper.find(".dropdown").isVisible()).toBeFalsy();
    });
});
