import { EChartsCoreOption, EChartsOption } from 'echarts';
export declare const commonScatterOptions: EChartsOption;
export declare function useCommonScatterOptions(opts: EChartsCoreOption | EChartsOption): EChartsOption & ({
    legend: ({
        formatter?: undefined;
    } | {
        formatter(name: any): string;
    })[];
} & (EChartsOption | EChartsCoreOption));
export declare function useCommonScatterSeries(series: EChartsOption['series']): EChartsOption['series'];
