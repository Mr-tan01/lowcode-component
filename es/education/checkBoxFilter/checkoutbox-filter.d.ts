import { PropType } from 'vue';
export type FilterItem = {
    label: string;
    value: number | string;
};
export type FilterList = {
    label: string;
    children?: FilterItem[];
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    row: {
        type: NumberConstructor;
    };
    dataList: {
        type: PropType<FilterList[]>;
    };
    isCheckAll: {
        type: BooleanConstructor;
    };
    value: {
        type: PropType<(string | number)[]>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: (string | number)[]) => any;
} & {
    check: (value: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    row: {
        type: NumberConstructor;
    };
    dataList: {
        type: PropType<FilterList[]>;
    };
    isCheckAll: {
        type: BooleanConstructor;
    };
    value: {
        type: PropType<(string | number)[]>;
    };
}>> & Readonly<{
    onCheck?: ((value: (string | number)[]) => any) | undefined;
    "onUpdate:value"?: ((value: (string | number)[]) => any) | undefined;
}>, {
    isCheckAll: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
