import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import BaseForm from "@/components/BaseForm/BaseForm.vue";
const localVue = createLocalVue();

describe("BaseForm.vue", () => {
    let wrapper!: Wrapper<Vue>;

    it("renders action slot if it has actions", () => {
        wrapper = shallowMount(BaseForm, {
            localVue,
            slots: {
                actions: '<div class="fake-msg"></div>'
            }
        });
        expect(wrapper.findAll(".fake-msg").length).toBe(1);
    });

    it("doest not render action slot if it has no actions", () => {
        wrapper = shallowMount(BaseForm, {
            localVue
        });
        expect(wrapper.findAll(".fake-msg").length).toBe(0);
    });
});
