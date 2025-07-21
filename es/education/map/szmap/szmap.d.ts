import { LabelModelEnum } from './const';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        mapLabel?(_: {
            blockList: Record<import('./const').BlockName, import('vue').Component>;
            labelClass: (key: any) => string[];
            getVlaue: (key: import('./const').BlockName) => {
                mapLabel: string;
                style: {
                    '--level-scale': number | {
                        range: number[];
                        scale?: number;
                        stop: ({
                            "stop-color": string;
                            "stop-opacity": number;
                            "offset": string;
                        } & {})[] | string;
                    };
                };
                value: number;
                unit?: string;
                model?: "hover" | "focus" | "default";
                meta?: Record<string, any>;
                size?: "small" | "medium";
                iconName?: string;
                iconSrc?: string;
                label?: string;
                show?: boolean;
                precision?: number;
            };
            currentMapKey: string;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly showLabel: {
        readonly type: BooleanConstructor;
    };
    readonly showBorder: {
        readonly type: BooleanConstructor;
    };
    readonly fillModel: {
        readonly type: import('vue').PropType<"hover" | "default">;
    };
    readonly levels: {
        readonly type: import('vue').PropType<import('./props').Levels>;
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
    readonly disabledGradient: {
        readonly type: BooleanConstructor;
    };
    readonly labelModel: {
        readonly type: import('vue').PropType<LabelModelEnum>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly showLabel: {
        readonly type: BooleanConstructor;
    };
    readonly showBorder: {
        readonly type: BooleanConstructor;
    };
    readonly fillModel: {
        readonly type: import('vue').PropType<"hover" | "default">;
    };
    readonly levels: {
        readonly type: import('vue').PropType<import('./props').Levels>;
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
    readonly disabledGradient: {
        readonly type: BooleanConstructor;
    };
    readonly labelModel: {
        readonly type: import('vue').PropType<LabelModelEnum>;
    };
}>> & Readonly<{}>, {
    readonly showBorder: boolean;
    readonly showLabel: boolean;
    readonly disabledGradient: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
