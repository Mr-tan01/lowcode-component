import {
    type SeriesOption,
    type EChartsCoreOption,
    type EChartsOption,
} from 'echarts'
import merge from 'lodash-es/merge'
import { deepMergeArrayOptions } from '@mmj-code-lib/lowcode/es/components'
import {
    commonScatterSeries,
    gridOptions,
    legendOptions,
    funnelColors,
    tooltipOptions,
    xAxisOptions,
    yAxisOptions,
} from './const'

export const commonScatterOptions: EChartsOption = {
    tooltip: tooltipOptions,
    legend: legendOptions,
    grid: gridOptions,
    xAxis: xAxisOptions,
    yAxis: yAxisOptions,
    color: funnelColors,
    series: commonScatterSeries,
}
type SeriesDataItemType = {
    name: string
    value: number
}

export function useCommonScatterOptions(
    opts: EChartsCoreOption | EChartsOption,
) {
    deepMergeArrayOptions(
        opts,
        Object.keys(commonScatterOptions),
        Object.values(commonScatterOptions),
    )
    const legendValues = {}
    // @ts-ignore
    ;((opts?.series[0]?.data as SeriesDataItemType[]) ?? []).forEach((item) => {
        legendValues[item.name] = item.value
    })
    return merge(
        {},
        commonScatterOptions,
        {
            legend: [
                {},
                {
                    formatter(name) {
                        return name + '：' + legendValues[name] + '%'
                    },
                },
            ],
        },
        opts,
    )
}

function mregeSeriesRecord(newSeries: SeriesOption) {
    return merge({}, commonScatterSeries, newSeries)
}

export function useCommonScatterSeries(
    series: EChartsOption['series'],
): EChartsOption['series'] {
    if (Array.isArray(series)) {
        return series.map((item) => {
            return mregeSeriesRecord(item)
        })
    }
    return mregeSeriesRecord(series ?? {})
}
