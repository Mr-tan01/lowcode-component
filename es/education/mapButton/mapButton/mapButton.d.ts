import { PopoverProps } from 'naive-ui';
import { imageryLayerType } from '../../map/cesium/modules/type';
type __VLS_Props = {
    placement?: PopoverProps['placement'];
    imageryPlacement?: PopoverProps['placement'];
    imageryLayerList?: imageryLayerType[];
};
type __VLS_PublicProps = {
    'imageryLayer'?: string;
    'imageryLayerPopoverVisible'?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    iconClicked: (...args: any[]) => void;
    imageryLayerChange: (...args: any[]) => void;
    "update:imageryLayer": (value: string) => void;
    "update:imageryLayerPopoverVisible": (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onIconClicked?: ((...args: any[]) => any) | undefined;
    onImageryLayerChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:imageryLayer"?: ((value: string) => any) | undefined;
    "onUpdate:imageryLayerPopoverVisible"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
