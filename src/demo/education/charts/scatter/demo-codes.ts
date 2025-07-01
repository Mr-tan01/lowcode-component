export const demoCodes = {
    code1: (len: number) => `
<template>
    <LcScatterChart :options></LcScatterChart>
</template>

<script lang="ts" setup>
import {
    LcScatterChart,
} from 'lowcode-component/es/education/charts';

const options = {
    yAxis: {
        name: '单位/人',
    },
    xAxis: {
        data: Array.from(Array(5)).map((_, i) => \`\${i + 1}月\`),
    },
    series: ${JSON.stringify(
        [
            {
                name: '待审核',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 1200 + i),
                ),
                areaStyle: null,
            },
            {
                name: '已通过',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 1020 + i),
                ),
                areaStyle: null,
            },
            {
                name: '已通过3',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 1020 + i),
                ),
                areaStyle: null,
            },
        ].slice(0, len),
        void 0,
        4,
    )},
}
</script>
    `,

    fourScatter: `
<template>
  <LcFourScatter :options></LcFourScatter>
</template>

<script lang="ts" setup>
import {
    LcFourScatter,
} from 'lowcode-component/es/education/charts';
const options = {
       xAxis: [
            {
                data: Array.from(Array(7)).map((_, i) => \`\${i + 1}月\`),
            }
        ],
        series: [
            {
                name: '福田',
                data: Array.from(Array(6)).map((_, i) => {
                    return {
                        name: \`深圳市中学深圳市中学\${i}\`,
                        value: (Math.random() * 70 + 40),
                    }
                }),
            },
            
            {
                name: '南山',
                data: Array.from(Array(6)).map((_, i) => {
                    return {
                        name: \`深圳市中学\${i}\`,
                        value: (Math.random() * 70 + 40),
                    }
                }),
                itemStyle: {
                    color: 'rgba(255, 175, 103, 0.59)',
                },
            }, 
        ],
    }
</script>
    
    `,
}
