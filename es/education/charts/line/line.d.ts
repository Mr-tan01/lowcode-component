import { Ref } from 'vue';
import { EChartsCoreOption, EChartsOption } from 'echarts';
type __VLS_Props = {
    options?: EChartsCoreOption | EChartsOption;
    events?: {
        [eventName: string]: (chartBar: Ref) => (...args: any) => void;
    };
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    chartLineRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        opts: {
            type: import('vue').PropType<EChartsOption>;
            default: () => {};
        };
        transFormSizeKeys: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
    }>>, {
        chartInstance: import('vue').ShallowRef<import('echarts').ECharts | null | undefined>;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        transFormSizeKeys: string[];
        opts: echarts.EChartsOption;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        opts: {
            type: import('vue').PropType<EChartsOption>;
            default: () => {};
        };
        transFormSizeKeys: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
    }>>, {
        chartInstance: import('vue').ShallowRef<import('echarts').ECharts | null | undefined>;
    }, {}, {}, {}, {
        transFormSizeKeys: string[];
        opts: echarts.EChartsOption;
    }> | null;
}, HTMLDivElement>;
export default _default;
