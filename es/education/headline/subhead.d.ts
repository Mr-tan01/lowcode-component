import { PropType } from 'vue';
declare const direction: {
    readonly right: "right";
    readonly center: "center";
    readonly left: "left";
};
type DirectionType = typeof direction;
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    text: {
        type: StringConstructor;
    };
    maxLength: {
        type: NumberConstructor;
    };
    fontSize: {
        type: StringConstructor;
    };
    type: {
        type: PropType<DirectionType[keyof DirectionType]>;
    };
    hideRadioIcon: {
        type: BooleanConstructor;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    text: {
        type: StringConstructor;
    };
    maxLength: {
        type: NumberConstructor;
    };
    fontSize: {
        type: StringConstructor;
    };
    type: {
        type: PropType<DirectionType[keyof DirectionType]>;
    };
    hideRadioIcon: {
        type: BooleanConstructor;
    };
}>> & Readonly<{}>, {
    hideRadioIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
