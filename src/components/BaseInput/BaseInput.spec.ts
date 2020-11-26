import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput/BaseInput.vue";
const localVue = createLocalVue();

describe("BaseInput.vue", () => {
    let wrapper!: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = mount(BaseInput, {
            localVue
        });
    });

    it("fires event when typed into", () => {
        wrapper.find(".form-input").setValue("test");
        const actual = wrapper.emitted().input?.[0]?.[0];
        expect(actual).toBeTruthy();
        expect(actual).toEqual("test");
    });
});
