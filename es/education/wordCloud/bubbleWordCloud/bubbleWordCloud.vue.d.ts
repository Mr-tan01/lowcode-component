type WordCloudData = {
    name: string;
    value: number;
    color?: string;
};
type __VLS_Props = {
    gridSize?: number;
    maxWord?: number;
    data: WordCloudData[];
    ballSize?: number;
    title?: string;
    tooltip?: {
        formatter: (record: WordCloudData, index: number) => string;
    };
    word?: {
        formatter?: (record: WordCloudData, index: number) => string;
    };
    enableAnimate?: boolean;
    animateSpeed?: number;
    animateStep?: number;
    type?: "text" | "text-circle" | 'circle' | 'shadow';
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (record: WordCloudData, index: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>> & Readonly<{
    onClick?: (record: WordCloudData, index: number) => any;
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
