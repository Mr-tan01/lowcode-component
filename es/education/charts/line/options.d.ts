import { type EChartsCoreOption, type SeriesOption, type EChartsOption, type LineSeriesOption } from "echarts";
export declare const commonLineOptions: EChartsOption;
export declare const commonLineSeries: LineSeriesOption;
export declare function useCommonLineOptions(opts: EChartsCoreOption | EChartsOption): EChartsOption | (EChartsOption & EChartsCoreOption);
export declare function mergeLineRecord(index: number, item: SeriesOption): SeriesOption;
export declare function useCommonLineSeries(series: EChartsOption['series']): EChartsOption['series'];
