<template>
    <div class="lc-scatter-chart">
        <BaseChart :options="renderOptions" v-bind="$attrs"></BaseChart>
    </div>
</template>

<script lang="ts" setup>
import { BaseChart, useCommonChartExpose } from '@/components/education/common/components/Charts';
import { computed, PropType } from 'vue';
import { type EChartsCoreOption, type EChartsOption } from 'echarts';
import {
    useCommonScatterOptions,
    useCommonScatterSeries,
} from './options';
import merge from 'lodash-es/merge';
const {
    options = {},
} = defineProps({
    options: Object as PropType<EChartsCoreOption | EChartsOption>,
});

const renderOptions = computed(() => {
    options.series = useCommonScatterSeries(options.series || []);
    const newOptions = useCommonScatterOptions(options);
    return merge({}, newOptions);
});
const {
    exposes,
} = useCommonChartExpose("baseChart");
defineExpose(exposes);
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