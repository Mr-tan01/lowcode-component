<template>
    <div class="lc-line-chart">
        <SChartsLine v-bind="$attrs" ref="chartLineRef" :opts="renderOptions"></SChartsLine>
    </div>
</template>

<script lang="ts" setup>
import { SChartsLine } from '@mmj-code-lib/lowcode/es/components'
import { computed, onMounted, useTemplateRef, Ref } from 'vue'
import { type EChartsCoreOption, type EChartsOption } from 'echarts'
import { useCommonLineOptions, useCommonLineSeries } from './options'
import merge from 'lodash-es/merge'
const { options = {}, events = {} } = defineProps<{
    options?: EChartsCoreOption | EChartsOption
    events?: {
        [eventName: string]: (chartBar: Ref) => (...args: any) => void
    }
}>()

const renderOptions = computed(() => {
    const newOptions = useCommonLineOptions(options)
    newOptions.series = useCommonLineSeries(newOptions.series)
    return merge({}, newOptions)
})
const chartLine = useTemplateRef('chartLineRef')
onMounted(() => {
    if (chartLine.value && chartLine.value.chartInstance) {
        // 绑定事件
        Object.entries(events).forEach(([eventName, eventHandler]) => {
            if (typeof eventHandler !== 'function') return
            chartLine.value?.chartInstance?.on(eventName, eventHandler(chartLine))
        })
        // 如未传入legendselectchanged事件则绑定legendselectchanged事件
        if (typeof events.legendselectchanged !== 'function' && events.legendselectchanged !== null)
            chartLine.value?.chartInstance?.on('legendselectchanged', function () {
                const chart = chartLine.value?.chartInstance
                if (!chart) return

                const option = chart.getOption()
                const legend = option.legend?.[0]
                const selected = legend.selected || {}
                const seriesData = option.series
                const yAxis = option.yAxis
                if (!Array.isArray(yAxis)) return
                if (yAxis.length <= 1) {
                    // 检查是否所有图例都被隐藏
                    const allHidden = Object.values(selected).every(show => show === false)

                    chart.setOption({
                        yAxis: [
                            {
                                show: !allHidden,
                                axisLabel: {
                                    formatter: !allHidden ? yAxis[0]?.axisLabel?.formatter || '{value}' : '',
                                },
                            },
                        ],
                    })
                    return
                }

                chart.setOption({
                    yAxis: [
                        {
                            show: selected[seriesData?.[0]?.name] !== false,
                            axisLabel: {
                                formatter: selected[seriesData?.[0]?.name] !== false ? yAxis[0]?.axisLabel?.formatter || '{value}' : '', // 隐藏标签
                            },
                        },
                        {
                            show: selected[seriesData?.[1]?.name] !== false,
                            axisLabel: {
                                formatter: selected[seriesData?.[1]?.name] !== false ? yAxis[1]?.axisLabel?.formatter || '{value}' : '', // 隐藏标签
                            },
                        },
                    ],
                })
            })
    }
})
</script>

<style lang="scss" scoped>
.lc-line-chart {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
}
</style>
