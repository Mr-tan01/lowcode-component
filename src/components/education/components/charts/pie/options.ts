import { deepMergeArrayOptions } from "~/@mmj-code-lib/lowcode/es/components";
import { pieColors, pieLegend, pieSeriesRecord, pieTitleOptions, pieTooltipOptions } from "./const";
import { type EChartsCoreOption, type EChartsOption } from "echarts";
import merge from "lodash-es/merge";
import { type LinearGradient } from "echarts/types/src/util/graphic";

export const pieCommonOptions: EChartsOption = {
    title: pieTitleOptions,
    tooltip: pieTooltipOptions,
    legend: pieLegend,
    color: pieColors,
};

export function usePieCommonSeries(series: EChartsOption['series'], colors: string[] | LinearGradient[]): EChartsOption['series'] {
    const innerSeries = {
        itemStyle: {
            color: function (params) {
                return colors[params.dataIndex % colors.length];
            }
        },
    }
    if (Array.isArray(series)) {
        return series.map(serie => merge(innerSeries, pieSeriesRecord, serie));
    }
    return merge(innerSeries, series, pieSeriesRecord);
}

export function useCommonPieOptions(opts: EChartsCoreOption | EChartsOption) {
    deepMergeArrayOptions(opts, Object.keys(pieCommonOptions), Object.values(pieCommonOptions));
    return merge({}, pieCommonOptions, opts);
}