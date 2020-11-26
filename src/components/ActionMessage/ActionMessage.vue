<template>
    <div>
        <transition
            leave-active-class="transition ease-in duration-1000"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-show="on" class="text-sm text-gray-600">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ActionMessage extends Vue {
    @Prop({ type: Boolean, default: false }) on!: boolean;
}
</script>
