<template>
    <LcModal v-model:show="visible" :title="title" :width="width" :height="height" size-mode="large">
        <div
            ref="rootRef"
            class="lc-cesium-model"
            :class="{ 'is-fullscreen': fullscreen, 'is-loading': loading, 'is-error': !!loadError }"
            :style="rootStyle"
        >
            <NSpin
                :show="loading"
                :description="display.loadingDescription || loadStatusText"
                :stroke="display.loadingStroke || '#18a058'"
                size="large"
                class="lc-cesium-model__spin"
            >
                <div v-if="loadError" class="lc-cesium-model__state">
                    <NResult
                        status="error"
                        :title="display.errorTitle || '模型加载失败'"
                        :description="
                            retrying ? display.retryDescription || '正在重新加载，请稍候' : display.errorDescription || '模型加载异常，请点击重试'
                        "
                    >
                        <template #footer>
                            <NSpace v-if="display.showRetryButton !== false" justify="center">
                                <NButton type="primary" :loading="loading || retrying" @click="reloadModel">{{
                                    display.retryText || '重试'
                                }}</NButton>
                            </NSpace>
                        </template>
                    </NResult>
                </div>
                <div v-else class="lc-cesium-model__viewer-wrap">
                    <div ref="containerRef" class="lc-cesium-model__viewer"></div>
                    <div v-if="display.showToolbar !== false" class="lc-cesium-model__panel">
                        <div class="lc-cesium-model__toolbar">
                            <NButton size="small" :disabled="!tileset" @click="locateModel()">定位</NButton>
                            <NButton size="small" type="primary" :loading="loading" @click="reloadModel">重载</NButton>
                            <NButton size="small" :disabled="!tileset" @click="toggleFullscreen">{{ fullscreen ? '退出全屏' : '全屏' }}</NButton>
                        </div>
                        <div v-if="display.showControls !== false" class="lc-cesium-model__controls">
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
import { NButton, NResult, NSpace, NSpin } from 'naive-ui'
import { LcModal } from '@/components/education/components/modal'
import { useCesiumModel, type CesiumModelDialogProps, type LoadedPayload, type UseCesiumModelReturn } from './hooks/useCesiumModel'
import { computed } from 'vue'

type CesiumModelDialogExpose = Pick<
    UseCesiumModelReturn,
    'reloadModel' | 'locateModel' | 'resetView' | 'resetTransform' | 'raiseModel' | 'lowerModel' | 'toggleAutoRotate' | 'toggleFullscreen'
>

const props: Readonly<CesiumModelDialogProps> = withDefaults(defineProps<CesiumModelDialogProps>(), {
    title: '模型预览',
    width: '1200px',
    height: '720px',
    display: () => ({
        viewerBackground: 'rgba(1, 17, 39, 0.86)',
        panelBackground: 'rgba(5, 25, 51, 0.68)',
        panelBorderColor: 'rgba(77, 172, 255, 0.42)',
        panelTextColor: '#ffffff',
        sceneBackgroundColor: '#ffffff',
        loadingDescription: '模型加载中，请稍候',
        loadingStroke: '#4dafff',
        errorTitle: '模型加载失败',
        errorDescription: '请检查模型服务或稍后重试',
        retryText: '重试',
        showToolbar: true,
        showControls: true,
        showRetryButton: true,
    }),
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
const defaultDisplay = {
    viewerBackground: 'rgba(1, 17, 39, 0.86)',
    panelBackground: 'rgba(5, 25, 51, 0.68)',
    panelBorderColor: 'rgba(77, 172, 255, 0.42)',
    panelTextColor: '#ffffff',
    sceneBackgroundColor: '#ffffff',
    loadingDescription: '模型加载中，请稍候',
    loadingStroke: '#4dafff',
    errorTitle: '模型加载失败',
    errorDescription: '请检查模型服务或稍后重试',
    retryText: '重试',
    showToolbar: true,
    showControls: true,
    showRetryButton: true,
}
const display = computed(() => ({ ...defaultDisplay, ...(props.display ?? {}) }))

const emit = defineEmits<{
    (e: 'loaded', value: LoadedPayload): void
    (e: 'loadError', value: unknown): void
}>()

const {
    rootRef,
    containerRef,
    tileset,
    loading,
    retrying,
    loadError,
    loadStatusText,
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

const rootStyle = computed<Record<string, string>>(() => ({
    '--lc-cesium-model-viewer-bg': display.value.viewerBackground,
    '--lc-cesium-model-panel-bg': display.value.panelBackground,
    '--lc-cesium-model-panel-border': display.value.panelBorderColor,
    '--lc-cesium-model-panel-text': display.value.panelTextColor,
    '--n-spin-description-color': display.value.panelTextColor,
    '--lc-cesium-model-retry-text-color': display.value.panelTextColor,
}))

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
    color: var(--lc-cesium-model-panel-text, #ffffff);

    &.is-fullscreen {
        width: 100vw;
        height: 100vh;
        padding: 16px;
        background: var(--lc-cesium-model-viewer-bg, rgba(1, 17, 39, 0.96));
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
        border: 1px solid var(--lc-cesium-model-panel-border, rgba(77, 172, 255, 0.35));
        background: var(--lc-cesium-model-viewer-bg, rgba(1, 17, 39, 0.86));
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
        background: var(--lc-cesium-model-panel-bg, rgba(5, 25, 51, 0.68));
        border: 1px solid var(--lc-cesium-model-panel-border, rgba(77, 172, 255, 0.42));
        box-sizing: border-box;
        backdrop-filter: blur(2px);
        color: var(--lc-cesium-model-panel-text, #fff);
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

    &__state {
        width: 100%;
        height: 100%;
        min-height: 520px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--lc-cesium-model-viewer-bg, #fff);
    }

    :deep(.n-result) {
        width: 100%;
    }

    :deep(.n-result-header__title) {
        color: var(--lc-cesium-model-panel-text, #fff);
    }

    :deep(.n-result-header__description) {
        color: var(--lc-cesium-model-panel-text, #fff);
    }

    :deep(.n-result-footer) {
        color: var(--lc-cesium-model-panel-text, #fff);
    }

    :deep(.n-spin-container),
    :deep(.n-spin-content) {
        height: 100%;
    }

    :deep(.n-spin-description) {
        color: var(--n-spin-description-color, #fff);
    }

    :deep(.n-spin-content--spinning) {
        background: var(--lc-cesium-model-viewer-bg, rgba(1, 17, 39, 0.86));
    }

    :deep(.cesium-widget-credits) {
        display: none !important;
    }
}
</style>
