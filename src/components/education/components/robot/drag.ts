import { computed, reactive, ref } from 'vue'
const dragHistoryKey = '__localStorage:dragHistory__'
export function useDragRobotPosition() {
    const isDraging = ref(false)

    const robotOffset = reactive({ x: 100, y: '80%' })
    try {
        const historyData = localStorage.getItem(dragHistoryKey)
        if (historyData) {
            const _history = JSON.parse(historyData)
            robotOffset.x = _history.x
            robotOffset.y =
                parseInt(_history.y) > innerHeight ? '80%' : _history.y
        }
    } catch {
        console.warn('获取拖拽历史数据失败，使用默认值')
    }
    const xAdsorptionDir = computed(() => (robotOffset.x <= 0 ? 'lt' : 'rt'))

    function startDrag() {
        isDraging.value = true
    }

    function draging(event: DragEvent) {
        event.preventDefault()
    }

    function stopDrag(event: DragEvent) {
        event.preventDefault()
        isDraging.value = false
        if (event.clientX < window.innerWidth / 2) {
            robotOffset.x = 0
        } else {
            robotOffset.x = 100
        }
        // @ts-ignore
        const { height = 200 } = event.target?.getBoundingClientRect() ?? {}
        robotOffset.y =
            (event.clientY <= height ? height : event.clientY) + 'px'
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
