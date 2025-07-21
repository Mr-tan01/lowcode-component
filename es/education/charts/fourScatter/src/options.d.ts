import { EChartsCoreOption, EChartsOption } from 'echarts';
export declare const commonScatterOptions: EChartsOption;
export declare function useCommonScatterOptions(opts: EChartsCoreOption | EChartsOption, isDefaultTooltip: boolean): EChartsOption | (EChartsOption & EChartsCoreOption);
export declare function useCommonScatterSeries(series: EChartsOption['series']): EChartsOption['series'];
