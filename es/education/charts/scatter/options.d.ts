import { EChartsCoreOption, EChartsOption } from 'echarts'
export declare const commonScatterOptions: EChartsOption
export declare function useCommonScatterOptions(
    opts: EChartsCoreOption | EChartsOption,
): EChartsOption | (EChartsOption & EChartsCoreOption)
export declare function useCommonScatterSeries(
    series: EChartsOption['series'],
    colors: string[],
): EChartsOption['series']
