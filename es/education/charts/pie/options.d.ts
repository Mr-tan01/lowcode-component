import { type EChartsCoreOption, type EChartsOption } from "echarts";
import { type LinearGradient } from "echarts/types/src/util/graphic";
import { type LayoutType } from "./types";
export declare const pieCommonOptions: EChartsOption;
export declare function usePieCommonSeries(series: EChartsOption['series'], linearGradients: string[] | LinearGradient[], colors: EChartsOption['color'], layout: LayoutType): EChartsOption['series'];
export declare function useCommonPieOptions(opts: EChartsCoreOption | EChartsOption): EChartsOption | (EChartsOption & EChartsCoreOption);
