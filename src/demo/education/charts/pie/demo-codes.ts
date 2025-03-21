
export const demoCodes = {
    customLabel: `
<template>
    <LcPieChart :options :legend-label="legendLabel" legend-width="fit-content"></LcPieChart>
</template>

<script lang="ts" setup>
const legendLabel = (name, value) => \`${name} <span style="margin-left: 20px;color: yellow;">\${value}</span>\`
import {
    LcPieChart,
} from 'lowcode-component/es/education/charts';
const options = {
    title: {
        text: data.reduce((pre, cur) => (pre + cur.value), 0).toString(),
        subtext: '类别总数',
    },
    series: [
        {
            name: '学校类别',
            data: [
                { value: 1048, name: '类目一' },
                { value: 735, name: '类目二' },
                { value: 580, name: '类目三' },
                { value: 484, name: '类目四' },
                { value: 300, name: '类目五' }
            ],
        }
    ]
}
</script>
    `,
    code1: `
<template>
    <LcPieChart :options></LcPieChart>
</template>

<script lang="ts" setup>
import {
    LcPieChart,
} from 'lowcode-component/es/education/charts';
const options = {
    title: {
        text: data.reduce((pre, cur) => (pre + cur.value), 0).toString(),
        subtext: '类别总数',
    },
    series: [
        {
            name: '学校类别',
            data: [
                { value: 1048, name: '类目一' },
                { value: 735, name: '类目二' },
                { value: 580, name: '类目三' },
                { value: 484, name: '类目四' },
                { value: 300, name: '类目五' }
            ],
        }
    ]
}
</script>
`,
    code2: `
<template>
    <LcPieChart :options :showCustomLegend="false" layout="innerLabel"></LcPieChart>
</template>

<script lang="ts" setup>
import {
    LcPieChart,
} from 'lowcode-component/es/education/charts';
const options = {
    title: {
        text: data.reduce((pre, cur) => (pre + cur.value), 0).toString(),
        subtext: '类别总数',
    },
    series: [
        {
            name: '学校类别',
            data: [
                { value: 1048, name: '类目一' },
                { value: 735, name: '类目二' },
                { value: 580, name: '类目三' },
                { value: 484, name: '类目四' },
                { value: 300, name: '类目五' }
            ],
        }
    ]
}
</script>
`,
    code3: `
<template>
    <LcPieChart :options :showCustomLegend="false"></LcPieChart>
</template>

<script lang="ts" setup>
import {
    LcPieChart,
} from 'lowcode-component/es/education/charts';
const options = {
        title: {
            text: '59.4%',
            subtext: '占比',
        },
        series: [
            {
                name: '类别',
                data: [
                    { value: 55, name: '已完成' },
                    {
                        value: 45, name: '未完成',
                        itemStyle: {
                            color: 'rgba(15, 251, 248, 0.05)',
                        },
                    },
                ],
            }
        ]
    }
</script>
`,
}