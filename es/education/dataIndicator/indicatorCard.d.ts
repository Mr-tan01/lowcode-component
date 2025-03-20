import { PropType } from 'vue';
declare const SIZE: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
type Size = typeof SIZE;
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: NumberConstructor;
    };
    hint: {
        type: StringConstructor;
    };
    size: {
        type: PropType<Size[keyof Size]>;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    type: {
        type: PropType<"border" | "noborder">;
    };
    tip: {
        type: StringConstructor;
    };
    valueColor: {
        type: StringConstructor;
    };
    hintColor: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: NumberConstructor;
    };
    hint: {
        type: StringConstructor;
    };
    size: {
        type: PropType<Size[keyof Size]>;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    type: {
        type: PropType<"border" | "noborder">;
    };
    tip: {
        type: StringConstructor;
    };
    valueColor: {
        type: StringConstructor;
    };
    hintColor: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
