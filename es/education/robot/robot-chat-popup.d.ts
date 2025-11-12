import { PropType } from 'vue';
import { AiConfigProps } from './types';
import { ImageHideDir } from './const';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        center?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    isFocus: {
        type: BooleanConstructor;
    };
    hidDir: {
        type: PropType<ImageHideDir>;
    };
    aiConfig: {
        type: PropType<AiConfigProps>;
    };
    maxHeight: {
        type: StringConstructor;
    };
    popupSize: {
        type: PropType<"small" | "medium" | "large">;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clickQuick: (item: {
        text: string;
    }) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    isFocus: {
        type: BooleanConstructor;
    };
    hidDir: {
        type: PropType<ImageHideDir>;
    };
    aiConfig: {
        type: PropType<AiConfigProps>;
    };
    maxHeight: {
        type: StringConstructor;
    };
    popupSize: {
        type: PropType<"small" | "medium" | "large">;
    };
}>> & Readonly<{
    onClickQuick?: ((item: {
        text: string;
    }) => any) | undefined;
}>, {
    isFocus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
