<template>
    <div class="bg-gray-100 relative">
        <nav
            class="bg-white border-b border-gray-100 shadow fixed inset-x-0 top-0"
        >
            <!-- Primary Navigation Menu -->
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Hamburger -->
                        <div class="-ml-2 flex items-center xl:hidden">
                            <button
                                @click="sideBarOpen = !sideBarOpen"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{
                                            hidden: sideBarOpen,
                                            'inline-flex': !sideBarOpen
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !sideBarOpen,
                                            'inline-flex': sideBarOpen
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center">
                            <inertia-link :href="route('dashboard')">
                            </inertia-link>
                        </div>
                    </div>
                    <!-- Settings Dropdown -->
                    <div class="flex items-center ml-6">
                        <div class="ml-3 relative">
                            <slot name="top-right-dropdown"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="flex">
            <slot
                name="sidebar"
                @close="this.sideBarOpen = false"
                @open="this.sideBarOpen = true"
            ></slot>
            <main
                class="mt-16 xl:ml-64 flex-1 min-h-screen bg-gray-200 dark:bg-gray-900 overflow-y-auto transition duration-500 ease-in-out"
            >
                <div class="container mx-auto p-4">
                    <slot></slot>
                </div>
            </main>
        </div>

        <!-- Modal Portal -->
        <portal-target name="modal" multiple> </portal-target>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
    protected sideBarOpen = false;

    get path(): string {
        return window.location.pathname;
    }
}
</script>
