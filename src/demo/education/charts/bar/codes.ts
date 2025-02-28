
export const barChartCodes = {
    code1: `
<template>
    <LcBarChart :options="data" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
    yAxis: {
        name: '单位/人',
    },
    xAxis: {
        data: Array.from(Array(5)).map((_, i) => i + 1 + '月'),
    },
    series: [
        {
            name: '待审核',
            data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
            backgroundStyle: {

            },
        },
    ],
}
</script>
`,
    code2: `
<template>
    <LcBarChart :options="data" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
    yAxis: {
        name: '单位/人',
    },
    xAxis: {
        data: Array.from(Array(5)).map((_, i) => i + 1 + '月'),
    },
    series: [
        {
            name: '待审核',
            data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
            backgroundStyle: {

            },
        },
         {
            name: '已通过',
            data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
            backgroundStyle: {

            },
        },
    ],
}
</script>
`,
}