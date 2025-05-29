<template>
    <div class="symmetric-layout">
        <div class="center-image-container">
            <img :src="centerImage" alt="Center image" class="center-image" />
        </div>
        <div v-for="(text, index) in displayedTexts" :key="index" class="text-item" :class="getTextSide(index)" :style="getTextPosition(index)">
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import spiralFigure from "./images/spiral-figure.png";
import { EducationSpiralFigureProps } from "./props";

const { centerImage = spiralFigure, texts = [], radius = 150, maxPerSide = 5 } = defineProps<EducationSpiralFigureProps>();

const displayedTexts = computed(() => {
    const maxItems = maxPerSide * 2;
    return texts.slice(0, maxItems);
});

const getTextSide = (index: number) => {
    return index % 2 === 0 ? "right-side" : "left-side";
};

const getTextPosition = (index: number) => {
    const total = displayedTexts.value.length;
    const isLeftSide = index % 2 === 0; // 偶数索引在左侧，奇数在右侧
    const positionIndex = Math.floor(index / 2);

    // 计算角度 (从水平线开始上下均匀分布)
    const angleRange = 120; // 控制文字分布范围 (120度)
    const angleStep = angleRange / (maxPerSide - 1);
    const angle = angleStep * positionIndex - angleRange / 2; // 从负到正对称分布

    // 转换为弧度并调整左右方向
    const angleRad = ((isLeftSide ? 180 + angle : -angle) * Math.PI) / 180;

    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    return {
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
    };
};
</script>

<style scoped>
.symmetric-layout {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.center-image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    z-index: 10;
}

.center-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-item {
    position: absolute;
    width: 80px;
    background-size: 100% 100%;
    background-position: center;
    padding: 2px 0 2px 15px;
    font-size: 13px;
    white-space: nowrap;
    z-index: 5;
    transition: all 0.3s ease;
}
.left-side {
    background-image: url("./images/ltr-bg.png");
}

.right-side {
    background-image: url("./images/rtl-bg.png");
}

.text-item:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
