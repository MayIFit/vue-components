<template>
    <label class="block font-medium text-sm text-gray-700 mt-2">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot></slot></span>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseLabel extends Vue {
    @Prop({ type: String, default: "" }) value!: string;
}
</script>
