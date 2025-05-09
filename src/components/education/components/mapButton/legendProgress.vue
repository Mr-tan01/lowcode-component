<template>
    <div class="legend-progress">
        <div class="legend-progress__lable">{{ lable }}</div>
        <div class="legend-progress__center">
            <div class="legend-progress__center__min-value sample-text">
                {{ minValue }}
            </div>
            <div 
                class="legend-progress__center__progress-bar"
                ref="progressBar"
                @mousemove="handleMouseMove"
                @mouseleave="hoverValue = null"
            >
                <div 
                    v-for="(segment, index) in segments" 
                    :key="index"
                    class="progress-segment"
                    :style="segment.style"
                    @mouseenter="hoverValue = segment.range"
                >
                    <div v-if="hoverValue === segment.range" class="segment-tooltip">
                        {{ segment.range }}
                    </div>
                </div>
            </div>
            <div class="legend-progress__center__max-value sample-text">
                {{ maxValue }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 定义类型
interface Segment {
    range: string;
    style: {
        width: string;
        background: string;
    };
}

const {
    lable = "预警人数占比",
    minValue = "0%",
    maxValue = "20%",
    startColor = "rgba(34, 253, 252, 0)",
    endColor = "#FF4545",
} = defineProps({
    lable: {
        type: String,
    },
    minValue: {
        type: String,
    },
    maxValue: {
        type: String,
    },
    startColor: {
        type: String,
    },
    endColor: {
        type: String,
    },
});

const hoverValue = ref<string | null>(null);
const progressBar = ref<HTMLElement | null>(null);

// 计算5个区间的颜色和范围
const segments = computed<Segment[]>(() => {
    const segmentsCount = 5;
    const segmentsArray: Segment[] = [];
    
    // 提取最小值和最大值的数字部分
    const min = parseFloat(minValue);
    const max = parseFloat(maxValue);
    const range = max - min;
    const segmentSize = range / segmentsCount;
    
    for (let i = 0; i < segmentsCount; i++) {
        const startPercent = min + i * segmentSize;
        const endPercent = min + (i + 1) * segmentSize;
        
        // 计算当前区间的颜色渐变
        const startRatio = i / segmentsCount;
        const endRatio = (i + 1) / segmentsCount;
        
        segmentsArray.push({
            range: `${startPercent.toFixed(1)}%~${endPercent.toFixed(1)}%`,
            style: {
                width: `${100 / segmentsCount}%`,
                background: `linear-gradient(to right, 
                    ${getColorAtRatio(startRatio)}, 
                    ${getColorAtRatio(endRatio)})`,
            },
        });
    }
    return segmentsArray;
});

// 根据比例获取颜色
const getColorAtRatio = (ratio: number): string => {
    if (ratio <= 0) return startColor;
    if (ratio >= 1) return endColor;
    
    // 简单的线性插值，实际可以根据需要实现更复杂的颜色过渡
    if (startColor.startsWith('rgba')) {
        // 处理RGBA颜色
        const startMatch = startColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
        const endMatch = endColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
        
        if (startMatch && endMatch) {
            const r = Math.round(parseInt(startMatch[1]) + (parseInt(endMatch[1]) - parseInt(startMatch[1])) * ratio);
            const g = Math.round(parseInt(startMatch[2]) + (parseInt(endMatch[2]) - parseInt(startMatch[2])) * ratio);
            const b = Math.round(parseInt(startMatch[3]) + (parseInt(endMatch[3]) - parseInt(startMatch[3])) * ratio);
            const a = startMatch[4] ? parseFloat(startMatch[4]) + (parseFloat(endMatch[4] || '1') - parseFloat(startMatch[4])) * ratio : 1;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        }
    }
    
    // 默认处理HEX颜色
    // 将HEX颜色转换为RGB
    const hexToRgb = (hex: string) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };
    
    const startRgb = hexToRgb(startColor);
    const endRgb = hexToRgb(endColor);
    
    const r = Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * ratio);
    const g = Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * ratio);
    const b = Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * ratio);
    
    return `rgb(${r}, ${g}, ${b})`;
};

const handleMouseMove = (event: MouseEvent) => {
    if (!progressBar.value) return;
    
    const rect = progressBar.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    
    // 计算当前所在的区间
    const segmentIndex = Math.floor(percentage * segments.value.length);
    if (segmentIndex >= 0 && segmentIndex < segments.value.length) {
        hoverValue.value = segments.value[segmentIndex].range;
    }
};
</script>

<style scoped lang="scss">
.legend-progress {
    width: 351px;
    height: 39px;
    background: rgba(8, 68, 113, 0.75);
    border-radius: 8px;
    border: 1px solid #0ffbf8;
    backdrop-filter: blur(3px);
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;

    &__lable {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        text-align: left;
        font-style: normal;
    }

    &__center {
        display: flex;
        align-items: center;
        gap: 6px;
        padding-left: 9px;

        .sample-text {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 12px;
            color: #ffffff;
            line-height: 17px;
            text-align: left;
            font-style: normal;
        }

        &__progress-bar {
            width: 169px;
            height: 5px;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            border: 1px solid;
            backdrop-filter: blur(4px);
            display: flex;
            position: relative;
            cursor: pointer;
            
            .progress-segment {
                height: 100%;
                position: relative;
                
                &:hover::after {
                    content: '';
                    position: absolute;
                    top: -3px;
                    left: 0;
                    right: 0;
                    height: 11px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 5px;
                }
            }
            
            .segment-tooltip {
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                margin-bottom: 5px;
                z-index: 10;
                
                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-width: 5px;
                    border-style: solid;
                    border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
                }
            }
        }
    }
}
</style>
