<template>
    <div class="map-marker">
        <div class="map-marker-label">
            <span>{{ label }}：</span>
            <span>
                <span class="map-marker-label--value">
                    <NNumberAnimation :from="0" :to="value" :precision="0"> </NNumberAnimation>
                </span>
                <span class="map-marker-label--unit">
                    {{ unit }}
                </span>
            </span>
        </div>
        <div class="map-marker-arrow"></div>
    </div>
</template>

<script lang="ts" setup>
import { NNumberAnimation } from 'naive-ui/es/number-animation'

const {
    value = 0,
    unit,
    label,
} = defineProps<{
    value?: number
    unit: string
    label: string
}>()
</script>

<style scoped lang="scss">
.map-marker {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.map-marker-label {
    padding: 6px 12px 12px 12px;
    background: url(./image/label_bg.png);
    background-size: 100% 100%;
    font-family: HarmonyOS_Sans_SC_Medium;
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
}

.map-marker-arrow {
    width: 28px;
    height: 32px;
    background: url(./image/mark.png);
    background-size: 100% 100%;
}
</style>
