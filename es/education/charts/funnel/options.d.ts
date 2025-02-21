import { type EChartsCoreOption, type EChartsOption } from "echarts";
export declare const commonScatterOptions: EChartsOption;
export declare function useCommonScatterOptions(opts: EChartsCoreOption | EChartsOption): EChartsOption & ({
    legend: ({
        formatter?: undefined;
    } | {
        formatter(name: any): string;
    })[];
} & (EChartsCoreOption | EChartsOption));
export declare function useCommonScatterSeries(series: EChartsOption['series']): EChartsOption['series'];
