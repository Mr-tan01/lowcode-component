<template>
    <div class="lcmapbutton">
        <div class="lcmapbutton-upside">
            <img
                v-for="(image, index) in images"
                :key="index"
                class="lcmapbutton-upside-icon"
                :src="image.src"
                :alt="image.alt"
                @click="handleClick(image.alt)"
            />
        </div>
        <div class="lcmapbutton-underside">
            <img class="lcmapbutton-underside-map" src="./images/map.png" alt="Map" @click="handleClick('Map')" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import layer from './images/layer.png'
import originalPpoint from './images/original-point.png'
import zoomin from './images/zoom-in.png'
import zoomOut from './images/zoom-out.png'

const images = [
    { src: layer, alt: 'Layer' },
    { src: originalPpoint, alt: 'OriginalPoint' },
    { src: zoomin, alt: 'ZoomIn' },
    { src: zoomOut, alt: 'ZoomOut' },
]

const emit = defineEmits(['iconClicked'])

const handleClick = (alt: string) => {
    emit('iconClicked', alt)
}
</script>

<style lang="scss" scoped>
.lcmapbutton {
    width: 74px;
    height: 339px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-upside {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-icon {
            cursor: pointer;
            width: 52px;
            height: 52px;
        }
        &-icon:nth-last-child(1),
        &-icon:nth-last-child(2),
        &-icon:nth-last-child(3) {
            margin-top: 8px;
        }
    }
    &-underside {
        margin-top: 33px;
        display: flex;
        justify-content: center;
    }
}
</style>
