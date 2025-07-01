<template>
    <div class="lc-common-chart">
        <div ref="commonChart" class="lc-common-chart__wrapper"></div>
    </div>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import { init, type EChartsType, type EChartsOption } from 'echarts'
import { onMounted, PropType, shallowRef, useTemplateRef, watchEffect } from 'vue'
import debounce from 'lodash-es/debounce'

const commonChartRef = useTemplateRef('commonChart')

const chartInstance = shallowRef<EChartsType>()
const {
    debounceTime = 300,
    options = {},
    notMerge = true,
} = defineProps({
    debounceTime: Number,
    options: Object as PropType<EChartsOption>,
    notMerge: Boolean,
})
useResizeObserver(
    commonChartRef,
    debounce(() => {
        chartInstance.value?.resize()
    }, debounceTime),
)
function initChartInstance() {
    chartInstance.value = init(commonChartRef.value!, options)
}
onMounted(() => {
    initChartInstance()
    setOptions(options, notMerge)
})

function setOptions(options: EChartsOption, deep: boolean, lazyUpdate?: boolean) {
    chartInstance.value?.setOption(options, deep, lazyUpdate)
}
watchEffect(
    () => {
        setOptions(options, notMerge)
    },
    {
        flush: 'post',
    },
)
defineExpose({
    get chartInstance() {
        return chartInstance.value
    },
    setOptions,
})
</script>

<style lang="scss" scoped>
.lc-common-chart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__wrapper {
        flex: 1;
    }
}
</style>
