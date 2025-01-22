
export const code1 = `
<template>
    <LcSelect v-model:value="value" :options></LcSelect>
</template>
<script setup>
    const value = ref('song1')
    const options = [
        {
            label: 'Drive My Car',
            value: 'song1'
        },
        {
            label: 'Norwegian Wood',
            value: 'song2'
        },
    ];
</script>
`;