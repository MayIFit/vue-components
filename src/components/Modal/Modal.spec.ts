import { mount, createLocalVue, Wrapper } from "@vue/test-utils";

import PortalVue from "portal-vue";

import Modal from "@/components/Modal/Modal.vue";
const localVue = createLocalVue();
localVue.use(PortalVue);

describe("Modal.vue", () => {
    let wrapper!: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = mount(Modal, {
            localVue
        });
    });

    it("modal is closed when ESC is pressed", () => {
        wrapper.setProps({
            show: true
        });

        const event = new KeyboardEvent("keydown", {
            code: "27"
        });
        document.dispatchEvent(event);

        const actual = wrapper.emitted().close;
        expect(actual).toBeTruthy();
        wrapper.destroy();
    });
});
