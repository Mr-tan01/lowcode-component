<template>
    <div class="lc-cesium">
        <NSpin :show="initImageryLayersStatus || initPointDataStatus" :stroke="spinStroke" :style="spinStyle" size="large">
            <div id="cesium-3d-viewer" class="lc-cesium_map"></div>
            <template #description> 地图加载中... </template>
        </NSpin>
        <div v-show="isTooltipVisible && tooltipContent" ref="tooltipRef" class="lc-cesium__tooltip">
            <div ref="tooltipContentRef" class="lc-cesium__tooltip--content">{{ tooltipContent }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, computed, useTemplateRef } from 'vue'
import { cesiumService } from './modules/cesiumUtils'
import { cesiumProps } from './modules/props'
import type { changeModelType, changeModelParamType, EntityProperties } from './modules/type'
import { Entity, Cartesian3, JulianDate, SceneTransforms } from 'cesium'
import { NSpin } from 'naive-ui'

const initImageryLayersStatus = ref<boolean>(true)
const initPointDataStatus = ref<boolean>(true) // 是否初始化结束
const isTooltipVisible = ref(false)
const lastPickedEntity = ref()
const lastPickedPointOptions = ref()
const tooltipContent = ref()
const viewerInitialized = ref(false)
const tooltip = useTemplateRef('tooltipRef')
const emit = defineEmits<{
    (e: 'pointHandler', value: EntityProperties): void
    (e: 'limitHeightHandler', value: number): void
    (e: 'loadHandler', value: boolean): void
}>()

const {
    clientId = '74109f7095974ab1a5e930c8e998580d',
    accessToken,
    baseUrl,
    imageryLayersUrl,
    areaName,
    defaultShowState,
    flyToHeight,
    offsetState,
    showPopoverHeight,
    spinStroke,
    spinContainerBg,
    spinDescriptionColor,
    defaultCenterKey = '深圳市',
    centerPosition = Cartesian3.fromDegrees(114.187446, 22.674131, 130000),
    controlStatus,
    basicConfig,
    pointData = [],
    pointBatchRender = { batchRenderSize: 50, batchRenderDelay: 100 }, // 每批渲染的数量 每批之间的延迟时间（毫秒）
    openIndexDB = false,
    openOffset = { flag: false, offset: 0 },
    popoverOffset = { popoverOffsetX: 0, popoverOffsetY: 0 },
} = defineProps(cesiumProps)

const reloadPointData = async (): Promise<void> => {
    await clearEntity()
    const offsetPointData = cesiumUtils.offsetDuplicateCoordinates(pointData, 'lng', 'lat', openOffset.offset)
    // 开启相同点位偏移
    if (openOffset.flag) {
        cesiumUtils.pointData = offsetPointData
    } else {
        cesiumUtils.pointData = pointData
    }
    // 批量渲染点位
    await cesiumUtils.batchRenderPoints(cesiumUtils.pointData || [], defaultShowState, pointBatchRender)

    // 进入得时候就判断高度
    cesiumUtils.handleCameraHeightChange()
}

const loadedTileLayer = (status: boolean): void => {
    initPointDataStatus.value = status
}

const loadImageryLayers = (status: boolean): void => {
    emit('loadHandler', !status)
    initImageryLayersStatus.value = status
    if (initPointDataStatus.value) {
        initPointDataStatus.value = status
    }
}

// 初始化 Cesium 服务
const cesiumUtils = new cesiumService('cesium-3d-viewer', {
    config: basicConfig,
    defaultShowState: defaultShowState,
    flyToHeight: flyToHeight,
    offsetState: offsetState,
    centerPosition: centerPosition,
    defaultCenterKey,
    openIndexDB,
    pointHandler: (data: Entity) => {
        const currentTime = JulianDate.now()
        const valueOption = data.properties?.getValue(currentTime)
        if (!valueOption) return
        emit('pointHandler', valueOption)
    },
    limitHeightHandler: (value: number) => {
        emit('limitHeightHandler', value)
    },
    loadTileLayerHandler: (status: boolean) => {
        loadImageryLayers(status)
    },
    createdTooltip: (data: Entity, point: any) => {
        const height = cesiumUtils.viewer?.camera.positionCartographic.height || 0
        if (height > showPopoverHeight) return

        lastPickedEntity.value = data
        lastPickedPointOptions.value = point.options
        updateTooltipPosition(cesiumUtils.viewer)
    },
    pointHoverExitHandler: () => {
        isTooltipVisible.value = false
    },
})

function updateTooltipPosition(viewer) {
    try {
        const cartesian = lastPickedEntity.value.position.getValue(viewer.clock.currentTime)
        const options = lastPickedEntity.value.properties.getValue(viewer.clock.currentTime)
        const canvasPosition = SceneTransforms.worldToWindowCoordinates(viewer.scene, cartesian)
        if (canvasPosition && !isNaN(canvasPosition.x) && !isNaN(canvasPosition.y)) {
            isTooltipVisible.value = true
            if (!tooltip.value) return
            const height = viewer.camera.positionCartographic.height
            const scale = Math.max(0.3, Math.min(2, 1 - height / 100000))
            tooltip.value.style.transform = `scale(${scale})`
            tooltip.value.style.transformOrigin = `center center`
            const tooltipWidth = tooltip.value?.offsetWidth
            const tooltipHeight = tooltip.value?.offsetHeight
            // 新的位置计算方式，考虑缩放影响
            const offsetX = (tooltipWidth - 40) / 2 + (popoverOffset.popoverOffsetX || 0)
            const offsetY = (tooltipHeight + 8) / 2 + (popoverOffset.popoverOffsetY || 0)

            tooltip.value.style.top = canvasPosition.y - (options.valueInfo.height + offsetY) * scale + 'px'
            tooltip.value.style.left = canvasPosition.x - offsetX + 'px'
            tooltipContent.value = lastPickedPointOptions.value?.popoverLabel
        }
    } catch (e) {
        console.error('Error updating tooltip position:', e)
        isTooltipVisible.value = false
    }
}
// 清除选中图层
const clearEntity = async () => {
    await cesiumUtils.clearEntity('pointEntities', 'dataSource')
    await cesiumUtils.clearEntity('pointEntities', 'viewer')
}
const changeModel = <T extends changeModelType>(type: changeModelType, value: changeModelParamType[T]): void => {
    if (cesiumUtils[type]) {
        cesiumUtils[type](value)
    } else {
        console.log('未匹配cesiumUtils的方法')
    }
}

const initCesium = async () => {
    try {
        if (!accessToken) {
            loadedTileLayer(false)
            return
        }
        // 同步数据
        cesiumUtils.pointData = pointData
        cesiumUtils.options.config = basicConfig
        cesiumUtils.options.defaultShowState = defaultShowState
        cesiumUtils.options.flyToHeight = flyToHeight
        cesiumUtils.options.offsetState = offsetState

        // 初始化 Viewer
        const viewerInitSuccess = await cesiumUtils.initViewer(controlStatus)
        if (!viewerInitSuccess) {
            throw new Error('Viewer 初始化失败')
        }
        viewerInitialized.value = true
        // 视角变化时更新tooltip位置
        cesiumUtils.viewer?.scene?.postRender.addEventListener(function () {
            const height = cesiumUtils.viewer?.camera.positionCartographic.height || 0
            if (height > showPopoverHeight) {
                isTooltipVisible.value = false
                return
            }
            if (isTooltipVisible.value && lastPickedEntity) {
                updateTooltipPosition(cesiumUtils.viewer)
            }
        })
        // 更新属性
        cesiumUtils.updateViewerAttribute()

        // 设置初始视角
        cesiumUtils.setInitialView({ destination: centerPosition }, false)

        // 加载瓦片图层
        const titleUrl =
            imageryLayersUrl ??
            `${baseUrl}/service/api/a466c72ef1ea4f93aae5af7f6ab5b56e/igs/rest/services/SZMAP_Blue_DT_ZW_2024_Q2_4490/WMTSServer?client_id=${clientId}&access_token=${accessToken}`

        await cesiumUtils.loadTileLayer(titleUrl)
        if (areaName) {
            cesiumUtils.polygonClickHandler(areaName)
        }
        loadedTileLayer(false)
    } catch {
        loadedTileLayer(false)
    }
}

const spinStyle = computed(() => {
    return {
        '--spin-container-bg': spinContainerBg ?? '#6C7E93',
        '--n-spin-description-color': spinDescriptionColor ?? '#046ab1',
    }
})

const initCesiumDebounced = async () => {
    cesiumUtils.destroy()
    await initCesium()
}

defineExpose({
    reloadPointData,
    changeModel,
    loadedTileLayer,
    clearEntity,
    cesiumUtils,
})

const initCesiumDebouncedChange = watch([() => accessToken, () => imageryLayersUrl], initCesiumDebounced)

const offsetStateChange = watch(
    () => offsetState,
    newValue => {
        cesiumUtils.options = {
            ...cesiumUtils.options,
            offsetState: newValue,
        }
    },
    { deep: true },
)

const initPointDataChange = watch(
    [initPointDataStatus, () => pointData, () => areaName, viewerInitialized],
    async () => {
        // 只有当 viewer 已初始化时才执行
        if (!viewerInitialized.value || initPointDataStatus.value) {
            return
        }

        await reloadPointData()
    },
    { deep: true },
)

onMounted(async () => {
    await initCesium()
})

onBeforeUnmount(() => {
    initCesiumDebouncedChange()
    offsetStateChange()
    initPointDataChange()
    cesiumUtils.destroy()
})
</script>

<style lang="scss" scoped>
.lc-cesium {
    // position: relative;
    width: 100%;
    height: 100%;
    min-width: 1px;
    min-height: 1px;
    box-sizing: border-box;
    cursor: pointer;

    :deep(.n-spin-container) {
        position: absolute;
        box-sizing: border-box;

        width: 100%;
        height: 100%;
        background: var(--spin-container-bg);

        .n-spin-content--spinning {
            width: 100%;
            height: 100%;
        }

        .n-spin-description {
            color: var(--n-spin-description-color);
        }
    }

    &_map {
        position: relative;
        width: 100%;
        height: 100%;

        // 优化渲染性能
        :deep(.cesium-widget) {
            canvas {
                image-rendering: -moz-crisp-edges;
                -ms-interpolation-mode: nearest-neighbor;
            }
        }
    }

    .initImageryLayersStatus-indicator {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 4px;
        z-index: 10;
    }
    &__tooltip {
        position: absolute;
        background: #06385e;
        padding: 8px 12px;
        border: 2px solid #0e79bc;
        border-radius: 8px;
        pointer-events: none;
        z-index: 9999;
        &--content {
            color: white;
            font-size: 18px;
        }
    }
}
</style>
