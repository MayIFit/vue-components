<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <section-title>
            <template #title><slot name="title"></slot></template>
            <template #description><slot name="description"></slot></template>
        </section-title>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <form @submit.prevent="onClick">
                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <slot name="form"></slot>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"
                        v-if="hasActions"
                    >
                        <slot name="actions"></slot>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import SectionTitle from "@/components/SectionTitle/SectionTitle.vue";

@Component({
    components: {
        SectionTitle
    }
})
export default class BaseForm extends Vue {
    get hasActions() {
        return !!this.$slots.actions;
    }

    @Emit("submitted")
    onClick() {
        return true;
    }
}
</script>
