declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    list: {
        type: import('vue').PropType<import('../carouseBox/types').TabListRaw[]>;
        required: boolean;
    };
    offsetAnimationTime: {
        type: NumberConstructor;
    };
    gap: {
        type: NumberConstructor;
    };
    rowKey: {
        type: import('vue').PropType<(item: import('../carouseBox/types').TabListRaw) => string>;
        required: boolean;
    };
    showTrack: {
        type: import('vue').PropType<boolean>;
        required: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    backCenter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    list: {
        type: import('vue').PropType<import('../carouseBox/types').TabListRaw[]>;
        required: boolean;
    };
    offsetAnimationTime: {
        type: NumberConstructor;
    };
    gap: {
        type: NumberConstructor;
    };
    rowKey: {
        type: import('vue').PropType<(item: import('../carouseBox/types').TabListRaw) => string>;
        required: boolean;
    };
    showTrack: {
        type: import('vue').PropType<boolean>;
        required: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    backCenter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{}>, {
    backCenter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
