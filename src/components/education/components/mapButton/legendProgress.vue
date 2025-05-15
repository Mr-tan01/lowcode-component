<template>
    <div class="legend-progress">
        <div class="legend-progress__label">{{ label }}</div>
        <div class="legend-progress__center">
            <div class="legend-progress__center__min-value sample-text">
                {{ formattedMin }}%
            </div>
            <div 
                class="legend-progress__center__progress-bar"
                ref="progressBar"
            >
                <div 
                    v-for="(segment, index) in segments" 
                    :key="index"
                    class="progress-segment"
                    :style="segment.style"
                    @mouseenter="showTooltip(segment.value, $event)"
                    @mouseleave="hideTooltip"
                >
                    <div 
                        v-show="activeTooltip.value === segment.value"
                        class="segment-tooltip"
                        :style="tooltipStyle"
                    >
                        {{ (segment.value * 100).toFixed(1) }}%
                    </div>
                </div>
            </div>
            <div class="legend-progress__center__max-value sample-text">
                {{ formattedMax }}%
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface Segment {
    value: number;
    style: {
        width: string;
        background: string;
    };
}

interface Stop {
    'stop-color': string;
    'stop-opacity': number;
    offset: string;
}

interface ColorStop {
    range: number[];
    stop: Stop[];
}

const props = defineProps({
    label: {
        type: String,
        default: "预警人数占比"
    },
    data: {
        type: Array as () => number[],
        required: true,
        validator: (value: number[]) => value.every(item => item >= 0 && item <= 1)
    }
});

const emit = defineEmits(['update-stops']);

const activeTooltip = ref<{value: number | null, x: number}>({value: null, x: 0});
const tooltipStyle = computed(() => ({
    left: `${Math.min(Math.max(activeTooltip.value.x, 0), progressBar.value?.clientWidth || 0)}px`
}));

const showTooltip = (value: number, event: MouseEvent) => {
    if (!progressBar.value) return;
    const rect = progressBar.value.getBoundingClientRect();
    activeTooltip.value = {
        value,
        x: event.clientX - rect.left
    };
};

const hideTooltip = () => {
    activeTooltip.value = {value: null, x: 0};
};

// 数值格式化
const roundMin = (value: number) => {
    const decimal = value * 100 % 10;
    return decimal < 1 ? Math.floor(value * 10) / 10 : Math.ceil(value * 10) / 10;
};

const roundMax = (value: number) => {
    return Math.round(value * 100);
};

const processedData = computed(() => {
    const unique = [...new Set(props.data)];
    return unique.sort((a, b) => a - b);
});

const displayMin = computed(() => {
    return processedData.value.length > 0 ? roundMin(processedData.value[0]) : 0;
});
const displayMax = computed(() => {
    return processedData.value.length > 0 ? roundMax(processedData.value[processedData.value.length - 1]) : 0;
});

const formattedMin = computed(() => displayMin.value.toFixed(1));
const formattedMax = computed(() => displayMax.value.toFixed(1));

// 颜色生成（确保无红色调，最大值除外）
const generateColors = (count: number): string[] => {
    if (count === 0) return [];
    
    const colors: string[] = [];
    const hueStart = 240; // 蓝色
    const hueEnd = 60; // 黄色
    const hueStep = (hueEnd - hueStart) / Math.max(1, count - 1);
    
    // 生成蓝黄色渐变
    for (let i = 0; i < count - 1; i++) {
        const hue = hueStart + i * hueStep;
        const saturation = 80 + Math.random() * 15;
        const lightness = 45 + Math.random() * 15;
        const hslToRgb = (h: number, s: number, l: number) => {
            s /= 100;
            l /= 100;
            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
            const r = Math.round(f(0) * 255);
            const g = Math.round(f(8) * 255);
            const b = Math.round(f(4) * 255);
            return `rgba(${r}, ${g}, ${b}, 1)`;
        };
        colors.push(hslToRgb(hue, saturation, lightness));
    }
    
    // 添加最大值红色
    if (count > 0) {
        colors.push('rgba(255, 80, 80, 1)');
    }
    
    return colors;
};

// 创建分段
const segments = computed<Segment[]>(() => {
    if (processedData.value.length === 0) return [];
    
    const colors = generateColors(processedData.value.length);
    const segmentWidth = 100 / processedData.value.length;
    
    return processedData.value.map((value, index) => ({
        value,
        style: {
            width: `${segmentWidth}%`,
            background: colors[index]
        }
    }));
});

// 输出数据
const outputStops = computed<ColorStop[]>(() => {
    return segments.value.map((segment, index) => ({
        range: [segment.value],
        stop: [{
            'stop-color': segment.style.background,
            'stop-opacity': 1,
            offset: `${(index / segments.value.length) * 100}%`
        }]
    }));
});

watch(outputStops, (val) => {
    emit('update-stops', val);
}, { immediate: true, deep: true });

const progressBar = ref<HTMLElement | null>(null);
</script>

<style scoped lang="scss">
.legend-progress {
    width: 351px;
    height: 39px;
    background: rgba(8, 68, 113, 0.75);
    border-radius: 8px;
    border: 1px solid #0ffbf8;
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
    align-items: center;

    &__label {
        font-size: 14px;
        color: #ffffff;
        min-width: 80px;
    }

    &__center {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        padding-left: 10px;

        .sample-text {
            font-size: 12px;
            color: #ffffff;
            min-width: 40px;
            text-align: center;
        }

        &__progress-bar {
            height: 5px;
            flex: 1;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            position: relative;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
            
            .progress-segment {
                height: 100%;
                position: relative;
                transition: transform 0.2s;
                
                &:hover {
                    transform: scaleY(1.15);
                    z-index: 2;
                }
            }
            
            .segment-tooltip {
                position: absolute;
                bottom: calc(100% + 6px);
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.85);
                color: white;
                padding: 4px 10px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 10;
                pointer-events: none;
                min-width: 60px;
                text-align: center;
                
                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-width: 5px;
                    border-style: solid;
                    border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;
                }
            }
        }
    }
}
</style>