<template>
    <div
        class="p-4 bg-yellow-400 rounded flex items-center justify-between max-w-3xl"
    >
        <div class="flex items-center">
            <div class="text-sm font-medium text-yellow-800">
                <slot />
            </div>
        </div>
        <warning-button :classlist="'trashed'" tabindex="-1" @click="onClick">
            Restore
        </warning-button>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import WarningButton from "@/components/Buttons/WarningButton";

@Component({
    components: {
        WarningButton
    }
})
export default class Trashed extends Vue {
    @Emit("restore")
    onClick(): boolean {
        return true;
    }
}
</script>
