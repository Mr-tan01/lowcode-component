<template>
    <div class="lc-pie" :class="[`lc-pie--${layout}`]" :style="{
        '--legendWidth': legendWidth,
    }">
        <div class="lc-pie__wrapper">
            <div class="lc-pie__wrapper__legend" v-if="isNavtiveLegend && showCustomLegend">
                <div class="lc-pie__wrapper__legend__item" v-for="(item, key) in customLegendData" :key
                    :style="getLegendStyle(key, item)" :title="legendLabel(item.name, item.value)"
                    @click="legendClick(item)" @mouseenter="dispatchAction('highlight', item.name)"
                    @mouseleave="dispatchAction('downplay', item.name)">
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
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watchPostEffect, watch } from 'vue';
import { useCommonPieOptions, usePieCommonSeries } from './options';
import merge from 'lodash-es/merge';
import { useResizeObserver } from '@vueuse/core';
import { debounce } from 'lodash-es';
import { type LinearGradient } from 'echarts/types/src/util/graphic';
import { innerGraphicColors } from './const';
import { type LayoutType, type ActiveType } from './types';

const {
    options,
    debounceTime = 300,
    graphicColors = innerGraphicColors,
    legendLabel = (name) => name,
    flexDirection = 'row',
    showCustomLegend = true,
    layout = 'default',
    legendLeft = '20%',
    legendTop = '50%',
    legendPosition = 'relative',
    legendWidth = '128px',
} = defineProps<{
    options: EChartsOption | EChartsCoreOption;
    debounceTime?: number;
    legendLabel?: ((name: string, value: number) => string);
    graphicColors?: LinearGradient[];
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
    showCustomLegend?: boolean;
    layout?: LayoutType;
    legendLeft?: string;
    legendTop?: string;
    legendPosition?: 'relative' | 'absolute',
    legendWidth?: string;
}>();
type DataRecord = { name: string | number, value: number | number[] };
const legendSelectedMaps = ref(new Map<string | number, DataRecord & { selected: boolean; }>());
const chartDom = shallowRef<HTMLElement>();
const chartInstance = shallowRef<ECharts>();
const renderOptions = computed(() => {
    const newOptions = useCommonPieOptions(options);
    newOptions.series = usePieCommonSeries(
        newOptions.series,
        graphicColors,
        newOptions.color,
        layout);
    if (newOptions.series && !Array.isArray(newOptions.series)) {
        newOptions.series = [newOptions.series];
    }
    return merge({}, newOptions);
});


watch(() => renderOptions.value.series, () => {
    legendSelectedMaps.value.clear();

    if (!Array.isArray(renderOptions.value.series)) return;
    (renderOptions.value.series[0]?.data as DataRecord[])?.forEach((item) => {
        if (!item.name) {
            return window.console.warn('item.name is required');
        }
        legendSelectedMaps.value.set(item.name, {
            selected: true,
            ...item as DataRecord,
        });
    });
}, {
    deep: 2,
    immediate: true,
});

function dispatchAction(type: ActiveType, name: DataRecord['name']) {
    chartInstance.value?.dispatchAction({
        type,
        name,
    });
}

function togggleLegendSelected(name: DataRecord['name']) {
    if (!legendSelectedMaps.value.has(name)) return;
    const record = legendSelectedMaps.value.get(name);
    dispatchAction(record?.selected ? 'legendUnSelect' : 'legendSelect', name);
    legendSelectedMaps.value.set(name, {
        ...record as DataRecord,
        selected: !(record?.selected),
    });
}

const $emit = defineEmits<{
    (e: 'legend:click', d: DataRecord)
}>();

function legendClick(record: DataRecord) {
    togggleLegendSelected(record.name);
    $emit('legend:click', record);
}
const isNavtiveLegend = computed(() => {
    const legend = renderOptions.value.legend;
    if (Array.isArray(legend)) return false;
    return !legend?.show;
});
const customLegendData = computed(() => {
    return renderOptions.value?.series?.[0].data ?? [];
});
function getLegendStyle(index: number, record: DataRecord) {
    const { color = [] } = renderOptions.value ?? {};
    return {
        '--item-color': color[index],
        '--unselect-color': !legendSelectedMaps.value.get(record.name)?.selected ? 0.5 : 1,
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

const wrapperPading = computed(() => legendPosition === 'absolute' ? `0 ${legendWidth}` : '0');

onBeforeUnmount(stop);
defineExpose({
    chartInstance,
    stop,
    setOptions,
    dispatchAction,
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
        position: relative;
        padding: v-bind(wrapperPading);
        box-sizing: border-box;

        &__legend {
            max-width: var(--legendWidth);
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            overflow: auto;
            height: 100%;
            position: v-bind(legendPosition);
            z-index: 2;
            left: v-bind(legendLeft);
            top: v-bind(legendTop);
            transform: translate(-50%, -50%);

            // 美化滚动条样式
            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            &::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background: rgba(0, 127, 206, 0.1);
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 127, 206, 0.5);
            }

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
                opacity: var(--unselect-color, 1);

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
            flex: 1;

            &__inner {
                width: 100%;
                height: 100%;

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

.lc-pie {
    &--innerLabel {
        .lc-pie {
            &__wrapper {
                &__chart {
                    &__inner {
                        &::before {
                            transform: translate(-50%, -50%) scale(0.36);

                        }

                        &::after {
                            transform: translate(-50%, -50%) scale(0.68);
                        }
                    }
                }
            }
        }
    }
}
</style>