import { PropType } from 'vue'
import { TabListRaw } from './types'

export const propsRaw = {
    list: {
        type: Array as PropType<TabListRaw[]>,
        required: false,
    },
    offsetAnimationTime: {
        type: Number,
    },
    gap: {
        type: Number,
    },
    rowKey: {
        type: Function as PropType<(item: TabListRaw) => string>,
        required: false,
    },
    showTrack: {
        type: Boolean as PropType<boolean>,
        required: false,
    },
    disabled: {
        type: Boolean as PropType<boolean>,
    },
    // 是否追加元素居中显示
    backCenter: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
}
