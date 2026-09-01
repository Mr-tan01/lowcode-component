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
            <n-popover
                v-if="imageryLayerList.length"
                trigger="hover"
                :placement="imageryPlacement"
                :show-arrow="false"
                :show="imageryLayerPopoverVisible"
                @update:show="imageryLayerPopoverVisible = $event"
            >
                <template #trigger>
                    <button type="button" class="lcmapbutton-imagery-icon" :title="currentImageryLayerLabel">
                        <span class="lcmapbutton-imagery-icon__image"></span>
                    </button>
                </template>
                <div class="lcmapbutton-imagery-panel">
                    <button
                        v-for="item in imageryLayerList"
                        :key="item.value"
                        type="button"
                        class="lcmapbutton-imagery-card"
                        :class="{ active: item.value === currentImageryLayer }"
                        @click="switchImageryLayer(item)"
                    >
                        <img v-if="item.preview" class="lcmapbutton-imagery-card__thumb" :src="item.preview" :alt="item.label" />
                        <span class="lcmapbutton-imagery-card__mask"></span>
                        <span class="lcmapbutton-imagery-card__label">{{ item.label }}</span>
                    </button>
                </div>
            </n-popover>
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
import { computed } from 'vue'
import type { imageryLayerType } from '@/components/education/components/map/cesium/modules/type'
import { defaultImageryLayerList } from './const'

const images = [
    { src: zoomin, alt: 'ZoomIn' },
    { src: zoomOut, alt: 'ZoomOut' },
]

const {
    placement = 'left-start',
    imageryPlacement = 'left-start',
    imageryLayerList = defaultImageryLayerList,
} = defineProps<{
    placement?: PopoverProps['placement']
    imageryPlacement?: PopoverProps['placement']
    imageryLayerList?: imageryLayerType[]
}>()

const currentImageryLayer = defineModel<string>('imageryLayer')
const imageryLayerPopoverVisible = defineModel<boolean>('imageryLayerPopoverVisible', { default: false })

const emit = defineEmits(['iconClicked', 'imageryLayerChange'])

const currentImageryLayerIndex = computed(() => {
    return Math.max(
        imageryLayerList.findIndex(item => item.value === currentImageryLayer.value),
        0,
    )
})

const currentImageryLayerLabel = computed(() => imageryLayerList[currentImageryLayerIndex.value]?.label ?? '切换图层')

const handleClick = (alt: string) => {
    emit('iconClicked', alt)
}

const handleMapBlockItemClick = (item: string) => {
    emit('iconClicked', item)
}

const switchImageryLayer = (item: imageryLayerType) => {
    currentImageryLayer.value = item.value
    imageryLayerPopoverVisible.value = false
    emit('imageryLayerChange', item)
}
</script>

<style lang="scss" scoped>
.lcmapbutton {
    --lcmapbutton-button-gap: 8px;

    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--lcmapbutton-button-gap);
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
    &-imagery-icon {
        cursor: pointer;
        width: 52px;
        height: 52px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: url('./images/imagery-layer-default.svg') center / contain no-repeat;
        border: 0;
        &:hover {
            background-image: url('./images/imagery-layer-hover.svg');
        }

        &__image {
            width: 100%;
            height: 100%;
            display: block;
            pointer-events: none;
        }
    }
    &-imagery-panel {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    &-imagery-card {
        position: relative;
        width: 116px;
        height: 95px;
        padding: 0;
        overflow: hidden;
        cursor: pointer;
        background: #062846;
        border: 2px solid transparent;
        border-radius: 8px;

        &:hover,
        &.active {
            border-color: #0ffbf8;
        }

        &:hover .lcmapbutton-imagery-card__mask,
        &.active .lcmapbutton-imagery-card__mask {
            opacity: 1;
        }

        &__thumb {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        &__mask {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(15, 251, 248, 0.08) 0%, rgba(5, 24, 43, 0.5) 100%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
        }

        &__label {
            position: absolute;
            right: 8px;
            bottom: 8px;
            left: 8px;
            color: #fff;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            text-shadow: 0 1px 6px rgba(0, 0, 0, 0.72);
            white-space: nowrap;
        }
    }
    &-upside {
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--lcmapbutton-button-gap);
        &-icon {
            cursor: pointer;
            width: 52px;
            height: 52px;
            display: block;
            object-fit: contain;
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
