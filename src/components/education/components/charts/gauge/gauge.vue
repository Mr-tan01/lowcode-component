<template>
    <div class="lc-gauge">
        <div class="lc-gauge__wrapper">
            <BaseChart :options="renderOptions" ref="baseChart"></BaseChart>
            <CommonLegend disabled :legendLabel :options="renderOptions" v-if="showCustomLegend"></CommonLegend>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { BaseChart, useCommonChartExpose } from '@/components/education/common/components/Charts';
import { computed, PropType } from 'vue';
import { type EChartsCoreOption, type EChartsOption } from 'echarts';
import merge from 'lodash-es/merge';
import { useCommonGaugeOptions, useGaugeSeriesOptions, } from './options';
import {
    CommonLegend,
} from '@/components/education/common/components/Charts/legend';
const {
    options = {},
    showCustomLegend = true,
} = defineProps<{
    legendLabel?: ((name: string, value: number) => string);
    options: EChartsCoreOption | EChartsOption,
    showCustomLegend?: boolean;
}>();
const {
    exposes,
} = useCommonChartExpose("baseChart");
const renderOptions = computed(() => {

    const newOptions = useCommonGaugeOptions(options);
    newOptions.series = useGaugeSeriesOptions(newOptions.series);
    return merge({}, newOptions);
});
defineExpose(exposes);
</script>


<style lang="scss" scoped>
.lc-gauge {
    width: 100%;
    height: 100%;

    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
    }
}
</style>