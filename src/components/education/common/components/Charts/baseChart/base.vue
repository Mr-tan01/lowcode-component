<template>
    <div class="lc-common-chart">
        <div ref="commonChart" class="lc-common-chart__wrapper"></div>
    </div>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import { init, type EChartsType, type EChartsOption } from 'echarts'
import { onMounted, PropType, shallowRef, useTemplateRef, watchEffect, ref, onBeforeUnmount } from 'vue'
import { debounce, cloneDeep, merge } from 'lodash-es'

import { transformEChartsConfig } from '@mmj-code-lib/lowcode/es/shared'
const commonChartRef = useTemplateRef('commonChart')

const cloneDeepOptions = ref()
const chartInstance = shallowRef<EChartsType | null>(null)
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
    cloneDeepOptions.value = cloneDeep(merge(chartInstance.value?.getOption(), options))
    const adaptOptions = transformEChartsConfig(cloneDeepOptions.value)
    chartInstance.value?.setOption(adaptOptions, deep, lazyUpdate)
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
onBeforeUnmount(() => {
    console.log('我是卸载啊')
    chartInstance.value?.dispose()
    chartInstance.value = null
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
