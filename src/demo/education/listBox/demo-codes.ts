export const code1 = `
<template>
    <LclistBox :items="dataItems" :rows="dataRows" ></LclistBox>
</template>
<script lang="ts" setup>
const dataItems = [
  { key: 'name', value: 'nameValue' },
  { key: 'age', value: 'ageValue' }
]

const dataRows = [
  { name: '姓名', nameValue: '张三', age: '年龄', ageValue: 28 },
  { name: '职业', nameValue: '前端工程师', age: '经验', ageValue: '5年' }
]
</script>
`;