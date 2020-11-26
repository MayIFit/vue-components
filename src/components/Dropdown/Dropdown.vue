<template>
    <div class="relative">
        <div @click="onClick">
            <slot name="trigger"></slot>
        </div>

        <!-- Full Screen Dropdown Overlay -->
        <div
            v-show="open"
            class="fixed inset-0 z-40"
            @click="open = false"
        ></div>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div
                v-show="open"
                class="dropdown absolute z-50 mt-2 rounded-md shadow-lg"
                :class="[widthClass, alignmentClasses]"
                style="display: none;"
                @click="open = false"
            >
                <div class="rounded-md shadow-xs" :class="contentClasses">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

const ESCAPE = 27;

@Component
export default class Dropdown extends Vue {
    @Prop({
        type: String,
        default: "right"
    })
    align!: string;

    @Prop({
        type: String,
        default: "48"
    })
    width!: string;

    @Prop({
        type: Array,
        default() {
            return ["py-1", "bg-white"];
        }
    })
    contentClasses!: string[];

    open = false;

    get widthClass(): string {
        const widthClasses: { [key: string]: string } = {
            48: "w-48"
        };

        return widthClasses[this.width.toString()];
    }

    get alignMentClasses(): string {
        if (this.align === "left") {
            return "origin-top-left left-0";
        } else if (this.align === "right") {
            return "origin-top-right right-0";
        } else {
            return "origin-top";
        }
    }

    onClick(): void {
        this.open = !this.open;
    }

    created(): void {
        const closeOnEscape = (e: KeyboardEvent) => {
            if (parseInt(e.code) === ESCAPE && this.open) {
                this.open = false;
            }
        };
        this.$once("hook:destroyed", () => {
            document.removeEventListener("keydown", closeOnEscape);
        });
        document.addEventListener("keydown", closeOnEscape);
    }
}
</script>
