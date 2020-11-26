<template>
    <input
        class="form-input rounded-md shadow-sm"
        :value="value"
        @input="onInput($event.target.value)"
        ref="input"
        :disabled="disabled"
        :type="type"
        :class="{ 'bg-gray-100': disabled }"
    />
</template>

<script lang="ts">
import { Component, Prop, Ref, Emit, Vue } from "vue-property-decorator";

@Component
export default class BaseInput extends Vue {
    @Prop({
        type: String,
        default: ""
    })
    value!: string;

    @Prop({
        type: String,
        default: "string"
    })
    type!: string;

    @Prop({
        type: Boolean,
        default: false
    })
    disabled!: boolean;

    @Ref("input") input!: HTMLInputElement;

    focus(): void {
        this.input.focus();
    }

    @Emit("input")
    onInput(input: string): string {
        return input;
    }
}
</script>
