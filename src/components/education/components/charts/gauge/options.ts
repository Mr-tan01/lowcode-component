import {
    type SeriesOption,
    type EChartsCoreOption,
    type EChartsOption,
} from 'echarts'
import merge from 'lodash-es/merge'
import { deepMergeArrayOptions } from '@mmj-code-lib/lowcode/es/components'
import {
    gaugeColors,
    gaugeInnerGraphicColors,
    gaugeSeriesRecordOptions,
    gaugeTitleOptions,
} from './const'
import { commonTooltipOptions } from '@/components/education/common/components/Charts/options'

const commonGaugeOptions: EChartsOption = {
    tooltip: commonTooltipOptions,
    title: gaugeTitleOptions,
    series: gaugeSeriesRecordOptions,
    color: gaugeColors,
}
function getInnerSeries(index: number) {
    return {
        itemStyle: {
            color: gaugeInnerGraphicColors[
                index % gaugeInnerGraphicColors.length
            ],
        },
    }
}

function mergeSeriesData(newData: SeriesOption | undefined) {
    const tempData = newData?.data as []
    return merge(
        {
            data:
                tempData?.map((item, index) =>
                    merge(getInnerSeries(index), item),
                ) ?? [],
        },
        newData,
    )
}
export function useGaugeSeriesOptions(series: EChartsOption['series']) {
    if (Array.isArray(series)) {
        return series.map((item) => mergeSeriesData(item))
    }
    return mergeSeriesData(series)
}
export function useCommonGaugeOptions(
    opts: EChartsOption | EChartsCoreOption,
): EChartsOption {
    deepMergeArrayOptions(
        opts,
        Object.keys(commonGaugeOptions),
        Object.values(commonGaugeOptions),
    )
    return merge({}, commonGaugeOptions, opts)
}
