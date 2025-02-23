import { PropType } from 'vue';
import { EChartsCoreOption, EChartsOption } from 'echarts';
type __VLS_Props = {
    legendLabel?: ((name: string, value: number) => string);
    options: EChartsCoreOption | EChartsOption;
    showCustomLegend?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    baseChart: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        debounceTime: NumberConstructor;
        options: PropType<EChartsOption>;
        notMerge: BooleanConstructor;
    }>> & Readonly<{}>, {
        chartInstance: import('echarts').ECharts | undefined;
        setOptions: (options: EChartsOption, deep: boolean, lazyUpdate?: boolean) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        notMerge: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        commonChart: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        debounceTime: NumberConstructor;
        options: PropType<EChartsOption>;
        notMerge: BooleanConstructor;
    }>> & Readonly<{}>, {
        chartInstance: import('echarts').ECharts | undefined;
        setOptions: (options: EChartsOption, deep: boolean, lazyUpdate?: boolean) => void;
    }, {}, {}, {}, {
        notMerge: boolean;
    }> | null;
}, HTMLDivElement>;
export default _default;
