<template>
    <div>
        <h1 class="text-4xl font-bold tracking-wide">Pipelines Visualization</h1>
        <p class="pt-2 italic">Nuxt 3 + PrimeVue + Tailwind</p>
        <div class="container mt-8 pt-10 pb-0 mx-auto border" :class="{ 'dark bg-gray-700': darkMode }">
            <h3 class="text-3xl font-thin uppercase tracking-tighter dark:text-white">Timeline</h3>
            <div class="container flex justify-center align-center mt-6 mb-8">
                <Button class="" size="small" @click="addEvent" label="Add Event"
                    icon="pi pi-plus" />
                <ToggleButton v-model="darkMode" class="mx-4" on-icon="pi pi-sun" off-icon="pi pi-moon"
                    on-label="Light Mode" off-label="Dark Mode" />
            </div>
            <Timeline :value="timelineEvents" align="left">
                <template #marker="slotProps">
                    <span
                        class="flex w-[2rem] h-[2rem] items-center justify-center text-white rounded-full z-20 shadow-sm"
                        :class="slotProps.item.color">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>
                <template #opposite="slotProps">
                    <small class="text-surface-600 dark:text-surface-0/70">{{ slotProps.item.date }}</small>
                </template>
                <template #content="slotProps">
                    <p class="font-mono bg-zinc-200 inline p-1 rounded">someFunction();</p>
                    <p class="text-black dark:text-white">{{ slotProps.item.status }}</p>
                </template>
            </Timeline>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Pipelines Visualization',
    meta: [
        { name: 'description', content: 'Pipelines Visualization with Nuxt 3, PrimeVue, and Tailwind' }
    ]
});

let darkMode = ref(false);

let timelineEvents = ref(
    [
        { status: 'Queued', date: '2021-01-01', icon: "pi pi-spin pi-spinner", color: 'bg-yellow-500' },
        { status: 'Running', date: '2021-01-02', icon: "pi pi-spin pi-cog", color: 'bg-blue-500' },
        { status: 'Successful', date: '2021-01-03', icon: "pi pi-check", color: 'bg-green-500' },
        { status: 'Failed', date: '2021-01-04', icon: "pi pi-times", color: 'bg-red-500' }
    ]);

function addEvent() {
    timelineEvents.value.push({
        status: 'New Event',
        date: new Date().toISOString().split('T')[0],
        icon: "pi pi-star",
        color: 'bg-purple-500'
    });
}
</script>
