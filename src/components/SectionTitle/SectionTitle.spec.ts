import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import SectionTitle from "@/components/SectionTitle/SectionTitle.vue";
const localVue = createLocalVue();

describe("SectionTitle.vue", () => {
    let wrapper!: Wrapper<Vue>;

    it("renders description slot if it has description", () => {
        wrapper = shallowMount(SectionTitle, {
            localVue,
            slots: {
                description: '<div class="fake-msg"></div>'
            }
        });
        expect(wrapper.findAll(".fake-msg").length).toBe(1);
    });

    it("doest not render description slot if it has no description", () => {
        wrapper = shallowMount(SectionTitle, {
            localVue
        });
        expect(wrapper.findAll(".fake-msg").length).toBe(0);
    });
});
