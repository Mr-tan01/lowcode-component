import { LcCarouseBoxChangeEvent } from '../carouseBox';
type ListRaw = {
    label: string;
    children: NavData[];
};
export type NavData = {
    label: string;
    path: string;
    list?: ListRaw[];
};
export type jumpParams = {
    parent?: ListRaw | null;
    item: NavData;
    index: number;
    handleClick?: (item: ListRaw, index: number) => void;
};
type __VLS_Props = {
    navDatas: NavData[];
    hideArrow?: boolean;
    menuItemWidth?: 'auto' | 'fixed';
    highlightHandler?: (item: NavData) => string | null;
};
type __VLS_PublicProps = {
    'selectedKey'?: string;
    'index'?: number;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:index": (value: number) => any;
    "update:selectedKey": (value: string) => any;
} & {
    scroll: (data: LcCarouseBoxChangeEvent) => any;
    jump: (jumpParams: jumpParams) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:index"?: ((value: number) => any) | undefined;
    onScroll?: ((data: LcCarouseBoxChangeEvent) => any) | undefined;
    onJump?: ((jumpParams: jumpParams) => any) | undefined;
    "onUpdate:selectedKey"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
