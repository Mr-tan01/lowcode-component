<template>
    <div class="lc-radar">
        <BaseChart ref="baseChart" :options="renderOptions"></BaseChart>
    </div>
</template>
<script lang="ts" setup>
import {
    BaseChart,
    useCommonChartExpose,
} from '@/components/education/common/components/Charts'
import { computed, PropType } from 'vue'
import { type EChartsCoreOption, type EChartsOption } from 'echarts'
import merge from 'lodash-es/merge'
import { useCommonRadarOptions, useCommonRadarSeries } from './options'
const { options = {} } = defineProps({
    options: Object as PropType<EChartsCoreOption | EChartsOption>,
})
const renderOptions = computed(() => {
    const newOptions = useCommonRadarOptions(options)
    newOptions.series = useCommonRadarSeries(newOptions.series)
    return merge({}, newOptions)
})
const { exposes } = useCommonChartExpose('baseChart')
defineExpose(exposes)
</script>

<style lang="scss" scoped>
.lc-radar {
    width: 100%;
    height: 100%;
}
</style>
