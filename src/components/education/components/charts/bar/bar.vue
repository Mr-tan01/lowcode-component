<template>
    <div class="lc-bar-chart">
        <SChartsBar
            v-bind="$attrs"
            ref="chartBarRef"
            :opts="renderOptions"
            :linear-gradient-color
            :stack
            :fake3d
        ></SChartsBar>
    </div>
</template>

<script lang="ts" setup>
import { SChartsBar } from '@mmj-code-lib/lowcode/es/components'
import { computed, onMounted, useTemplateRef } from 'vue'
import { type EChartsOption, type EChartsCoreOption } from 'echarts'
import {
    commonBarOptions,
    useCommonBarOptions,
    useCommonBarSeries,
} from './options'
import merge from 'lodash-es/merge'
import { graphic } from 'echarts'
import { barBuiltInStyle } from './const'

const {
    options = {},
    linearGradientColor = barBuiltInStyle.color,
    isHorizontal = false,
    stack = false,
    fake3d = true,
} = defineProps<{
    options?: EChartsCoreOption | EChartsOption
    linearGradientColor?: graphic.LinearGradient[]
    isHorizontal?: boolean
    stack?: boolean
    fake3d?: boolean
}>()
const chartBar = useTemplateRef('chartBarRef')

const renderOptions = computed(() => {
    const newOptions = useCommonBarOptions(options, { isHorizontal })
    newOptions.series = useCommonBarSeries(newOptions.series, { stack })
    return merge({}, commonBarOptions, newOptions)
})

onMounted(() => {
    if (chartBar.value && chartBar.value.chartInstance) {
        chartBar.value?.chartInstance?.on('legendselectchanged', function () {
            const chart = chartBar.value?.chartInstance
            if (!chart) return
            // 获取当前所有图例状态和系列数据
            const option = chart.getOption()
            const legend = option.legend?.[0]
            const selected = legend.selected || {}
            const seriesData = option.series
            const yAxis = option.yAxis
            if (!Array.isArray(yAxis) || yAxis.length <= 1) return

            // 根据系列显示状态控制y轴显示
            chart.setOption({
                yAxis: [
                    { show: selected[seriesData?.[0]?.name] !== false },
                    { show: selected[seriesData?.[1]?.name] !== false },
                ],
            })
        })
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
