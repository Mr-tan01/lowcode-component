
export const testCodeStr = `
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>test:{{ msg }}</h1>
  <input v-model="msg" />
</template>

`;