<template>
    <div
        class="lc-pie"
        :class="[`lc-pie--${layout}`]"
        :style="{
            '--legendWidth': legendWidth,
        }"
    >
        <div class="lc-pie__wrapper">
            <div v-if="showCustomLegend" class="lc-pie__wrapper__legend">
                <CommonLegend
                    :legend-label
                    :options="renderOptions"
                    @legend:click="legendClick"
                    @legend:toggle-select="legendToggleSelect"
                ></CommonLegend>
            </div>
            <div class="lc-pie__wrapper__chart">
                <div
                    ref="chartDom"
                    class="lc-pie__wrapper__chart__inner"
                    :class="[notHasTitle ? 'lc-pie__wrapper__chart__inner--not--title' : 'lc-pie__wrapper__chart__inner--title']"
                ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type EChartsCoreOption, type EChartsOption, init, type ECharts } from 'echarts'
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watchPostEffect, useTemplateRef } from 'vue'
import { useCommonPieOptions, usePieCommonSeries } from './options'
import merge from 'lodash-es/merge'
import { useResizeObserver } from '@vueuse/core'
import { debounce, cloneDeep } from 'lodash-es'
import { graphic } from 'echarts'
import { innerGraphicColors } from './const'
import { type LayoutType } from './types'
import {
    CommonLegend,
    type LegendActiveType,
    type LegendDataRecord,
    type LegendSelectParams,
} from '@/components/education/common/components/Charts/legend'
import { transformEChartsConfig } from '@mmj-code-lib/lowcode/es/shared'
import { scale } from 'mmjs-core'
const {
    options,
    debounceTime = 300,
    graphicColors = innerGraphicColors,
    legendLabel = name => name,
    flexDirection = 'row',
    showCustomLegend = true,
    layout = 'default',
    legendLeft = '20%',
    legendTop = '50%',
    legendPosition = 'relative',
    legendWidth = scale('128px'),
} = defineProps<{
    options: EChartsOption | EChartsCoreOption
    debounceTime?: number
    legendLabel?: (name: string, value: number) => string
    graphicColors?: graphic.LinearGradient[]
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
    showCustomLegend?: boolean
    layout?: LayoutType
    legendLeft?: string
    legendTop?: string
    legendPosition?: 'relative' | 'absolute'
    legendWidth?: string
}>()
const chartDomRef = useTemplateRef('chartDom')
const chartInstance = shallowRef<ECharts>()
const cloneDeepOptions = ref()
const renderOptions = computed(() => {
    const newOptions = useCommonPieOptions(options)
    newOptions.series = usePieCommonSeries(newOptions.series, graphicColors, newOptions.color, layout)
    if (newOptions.series && !Array.isArray(newOptions.series)) {
        newOptions.series = [newOptions.series]
    }
    return merge({}, newOptions)
})

function dispatchAction(type: LegendActiveType, name: LegendDataRecord['name']) {
    chartInstance.value?.dispatchAction({
        type,
        name,
    })
}

const $emit = defineEmits<{
    (e: 'legend:click', d: LegendDataRecord): void
    (e: 'legend:toggleSelect', value: LegendSelectParams): void
}>()

function legendClick(record: LegendDataRecord) {
    $emit('legend:click', record)
}

function legendToggleSelect(record: LegendSelectParams) {
    dispatchAction(record.type, record.name)
    $emit('legend:toggleSelect', record)
}

onMounted(initChart)
watchPostEffect(() => {
    setOptions(renderOptions.value, true)
})

const notHasTitle = computed(() => {
    const { title } = renderOptions.value
    if (Array.isArray(title)) {
        return title.every(item => item?.show === false)
    }
    return title?.show === false
})
function initChart() {
    chartInstance.value = init(chartDomRef.value, renderOptions.value)
    // 因为getOption只能在chart实例setOption，再合并配置
    chartInstance.value?.setOption(renderOptions.value)
    cloneDeepOptions.value = cloneDeep(merge(chartInstance.value?.getOption(), renderOptions.value))
    const adaptOptions = transformEChartsConfig(cloneDeepOptions.value)
    chartInstance.value?.setOption(adaptOptions)
}

function setOptions(option: EChartsOption, notMerge?: boolean, lazyUpdate?: boolean) {
    const adaptOptions = transformEChartsConfig({ ...cloneDeepOptions.value, ...option })
    chartInstance.value?.setOption(adaptOptions, notMerge, lazyUpdate)
}
const cssBlockSize = ref('100%')
function resizeChart(entries) {
    const entry = entries[0]
    const { width, height } = entry.contentRect
    cssBlockSize.value = scale(Math.min(width, height)) + 'px'
    chartInstance.value?.resize()
}
const { stop } = useResizeObserver(chartDomRef, debounce(resizeChart, debounceTime))

const wrapperPading = computed(() => (legendPosition === 'absolute' ? `0 ${scale(legendWidth)}` : '0'))
onBeforeUnmount(stop)
defineExpose({
    chartInstance,
    stop,
    setOptions,
    dispatchAction,
})
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
            min-width: var(--legendWidth);
            flex: 1;
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
        }

        &__chart {
            display: flex;
            flex-direction: column;
            flex: 1;
            position: relative;

            &__inner--not--title {
                &::before {
                    background: url(./images/not_title.svg) no-repeat 100%/100%;
                }
            }
            &__inner--title {
                &::before {
                    background: url(./images//inset.svg) no-repeat 100%/100%;
                }
            }
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
