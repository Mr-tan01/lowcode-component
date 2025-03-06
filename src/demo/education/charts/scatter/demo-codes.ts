
export const demoCodes = {
    code1: (len: number) => `
<template>
    <LcScatterChart :options></LcScatterChart>
</template>

<script lang="ts" setup>
import {
    LcScatterChart,
} from '@/components/education/components/charts';

const options = {
    yAxis: {
        name: '单位/人',
    },
    xAxis: {
        data: Array.from(Array(5)).map((_, i) => \`\${i + 1}月\`),
    },
    series: ${JSON.stringify([
        {
            name: '待审核',
            data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 1200 + i)),
            areaStyle: null,
        },
        {
            name: '已通过',
            data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 1020 + i)),
            areaStyle: null,
        },
        {
            name: '已通过3',
            data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 1020 + i)),
            areaStyle: null,
        },
    ].slice(0, len), void 0, 4)},
}
</script>
    `,
}