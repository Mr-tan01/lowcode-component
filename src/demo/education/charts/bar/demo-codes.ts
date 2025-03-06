
export const barChartCodes = {
    code1: `
<template>
    <LcBarChart :options="data" type="bar"></LcBarChart>
</template>
<script setup>
import { LcBarChart } from 'lowcode-component/es/education/charts';
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

code3: `
<template>
    <LcBarChart :options="data" type="bar" stack></LcBarChart>
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

code4: `
<template>
    <LcBarChart :options="data" is-horizontal :fake3d="false" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => \`类目\${i + 1}\`),
        },
        xAxis: {
            name: '',
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ],
    }
</script>
`,
code5: `
<template>
    <LcBarChart :options="data" is-horizontal :fake3d="false" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => \`类目\${i + 1}\`),
        },
        xAxis: {
            name: '',
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
            {
                name: '已通过',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ],
    }
</script>
`,
code6: `
<template>
   <LcBarChart :options="chartNegativeBarOptions()" is-horizontal stack :fake3d="false" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
        grid: {
            right: 20,
        },
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => \`类目\${i + 1}\`),
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * -100 + i)),
            },
            {
                name: '已通过',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ],
    }
</script>
`,
code7: `
<template>
   <LcBarChart :options="data" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => \`类目\${i + 1}\`),
        },
        yAxis: [
            LcBarChartOptions.commonBarOptions.yAxis as YAXisOption,
            LcBarChartOptions.commonBarOptions.yAxis as YAXisOption,
        ],
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
            {
                name: '已通过',
                yAxisIndex: 1,
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ],
    }
</script>
`,
code8: `
<template>
   <LcBarChart :options="data" is-horizontal stack :fake3d="false" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
        yAxis: {
            name: '单位/人',
        },
        xAxis: {
            data: Array.from(Array(5)).map((_, i) => \`\${i + 1}月\`),
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
            {
                name: '已通过2',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过3',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过4',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过5',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
        ],
    }
</script>
`,
code9: `
<template>
   <LcBarChart :options="data" stack :fake3d="false" type="bar"></LcBarChart>
</template>
<script setup>
const data =  {
        yAxis: {
            name: '单位/人',
        },
        xAxis: {
            data: Array.from(Array(5)).map((_, i) => \`\${i + 1}月\`),
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
            {
                name: '已通过2',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过3',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过4',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过5',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
        ],
    }
</script>
`,
code10: `
<template>
   <LcBarChart :options="data" type="bar" :fake3d="false"></LcBarChart>
</template>
<script setup>
// 图片地址
// const blueImage = '文档中下载的图片';
// const orgImage = '文档中下载的图片';

const data =  {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => \`类目\${i + 1}\`),
        },
        yAxis: {

        },
        series: [
            {
                name: '类型名称2',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: '-50%',
                symbol: \`image://\${blueImage}\`,
                itemStyle: {
                    opacity: 0.9
                },
                data: [23, 60, 125, 118],
            },
            {
                name: '类型名称3',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: '-50%',
                symbol: \`image://\${orgImage}\`,
                itemStyle: {
                    opacity: 0.9
                },
                data: [23, 160, 45, 108],
            },
        ],
    }
</script>
`,
code11: `
<template>
   <LcBarChart :options="data" type="bar" :fake3d="false"></LcBarChart>
</template>
<script setup>
const data =  {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => \`类目\${i + 1}\`),
        },
        yAxis: {

        },
        series: [
            {
                name: '类型名称',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: 0,
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                data: [123, 60, 25, 18],
            },
            {
                name: '类型名称1',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: 0,
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                data: [123, 60, 25, 18],
            },
        ],
    }
</script>
`,
}