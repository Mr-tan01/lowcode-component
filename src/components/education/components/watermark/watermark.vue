<template>
    <div class="watermark" :style="watermarkStyle">
        <span v-if="mode === 'single'">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, watch, onUnmounted } from "vue";
import type { CSSProperties } from "vue";

const {
    text = "Watermark",
    fontSize = 20,
    color = "#fff",
    rotate = -45,
    zIndex = 1000,
    opacity = 0.1,
    mode = "single",
    gap = 20,
} = defineProps<{
    text: string;
    fontSize?: number;
    color?: string;
    rotate?: number;
    zIndex?: number;
    opacity?: number;
    mode?: "single" | "multiple";
    gap?: number;
}>();

const backgroundUrl = ref("");

const generateWatermark = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = `${fontSize}px Arial`;
    const textWidth = ctx.measureText(text).width;
    const textHeight = fontSize;

    const rad = (rotate * Math.PI) / 180;
    const rotatedWidth = Math.abs(textWidth * Math.cos(rad)) + Math.abs(textHeight * Math.sin(rad)) + gap;
    const rotatedHeight = Math.abs(textWidth * Math.sin(rad)) + Math.abs(textHeight * Math.cos(rad)) + gap;

    canvas.width = rotatedWidth;
    canvas.height = rotatedHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rad);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 0, 0);

    backgroundUrl.value = canvas.toDataURL("image/png");
};

const changeWatermark = watch([() => text, () => fontSize, () => color, () => rotate, () => opacity, () => gap], generateWatermark, {
    immediate: true,
});

onUnmounted(changeWatermark);

const watermarkStyle = computed<CSSProperties>(() => {
    const baseStyle: CSSProperties = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: zIndex,
        pointerEvents: "none",
    };

    if (mode === "multiple") {
        return {
            ...baseStyle,
            backgroundImage: `url(${backgroundUrl.value})`,
            backgroundRepeat: "repeat",
        };
    } else {
        return {
            ...baseStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: `${fontSize}px`,
            color: color,
            transform: `rotate(${rotate}deg)`,
            opacity: opacity,
        };
    }
});
</script>

<style scoped></style>
