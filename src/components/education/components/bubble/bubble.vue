<template>
    <div ref="bubbleDomRef" class="bubble"></div>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, computed, onMounted } from "vue";
import { optionsType } from "./types";
import defaultImage from "./images/default.png";
import hoverImg from "./images/hover_image.png"; // 悬浮时的图片
import { useResizeObserver } from "@vueuse/core";
import { debounce, merge } from "lodash-es";
import { baseOptions } from "./options"; // 基础配置
import { type EChartsCoreOption, type EChartsOption, init } from "echarts";
const {
    data = [],
    debounceTime = 300,
    options = {
        startX: 200, // 起始x坐标
        gapX: 250, // 每个节点x方向间隔
        centerY: 250, // 居中y坐标
        gapY: 80, // y方向偏移量
    },
    chartOptions,
} = defineProps<{ data: { label: string; value: number }[]; options?: optionsType; debounceTime?: number; chartOptions?: EChartsCoreOption | EChartsOption }>();

const bubbleDomRef = ref();
const chartInstance = ref();

const fomartData = computed(() => {
    const { startX, gapX, centerY, gapY } = options;
    return data.map((item, index) => {
        let x = startX + index * gapX;
        let y = index ? centerY + (index % 2 === 1 ? gapY : -gapY) : centerY;
        return {
            name: item.label,
            value: item.value,
            symbolSize: [180, 129],
            draggable: true,
            symbol: `image://${defaultImage}`,
            x,
            y,
        };
    });
});

const renderOptions = computed(() => {
    const merged = merge(
        {},
        baseOptions,
        {
            series: [
                {
                    data: fomartData.value,
                },
            ],
        },
        chartOptions
    );
    return merged;
});

const initChart = () => {
    chartInstance.value = init(bubbleDomRef.value);
    chartInstance.value.setOption(renderOptions.value, true);
    chartInstance.value?.on("mouseover", function (params) {
        // 处理鼠标悬浮事件
        if (params.dataType === "node") {
            const newData = fomartData.value.map((node) => ({
                ...node,
                symbol: node.name === params?.data?.name ? `image://${hoverImg}` : `image://${defaultImage}`,
                symbolSize: node.name === params.data.name ? [200, 150] : [180, 129],
            }));
            chartInstance.value?.setOption({
                series: [
                    {
                        data: newData,
                    },
                ],
            });
        }
    });
    chartInstance.value?.on("mouseout", function (params) {
        chartInstance.value?.setOption({
            series: [
                {
                    data: fomartData.value,
                },
            ],
        });
    });
};
const resizeChart = () => {
    chartInstance.value?.resize();
};

const { stop } = useResizeObserver(bubbleDomRef, debounce(resizeChart, debounceTime));
onMounted(initChart);
onBeforeUnmount(stop);
</script>
<style lang="scss" scoped>
.bubble {
    width: 100%;
    height: 100%;
}
</style>
