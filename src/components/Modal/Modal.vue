<template>
    <portal to="modal">
        <transition leave-active-class="duration-200">
            <div
                v-show="show"
                class="modal fixed top-0 inset-x-0 px-4 pt-6 sm:px-0 sm:flex sm:items-top sm:justify-center"
            >
                <transition
                    enter-active-class="ease-out duration-300"
                    enter-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="ease-in duration-200"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div
                        v-show="show"
                        class="fixed inset-0 transform transition-all"
                        @click="close"
                    >
                        <div
                            class="absolute inset-0 bg-gray-500 opacity-75"
                        ></div>
                    </div>
                </transition>

                <transition
                    enter-active-class="ease-out duration-300"
                    enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-active-class="ease-in duration-200"
                    leave-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        v-show="show"
                        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full"
                        :class="maxWidthClass"
                    >
                        <slot></slot>
                    </div>
                </transition>
            </div>
        </transition>
    </portal>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue } from "vue-property-decorator";

const ESCAPE = 27;

@Component
export default class Modal extends Vue {
    @Prop({
        type: Boolean,
        default: false
    })
    show!: boolean;

    @Prop({
        type: Boolean,
        default: true
    })
    closeable!: boolean;

    @Prop({
        type: String,
        default: "2xl"
    })
    maxWidth!: string;

    @Watch("show", {
        immediate: true
    })
    onPropertyChanged(value: string) {
        if (value) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    @Emit("close")
    close(): boolean {
        if (this.closeable) {
            return true;
        }
        return false;
    }

    get maxWidthClass(): string {
        const widthClasses: { [key: string]: string } = {
            sm: "sm:max-w-sm",
            md: "sm:max-w-md",
            lg: "sm:max-w-lg",
            xl: "sm:max-w-xl",
            "2xl": "sm:max-w-2xl"
        };

        return widthClasses[this.maxWidth.toString()];
    }

    created(): void {
        const closeOnEscape = (e: KeyboardEvent) => {
            if (parseInt(e.code) === ESCAPE && this.show) {
                this.close();
            }
        };
        document.addEventListener("keydown", closeOnEscape);
        this.$once("hook:destroyed", () => {
            document.removeEventListener("keydown", closeOnEscape);
        });
    }
}
</script>
