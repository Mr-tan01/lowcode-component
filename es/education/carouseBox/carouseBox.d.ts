import { PropType } from 'vue';
import { ChangeEvent, TabListRaw } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            record: TabListRaw;
            isActive: boolean;
            isEven: boolean;
            isTransition: boolean;
            index: number;
            handleClick: (_item: TabListRaw, index: number) => void;
        }): any;
        track?(_: {}): any;
    };
    refs: {
        tabButtonParentElRef: HTMLDivElement;
        carouselTrainElRef: HTMLDivElement;
        tabButtonRef: HTMLButtonElement[];
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    list: {
        type: PropType<TabListRaw[]>;
        required: boolean;
    };
    offsetAnimationTime: {
        type: NumberConstructor;
    };
    gap: {
        type: NumberConstructor;
    };
    rowKey: {
        type: PropType<(item: TabListRaw) => string>;
        required: boolean;
    };
    showTrack: {
        type: PropType<boolean>;
        required: boolean;
    };
    disabled: {
        type: PropType<boolean>;
    };
    backCenter: {
        type: PropType<boolean>;
        default: boolean;
    };
    index: {
        type: PropType<number>;
    };
    value: {
        type: PropType<string | number>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:index": (value: number) => any;
    "update:value": (value: string | number | undefined) => any;
} & {
    change: (value: ChangeEvent) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    list: {
        type: PropType<TabListRaw[]>;
        required: boolean;
    };
    offsetAnimationTime: {
        type: NumberConstructor;
    };
    gap: {
        type: NumberConstructor;
    };
    rowKey: {
        type: PropType<(item: TabListRaw) => string>;
        required: boolean;
    };
    showTrack: {
        type: PropType<boolean>;
        required: boolean;
    };
    disabled: {
        type: PropType<boolean>;
    };
    backCenter: {
        type: PropType<boolean>;
        default: boolean;
    };
    index: {
        type: PropType<number>;
    };
    value: {
        type: PropType<string | number>;
    };
}>> & Readonly<{
    onChange?: ((value: ChangeEvent) => any) | undefined;
    "onUpdate:index"?: ((value: number) => any) | undefined;
    "onUpdate:value"?: ((value: string | number | undefined) => any) | undefined;
}>, {
    backCenter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    tabButtonParentElRef: HTMLDivElement;
    carouselTrainElRef: HTMLDivElement;
    tabButtonRef: HTMLButtonElement[];
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
