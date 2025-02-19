<template>
    <div class="lc-gauge">
        <BaseChart :options="renderOptions" ref="baseChart"></BaseChart>
    </div>
</template>

<script lang="ts" setup>
import { BaseChart, useCommonChartExpose } from '@/components/education/common/components/Charts';
import { computed, PropType } from 'vue';
import { type EChartsCoreOption, type EChartsOption } from 'echarts';
import merge from 'lodash-es/merge';
import { useCommonGaugeOptions, } from './options';
const {
    options = {},
} = defineProps({
    options: Object as PropType<EChartsCoreOption | EChartsOption>,
});
const renderOptions = computed(() => {

    const newOptions = useCommonGaugeOptions(options);
    return merge({}, newOptions);
});
const {
    exposes,
} = useCommonChartExpose();
defineExpose(exposes);
</script>


<style lang="scss" scoped>
.lc-gauge {
    width: 100%;
    height: 100%;
}
</style>