import { PropType } from "vue";
import { type BlockLableMapType, type BlockName } from "./const";


export type Levels = Partial<Record<string, {
    range: number[];
    stop: ({
        'stop-color': string;
        'stop-opacity': number,
        offset: string;
    } & {})[] | string;
}>>;

export type SZDataValue = Partial<Record<BlockName, {
    value: number;
}>>;

export const propsRaw = {
    showLabel: {
        type: Boolean,
    },
    fillModel: {
        type: String as PropType<'hover' | 'default'>,
    },
    levels: {
        type: Object as PropType<Levels>,
    },
    labels: {
        type: Object as PropType<BlockLableMapType>,
    },
    values: {
        type: Object as PropType<SZDataValue>,
    }
} as const;