import { type EChartsCoreOption, type EChartsOption } from 'echarts';
type __VLS_Props = {
    legendLabel?: ((name: string, value: number) => string);
    options: EChartsCoreOption | EChartsOption;
    showCustomLegend?: boolean;
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>, any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
