import { EChartsOption, BarSeriesOption, EChartsCoreOption } from 'echarts';
export declare const commonBarOptions: EChartsOption;
export declare const horizontalBarOptions: EChartsOption;
export declare const commonBarSeries: BarSeriesOption;
export declare const smallBarSeries: BarSeriesOption;
export declare function useCommonBarOptions(opts: EChartsOption | EChartsCoreOption, props: {
    isHorizontal: Boolean;
}): EChartsOption | (EChartsOption & EChartsCoreOption);
export declare function useCommonBarSeries(series: EChartsOption['series'], props: {
    stack: Boolean;
}): EChartsOption['series'];
