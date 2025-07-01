import { PropType } from 'vue'
import { TabListRaw } from './types'
export declare const propsRaw: {
    list: {
        type: PropType<TabListRaw[]>
        required: boolean
    }
    offsetAnimationTime: {
        type: NumberConstructor
    }
    gap: {
        type: NumberConstructor
    }
    rowKey: {
        type: PropType<(item: TabListRaw) => string>
        required: boolean
    }
    showTrack: {
        type: PropType<boolean>
        required: boolean
    }
    disabled: {
        type: PropType<boolean>
    }
    backCenter: {
        type: PropType<boolean>
        default: boolean
    }
}
