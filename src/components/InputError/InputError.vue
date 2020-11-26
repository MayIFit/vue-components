<template>
    <div v-show="message">
        <p class="text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class InputError extends Vue {
    @Prop({
        type: String,
        default: ""
    })
    message!: string;
}
</script>
