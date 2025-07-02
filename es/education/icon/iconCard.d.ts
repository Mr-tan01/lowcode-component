import { Domains, NameTypes } from './icons';
type __VLS_Props = {
    bagName?: 'booth' | 'pedestal';
    domain?: Domains;
    name?: NameTypes;
    size?: number | string;
    iconSize?: number | string;
    gap?: number | string;
    ext?: string;
    selected?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    domain: Domains;
    name: NameTypes;
    size: number | string;
    ext: string;
    selected: boolean;
    bagName: "booth" | "pedestal";
    iconSize: number | string;
    gap: number | string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
