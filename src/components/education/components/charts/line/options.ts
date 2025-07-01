import { type EChartsCoreOption, type SeriesOption, type EChartsOption, type LineSeriesOption } from 'echarts'
import merge from 'lodash-es/merge'
import { deepMergeArrayOptions } from '@mmj-code-lib/lowcode/es/components'
import { defLinearGradients, gridOptions, legendOptions, lineColors, tooltipOptions, xAxisOptions, yAxisOptions } from './const'
import lineSymbol from './images/symobl.png'
import lineSymbol2 from './images/symobl2.png'
import { useCommonBarSeries } from '@/components/education/components/charts/bar/options'
const symbolList = [lineSymbol, lineSymbol2]

export const commonLineOptions: EChartsOption = {
    tooltip: tooltipOptions,
    legend: legendOptions,
    grid: gridOptions,
    xAxis: xAxisOptions,
    yAxis: yAxisOptions,
    color: lineColors,
}
export const commonLineSeries: LineSeriesOption = {
    symbol: `image://${symbolList[0]}`,
    symbolSize: 23,
    type: 'line',
    lineStyle: {
        width: 1,
        type: 'solid',
        color: lineColors[0],
    },
    markPoint: {
        symbolSize: [0, 0],
    },
    areaStyle: {
        opacity: 0.32,
        color: defLinearGradients[0],
    },
}

export function useCommonLineOptions(opts: EChartsCoreOption | EChartsOption) {
    deepMergeArrayOptions(opts, Object.keys(commonLineOptions), Object.values(commonLineOptions))
    return merge({}, commonLineOptions, opts)
}

export function mergeLineRecord(index: number, item: SeriesOption): SeriesOption {
    return merge(
        {},
        merge({}, commonLineSeries, {
            symbol: `image://${symbolList[index]}`,

            lineStyle: {
                color: lineColors[index] ?? lineColors[0],
            },
            areaStyle: {
                color: defLinearGradients[index] ?? defLinearGradients[0],
            },
        }),
        item,
    )
}

export function useCommonLineSeries(series: EChartsOption['series']): EChartsOption['series'] {
    if (Array.isArray(series)) {
        return series.map((item, index) => {
            if (item.type === 'line' || !item.type) {
                return mergeLineRecord(index, item)
            } else if (item.type === 'bar') {
                const newBarSeries = useCommonBarSeries(
                    merge(
                        {
                            itemStyle: {
                                color: defLinearGradients[index] ?? defLinearGradients[0],
                            },
                            showBackground: false,
                        },
                        item,
                    ),
                    { stack: false },
                )
                return newBarSeries as SeriesOption
            }
            return item
        })
    }
    return merge({}, commonLineSeries, series)
}
