import { PropType } from 'vue';
type ListType = {
    label: string;
    value: string;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    icon: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    msg: {
        type: PropType<ListType[]>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    msg: {
        type: PropType<ListType[]>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
