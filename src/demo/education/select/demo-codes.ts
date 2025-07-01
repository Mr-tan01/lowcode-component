export const code1 = `
<template>
    <LcSelect v-model:value="value" :options></LcSelect>
     <LcSelect v-model:value="value" :options gradient></LcSelect>
</template>
<script lang="ts" setup>
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
`
