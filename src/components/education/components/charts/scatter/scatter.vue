<template>
    <div class="lc-scatter-chart">
        <BaseChart v-bind="$attrs" ref="baseChart" :options="renderOptions"></BaseChart>
    </div>
</template>

<script lang="ts" setup>
import { BaseChart } from '@/components/education/common/components/Charts'
import { computed, PropType, useTemplateRef } from 'vue'
import { type EChartsCoreOption, type EChartsOption } from 'echarts'
const baseChartRef = useTemplateRef<InstanceType<typeof BaseChart>>('baseChart')
import { useCommonScatterOptions, useCommonScatterSeries } from './options'
import merge from 'lodash-es/merge'
import { scatterColors } from './const'
const { options = {} } = defineProps({
    options: Object as PropType<EChartsCoreOption | EChartsOption>,
})

const renderOptions = computed(() => {
    const colors = merge([], scatterColors, options?.color ?? [])
    options.series = useCommonScatterSeries(options.series || [], colors)
    const newOptions = useCommonScatterOptions(options)
    return merge({}, newOptions)
})
defineExpose({
    instance: computed(() => baseChartRef.value),
})
</script>

<style lang="scss" scoped>
.lc-scatter-chart {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
}
</style>
