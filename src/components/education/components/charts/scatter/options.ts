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
    scatterColors,
    tooltipOptions,
    xAxisOptions,
    yAxisOptions,
} from './const'
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

export function useCommonScatterOptions(
    opts: EChartsCoreOption | EChartsOption,
) {
    deepMergeArrayOptions(
        opts,
        Object.keys(commonScatterOptions),
        Object.values(commonScatterOptions),
    )
    return merge({}, commonScatterOptions, opts)
}

function mregeSeriesRecord(
    newSeries: SeriesOption,
    seriesIndex: number,
    colors: string[],
) {
    const color = colors[seriesIndex % scatterColors.length]
    return merge(
        {},
        commonScatterSeries,
        {
            itemStyle: {
                color: () => setRgbaAlpha(color, 0.2),
                borderColor: color,
            },
        },
        newSeries,
    )
}

export function useCommonScatterSeries(
    series: EChartsOption['series'],
    colors: string[],
): EChartsOption['series'] {
    if (Array.isArray(series)) {
        return series.map((item, index) => {
            return mregeSeriesRecord(item, index, colors)
        })
    }
    return mregeSeriesRecord(series ?? {}, 0, colors)
}
