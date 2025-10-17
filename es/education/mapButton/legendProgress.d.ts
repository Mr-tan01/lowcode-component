declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: () => number[];
        required: true;
        validator: (value: number[]) => boolean;
    };
    labelValueTofixedLength: {
        type: NumberConstructor;
        default: number;
    };
    colors: {
        type: () => string[];
        default: () => never[];
    };
    unit: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update-stops": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: () => number[];
        required: true;
        validator: (value: number[]) => boolean;
    };
    labelValueTofixedLength: {
        type: NumberConstructor;
        default: number;
    };
    colors: {
        type: () => string[];
        default: () => never[];
    };
    unit: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate-stops"?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
    labelValueTofixedLength: number;
    colors: string[];
    unit: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    progressBar: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
