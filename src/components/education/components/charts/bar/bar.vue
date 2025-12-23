<template>
    <div class="lc-bar-chart">
        <SChartsBar v-bind="$attrs" ref="chartBarRef" :opts="renderOptions" :linear-gradient-color :stack :fake3d></SChartsBar>
    </div>
</template>

<script lang="ts" setup>
import { SChartsBar } from '@mmj-code-lib/lowcode/es/components'
import { computed, onMounted, Ref, useTemplateRef, onUnmounted } from 'vue'
import { type EChartsOption, type EChartsCoreOption } from 'echarts'
import { commonBarOptions, useCommonBarOptions, useCommonBarSeries } from './options'
import merge from 'lodash-es/merge'
import { graphic } from 'echarts'
import { barBuiltInStyle } from './const'
const {
    options = {},
    linearGradientColor = barBuiltInStyle.color,
    isHorizontal = false,
    stack = false,
    fake3d = true,
    events = {},
} = defineProps<{
    options?: EChartsCoreOption | EChartsOption
    linearGradientColor?: graphic.LinearGradient[]
    isHorizontal?: boolean
    stack?: boolean
    fake3d?: boolean
    events?: {
        [eventName: string]: (chartBar: Ref) => (...args: any) => void
    }
}>()
const chartBar = useTemplateRef('chartBarRef')

const renderOptions = computed(() => {
    const newOptions = useCommonBarOptions(options, { isHorizontal })
    newOptions.series = useCommonBarSeries(newOptions.series, { stack })
    return merge({}, commonBarOptions, newOptions)
})

onMounted(() => {
    if (chartBar.value && chartBar.value.chartInstance) {
        // 绑定事件
        Object.entries(events).forEach(([eventName, eventHandler]) => {
            if (typeof eventHandler !== 'function') return
            chartBar.value?.chartInstance?.on(eventName, eventHandler(chartBar))
        })
        // 如未传入legendselectchanged事件则绑定legendselectchanged事件
        if (typeof events.legendselectchanged !== 'function' && events.legendselectchanged !== null)
            chartBar.value?.chartInstance?.on('legendselectchanged', function () {
                const chart = chartBar.value?.chartInstance
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
onUnmounted(() => {
    if (chartBar.value && chartBar.value.chartInstance) {
        // 解绑事件
        Object.entries(events).forEach(([eventName, eventHandler]) => {
            if (typeof eventHandler !== 'function') return
            chartBar.value?.chartInstance?.off(eventName, eventHandler(chartBar))
        })
        chartBar.value.chartInstance.dispose()
        chartBar.value.chartInstance = undefined
    }
})
</script>

<style lang="scss" scoped>
.lc-bar-chart {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
}
</style>
