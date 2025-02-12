<template>
    <div class="common-chart" ref="commonChart"></div>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core';
import { init, type EChartsType, type EChartsInitOpts } from 'echarts';
import { onMounted, PropType, shallowRef, useTemplateRef } from 'vue';
import debounce from 'lodash-es/debounce';

const commonChartRef = useTemplateRef("commonChart");

const chartInstance = shallowRef<EChartsType>();
const {
    debounceTime = 300,
    options = {},
} = defineProps({
    debounceTime: Number,
    options: Object as PropType<EChartsInitOpts>,
})
useResizeObserver(commonChartRef, debounce((entries) => {
    chartInstance.value?.resize();
}, debounceTime));
function initChartInstance() {
    chartInstance.value = init(commonChartRef.value!, options);
}
onMounted(() => {
    initChartInstance();
});
defineExpose({
    chartInstance,
});
</script>

<style lang="scss" scoped>
.common-chart {
    width: 100%;
    height: 100%;
}
</style>
