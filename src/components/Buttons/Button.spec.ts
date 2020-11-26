import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Button from "@/components/Buttons/Button";
const localVue = createLocalVue();

describe("Button.vue", () => {
    let wrapper!: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = mount(Button, {
            localVue
        });
    });

    it("fires event when clicked", () => {
        wrapper.findComponent(Button).trigger("click");
        const actual = wrapper.emitted().click;
        expect(actual).toBeTruthy();
    });

    it("does not fire click event when disabled", () => {
        wrapper.setProps({
            disabled: true
        });
        wrapper.findComponent(Button).trigger("click");
        const actual = wrapper.emitted().click;
        expect(actual).toBeUndefined();
    });
});
