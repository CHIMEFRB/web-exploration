<template>
    <div>
        <h1 class="text-4xl mt-8 font-bold tracking-wide">Pipelines Visualization</h1>
        <p class="pt-2 italic">Nuxt 3 + PrimeVue + Tailwind</p>
        <ToggleButton v-model="darkMode" class="m-3" on-icon="pi pi-sun" off-icon="pi pi-moon" on-label="Light Mode"
            off-label="Dark Mode" />
        <div class="container mt-8 pt-10 pb-0 mx-auto border" :class="{ 'dark bg-gray-700': darkMode }">
            <h3 class="text-3xl font-thin uppercase tracking-tighter dark:text-white">
                Timeline
            </h3>
            <div class="container flex justify-center align-center mt-6 mb-8">
                <Button class="" size="small" @click="addEvent" label="Add Event" icon="pi pi-plus" />
            </div>
            <Timeline :value="timelineEvents" align="left" class="mt-10">
                <template #marker="slotProps">
                    <span
                        class="flex w-[2rem] h-[2rem] items-center justify-center text-white rounded-full z-20 shadow-sm"
                        :class="slotProps.item.color">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>
                <template #opposite="slotProps">
                    <small class="text-surface-600 dark:text-surface-0/70">{{
                        slotProps.item.date
                        }}</small>
                </template>
                <template #content="slotProps">
                    <p class="font-mono bg-zinc-200 inline p-1 rounded">
                        someFunction();
                    </p>
                    <p class="text-black dark:text-white">{{ slotProps.item.status }}</p>
                </template>
            </Timeline>
        </div>
        <div class="container mt-8 pt-10 pb-0 mx-auto border" :class="{ 'dark bg-gray-700': darkMode }">
            <h3 class="text-3xl font-thin uppercase tracking-tighter dark:text-white">
                Tree
            </h3>
            <div class="container flex justify-center align-center mt-6 mb-8">
                <div class="card overflow-x-auto">
                    <OrganizationChart :value="treeEvents" collapsible>
                        <template #default="slotProps">
                            <div class="flex flex-col gap-2 items-center">
                                <i class="text-xl" :class="slotProps.node.data.icon"></i>
                                <p class="font-mono">{{ slotProps.node.data.function }}</p>
                                <p v-if="slotProps.node.data.status"> {{ slotProps.node.data.status }}</p>
                            </div>
                        </template>
                    </OrganizationChart>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { OrganizationChartNode } from 'primevue/organizationchart';

useHead({
    title: "Pipelines Visualization",
    meta: [
        {
            name: "description",
            content: "Pipelines Visualization with Nuxt 3, PrimeVue, and Tailwind",
        },
    ],
});

let darkMode = ref(false);

const treeEvents = ref<OrganizationChartNode>({
    key: "1",
    data: {
        function: "config_name",
        icon: "pi pi-wrench text-gray-500",
    },
    children: [
        {
            key: "1.1",
            data: {
                function: "someFunction()",
                status: "Queued",
                icon: "pi pi-spinner pi-spin text-yellow-500",
            },
            children: [
                {
                    key: "1.1.1",
                    data: {
                        function: "someFunction()",
                        status: "Running",
                        icon: "pi pi-cog pi-spin text-blue-500",
                    },
                    children: [
                        {
                            key: "1.1.1.1",
                            data: {
                                function: "someFunction()",
                                status: "Successful",
                                icon: "pi pi-check text-green-500",
                            },
                        },
                    ],
                },
                {
                    key: "1.1.1",
                    data: {
                        function: "someFunction()",
                        status: "Running",
                        icon: "pi pi-cog pi-spin text-blue-500",
                    },
                    children: [
                        {
                            key: "1.1.1.1",
                            data: {
                                function: "someFunction()",
                                status: "Failed",
                                icon: "pi pi-times text-red-500",
                            },
                            children: [
                                {
                                    key: "1.1.1.1.1", data: {
                                        function: "someFunction()",
                                        status: "Queued",
                                        icon: "pi pi-spinner pi-spin",
                                    },
                                    children: [
                                        {
                                            key: "1.1.1.1.2", data: {
                                                function: "someFunction()",
                                                status: "Running",
                                                icon: "pi pi-cog pi-spin text-blue-500",
                                            },
                                            children: [{
                                                key: "1.1.1.1.3", data: {
                                                    function: "someFunction()",
                                                    status: "Successful",
                                                    icon: "pi pi-check text-green-500",
                                                },
                                            }]
                                        }
                                    ]
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});

let timelineEvents = ref<OrganizationChartNode["data"]>([
    {
        status: "Queued",
        date: "2021-01-01",
        icon: "pi pi-spin pi-spinner",
        color: "bg-yellow-500",
    },
    {
        status: "Running",
        date: "2021-01-02",
        icon: "pi pi-spin pi-cog",
        color: "bg-blue-500",
    },
    {
        status: "Successful",
        date: "2021-01-03",
        icon: "pi pi-check",
        color: "bg-green-500",
    },
    {
        status: "Failed",
        date: "2021-01-04",
        icon: "pi pi-times",
        color: "bg-red-500",
    },
]);

function addEvent() {
    timelineEvents.value.push({
        status: "New Event",
        date: new Date().toISOString().split("T")[0],
        icon: "pi pi-star",
        color: "bg-purple-500",
    });
}
</script>
