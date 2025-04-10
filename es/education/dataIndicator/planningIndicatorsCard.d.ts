import { PropType } from 'vue';
export type Item = {
    title: string;
    value: number;
    unit: string;
    decimal?: number;
    maxLength?: number;
};
export type Data = {
    header: string;
    icon: string;
    leftItem: Item;
    righItem: Item;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    unit: {
        type: StringConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    data: {
        type: PropType<Data>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    unit: {
        type: StringConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    data: {
        type: PropType<Data>;
    };
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
