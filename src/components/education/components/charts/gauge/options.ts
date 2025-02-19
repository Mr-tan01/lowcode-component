import { type EChartsCoreOption, type EChartsOption } from "echarts";
import merge from "lodash-es/merge";
import { deepMergeArrayOptions } from "~/@mmj-code-lib/lowcode/es/components";
import { gaugeColors, gaugeSeriesRecordOptions, gaugeTitleOptions } from "./const";
import { commonTooltipOptions } from "@/components/education/common/components/Charts/options";

const commonGaugeOptions: EChartsOption = {
    tooltip: commonTooltipOptions,
    title: gaugeTitleOptions,
    series: gaugeSeriesRecordOptions,
    color: gaugeColors,
}

export function useCommonGaugeOptions(opts: EChartsOption | EChartsCoreOption): EChartsOption {
    deepMergeArrayOptions(opts, Object.keys(commonGaugeOptions), Object.values(commonGaugeOptions));
    return merge({}, commonGaugeOptions, opts);
}