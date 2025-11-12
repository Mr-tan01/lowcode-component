import { RobotBQMapKeys, ImageShowTrigger, ImageHideDir } from './const';
import { AiConfigProps } from './types';
type __VLS_Props = {
    src?: string;
    value?: RobotBQMapKeys;
    width?: string;
    height?: string;
    trigger?: ImageShowTrigger;
    hidDir?: ImageHideDir;
    showPopup?: boolean;
    aiConfig?: AiConfigProps;
    popupContextMaxH?: string;
    draggable?: boolean;
    position?: 'relative' | 'absolute' | 'fixed';
    popupSize?: 'small' | 'medium' | 'large';
};
type __VLS_PublicProps = {
    'isShow'?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: any;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:isShow": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:isShow"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
