<template>
    <inertia-link
        :href="href"
        class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none"
        :class="classes"
    >
        <slot></slot>
    </inertia-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavLink extends Vue {
    @Prop({ type: String, default: "#" }) href!: string;
    @Prop({ type: Boolean, default: false }) active!: boolean;

    get classes(): object {
        return {
            "border-indigo-400 text-gray-900  focus:border-indigo-700 transition duration-150 ease-in-out": this
                .active,
            "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300": !this
                .active
        };
    }
}
</script>
