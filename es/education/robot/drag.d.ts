export declare function useDragRobotPosition(): {
    isDraging: import('vue').Ref<boolean, boolean>
    startDrag: (event: DragEvent) => void
    stopDrag: (event: DragEvent) => void
    draging: (event: DragEvent) => void
    dragenter: () => void
    robotOffset: {
        x: number
        y: string
    }
    xAdsorptionDir: import('vue').ComputedRef<'lt' | 'rt'>
    dragover: (event: DragEvent) => void
}
