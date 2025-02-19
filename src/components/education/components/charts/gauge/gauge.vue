<template>
    <div class="lc-gauge">
        <div class="lc-gauge__wrapper">
            <BaseChart :options="renderOptions" ref="baseChart"></BaseChart>
            <CommonLegend disabled :legendLabel :options="renderOptions"></CommonLegend>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { BaseChart, useCommonChartExpose } from '@/components/education/common/components/Charts';
import { computed, PropType } from 'vue';
import { type EChartsCoreOption, type EChartsOption } from 'echarts';
import merge from 'lodash-es/merge';
import { useCommonGaugeOptions, } from './options';
import {
    CommonLegend,
    type LegendDataRecord,
    type LegendSelectParams
} from '@/components/education/common/components/Charts/legend';
const {
    options = {},
} = defineProps<{
    legendLabel?: ((name: string, value: number) => string);
    options: EChartsCoreOption | EChartsOption,
}>();
const {
    exposes,
    baseChartRef,
} = useCommonChartExpose("baseChart");
const renderOptions = computed(() => {

    const newOptions = useCommonGaugeOptions(options);
    return merge({}, newOptions);
});
const $emit = defineEmits<{
    (e: 'legend:click', d: LegendDataRecord): void;
    (e: 'legend:toggleSelect', value: LegendSelectParams): void;
}>();

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