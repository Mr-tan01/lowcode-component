import { EChartsCoreOption, EChartsOption, graphic } from 'echarts';
import { LayoutType } from './types';
export declare const pieCommonOptions: EChartsOption;
export declare function usePieCommonSeries(series: EChartsOption['series'], linearGradients: string[] | graphic.LinearGradient[], colors: EChartsOption['color'], layout: LayoutType): EChartsOption['series'];
export declare function useCommonPieOptions(opts: EChartsCoreOption | EChartsOption): EChartsOption | (EChartsOption & EChartsCoreOption);
