<template>
    <div class="inline-block text-left">
        <dropdown>
            <template #trigger>
                <button
                    type="button"
                    class="action-open bold text-2xl"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    @click="isOpen = !isOpen"
                >
                    &#xFE19;
                </button>
            </template>

            <template #content>
                <div
                    class="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <inertia-link
                        :href="route(`${entityName}.show`, entityID)"
                        class="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                        <icon :name="'eye'" />
                        <span>{{ "action.view" }}</span>
                    </inertia-link>
                    <inertia-link
                        :href="route(`${entityName}.edit`, entityID)"
                        class="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                        <icon :name="'edit'" />
                        <span>{{ "action.edit" }}</span>
                    </inertia-link>
                    <button
                        style="text-align: inherit;"
                        type="button"
                        class="flex items-center justify-between w-full px-4 py-2 bg-red-300 hover:bg-red-600 text-white"
                        @click="deleteItem"
                    >
                        <icon :name="'trash'" />
                        <span>{{ "action.delete" }}</span>
                    </button>
                </div>
            </template>
        </dropdown>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Dropdown from "@/components/Dropdown/Dropdown.vue";

const ESCAPE = 27;

@Component({
    components: {
        Dropdown
    }
})
export default class DataTableActions extends Vue {
    @Prop({
        type: String,
        default: ""
    })
    entityName!: string;

    @Prop({
        type: [String, Number],
        default: ""
    })
    entityID!: string | number;

    private isOpen = false;
    private id = this.entityID;

    @Emit("delete")
    deleteItem(): string | number {
        return this.entityID;
    }

    @Emit("close")
    close() {
        this.isOpen = false;
        return true;
    }

    created(): void {
        const closeOnEscape = (e: KeyboardEvent) => {
            if (parseInt(e.code) === ESCAPE) {
                this.close();
            }
        };
        document.addEventListener("keydown", closeOnEscape);
        this.$once("hook:destroyed", () => {
            document.removeEventListener("keydown", closeOnEscape);
        });
    }
}
</script>
