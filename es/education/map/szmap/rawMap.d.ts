import { Levels } from './props';
import { EducationMarkProps } from '../../mark/props';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly showLabel: {
        readonly type: BooleanConstructor;
    };
    readonly fillModel: {
        readonly type: import('vue').PropType<"hover" | "default">;
    };
    readonly levels: {
        readonly type: import('vue').PropType<Levels>;
    };
    readonly labels: {
        readonly type: import('vue').PropType<import('./const').BlockLableMapType>;
    };
    readonly values: {
        readonly type: import('vue').PropType<import('./props').SZMapMarkProps>;
    };
    readonly rotateX: {
        readonly type: import('vue').PropType<number>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    markClick: (value: EducationMarkProps) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly showLabel: {
        readonly type: BooleanConstructor;
    };
    readonly fillModel: {
        readonly type: import('vue').PropType<"hover" | "default">;
    };
    readonly levels: {
        readonly type: import('vue').PropType<Levels>;
    };
    readonly labels: {
        readonly type: import('vue').PropType<import('./const').BlockLableMapType>;
    };
    readonly values: {
        readonly type: import('vue').PropType<import('./props').SZMapMarkProps>;
    };
    readonly rotateX: {
        readonly type: import('vue').PropType<number>;
    };
}>> & Readonly<{
    onMarkClick?: ((value: EducationMarkProps) => any) | undefined;
}>, {
    readonly showLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
