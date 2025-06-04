import { PropType } from 'vue';
type Data = {
    title?: string;
    lefValue?: number;
    rigValue?: number;
    lefUnit?: string;
    rigUnit?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        image?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    letData: {
        type: PropType<Data[]>;
    };
    rigData: {
        type: PropType<Data[]>;
    };
    lefUnit: {
        type: StringConstructor;
    };
    rigUnit: {
        type: StringConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    letData: {
        type: PropType<Data[]>;
    };
    rigData: {
        type: PropType<Data[]>;
    };
    lefUnit: {
        type: StringConstructor;
    };
    rigUnit: {
        type: StringConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
