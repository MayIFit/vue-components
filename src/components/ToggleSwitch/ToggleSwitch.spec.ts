import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch.vue";
const localVue = createLocalVue();

describe("ToggleSwitch.vue", () => {
    let wrapper!: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = mount(ToggleSwitch, {
            localVue
        });
    });

    it("fires event when clicked", () => {
        wrapper.find(".toggle").trigger("click");
        const actual = wrapper.emitted().input;
        expect(actual).toBeTruthy();
    });
});
