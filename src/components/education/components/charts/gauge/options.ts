import { type EChartsCoreOption, type EChartsOption } from "echarts";
import merge from "lodash-es/merge";

const commonRadarOptions: EChartsOption = {

}

export function useCommonGaugeOptions(opts: EChartsOption | EChartsCoreOption): EChartsOption {
    return merge({}, commonRadarOptions, opts);
}