<template>
    <div class="lc-fourscatter">
        <LcScatterChart :options="renderOptions" ref="lcScatterChartCom"></LcScatterChart>
    </div>
</template>

<script lang="ts" setup>
import { LcScatterChart, LcScatterChartInstanceType } from "@/components/education/components/charts/scatter";
import { useCommonScatterOptions, useCommonScatterSeries } from "./options";
import merge from "lodash-es/merge";
import { type EChartsOption, type EChartsCoreOption, ECElementEvent } from "echarts";
import { computed, useTemplateRef, watch } from "vue";
const {
    options = {},
    isPushAxis = true,
    isDefaultTooltip = false,
} = defineProps<{
    options: EChartsCoreOption | EChartsOption;
    isPushAxis?: boolean;
    isDefaultTooltip?: boolean;
}>();
const lcScatterChartComRef = useTemplateRef<LcScatterChartInstanceType>("lcScatterChartCom");

const renderOptions = computed(() => {
    options.series = useCommonScatterSeries(options.series || []);
    const newOptions = useCommonScatterOptions(options, isDefaultTooltip);
    appendSplitAxis(newOptions);
    return merge({}, newOptions);
});
const $emits = defineEmits<{
    (e: "click", params: ECElementEvent): void;
}>();
watch(
    () => lcScatterChartComRef.value?.instance,
    (instance) => {
        if (!instance?.chartInstance) return;

        instance?.chartInstance.off("click");
        instance?.chartInstance.on("click", function (params) {
            $emits("click", params);
        });
    },
    {
        deep: true,
    }
);

function appendSplitAxis(newOptions: EChartsCoreOption) {
    if (isPushAxis) {
        (newOptions.series as any[]).push(
            {
                type: "custom",
                coordinateSystem: "cartesian2d",
                silent: true,
                renderItem: function (params, api) {
                    if (params.isRenderer) return;
                    params.isRenderer = true;
                    const width = api.getWidth();
                    const height = api.getHeight();
                    const y = height / 2 - 20;
                    return {
                        type: "line",
                        shape: {
                            x1: 0,
                            y1: y,
                            x2: width,
                            y2: y,
                        },
                        style: {
                            lineWidth: 0.5,
                            stroke: "rgba(255, 255, 255, 1)",
                        },
                    };
                },
                z: 10,
                level: 10,
                data: [1],
            },
            {
                type: "custom",
                silent: true,
                renderItem: function (params, api) {
                    if (params.isRenderer) return;
                    params.isRenderer = true;
                    const width = api.getWidth();
                    const height = api.getHeight();
                    const x = width / 2;
                    return {
                        type: "line",
                        shape: {
                            x1: x,
                            y1: 0,
                            x2: x,
                            y2: height,
                        },
                        style: {
                            lineWidth: 0.5,
                            stroke: "rgba(255, 255, 255, 1)",
                        },
                    };
                },
                data: [1],
            }
        );
    }
}

defineExpose({
    instance: computed(() => lcScatterChartComRef.value?.instance),
});
</script>

<style lang="scss" scoped>
.lc-fourscatter {
    width: 100%;
    height: 100%;
}
</style>
