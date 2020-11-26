import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Trashed from "@/components/Trashed/Trashed.vue";
import WarningButton from "@/components/Buttons/WarningButton";
const localVue = createLocalVue();

describe("Trashed.vue", () => {
    let wrapper!: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = mount(Trashed, {
            localVue
        });
    });

    it("fires event when clicked", () => {
        wrapper.findComponent(WarningButton).trigger("click");
        const actual = wrapper.emitted().restore;
        expect(actual).toBeTruthy();
    });
});
