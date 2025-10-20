import { PropType } from 'vue';
export type FilterItem = {
    label: string;
    value: number | string;
    disabled?: boolean;
    meta?: Record<string, any>;
};
export type FilterList = {
    label: string;
    children?: FilterItem[];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'check-box-label'?(_: {
            label: string;
            value: number | string;
            disabled?: boolean;
            meta?: Record<string, any>;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    row: {
        type: NumberConstructor;
    };
    dataList: {
        type: PropType<FilterList[]>;
    };
    isCheckAll: {
        type: BooleanConstructor;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    showReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: PropType<(string | number)[]>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: (string | number)[]) => any;
} & {
    check: (value: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    row: {
        type: NumberConstructor;
    };
    dataList: {
        type: PropType<FilterList[]>;
    };
    isCheckAll: {
        type: BooleanConstructor;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    showReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: PropType<(string | number)[]>;
    };
}>> & Readonly<{
    onCheck?: ((value: (string | number)[]) => any) | undefined;
    "onUpdate:value"?: ((value: (string | number)[]) => any) | undefined;
}>, {
    isCheckAll: boolean;
    resetText: string;
    showReset: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
