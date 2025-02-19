import { type EChartsCoreOption, type EChartsOption, type ECharts } from 'echarts';
import { type LinearGradient } from 'echarts/types/src/util/graphic';
import { type LayoutType } from './types';
import { type LegendActiveType, type LegendDataRecord } from '@/components/education/common/components/Charts/legend';
type __VLS_Props = {
    options: EChartsOption | EChartsCoreOption;
    debounceTime?: number;
    legendLabel?: ((name: string, value: number) => string);
    graphicColors?: LinearGradient[];
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    showCustomLegend?: boolean;
    layout?: LayoutType;
    legendLeft?: string;
    legendTop?: string;
    legendPosition?: 'relative' | 'absolute';
    legendWidth?: string;
};
declare function dispatchAction(type: LegendActiveType, name: LegendDataRecord['name']): void;
declare function setOptions(option: EChartsCoreOption, notMerge?: boolean, lazyUpdate?: boolean): void;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>, {
    chartInstance: import("vue").ShallowRef<ECharts, ECharts>;
    stop: () => void;
    setOptions: typeof setOptions;
    dispatchAction: typeof dispatchAction;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "legend:click": (d: LegendDataRecord) => void;
    "legend:toggleSelect": (value: LegendSelectParams) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>> & Readonly<{
    "onLegend:click"?: (d: LegendDataRecord) => any;
    "onLegend:toggleSelect"?: (value: LegendSelectParams) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
