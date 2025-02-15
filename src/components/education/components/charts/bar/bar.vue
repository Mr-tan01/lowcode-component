<template>
    <div class="lc-bar-chart">
        <SChartsBar :opts="renderOptions" :linearGradientColor :stack :fake3d v-bind="$attrs"></SChartsBar>
    </div>
</template>

<script lang="ts" setup>
import { SChartsBar } from '~/@mmj-code-lib/lowcode/es/components';
import { computed } from 'vue';
import { type EChartsOption, type EChartsCoreOption } from 'echarts';
import { commonBarOptions, useCommonBarOptions, useCommonBarSeries } from './options';
import merge from 'lodash-es/merge';
import { type LinearGradient } from 'echarts/types/src/util/graphic.js';
import { barBuiltInStyle } from './const';

const {
    options = {},
    linearGradientColor = barBuiltInStyle.color,
    isHorizontal = false,
    stack = false,
    fake3d = true,
} = defineProps<{
    options?: EChartsCoreOption | EChartsOption,
    linearGradientColor?: LinearGradient[],
    isHorizontal?: boolean,
    stack?: boolean,
    fake3d?: boolean
}>();

const renderOptions = computed(() => {
    const newOptions = useCommonBarOptions(options, { isHorizontal });
    newOptions.series = useCommonBarSeries(newOptions.series, { stack });
    return merge({}, commonBarOptions, newOptions);
});
</script>

<style lang="scss" scoped>
.lc-bar-chart {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
}
</style>