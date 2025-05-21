import { PropType } from 'vue';
export interface Columns {
    title: string;
    type?: "index" | "default";
    dataIndex?: string;
    align?: string;
    width?: string;
    flex?: string | number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<any, (_: {
        record: Record<string, any>;
        index: number;
        column: Columns;
        colIndex: number;
        value: any;
    }) => any>> & {
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    columns: {
        type: PropType<Columns[]>;
        default: () => never[];
    };
    data: {
        type: PropType<Record<string, any>[]>;
        default: () => never[];
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    columns: {
        type: PropType<Columns[]>;
        default: () => never[];
    };
    data: {
        type: PropType<Record<string, any>[]>;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    data: Record<string, any>[];
    columns: Columns[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
