<template>
    <div>
        <button
            v-if="type == 'button'"
            :class="classes"
            class="block pl-3 pr-4 py-2 border-l-4 w-full text-left text-base font-medium transition duration-150 ease-in-out focus:outline-none"
        >
            <slot></slot>
        </button>

        <inertia-link :href="href" :class="classes" v-else>
            <slot></slot>
        </inertia-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResponsiveNavLink extends Vue {
    @Prop({ type: String, default: "#" }) href!: string;
    @Prop({ type: String, default: "" }) type!: string;
    @Prop({ type: Boolean, default: false }) active!: boolean;

    get classes(): object {
        return {
            "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700": this
                .active,
            "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300": !this
                .active
        };
    }
}
</script>
