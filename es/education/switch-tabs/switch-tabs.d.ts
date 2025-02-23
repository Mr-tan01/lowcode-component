import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    list: {
        type: PropType<import('../carouseBox/types').TabListRaw[]>;
        required: boolean;
    };
    offsetAnimationTime: {
        type: NumberConstructor;
    };
    gap: {
        type: NumberConstructor;
    };
    rowKey: {
        type: PropType<(item: import('../carouseBox/types').TabListRaw) => string>;
        required: boolean;
    };
    showTrack: {
        type: PropType<boolean>;
        required: boolean;
    };
    disabled: {
        type: PropType<boolean>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    list: {
        type: PropType<import('../carouseBox/types').TabListRaw[]>;
        required: boolean;
    };
    offsetAnimationTime: {
        type: NumberConstructor;
    };
    gap: {
        type: NumberConstructor;
    };
    rowKey: {
        type: PropType<(item: import('../carouseBox/types').TabListRaw) => string>;
        required: boolean;
    };
    showTrack: {
        type: PropType<boolean>;
        required: boolean;
    };
    disabled: {
        type: PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
