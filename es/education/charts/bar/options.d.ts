import { EChartsOption, BarSeriesOption, EChartsCoreOption } from 'echarts';
export declare const commonBarOptions: EChartsOption;
export declare const horizontalBarOptions: EChartsOption;
export declare const commonBarSeries: BarSeriesOption;
export declare const smallBarSeries: BarSeriesOption;
export declare function useCommonBarOptions(opts: EChartsOption | EChartsCoreOption, props: {
    isHorizontal: boolean;
}): EChartsOption | (EChartsOption & EChartsCoreOption);
export declare function useCommonBarSeries(series: EChartsOption['series'], props: {
    stack: boolean;
}): EChartsOption['series'];
