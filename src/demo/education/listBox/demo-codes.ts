export const code1 = `
<template>
    <LclistBox :rows="dataRows" :bordered="true" ></LclistBox>
</template>
<script lang="ts" setup>

const dataRows = [
  { indicatorId: "1", indicatorName: '姓名', indicatorValue: '张三'},
  { indicatorId: "2", indicatorName: '职业', indicatorValue: '前端工程师'},
  { indicatorId: "3", indicatorName: '年龄', indicatorValue: '36岁'},
  { indicatorId: "4", indicatorName: '工龄', indicatorValue: '10年'},
]
</script>
`
