import { deepMergeArrayOptions } from "~/@mmj-code-lib/lowcode/es/components";
import { innerLabelSeries1, pieColors, pieLegend, pieSeriesRecord, pieTitleOptions, pieTooltipOptions } from "./const";
import { type EChartsCoreOption, type EChartsOption } from "echarts";
import merge from "lodash-es/merge";
import { type LinearGradient } from "echarts/types/src/util/graphic";
import { type LayoutType } from "./types";
import type { OptionDataValueNumeric, ZRColor } from "echarts/types/src/util/types";

export const pieCommonOptions: EChartsOption = {
    title: pieTitleOptions,
    tooltip: pieTooltipOptions,
    legend: pieLegend,
    color: pieColors,
};

export function usePieCommonSeries(
    series: EChartsOption['series'],
    linearGradients: string[] | LinearGradient[],
    colors: EChartsOption['color'],
    layout: LayoutType,
): EChartsOption['series'] {
    const dynamicSeries = layout === 'innerLabel' ? innerLabelSeries1 : pieSeriesRecord;
    const newColors = Array.isArray(colors) ? colors : colors ? [colors] : [];

    if (Array.isArray(series)) {
        return series.map((serie) => {
            serie.data = usePieSeriesData(serie!.data as OptionDataValueNumeric[], newColors);
            return merge(getInnerSeries(linearGradients), dynamicSeries, serie);
        });
    }
    series!.data = usePieSeriesData(series!.data as OptionDataValueNumeric[], newColors);
    return merge(getInnerSeries(linearGradients), dynamicSeries, series);
}
function getInnerSeries(linearColors: string[] | LinearGradient[]) {
    return {
        itemStyle: {
            color: function (params) {
                return linearColors[params.dataIndex % linearColors.length];
            },
        },
    }
}
function usePieSeriesData(data: OptionDataValueNumeric[], newColors: ZRColor[]) {
    return ((data ?? []) as OptionDataValueNumeric[]).map((item, ckey) => merge({
        label: {
            rich: {
                prop: {
                    color: newColors[ckey],
                },
                unit: {
                    color: newColors[ckey],
                }
            }
        },
    }, item));
}

export function useCommonPieOptions(opts: EChartsCoreOption | EChartsOption) {
    deepMergeArrayOptions(opts, Object.keys(pieCommonOptions), Object.values(pieCommonOptions));
    return merge({}, pieCommonOptions, opts);
}