<template>
    <div ref="bubbleDomRef" class="bubble"></div>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, computed, onMounted } from 'vue'
import defaultImage from './images/default.png'
import hoverImg from './images/hover_image.png' // 悬浮时的图片
import { useResizeObserver } from '@vueuse/core'
import { debounce, merge } from 'lodash-es'
import { baseOptions } from './options' // 基础配置
import { type EChartsCoreOption, type EChartsOption, init } from 'echarts'
const {
    data = [],
    debounceTime = 300,
    chartOptions = {},
} = defineProps<{
    data?: { label: string; value: number }[]
    debounceTime?: number
    chartOptions?: EChartsCoreOption | EChartsOption
}>()

const bubbleDomRef = ref()
const chartInstance = ref()

const fomartData = computed(() => {
    return data.map(item => {
        return {
            name: item.label,
            symbolSize: [180, 129],
            draggable: true,
            symbol: `image://${defaultImage}`,
            ...item,
        }
    })
})

const renderOptions = computed(() => {
    const merged = merge(
        {},
        baseOptions,
        {
            series: [
                {
                    data: fomartData.value,
                },
            ],
        },
        chartOptions,
    )
    return merged
})

const initChart = () => {
    chartInstance.value = init(bubbleDomRef.value)
    chartInstance.value.setOption(renderOptions.value, true)
    chartInstance.value?.on('mouseover', function (params) {
        // 处理鼠标悬浮事件
        if (params.dataType === 'node') {
            const newData = fomartData.value.map(node => ({
                ...node,
                symbol: node.name === params?.data?.name ? `image://${hoverImg}` : `image://${defaultImage}`,
                symbolSize: node.name === params.data.name ? [200, 150] : [180, 129],
            }))
            chartInstance.value?.setOption({
                series: [
                    {
                        data: newData,
                    },
                ],
            })
        }
    })
    chartInstance.value?.on('mouseout', function () {
        chartInstance.value?.setOption({
            series: [
                {
                    data: fomartData.value,
                },
            ],
        })
    })
}
const resizeChart = () => {
    chartInstance.value?.resize()
}

const { stop } = useResizeObserver(bubbleDomRef, debounce(resizeChart, debounceTime))
onMounted(initChart)
onBeforeUnmount(stop)
</script>
<style lang="scss" scoped>
.bubble {
    width: 100%;
    height: 100%;
}
</style>
