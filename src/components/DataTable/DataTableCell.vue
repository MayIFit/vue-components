<template>
    <div
        class="py-3 px-2 border-none bg-white shadow-inner items-center"
        :class="{
            'hidden sm:table-cell': hideOnSmall,
            'table-cell': !hideOnSmall && !hideOnMedium,
            'hidden md:table-cell': hideOnMedium
        }"
    >
        <slot name="content"></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DataTableCell extends Vue {
    @Prop({
        type: Boolean,
        default: false
    })
    hideOnSmall!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    hideOnMedium!: boolean;
}
</script>
