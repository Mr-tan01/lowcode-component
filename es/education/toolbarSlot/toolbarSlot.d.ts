declare const formattedValue: import('vue').ModelRef<number, string, number, number>;
type __VLS_Props = {
    float?: boolean;
    flex?: boolean;
};
type __VLS_PublicProps = {
    'formattedValue'?: typeof formattedValue['value'];
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        toolbarStart?(_: {}): any;
        toolbarRefresh?(_: {}): any;
        toolbarTimePicker?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:formattedValue": (value: number) => any;
} & {
    refresh: (data: {
        value: number;
        valueString: string;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onRefresh?: ((data: {
        value: number;
        valueString: string;
    }) => any) | undefined;
    "onUpdate:formattedValue"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
