import { PropType } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
    };
    value: {
        type: NumberConstructor;
    };
    unit: {
        type: StringConstructor;
    };
    yearLabel: {
        type: StringConstructor;
    };
    yearValue: {
        type: NumberConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    tip: {
        type: StringConstructor;
    };
    type: {
        type: PropType<"tile" | "skew">;
    };
    subHead: {
        type: StringConstructor;
    };
    subContent: {
        type: StringConstructor;
    };
    subUnit: {
        type: StringConstructor;
    };
    isShowIcon: {
        type: BooleanConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
    };
    value: {
        type: NumberConstructor;
    };
    unit: {
        type: StringConstructor;
    };
    yearLabel: {
        type: StringConstructor;
    };
    yearValue: {
        type: NumberConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    tip: {
        type: StringConstructor;
    };
    type: {
        type: PropType<"tile" | "skew">;
    };
    subHead: {
        type: StringConstructor;
    };
    subContent: {
        type: StringConstructor;
    };
    subUnit: {
        type: StringConstructor;
    };
    isShowIcon: {
        type: BooleanConstructor;
    };
}>> & Readonly<{}>, {
    fixed: boolean;
    isShowIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
