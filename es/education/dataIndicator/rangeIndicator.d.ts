import { PropType } from 'vue';
type Data = {
    label?: string;
    value?: number;
    unit?: string;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<Data[]>;
    };
    unit: {
        type: StringConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<Data[]>;
    };
    unit: {
        type: StringConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
