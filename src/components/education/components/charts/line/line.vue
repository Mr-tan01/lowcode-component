<template>
    <div class="lc-line-chart">
        <SChartsLine :opts="renderOptions" v-bind="$attrs"></SChartsLine>
    </div>
</template>

<script lang="ts" setup>
import { SChartsLine } from '@mmj-code-lib/lowcode/es/components'
import { computed, PropType } from 'vue'
import { type EChartsCoreOption, type EChartsOption } from 'echarts'
import { useCommonLineOptions, useCommonLineSeries } from './options'
import merge from 'lodash-es/merge'
const { options = {} } = defineProps({
    options: Object as PropType<EChartsCoreOption | EChartsOption>,
})

const renderOptions = computed(() => {
    const newOptions = useCommonLineOptions(options)
    newOptions.series = useCommonLineSeries(newOptions.series)
    return merge({}, newOptions)
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
