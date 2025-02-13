<template>
    <div class="common-chart" ref="commonChart"></div>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core';
import { init, type EChartsType, type EChartsOption } from 'echarts';
import { onMounted, PropType, shallowRef, useTemplateRef, watchEffect } from 'vue';
import debounce from 'lodash-es/debounce';

const commonChartRef = useTemplateRef("commonChart");

const chartInstance = shallowRef<EChartsType>();
const {
    debounceTime = 300,
    options = {},
    notMerge = true,
} = defineProps({
    debounceTime: Number,
    options: Object as PropType<EChartsOption>,
    notMerge: Boolean,
})
useResizeObserver(commonChartRef, debounce(() => {
    chartInstance.value?.resize({
        animation: {
            duration: 500,
            easing: 'cubicOut'
        }
    });
}, debounceTime));
function initChartInstance() {
    chartInstance.value = init(commonChartRef.value!, options);
}
onMounted(() => {
    initChartInstance();
});

function setOptions(options: EChartsOption, deep: boolean) {
    chartInstance.value?.setOption(options, deep);
}
watchEffect(() => {
    options; // tack on the options
    setOptions(options, notMerge);
});
defineExpose({
    chartInstance,
    setOptions,
});
</script>

<style lang="scss" scoped>
.common-chart {
    width: 100%;
    height: 100%;
}
</style>
