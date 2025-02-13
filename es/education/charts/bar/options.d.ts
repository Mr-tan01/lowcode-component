import { type EChartsOption, type BarSeriesOption } from "echarts";
import { YAXisOption } from "echarts/types/src/coord/cartesian/AxisModel";
export declare const barColors: string[];
export declare const yAxisOptions: YAXisOption;
export declare const commonBarOptions: EChartsOption;
export declare const horizontalBarOptions: EChartsOption;
export declare const commonBarSeries: BarSeriesOption;
export declare const smallBarSeries: any;
export declare function useCommonBarOptions(opt: EChartsOption, props: {
    isHorizontal: Boolean;
}): any;
export declare function useCommonBarSeries(series: EChartsOption['series'], props: {
    stack: Boolean;
}): any;
