import { NameTypes } from '../icon/icons';
import { PropType } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        value?(_: {}): any;
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
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    icon: {
        type: PropType<NameTypes>;
    };
    unit: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
    };
    value: {
        type: NumberConstructor;
    };
    fixed: {
        type: BooleanConstructor;
    };
    decimal: {
        type: NumberConstructor;
    };
    icon: {
        type: PropType<NameTypes>;
    };
    unit: {
        type: StringConstructor;
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
