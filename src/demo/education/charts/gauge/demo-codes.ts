
export const deomCodes = {
    code1: (value) => {
        return `
<template>
    <LcGaugeSvgChart :value="${value}"></LcGaugeSvgChart>
</template>

<script setup lang="ts">
import {
    LcGaugeSvgChart,
} from '@/components/education/components/charts';

</script>
    `
    },
    code2: `
<template>
    <LcGaugeChart :options></LcGaugeChart>
</template>

<script setup lang="ts">
import {
    LcGaugeChart,
} from '@/components/education/components/charts';

const options = {
            title: {
                text: "100"
            },
            series: [
                {
                    axisLine: {
                        lineStyle: {
                            width: 18 * 5,
                        }
                    },
                    data: [
                        {
                            value: 20,
                            name: '类目一',
                        },
                        {
                            value: 40,
                            name: '类目二',
                        },
                        {
                            value: 60,
                            name: '类目三',

                        },
                        {
                            value: 60,
                            name: '类目四',
                        },
                        {
                            value: 80,
                            name: '类目五',
                        },
                        {
                            value: 90,
                            name: '类目六',
                        },
                    ]
                }
            ]
        }
</script>
    `,
    code3: `
<template>
    <LcGaugeChart :options :showCustomLegend="false"></LcGaugeChart>
</template>

<script setup lang="ts">
import {
    LcGaugeChart,
} from 'lowcode-component/es/education/charts';

const options = {
            title: {
                show: false,
            },
            series: merge({}, gaugeThemeOptions.progressSeries, {
                min: 0,
                max: 150,
                splitNumber: 7,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: new graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: 'rgba(15, 251, 248, 0.20)' }, // 渐变色起始颜色
                                { offset: 1, color: '#0FFBF8' }  // 渐变色结束颜色
                            ]),
                        }
                    }
                ]
            }),
        }
</script> `,
}