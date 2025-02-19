import { type SeriesOption, type EChartsCoreOption, type EChartsOption } from "echarts";
export declare function useGaugeSeriesOptions(series: EChartsOption['series']): ({
    data: never[];
} & SeriesOption) | ({
    data: never[];
} & SeriesOption)[];
export declare function useCommonGaugeOptions(opts: EChartsOption | EChartsCoreOption): EChartsOption;
