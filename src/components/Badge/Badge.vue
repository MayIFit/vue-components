<template>
    <span
        class="bg-opacity-0 md:bg-opacity-100 rounded-lg items-center sm:bg-none p-1"
        :class="classes"
    >
        <span :class="{ dot: hasdot }" class="inline-block md:hidden"> </span>
        <span
            class="relative py-1 pr-3 pl-8 items-center text-lg bold hidden md:inline-flex"
            :class="{ dotted: hasdot }"
        >
            <slot name="description"></slot>
        </span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Badge extends Vue {
    @Prop({
        type: String,
        default: ""
    })
    classes!: string;

    @Prop({
        type: Boolean,
        default: false
    })
    hasdot!: boolean;
}
</script>

<style scoped>
.dotted::before {
    left: 12px;
    height: 8px;
    width: 8px;
    margin-top: 0;
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    border-radius: 50%;
    background: currentColor;
}

.dot {
    position: relative;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background: currentColor;
}
</style>
