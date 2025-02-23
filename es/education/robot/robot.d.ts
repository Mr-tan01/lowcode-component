import { PropType } from 'vue';
import { RobotBQMapKeys, ImageShowTrigger, ImageHideDir } from './const';
import { AiConfigProps } from './types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    src: {
        type: StringConstructor;
    };
    value: {
        type: PropType<RobotBQMapKeys>;
    };
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    trigger: {
        type: PropType<ImageShowTrigger>;
    };
    hidDir: {
        type: PropType<ImageHideDir>;
    };
    showPopup: {
        type: BooleanConstructor;
    };
    aiConfig: {
        type: PropType<AiConfigProps>;
    };
    popupContextMaxH: {
        type: StringConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    position: {
        type: PropType<"relative" | "absolute" | "fixed">;
    };
    isShow: {
        type: PropType<boolean>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:isShow": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    src: {
        type: StringConstructor;
    };
    value: {
        type: PropType<RobotBQMapKeys>;
    };
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    trigger: {
        type: PropType<ImageShowTrigger>;
    };
    hidDir: {
        type: PropType<ImageHideDir>;
    };
    showPopup: {
        type: BooleanConstructor;
    };
    aiConfig: {
        type: PropType<AiConfigProps>;
    };
    popupContextMaxH: {
        type: StringConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    position: {
        type: PropType<"relative" | "absolute" | "fixed">;
    };
    isShow: {
        type: PropType<boolean>;
    };
}>> & Readonly<{
    "onUpdate:isShow"?: ((value: boolean) => any) | undefined;
}>, {
    draggable: boolean;
    showPopup: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
