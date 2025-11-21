<template>
    <div ref="bubbleDomRef" class="bubble"></div>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, computed, onMounted } from 'vue'
import defaultImage from './images/default.png'
import hoverImg from './images/hover_image.png' // 悬浮时的图片
import { useResizeObserver } from '@vueuse/core'
import { debounce, merge } from 'lodash-es'
import { baseOptions } from './options' // 基础配置
import { type EChartsCoreOption, type EChartsOption, init } from 'echarts'
// @ts-expect-error
import { scale } from 'mmjs-core/utils/scale'
const {
    data = [],
    debounceTime = 300,
    chartOptions = {},
} = defineProps<{
    data?: { label: string; value: number; symbolSize?: number[] }[]
    debounceTime?: number
    chartOptions?: EChartsCoreOption | EChartsOption
}>()

const bubbleDomRef = ref()
const chartInstance = ref()

const formatData = computed(() => {
    return data.map(item => {
        return {
            name: item.label,
            symbolSize: item.symbolSize || [scale(180), scale(129)],
            hoverSymbolSize: item.symbolSize || [scale(200), scale(150)],
            draggable: true,
            symbol: `image://${defaultImage}`,
            ...item,
        }
    })
})

const renderOptions = computed(() => {
    const merged = merge(
        {},
        baseOptions,
        {
            series: [
                {
                    data: formatData.value,
                },
            ],
        },
        chartOptions,
    )
    return merged
})

const initChart = () => {
    chartInstance.value = init(bubbleDomRef.value)
    chartInstance.value.setOption(renderOptions.value, true)
    chartInstance.value?.on('mouseover', function (params) {
        // 处理鼠标悬浮事件
        if (params.dataType === 'node') {
            const newData = formatData.value.map(node => ({
                ...node,
                symbol: node.name === params?.data?.name ? `image://${hoverImg}` : `image://${defaultImage}`,
                symbolSize: node.name === params.data.name ? node.hoverSymbolSize : node.symbolSize,
                label:
                    node.name === params.data.name
                        ? {
                              normal: {
                                  formatter: function (params) {
                                      let name = params.data.name
                                      const match = name.match(/^([^(]+)(\([^)]+\))?$/)
                                      if (match) {
                                          const desc = match[1]
                                          const unit = match[2] || ''
                                          let result = ''
                                          const wrapLen = 5
                                          for (let i = 0; i < desc.length; i += wrapLen) {
                                              result += desc.slice(i, i + wrapLen)
                                              if (i + wrapLen < desc.length) result += '\n'
                                          }
                                          name = result + unit
                                      }
                                      return '{value|' + params.data.value + '}\n{name|' + name + '}'
                                  },
                                  show: true,
                                  rich: {
                                      value: {
                                          fontSize: scale(32 * 1.2),
                                          lineHeight: scale(24 * 1.2),
                                          align: 'center',
                                          color: 'rgb(9, 238, 241)',
                                      },
                                      name: {
                                          fontSize: scale(18 * 1.2),
                                          lineHeight: scale(20 * 1.2),
                                          align: 'center',
                                          color: 'rgb(9, 238, 241)',
                                      },
                                  },
                              },
                              align: 'center',
                          }
                        : {},
            }))
            chartInstance.value?.setOption({
                series: [
                    {
                        data: newData,
                    },
                ],
            })
        }
    })
    chartInstance.value?.on('mouseout', function () {
        chartInstance.value?.setOption({
            series: [
                {
                    label: {
                        normal: {
                            formatter: function (params) {
                                let name = params.data.name
                                const match = name.match(/^([^(]+)(\([^)]+\))?$/)
                                if (match) {
                                    const desc = match[1]
                                    const unit = match[2] || ''
                                    let result = ''
                                    const wrapLen = 5
                                    for (let i = 0; i < desc.length; i += wrapLen) {
                                        result += desc.slice(i, i + wrapLen)
                                        if (i + wrapLen < desc.length) result += '\n'
                                    }
                                    name = result + unit
                                }
                                return '{value|' + params.data.value + '}\n{name|' + name + '}'
                            },
                            show: true,
                            rich: {
                                value: {
                                    fontSize: scale(32),
                                    lineHeight: scale(24),
                                    align: 'center',
                                    color: 'rgb(9, 238, 241)',
                                },
                                name: {
                                    fontSize: scale(18),
                                    lineHeight: scale(20),
                                    align: 'center',
                                    color: 'rgb(9, 238, 241)',
                                },
                            },
                        },
                        align: 'center',
                    },
                    data: formatData.value,
                },
            ],
        })
    })
}
const resizeChart = () => {
    chartInstance.value?.resize()
}

const { stop } = useResizeObserver(bubbleDomRef, debounce(resizeChart, debounceTime))
onMounted(initChart)
onBeforeUnmount(stop)
</script>
<style lang="scss" scoped>
.bubble {
    width: 100%;
    height: 100%;
}
</style>
