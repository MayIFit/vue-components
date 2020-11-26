import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";

@Component
export default class Button extends Vue {
    @Prop({
        type: String,
        default: "submit"
    })
    type!: string;

    @Prop({
        type: Boolean,
        default: false
    })
    disabled!: boolean;

    @Prop({
        type: String,
        default: ""
    })
    classlist!: string;

    protected priorityClasses =
        "text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 focus:border-gray-900 focus:shadow-outline-gray";

    onClick() {
        if (!this.disabled) {
            return this.$emit("click");
        }
    }

    render(createElement: CreateElement): VNode {
        return createElement(
            "button",
            {
                attrs: {
                    type: this.type,
                    disabled: this.disabled,
                    class: [
                        this.priorityClasses,
                        this.classlist,
                        this.disabled ? "cursor-not-allowed" : "",
                        "inline-flex items-center px-4 py-2 rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none transition ease-in-out duration-150"
                    ]
                },
                on: {
                    click: () => {
                        this.onClick();
                    }
                }
            },
            this.$slots.default
        );
    }
}
