<template>
    <div class="lc-cesium">
        <NSpin :show="initImageryLayersStatus || initPointDataStatus" :stroke="spinStroke" :style="spinStyle" size="large">
            <div id="cesium-3d-viewer" class="lc-cesium_map"></div>
            <template #description> 地图加载中... </template>
        </NSpin>

        <!-- 悬浮tooltip（原功能） -->
        <div v-show="isTooltipVisible && tooltipContent && !showAllEntitiesTooltips" ref="tooltipRef" class="lc-cesium__tooltip">
            <div class="lc-cesium__tooltip--content">{{ tooltipContent }}</div>
        </div>

        <!-- 多实体tooltip容器（新功能） -->
        <div v-show="showAllEntitiesTooltips && lowHeightTooltips.length > 0" class="lc-cesium__multi-tooltip">
            <div
                v-for="item in lowHeightTooltips"
                ref="entityTooltipRefs"
                :key="item.id"
                class="lc-cesium__tooltip lc-cesium__tooltip--entity"
                :style="item.style"
            >
                <div class="lc-cesium__tooltip--content">{{ item.content }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, computed, useTemplateRef, nextTick } from 'vue'
import { cesiumService } from './modules/cesiumUtils'
import { cesiumProps } from './modules/props'
import type { changeModelType, changeModelParamType, EntityProperties } from './modules/type'
import { Entity, Cartesian3, JulianDate, SceneTransforms, Matrix4, Cartesian4, type Viewer } from 'cesium'
import { NSpin } from 'naive-ui'

// 类型定义
interface LowHeightTooltip {
    id: string
    content: string
    style: {
        top: string
        left: string
        [key: string]: any
    }
}

const initImageryLayersStatus = ref<boolean>(true)
const initPointDataStatus = ref<boolean>(true) // 是否初始化结束
const isTooltipVisible = ref(false)
const lastPickedEntity = ref<Entity | null>(null)
const lastPickedPointOptions = ref<any>(null)
const viewerInitialized = ref(false)
const tooltipContent = ref<string>('')
const tooltip = useTemplateRef('tooltipRef')
const entityTooltipRefs = ref<HTMLElement[]>([])

// 新功能相关状态
const showAllEntitiesTooltips = ref(false)
const lowHeightTooltips = ref<LowHeightTooltip[]>([])
const lowHeightTooltipUpdateId = ref()

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
    enableAllTooltips = false,
    allTooltipsHeight = 1000,
} = defineProps(cesiumProps)

// 检查点是否在相机视锥体内
const isPositionInView = (position: Cartesian3, viewer: Viewer): boolean => {
    try {
        const camera = viewer.camera

        // 使用相机的 viewMatrix 和 projectionMatrix 计算
        const viewMatrix = camera.viewMatrix
        const projectionMatrix = camera.frustum.projectionMatrix
        const viewProjectionMatrix = Matrix4.multiply(projectionMatrix, viewMatrix, new Matrix4())

        // 将位置转换到裁剪空间
        const positionClone = Cartesian3.clone(position)
        const positionHomogeneous = new Cartesian4(positionClone.x, positionClone.y, positionClone.z, 1.0)
        Matrix4.multiplyByVector(viewProjectionMatrix, positionHomogeneous, positionHomogeneous)

        // 归一化坐标
        const w = positionHomogeneous.w
        if (Math.abs(w) < 1e-6) {
            return false
        }

        const x = positionHomogeneous.x / w
        const y = positionHomogeneous.y / w
        const z = positionHomogeneous.z / w

        // 检查是否在裁剪空间内 (-1 到 1)
        return x >= -1 && x <= 1 && y >= -1 && y <= 1 && z >= -1 && z <= 1
    } catch (error) {
        console.warn('检查位置可见性失败:', error)
        // 如果检查失败，默认返回true，让后续的屏幕坐标转换来过滤
        return true
    }
}

// 获取实体属性内容
const getEntityContent = (entity: Entity, currentTime: JulianDate): string => {
    try {
        // 1. 尝试从 properties 获取
        if (entity.properties) {
            const properties = entity.properties.getValue(currentTime)
            if (properties) {
                // 尝试不同的属性名
                return properties.options.popoverLabel
            }
        }

        return '未知实体'
    } catch (e) {
        console.warn('获取实体内容失败:', e)
        return '未知实体'
    }
}

// 新功能：获取所有可视区域内的实体
const getAllVisibleEntities = (): Entity[] => {
    try {
        const viewer = cesiumUtils.viewer as Viewer | undefined
        if (!viewer) return []

        // 获取所有实体
        const dataSourceEntities = cesiumUtils.dataSource?.entities.values || []
        const allEntities = [...dataSourceEntities]

        // 过滤出可视区域内的实体
        const visibleEntities: Entity[] = []
        const currentTime = viewer.clock.currentTime

        for (const entity of allEntities) {
            try {
                // 检查 position 属性
                let position: Cartesian3 | undefined
                if (entity.position) {
                    if (typeof entity.position.getValue === 'function') {
                        position = entity.position.getValue(currentTime)
                    } else if ((entity.position as any).x !== undefined) {
                        // 可能是 Cartesian3 对象
                        position = entity.position as unknown as Cartesian3
                    }
                }

                if (!position) {
                    // 没有有效位置的实体
                    continue
                }

                // 检查点是否在视锥体内
                if (isPositionInView(position, viewer)) {
                    visibleEntities.push(entity)
                }
            } catch (e) {
                console.warn('获取实体信息失败:', e, entity)
            }
        }

        return visibleEntities
    } catch (error) {
        console.error('获取可视实体失败:', error)
        return []
    }
}

// 新功能：更新所有实体的tooltip
const updateAllEntitiesTooltips = () => {
    const viewer = cesiumUtils.viewer as Viewer | undefined
    if (!viewer || !showAllEntitiesTooltips.value) return

    const scene = viewer.scene
    const canvas = scene.canvas
    const currentTime = viewer.clock.currentTime
    const height = viewer.camera.positionCartographic.height
    const scale = Math.max(0.3, Math.min(2, 1 - height / 100000))

    // 获取可视区域内的所有实体
    const visibleEntities = getAllVisibleEntities()

    const tooltips: LowHeightTooltip[] = []

    for (const entity of visibleEntities) {
        const options = entity.properties?.getValue(currentTime)
        try {
            // 获取实体位置
            let position: Cartesian3 | undefined
            if (entity.position) {
                if (typeof entity.position.getValue === 'function') {
                    position = entity.position.getValue(currentTime)
                } else if ((entity.position as any).x !== undefined) {
                    position = entity.position as unknown as Cartesian3
                }
            }

            if (!position) {
                continue
            }

            // 转换为屏幕坐标
            const canvasPosition = SceneTransforms.worldToWindowCoordinates(scene, position)
            if (!canvasPosition || isNaN(canvasPosition.x) || isNaN(canvasPosition.y)) {
                continue
            }

            // 获取实体属性内容
            const content = getEntityContent(entity, currentTime)

            // 检查是否在屏幕范围内
            if (canvasPosition.x < 0 || canvasPosition.x > canvas.width || canvasPosition.y < 0 || canvasPosition.y > canvas.height) {
                continue
            }

            // 限制同时显示的tooltip数量，避免性能问题
            if (tooltips.length < 100) {
                // 估算tooltip的初始位置（后续会在nextTick中精确调整）
                // 使用估算的宽度和高度进行居中计算
                const estimatedWidth = Math.min(Math.max(content.length * 10, 80), 300) // 根据内容长度估算宽度
                const estimatedHeight = 40 // 估算高度

                // 计算偏移量（与悬浮tooltip相同的计算方式）
                const offsetX = (estimatedWidth - 40) / 2 + (popoverOffset.popoverOffsetX || 0)
                const offsetY = (estimatedHeight + 8) / 2 + (popoverOffset.popoverOffsetY || 0)
                tooltips.push({
                    id: entity.id || `entity_${Math.random()}_${Date.now()}`,
                    content: content,
                    style: {
                        top: `${canvasPosition.y - options.valueInfo.height * scale - offsetY}px`,
                        left: `${canvasPosition.x - offsetX}px`,
                        transform: `scale(${scale})`,
                        transformOrigin: 'center center',
                    },
                })
            }
        } catch (e) {
            console.warn('更新实体tooltip失败:', e, entity)
        }
    }

    lowHeightTooltips.value = tooltips

    // 在下一次DOM更新后精确调整tooltip位置
    nextTick(() => {
        if (!showAllEntitiesTooltips.value || !entityTooltipRefs.value.length) return

        const tooltipElements = entityTooltipRefs.value
        const updatedTooltips = [...lowHeightTooltips.value]

        tooltipElements.forEach((tooltipEl, index) => {
            if (!tooltipEl || index >= updatedTooltips.length) return

            const tooltipWidth = tooltipEl.offsetWidth
            const tooltipHeight = tooltipEl.offsetHeight

            // 精确计算偏移量
            const offsetX = (tooltipWidth - 40) / 2 + (popoverOffset.popoverOffsetX || 0)
            const offsetY = (tooltipHeight + 8) / 2 + (popoverOffset.popoverOffsetY || 0)

            // 获取原始屏幕坐标（需要重新计算，因为位置可能已经改变）
            const viewer = cesiumUtils.viewer as Viewer | undefined
            if (!viewer) return

            const entity = visibleEntities[index]
            const options = entity.properties?.getValue(currentTime)
            if (!entity) return

            try {
                let position: Cartesian3 | undefined
                if (entity.position) {
                    if (typeof entity.position.getValue === 'function') {
                        position = entity.position.getValue(viewer.clock.currentTime)
                    } else if ((entity.position as any).x !== undefined) {
                        position = entity.position as unknown as Cartesian3
                    }
                }

                if (!position) return

                const canvasPosition = SceneTransforms.worldToWindowCoordinates(viewer.scene, position)
                if (!canvasPosition || isNaN(canvasPosition.x) || isNaN(canvasPosition.y)) {
                    return
                }

                // 更新位置
                updatedTooltips[index].style = {
                    ...updatedTooltips[index].style,
                    left: `${canvasPosition.x - offsetX}px`,
                    top: `${canvasPosition.y - options.valueInfo.height * scale - offsetY}px`,
                }
            } catch (e) {
                console.warn('精确调整tooltip位置失败:', e)
            }
        })

        // 更新tooltip列表
        lowHeightTooltips.value = updatedTooltips
    })
}

// 清除低高度tooltip更新
const clearLowHeightUpdate = () => {
    if (lowHeightTooltipUpdateId.value) {
        clearInterval(lowHeightTooltipUpdateId.value)
        lowHeightTooltipUpdateId.value = null
    }
}

// 启动低高度tooltip更新
const startLowHeightTooltipUpdate = () => {
    clearLowHeightUpdate()

    // 立即更新一次
    updateAllEntitiesTooltips()

    // 每200毫秒更新一次（可根据性能调整）
    lowHeightTooltipUpdateId.value = setInterval(() => {
        if (showAllEntitiesTooltips.value && cesiumUtils.viewer) {
            updateAllEntitiesTooltips()
        }
    }, 200)
}

// limitHeightHandler 函数
const limitHeightHandler = (value: number) => {
    if (!enableAllTooltips) {
        emit('limitHeightHandler', value)
        return
    }
    // 监听高度变化，判断是否进入低高度模式
    if (value <= allTooltipsHeight) {
        // 进入低高度模式
        showAllEntitiesTooltips.value = true
        isTooltipVisible.value = false // 隐藏悬浮tooltip
        startLowHeightTooltipUpdate()

        // 更新所有实体tooltip
        updateAllEntitiesTooltips()
    } else {
        // 退出低高度模式
        showAllEntitiesTooltips.value = false
        lowHeightTooltips.value = [] // 清除所有tooltip
        clearLowHeightUpdate()
    }

    emit('limitHeightHandler', value)
}

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
    limitHeightHandler: limitHeightHandler,
    loadTileLayerHandler: (status: boolean) => {
        loadImageryLayers(status)
    },
    createdTooltip: (data: Entity, point: any) => {
        // 如果处于低高度模式，不显示悬浮tooltip
        if (showAllEntitiesTooltips.value) return

        const height = (cesiumUtils.viewer as Viewer)?.camera.positionCartographic.height || 0
        if (height > showPopoverHeight) return

        lastPickedEntity.value = data
        lastPickedPointOptions.value = point.options
        updateTooltipPosition(cesiumUtils.viewer as Viewer)
    },
    pointHoverExitHandler: () => {
        // 如果处于低高度模式，不隐藏tooltip
        if (!showAllEntitiesTooltips.value) {
            isTooltipVisible.value = false
        }
    },
})

function updateTooltipPosition(viewer: Viewer) {
    try {
        if (!lastPickedEntity.value) return

        const cartesian = lastPickedEntity.value.position?.getValue(viewer.clock.currentTime)
        const options = lastPickedEntity.value.properties?.getValue(viewer.clock.currentTime)
        if (!cartesian) {
            isTooltipVisible.value = false
            return
        }

        const canvasPosition = SceneTransforms.worldToWindowCoordinates(viewer.scene, cartesian)
        if (canvasPosition && !isNaN(canvasPosition.x) && !isNaN(canvasPosition.y)) {
            isTooltipVisible.value = true

            // 安全地获取tooltip内容
            if (lastPickedPointOptions.value?.popoverLabel) {
                tooltipContent.value = lastPickedPointOptions.value.popoverLabel
            } else {
                tooltipContent.value = getEntityContent(lastPickedEntity.value, viewer.clock.currentTime)
            }

            nextTick(() => {
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

                tooltip.value.style.top = canvasPosition.y - options.valueInfo.height * scale - offsetY + 'px'
                tooltip.value.style.left = canvasPosition.x - offsetX + 'px'
            })
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
    if ((cesiumUtils as any)[type]) {
        ;(cesiumUtils as any)[type](value)
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
        const viewer = cesiumUtils.viewer as Viewer
        viewer?.scene?.postRender.addEventListener(function () {
            const height = viewer?.camera.positionCartographic.height || 0

            // 低高度模式下更新所有实体tooltip
            if (showAllEntitiesTooltips.value && height <= 1000) {
                updateAllEntitiesTooltips()
                return
            }

            if (height > showPopoverHeight) {
                isTooltipVisible.value = false
                return
            }

            if (isTooltipVisible.value && lastPickedEntity.value) {
                updateTooltipPosition(viewer)
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
    // 清理低高度模式相关状态
    clearLowHeightUpdate()
    showAllEntitiesTooltips.value = false
    lowHeightTooltips.value = []

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
    // 清理所有定时器和监听器
    clearLowHeightUpdate()
    initCesiumDebouncedChange()
    offsetStateChange()
    initPointDataChange()
    cesiumUtils.destroy()
})
</script>

<style lang="scss" scoped>
.lc-cesium {
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

    // 单个tooltip样式（原功能）
    &__tooltip {
        position: absolute;
        background: #06385e;
        padding: 8px 12px;
        border: 2px solid #0e79bc;
        border-radius: 8px;
        pointer-events: none;
        z-index: 9999;
        transform-origin: center center;

        &--content {
            color: white;
            font-size: 18px;
        }

        // 多实体tooltip特有样式
        &--entity {
            background: rgba(6, 56, 94, 0.9);
            white-space: nowrap;
            font-size: 14px;
        }
    }

    // 多实体tooltip容器
    &__multi-tooltip {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
    }
}
</style>
