import { PropType } from 'vue';
import { StarType, StarItemType } from './const';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'input-suffix'?(_: {}): any;
    };
    refs: {
        starWrapperRef: HTMLDivElement;
        starElRefs: HTMLDivElement[];
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    placeholder: StringConstructor;
    stars: PropType<StarType[]>;
    duration: NumberConstructor;
    animate: BooleanConstructor;
    startAngle: NumberConstructor;
    maxShowCount: NumberConstructor;
    fullAngle: NumberConstructor;
    forbidden: BooleanConstructor;
    value: {
        type: PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: string) => any;
} & {
    click: (item: StarType, index: number) => any;
    itemClick: (item: StarItemType, index: number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placeholder: StringConstructor;
    stars: PropType<StarType[]>;
    duration: NumberConstructor;
    animate: BooleanConstructor;
    startAngle: NumberConstructor;
    maxShowCount: NumberConstructor;
    fullAngle: NumberConstructor;
    forbidden: BooleanConstructor;
    value: {
        type: PropType<string>;
    };
}>> & Readonly<{
    onClick?: ((item: StarType, index: number) => any) | undefined;
    onItemClick?: ((item: StarItemType, index: number) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
}>, {
    animate: boolean;
    forbidden: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    starWrapperRef: HTMLDivElement;
    starElRefs: HTMLDivElement[];
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
