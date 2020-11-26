<template>
    <div v-if="hasErrors">
        <div class="font-medium text-red-600">
            <slot></slot>
        </div>

        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            <li v-for="(error, key) in flattenedErrors" :key="key">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Validation extends Vue {
    @Prop({
        type: Object,
        default() {
            return {};
        }
    })
    errorBag!: object;

    get hasErrors(): boolean {
        return Object.keys(this.errorBag).length > 0;
    }

    get flattenedErrors(): string[] {
        return Object.keys(this.errorBag).reduce(
            (carry, key) => carry.concat(this.errorBag[key.toString()]),
            []
        );
    }
}
</script>
