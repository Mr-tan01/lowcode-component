import { SeriesOption, EChartsCoreOption, EChartsOption } from 'echarts';
export declare function useGaugeSeriesOptions(series: EChartsOption['series']): ({
    data: never[];
} & (SeriesOption | undefined)) | ({
    data: never[];
} & (SeriesOption | undefined))[];
export declare function useCommonGaugeOptions(opts: EChartsOption | EChartsCoreOption): EChartsOption;
