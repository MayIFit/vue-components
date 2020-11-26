<template>
    <div class="my-4 flex flex-wrap">
        <template v-for="(link, key) in links">
            <div v-if="link.url === null" :key="key"></div>
            <inertia-link
                v-else
                :key="key"
                class="leading-relaxed cursor-pointer mx-2 text-md"
                :class="activeClasses"
                :href="link.active ? '' : link.url"
                v-html="link.label"
            ></inertia-link>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Pagination extends Vue {
    @Prop({
        type: Array,
        default() {
            return [];
        }
    })
    links!: string[];

    @Prop({
        type: Array,
        default() {
            return [
                "text-blue-600",
                "hover:text-blue-600",
                "cursor-not-allowed"
            ];
        }
    })
    activeClasses!: string[];
}
</script>
