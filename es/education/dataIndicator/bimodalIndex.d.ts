import { PropType } from 'vue';
type Data = {
    label?: string;
    value?: number | string;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<Data[]>;
    };
    empty: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<Data[]>;
    };
    empty: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
