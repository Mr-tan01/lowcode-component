<template>
    <LcModal v-model:show="visible" :title="title" :width="width" :height="height" size-mode="large">
        <div ref="rootRef" class="lc-cesium-model" :class="{ 'is-fullscreen': fullscreen }">
            <NSpin :show="loading" class="lc-cesium-model__spin">
                <div class="lc-cesium-model__viewer-wrap">
                    <div ref="containerRef" class="lc-cesium-model__viewer"></div>
                    <div class="lc-cesium-model__panel">
                        <div class="lc-cesium-model__toolbar">
                            <NButton size="small" :disabled="!tileset" @click="locateModel()">定位</NButton>
                            <NButton size="small" type="primary" :loading="loading" @click="reloadModel">重载</NButton>
                            <NButton size="small" :disabled="!tileset" @click="toggleFullscreen">{{ fullscreen ? '退出全屏' : '全屏' }}</NButton>
                        </div>
                        <div class="lc-cesium-model__controls">
                            <NButton size="small" :disabled="!tileset" @click="rotateLeft">左转</NButton>
                            <NButton size="small" :disabled="!tileset" @click="rotateRight">右转</NButton>
                            <NButton size="small" :disabled="!tileset" @click="raiseModel">抬高</NButton>
                            <NButton size="small" :disabled="!tileset" @click="lowerModel">降低</NButton>
                            <NButton size="small" :disabled="!tileset" @click="zoomIn">拉近</NButton>
                            <NButton size="small" :disabled="!tileset" @click="zoomOut">拉远</NButton>
                            <NButton size="small" :disabled="!tileset" @click="resetTransform">重置</NButton>
                            <NButton size="small" :disabled="!tileset" @click="toggleAutoRotate">{{ autoRotating ? '停止' : '旋转' }}</NButton>
                        </div>
                    </div>
                </div>
            </NSpin>
        </div>
    </LcModal>
</template>

<script lang="ts" setup>
import { NButton, NSpin } from 'naive-ui'
import { LcModal } from '@/components/education/components/modal'
import { useCesiumModel, type CesiumModelDialogProps, type LoadedPayload, type UseCesiumModelReturn } from './hooks/useCesiumModel'

type CesiumModelDialogExpose = Pick<
    UseCesiumModelReturn,
    'reloadModel' | 'locateModel' | 'resetView' | 'resetTransform' | 'raiseModel' | 'lowerModel' | 'toggleAutoRotate' | 'toggleFullscreen'
>

const props: Readonly<CesiumModelDialogProps> = withDefaults(defineProps<CesiumModelDialogProps>(), {
    title: '模型预览',
    width: '1200px',
    height: '720px',
    version: 'v2',
    appId: undefined,
    token: null,
    baseUrl: 'https://jysl.sz.edu.cn:8314/service/api/gzj/igs/rest/services/xxtc',
    tilesetFile: 'tileset.json',
    longitudeOffset: 0,
    latitudeOffset: 0,
    heightOffset: 0,
    fitToGround: false,
    groundHeight: undefined,
    modelBaseHeight: undefined,
    heading: 0,
    pitch: 0,
    roll: 0,
    scale: 1,
    enhance3D: true,
    enableShadows: true,
    operationSpeed: 'normal',
    rotateStep: undefined,
    autoRotateInterval: 200,
    options: undefined,
    modelOptions: undefined,
    terrainProvider: undefined,
})

const visible = defineModel<boolean>('show', { default: false })

const emit = defineEmits<{
    (e: 'loaded', value: LoadedPayload): void
    (e: 'loadError', value: unknown): void
}>()

const {
    rootRef,
    containerRef,
    tileset,
    loading,
    autoRotating,
    fullscreen,
    reloadModel,
    locateModel,
    resetView,
    zoomIn,
    zoomOut,
    rotateLeft,
    rotateRight,
    raiseModel,
    lowerModel,
    resetTransform,
    toggleAutoRotate,
    toggleFullscreen,
} = useCesiumModel(props, visible, emit)

defineExpose<CesiumModelDialogExpose>({
    reloadModel,
    locateModel,
    resetView,
    resetTransform,
    raiseModel,
    lowerModel,
    toggleAutoRotate,
    toggleFullscreen,
})
</script>

<style lang="scss" scoped>
.lc-cesium-model {
    width: 100%;
    height: calc(var(--modal-height) - 44px);
    color: #fff;

    &.is-fullscreen {
        width: 100vw;
        height: 100vh;
        padding: 16px;
        background: rgba(1, 17, 39, 0.96);
        box-sizing: border-box;
    }

    &__spin {
        width: 100%;
        height: 100%;
    }

    &__viewer-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 520px;
        overflow: hidden;
        border: 1px solid rgba(77, 172, 255, 0.35);
        background: rgba(1, 17, 39, 0.86);
        box-sizing: border-box;
    }

    &__viewer {
        width: 100%;
        height: 100%;
    }

    &__panel {
        position: absolute;
        top: 8px;
        left: 8px;
        z-index: 2;
        width: min(392px, calc(100% - 16px));
        padding: 8px;
        background: rgba(5, 25, 51, 0.68);
        border: 1px solid rgba(77, 172, 255, 0.42);
        box-sizing: border-box;
        backdrop-filter: blur(2px);
    }

    &__toolbar {
        display: grid;
        grid-template-columns: repeat(3, minmax(68px, 1fr));
        gap: 6px;
        align-items: center;
        margin-bottom: 6px;
    }

    &__controls {
        display: grid;
        grid-template-columns: repeat(4, minmax(68px, 1fr));
        gap: 6px;
    }

    &__status {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 600;
    }

    &__toolbar :deep(.n-button),
    &__controls :deep(.n-button) {
        width: 100%;
    }

    :deep(.n-spin-container),
    :deep(.n-spin-content) {
        height: 100%;
    }

    :deep(.cesium-widget-credits) {
        display: none !important;
    }
}
</style>
