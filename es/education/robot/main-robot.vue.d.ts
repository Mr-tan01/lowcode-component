import { PropType } from 'vue';
import { StarType } from './const';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (item: StarType, index: number) => void;
    "update:value": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    onClick?: (item: StarType, index: number) => any;
    "onUpdate:value"?: (value: string) => any;
}>, {
    animate: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
