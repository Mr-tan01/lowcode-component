import { PropType } from 'vue';
import { type AiConfigProps } from './types';
import { type ImageHideDir } from './const';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isFocus: {
        type: BooleanConstructor;
    };
    hidDir: {
        type: PropType<ImageHideDir>;
    };
    aiConfig: {
        type: PropType<AiConfigProps>;
    };
    maxHeight: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clickQuick: (item: {
        text: string;
    }) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isFocus: {
        type: BooleanConstructor;
    };
    hidDir: {
        type: PropType<ImageHideDir>;
    };
    aiConfig: {
        type: PropType<AiConfigProps>;
    };
    maxHeight: {
        type: StringConstructor;
    };
}>> & Readonly<{
    onClickQuick?: (item: {
        text: string;
    }) => any;
}>, {
    isFocus: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
