<template>
    <label class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
            <!-- input -->
            <input
                type="checkbox"
                class="toggle hidden"
                :checked="value"
                :name="name"
                @change="$emit('input', $event.target.checked)"
                ref="input"
            />
            <!-- line -->
            <div
                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <!-- dot -->
            <div
                class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
        </div>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component
export default class ToggleSwitch extends Vue {
    @Prop({ type: String, default: "" }) value!: string;
    @Prop({ type: String, default: "" }) label!: string;
    @Prop({ type: String, default: "toggle" }) name!: string;
    @Ref("input") input!: HTMLInputElement;

    focus() {
        this.input.focus();
    }
}
</script>

<style>
.toggle__dot {
    top: -0.25rem;
    left: -0.25rem;
    transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: #48bb78;
}
</style>
