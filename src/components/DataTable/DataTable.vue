<template>
    <div class="w-full table border-separate" style="border-spacing: 0 8px;">
        <div class="table-row">
            <slot name="header"></slot>
        </div>

        <slot name="body"></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DataTable extends Vue {}
</script>

<style scoped>
.table-row > :first-child {
    @apply rounded-l-md;
}
.table-row > :last-child {
    @apply rounded-r-md;
}
</style>
