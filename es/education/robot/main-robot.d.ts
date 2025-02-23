import { PropType } from 'vue';
import { StarType } from './const';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    placeholder: StringConstructor;
    stars: PropType<StarType[]>;
    duration: NumberConstructor;
    animate: BooleanConstructor;
    startAngle: NumberConstructor;
    maxShowCount: NumberConstructor;
    fullAngle: NumberConstructor;
    value: {
        type: PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (value: string) => any;
} & {
    click: (item: StarType, index: number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placeholder: StringConstructor;
    stars: PropType<StarType[]>;
    duration: NumberConstructor;
    animate: BooleanConstructor;
    startAngle: NumberConstructor;
    maxShowCount: NumberConstructor;
    fullAngle: NumberConstructor;
    value: {
        type: PropType<string>;
    };
}>> & Readonly<{
    onClick?: ((item: StarType, index: number) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
}>, {
    animate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    starWrapperRef: HTMLDivElement;
    starElRefs: HTMLDivElement[];
}, HTMLDivElement>;
export default _default;
