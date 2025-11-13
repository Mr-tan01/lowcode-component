import { Ref } from 'vue';
export declare function useDragRobotPosition(popupSize: Ref<'small' | 'medium' | 'large'>): {
    isDraging: Ref<boolean, boolean>;
    startDrag: () => void;
    stopDrag: (event: DragEvent) => void;
    draging: (event: DragEvent) => void;
    dragenter: () => void;
    robotOffset: {
        x: number;
        y: string;
    };
    xAdsorptionDir: import('vue').ComputedRef<"lt" | "rt">;
    dragover: (event: DragEvent) => void;
};
