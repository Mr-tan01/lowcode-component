export const code1 = `
<template>
    <LcSampling :list>
        </LcSampling>
</template>
<script lang="ts" setup>
const list: LcSamplingRecords[] = [
  {
    icon: 'blue',
    name: '正常行驶'
  },
  {
    icon: 'yellow',
    name: '预警事件'
  },
  {
    icon: 'red',
    name: '疲劳驾驶'
  },
]
</script>
`;