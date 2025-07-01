import { type SeriesOption, type EChartsCoreOption, type EChartsOption } from 'echarts'
import merge from 'lodash-es/merge'
import { deepMergeArrayOptions } from '@mmj-code-lib/lowcode/es/components'
import { commonScatterSeries, gridOptions, legendOptions, scatterColors, tooltipOptions, xAxisOptions, yAxisOptions } from './const'
import { setRgbaAlpha } from 'lowcode-share/es/share'

export const commonScatterOptions: EChartsOption = {
    tooltip: tooltipOptions,
    legend: legendOptions,
    grid: gridOptions,
    xAxis: xAxisOptions,
    yAxis: yAxisOptions,
    color: scatterColors,
    series: commonScatterSeries,
}

export function useCommonScatterOptions(opts: EChartsCoreOption | EChartsOption, isDefaultTooltip: boolean) {
    if (isDefaultTooltip) {
        Reflect.deleteProperty(commonScatterOptions, 'tooltip')
    }
    deepMergeArrayOptions(opts, Object.keys(commonScatterOptions), Object.values(commonScatterOptions))
    return merge({}, commonScatterOptions, opts)
}

function mregeSeriesRecord(newSeries: SeriesOption, seriesIndex: number) {
    const color = scatterColors[seriesIndex % scatterColors.length]
    return merge(
        {},
        commonScatterSeries,
        {
            itemStyle: {
                color: setRgbaAlpha(color, 0.51),
                borderColor: color,
                shadowBlur: 10,
                shadowColor: 'rgba(0,0,0,0.5)',
            },
            markPoint: {
                emphasis: {
                    itemStyle: {
                        // @ts-ignore
                        borderColor: newSeries?.itemStyle?.borderColor ?? color,
                    },
                },
                data:
                    (
                        newSeries.data as {
                            value: number
                            name: string
                            meta: { tooltipBg: string }
                        }[]
                    )?.map((item, index) => {
                        return {
                            name: item.name,
                            coord: [index, item.value, item],
                            meta: {
                                color,
                                ...(item.meta ?? {}),
                            },
                            item,
                        }
                    }) ?? [],
            },
        },
        newSeries,
    )
}

export function useCommonScatterSeries(series: EChartsOption['series']): EChartsOption['series'] {
    if (Array.isArray(series)) {
        return series.map((item, index) => {
            return mregeSeriesRecord(item, index)
        })
    }
    return mregeSeriesRecord(series ?? {}, 0)
}
