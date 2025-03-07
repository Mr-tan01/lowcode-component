
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

export const headHTML = `
<link rel="stylesheet" href="./cdn/lowcode-component/assets/index.css">
`;

export const preveiwOptions = {
  headHTML,
  bodyHTML: ``,
  placeholderHTML: `loading...`,
  customCode: {
    importCode: ``,
    useCode: ``,
  }
}