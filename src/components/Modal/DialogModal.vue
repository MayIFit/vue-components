<template>
    <modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close"
    >
        <div class="px-6 py-4">
            <div class="text-lg">
                <slot name="title"> </slot>
            </div>

            <div class="mt-4">
                <slot name="content"> </slot>
            </div>
        </div>

        <div class="px-6 py-4 bg-gray-100 text-right">
            <slot name="footer"> </slot>
        </div>
    </modal>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

import Modal from "@/components/Modal/Modal.vue";

@Component({
    components: {
        Modal
    }
})
export default class DialogModal extends Vue {
    @Prop({
        type: Boolean,
        default: false
    })
    show!: boolean;

    @Prop({
        type: Boolean,
        default: true
    })
    closeable!: boolean;

    @Prop({
        type: String,
        default: "2xl"
    })
    maxWidth!: string;

    @Emit("close")
    close(): boolean {
        if (this.closeable) {
            return true;
        }

        return false;
    }
}
</script>
