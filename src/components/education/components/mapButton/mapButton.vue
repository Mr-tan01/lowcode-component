<template>
    <div class="lcmapbutton">
        <div class="Lcswitch-map__tabs">
            <n-popover v-bind="$attrs" :placement="placement" :show-arrow="false">
                <template #trigger>
                    <slot name="trigger">
                        <!-- <img  src="./images/layer.png" alt="" /> -->
                        <div class="lcmapbutton-map-icon"></div>
                    </slot>
                </template>
                <div class="popover-content">
                    <slot name="content">
                        <MapBlock @item-click="handleMapBlockItemClick" />
                    </slot>
                </div>
            </n-popover>
        </div>
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
    </div>
</template>

<script lang="ts" setup>
import { NPopover, type PopoverProps } from 'naive-ui'
import zoomin from './images/zoom-in.png'
import zoomOut from './images/zoom-out.png'
import MapBlock from './comp/mapBlock.vue'

const images = [
    { src: zoomin, alt: 'ZoomIn' },
    { src: zoomOut, alt: 'ZoomOut' },
]

const { placement = 'left-start' } = defineProps<{
    placement?: PopoverProps['placement']
}>()

const emit = defineEmits(['iconClicked'])

const handleClick = (alt: string) => {
    emit('iconClicked', alt)
}

const handleMapBlockItemClick = (item: string) => {
    emit('iconClicked', item)
}
</script>

<style lang="scss" scoped>
.lcmapbutton {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    &-map-icon {
        cursor: pointer;
        width: 52px;
        height: 52px;
        object-fit: contain;
        display: block;
        background-image: url('./images/layer.png');
        background-size: cover;
        &:hover {
            background-image: url('./images/layer_hover.png');
            background-size: cover;
        }
    }
    &-upside {
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-icon {
            cursor: pointer;
            width: 52px;
            height: 52px;
            object-fit: contain;
            display: block;
        }
        &-icon:nth-last-child(1),
        &-icon:nth-last-child(2) {
            margin-top: 8px;
        }
    }
    &-underside {
        margin-top: 33px;
        display: flex;
        justify-content: center;
    }
}
:deep(.n-popover) {
    --n-color: transparent !important;
    --n-box-shadow: none !important;
    --n-border-radius: 5px !important;
    --n-padding: 10px !important;
    overflow: visible;
    &:not(.n-popover--raw) {
        background: rgba(8, 68, 113, 0.35);
        border-radius: 6px;
        border: 1px solid;
        border-image: linear-gradient(200deg, rgba(21, 154, 255, 1), rgba(15, 251, 248, 1)) 1 1;
    }
}
</style>
