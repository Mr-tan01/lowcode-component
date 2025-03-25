export const code1 = `
<template>
    <LcPaging v-model="page1" :total-pages="3"></LcPaging>
    <LcPaging v-model="page2" :total-pages="3" :font-color="'blue'" :font-size="'20px'"></LcPaging>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const page1 = ref(1);
const page2 = ref(2);
</script>
`;