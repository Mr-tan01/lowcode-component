import { computed, reactive, ref, type Ref } from 'vue'

const dragHistoryKey = '__localStorage:dragHistory__'

export function useDragRobotPosition(popupSize: Ref<'small' | 'medium' | 'large'>) {
    const isDraging = ref(false)
    const robotOffset = reactive({ x: 100, y: '20%' })
    try {
        const historyData = localStorage.getItem(dragHistoryKey)
        if (historyData) {
            const _history = JSON.parse(historyData)
            robotOffset.x = _history.x
            robotOffset.y = _history.y
        }
    } catch {
        console.warn('获取拖拽历史数据失败，使用默认值')
    }
    const xAdsorptionDir = computed(() => (robotOffset.x <= 0 ? 'lt' : 'rt'))

    // 根据弹出框尺寸获取高度
    const getPopupHeight = () => {
        const heights = {
            small: 120,
            medium: 319,
            large: 585,
        }
        return heights[popupSize.value] || heights.small
    }

    function startDrag() {
        isDraging.value = true
    }

    function draging(event: DragEvent) {
        event.preventDefault()
    }

    function stopDrag(event: DragEvent) {
        event.preventDefault()
        isDraging.value = false
        const targetX = event.clientX < window.innerWidth / 2 ? 0 : 100
        // 计算安全边界
        const popupHeight = getPopupHeight()
        const robotHeight = 147 // 机器人图标高度
        // 计算安全边界
        const minTop = 10 // 最小顶部边距
        const maxTop = window.innerHeight - (popupHeight + robotHeight) // 最大顶部位置
        // 计算目标顶部位置，确保在安全范围内
        let targetTop = Math.max(event.clientY, minTop)
        targetTop = Math.min(targetTop, Math.max(minTop, maxTop)) // 确保maxTop不小于minTop
        // 转换为百分比
        const targetY = `${(targetTop / window.innerHeight) * 120}%`
        // 平滑过渡到目标位置
        robotOffset.x = targetX
        robotOffset.y = targetY
        localStorage.setItem(dragHistoryKey, JSON.stringify(robotOffset))
    }

    function dragenter() {
        console.log('拖拽进入')
    }

    function dragover(event: DragEvent) {
        event.preventDefault()
    }

    return {
        isDraging,
        startDrag,
        stopDrag,
        draging,
        dragenter,
        robotOffset,
        xAdsorptionDir,
        dragover,
    }
}
