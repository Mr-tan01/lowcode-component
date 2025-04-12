import { PropType } from 'vue';
import { BlockLableMapType, BlockName } from './const';
import { EducationMarkProps } from '../../mark/props';
export type Levels = Partial<Record<string, {
    range: number[];
    scale?: number;
    stop: ({
        "stop-color": string;
        "stop-opacity": number;
        offset: string;
    } & {})[] | string;
}>>;
export type SZMapMarkProps = Partial<Record<BlockName, EducationMarkProps>>;
export declare const propsRaw: {
    readonly showLabel: {
        readonly type: BooleanConstructor;
    };
    readonly fillModel: {
        readonly type: PropType<"hover" | "default">;
    };
    readonly levels: {
        readonly type: PropType<Levels>;
    };
    readonly labels: {
        readonly type: PropType<BlockLableMapType>;
    };
    readonly values: {
        readonly type: PropType<SZMapMarkProps>;
    };
    readonly rotateX: {
        readonly type: PropType<number>;
    };
    readonly disabledGradient: {
        readonly type: BooleanConstructor;
    };
};
