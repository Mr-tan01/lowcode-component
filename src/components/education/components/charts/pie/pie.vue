<template>
    <div class="lc-pie">
        <div class="lc-pie__wrapper">
            <div class="lc-pie__wrapper__legend" v-if="isShowCustomLegend">
                <div class="lc-pie__wrapper__legend__item" v-for="(item, key) in customLegendData" :key
                    :style="getLegendStyle(key)" :title="legendLabel(item.name, item.value)" @click="legendClick(item)">
                    <slot name="legend">
                        <div class="lc-pie__wrapper__legend__item__icon"></div>
                        <div class="lc-pie__wrapper__legend__item__label">
                            {{ legendLabel(item.name, item.value) }}
                        </div>
                    </slot>
                </div>
            </div>
            <div class="lc-pie__wrapper__chart">
                <div class="lc-pie__wrapper__chart__inner" ref="chartDom"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type EChartsCoreOption, type EChartsOption, init, type ECharts } from 'echarts';
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watchPostEffect } from 'vue';
import { useCommonPieOptions, usePieCommonSeries } from './options';
import merge from 'lodash-es/merge';
import { useResizeObserver } from '@vueuse/core';
import { debounce } from 'lodash-es';
import { type LinearGradient } from 'echarts/types/src/util/graphic';
import { innerGraphicColors } from './const';

const {
    options,
    debounceTime = 300,
    graphicColors = innerGraphicColors,
    legendLabel = (name) => name,
    flexDirection = 'row',
} = defineProps<{
    options: EChartsOption | EChartsCoreOption;
    debounceTime?: number;
    legendLabel?: ((name: string, value: number) => string);
    graphicColors?: LinearGradient[];
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
}>();
const chartDom = shallowRef<HTMLElement>();
const chartInstance = shallowRef<ECharts>();
const renderOptions = computed(() => {
    const newOptions = useCommonPieOptions(options);
    newOptions.series = usePieCommonSeries(newOptions.series, graphicColors);
    if (newOptions.series && !Array.isArray(newOptions.series)) {
        newOptions.series = [newOptions.series];
    }
    return merge({}, newOptions);
});

const $emit = defineEmits<{
    (e: 'legend:click', d: { name: string; value: number; })
}>();

function legendClick(record: { name: string, value: number }) {
    $emit('legend:click', record);
}
const isShowCustomLegend = computed(() => {
    const legend = renderOptions.value.legend;
    if (Array.isArray(legend)) return false;
    return !legend?.show;
});
const customLegendData = computed(() => {
    return renderOptions.value?.series?.[0].data ?? [];
});
function getLegendStyle(index: number) {
    const { color = [] } = renderOptions.value ?? {};
    return {
        '--item-color': color[index],
    }
}
onMounted(initChart);
watchPostEffect(() => {
    setOptions(renderOptions.value, true);
})

function initChart() {
    chartInstance.value = init(chartDom.value, renderOptions.value);
}

function setOptions(option: EChartsCoreOption, notMerge?: boolean, lazyUpdate?: boolean) {
    chartInstance.value?.setOption(option, notMerge, lazyUpdate)
}
const cssBlockSize = ref('100%')
function resizeChart(resizeObserverEntrys) {
    const [record] = resizeObserverEntrys;
    const { blockSize, inlineSize, } = record.borderBoxSize[0] ?? {};
    cssBlockSize.value = Math.min(blockSize, inlineSize) + 'px';
    chartInstance.value?.resize();
}
const { stop } = useResizeObserver(chartDom, debounce(resizeChart, debounceTime));

onBeforeUnmount(stop);
defineExpose({
    stop,
    setOptions,
});
</script>

<style lang="scss" scoped>
.lc-pie {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: v-bind(flexDirection);
        gap: 17px;

        &__legend {
            max-width: 128px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;

            &__item {
                font-family: HarmonyOS_Sans_SC;
                font-size: 14px;
                color: #FFFFFF;
                line-height: 20px;
                text-align: left;
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 5px 12px;
                background: linear-gradient(270deg, rgba(34, 118, 252, 0) 0%, #2276fc22 100%);
                position: relative;

                &:hover {
                    cursor: pointer;
                    background: linear-gradient(270deg, rgba(34, 118, 252, 0) 0%, #2276fc6d 100%);
                }

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 1;
                    width: 4px;
                    height: 4px;
                    background: url(./images/arrow.png) no-repeat 100% / 100%;
                }

                &__icon {
                    width: 12px;
                    height: 12px;
                    background: var(--item-color, '#0FFBF8');
                }

                &__label {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        &__chart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &__inner {
                width: 100%;
                height: 100%;
                aspect-ratio: 1/1;

                @mixin innerCircleDecorator() {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    width: v-bind(cssBlockSize);
                    height: v-bind(cssBlockSize);

                    left: 50%;
                    top: 50%;
                    pointer-events: none;
                }

                &::before {
                    @include innerCircleDecorator();
                    background: url(./images//inset.svg) no-repeat 100%/100%;
                    transform: translate(-50%, -50%) scale(0.53);
                }

                &::after {
                    @include innerCircleDecorator();
                    border: 1px solid #0086d425;
                    transform: translate(-50%, -50%);
                }
            }
        }

    }
}
</style>