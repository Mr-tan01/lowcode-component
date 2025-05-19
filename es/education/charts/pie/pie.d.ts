import { EChartsCoreOption, EChartsOption, ECharts, graphic } from 'echarts';
import { LayoutType } from './types';
import { LegendActiveType, LegendDataRecord, LegendSelectParams } from '../../../common/components/Charts/legend';
type __VLS_Props = {
    options: EChartsOption | EChartsCoreOption;
    debounceTime?: number;
    legendLabel?: (name: string, value: number) => string;
    graphicColors?: graphic.LinearGradient[];
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    showCustomLegend?: boolean;
    layout?: LayoutType;
    legendLeft?: string;
    legendTop?: string;
    legendPosition?: "relative" | "absolute";
    legendWidth?: string;
};
declare function dispatchAction(type: LegendActiveType, name: LegendDataRecord["name"]): void;
declare function setOptions(option: EChartsCoreOption, notMerge?: boolean, lazyUpdate?: boolean): void;
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    chartInstance: import('vue').ShallowRef<ECharts | undefined, ECharts | undefined>;
    stop: () => void;
    setOptions: typeof setOptions;
    dispatchAction: typeof dispatchAction;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "legend:click": (d: LegendDataRecord) => any;
    "legend:toggleSelect": (value: LegendSelectParams) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onLegend:click"?: ((d: LegendDataRecord) => any) | undefined;
    "onLegend:toggleSelect"?: ((value: LegendSelectParams) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    chartDom: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
