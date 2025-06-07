import { PropType } from 'vue';
export type ProgereeDataList = {
    label: string;
    value: number;
    unit: string;
    color: string;
    tootal: number;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    dataList: {
        type: PropType<ProgereeDataList[]>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    dataList: {
        type: PropType<ProgereeDataList[]>;
    };
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    valueRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
