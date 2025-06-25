import { PropType } from "vue";
import { LabelModelEnum, type BlockLableMapType, type BlockName } from "./const";
import { type EducationMarkProps } from "@/components/education/components/mark/props";

export type Levels = Partial<
    Record<
        string,
        {
            range: number[];
            scale?: number;
            stop:
                | ({
                      "stop-color": string;
                      "stop-opacity": number;
                      offset: string;
                  } & {})[]
                | string;
        }
    >
>;

export type SZMapMarkProps = Partial<Record<BlockName, EducationMarkProps>>;

export const propsRaw = {
    showLabel: {
        type: Boolean,
    },
    showBorder: {
        type: Boolean,
    },
    fillModel: {
        type: String as PropType<"hover" | "default">,
    },
    levels: {
        type: Object as PropType<Levels>,
    },
    labels: {
        type: Object as PropType<BlockLableMapType>,
    },
    values: {
        type: Object as PropType<SZMapMarkProps>,
    },
    rotateX: {
        type: Number as PropType<number>,
    },
    //是否禁用根据数量地图渐变色
    disabledGradient: {
        type: Boolean,
    },
    // label 出现的方式
    labelModel: {
        type: String as PropType<LabelModelEnum>,
    },
} as const;
