export const deomCodes = {
    code1: `
<template>
    <LcFunnelTierChart :options></LcFunnelTierChart>
</template>
<script setup lang="ts">
import {
    LcFunnelTierChart,
} from 'lowcode-component/es/education/charts';
const options = {
    series: [
        {
            max: 350,
            data: [
                { value: 117, name: '类目名称' },
                { value: 163, name: 'Inquiry' },
                { value: 103, name: 'Order' },
                { value: 230, name: 'Click' },
                { value: 343, name: 'Show' }
            ].sort((a, b) => a.value - b.value),
        }
    ],
}
</script>
`,
    code2: `
<template>
    <LcFunnelChart :options></LcFunnelChart>
</template>
<script setup lang="ts">
import {
    LcFunnelChart,
} from 'lowcode-component/es/education/charts';
const options = {
        series: [
            {
                data: [
                    { value: 60, name: 'Visit' },
                    { value: 40, name: 'Inquiry' },
                    { value: 20, name: 'Order' },
                    { value: 80, name: 'Click' },
                    { value: 100, name: 'Show' }
                ].sort((a, b) => b.value - a.value),
            }
        ],
    }
</script>
`,
}
