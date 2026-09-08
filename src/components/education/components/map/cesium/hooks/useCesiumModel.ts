import { computed, nextTick, onBeforeUnmount, ref, watch, type ComputedRef, type Ref } from 'vue'
import {
    Cartesian3,
    Cartographic,
    Cesium3DTileset,
    Color,
    HeadingPitchRange,
    HeadingPitchRoll,
    Math as cesiumMath,
    Matrix3,
    Matrix4,
    Resource,
    ShadowMode,
    Transforms,
    Viewer,
    type TerrainProvider,
} from 'cesium'
import { useMessage } from 'naive-ui'
import type { cesiumModelLayerType, cesiumModelOperationSpeedType, cesiumModelVersionType } from '../modules/type'

export type OperationSpeed = cesiumModelOperationSpeedType

export interface CesiumModelDialogProps {
    // 弹框标题和尺寸
    title?: string
    width?: string
    height?: string
    display?: CesiumModelDialogDisplayConfig
    // 模型服务接入参数：version 控制 v1/v2 路径，layerId 是服务图层 ID。
    version?: cesiumModelVersionType
    layerId: string
    // 模型服务鉴权参数：会追加为 client_id 和 access_token。
    appId?: string
    token?: string | null
    // 模型服务地址：支持 {node}、{node1}、{client_id}、{access_token} 占位符。
    baseUrl?: string
    tilesetFile?: string
    // 模型空间调整参数：经纬度单位为度，高度单位为米，旋转单位为度。
    longitudeOffset?: number
    latitudeOffset?: number
    heightOffset?: number
    fitToGround?: boolean
    groundHeight?: number
    modelBaseHeight?: number
    heading?: number
    pitch?: number
    roll?: number
    scale?: number
    enhance3D?: boolean
    enableShadows?: boolean
    // 操作速度参数：operationSpeed 走预设档位，rotateStep 可单独覆盖旋转步长。
    operationSpeed?: OperationSpeed
    rotateStep?: number
    autoRotateInterval?: number
    tokenLoader?: () => Promise<string | null | undefined>
    options?: Cesium3DTileset.ConstructorOptions
    modelOptions?: Cesium3DTileset.ConstructorOptions
    terrainProvider?: TerrainProvider
}

export interface CesiumModelDialogDisplayConfig {
    viewerBackground?: string
    panelBackground?: string
    panelBorderColor?: string
    panelTextColor?: string
    sceneBackgroundColor?: string
    loadingDescription?: string
    retryDescription?: string
    loadingStroke?: string
    errorTitle?: string
    errorDescription?: string
    retryText?: string
    showToolbar?: boolean
    showControls?: boolean
    showRetryButton?: boolean
}

export type LoadedPayload = {
    tileset: Cesium3DTileset
    url: string
}

type CesiumModelEmit = {
    (e: 'loaded', value: LoadedPayload): void
    (e: 'loadError', value: unknown): void
}

type LocateModelOptions = {
    afterLayout?: boolean
    recordInitialView?: boolean
}

export interface UseCesiumModelReturn {
    rootRef: Ref<HTMLDivElement | null>
    containerRef: Ref<HTMLDivElement | null>
    viewer: Ref<Viewer | null>
    tileset: Ref<Cesium3DTileset | null>
    loading: Ref<boolean>
    retrying: Ref<boolean>
    loadError: Ref<unknown | null>
    loadErrorMessage: ComputedRef<string>
    loadStatusText: ComputedRef<string>
    autoRotating: Ref<boolean>
    fullscreen: Ref<boolean>
    reloadModel: () => Promise<void>
    locateModel: (options?: LocateModelOptions) => void
    resetView: () => void
    zoomIn: () => void
    zoomOut: () => void
    rotateLeft: () => void
    rotateRight: () => void
    raiseModel: () => void
    lowerModel: () => void
    resetTransform: () => void
    toggleAutoRotate: () => void
    toggleFullscreen: () => Promise<void>
}

const speedStepMap: Record<OperationSpeed, { height: number; rotate: number; zoom: number }> = {
    slow: {
        height: 1,
        rotate: 5,
        zoom: 50,
    },
    normal: {
        height: 5,
        rotate: 10,
        zoom: 100,
    },
    fast: {
        height: 10,
        rotate: 20,
        zoom: 200,
    },
}

export function useCesiumModel(props: Readonly<CesiumModelDialogProps>, visible: Ref<boolean>, emit: CesiumModelEmit): UseCesiumModelReturn {
    const message = useMessage()
    const rootRef = ref<HTMLDivElement | null>(null)
    const containerRef = ref<HTMLDivElement | null>(null)
    const viewer = ref<Viewer | null>(null)
    const tileset = ref<Cesium3DTileset | null>(null)
    const loading = ref(false)
    const retrying = ref(false)
    const loadError = ref<unknown | null>(null)
    const runtimeToken = ref<string | null | undefined>(props.token)
    const lightingEnabled = ref(props.enhance3D ?? true)
    const shadowsEnabled = ref(props.enableShadows ?? true)
    const heightControl = ref(props.heightOffset)
    const headingControl = ref(props.heading)
    const scaleControl = ref(props.scale)
    const initialModelMatrix = ref<Matrix4 | null>(null)
    const initialCameraDestination = ref<Cartesian3 | null>(null)
    const sourceModelCenter = ref<Cartesian3 | null>(null)
    const loadedUrl = ref('')
    const reloadSeed = ref(0)
    const loadRequestId = ref(0)
    const autoRotating = ref(false)
    const fullscreen = ref(false)
    const opening = ref(false)
    const locateFrame = ref<number | null>(null)
    let autoRotateTimer: number | null = null
    let modelRenderWaitCleanup: (() => void) | null = null
    let rejectModelRenderWait: ((error: unknown) => void) | null = null

    const speedStep = computed(() => {
        const preset = speedStepMap[props.operationSpeed ?? 'normal']
        return {
            ...preset,
            rotate: props.rotateStep ?? preset.rotate,
        }
    })
    const loadStatusText = computed(() => {
        if (retrying.value) return props.display?.retryDescription ?? `正在重新加载：${props.title}`
        if (loading.value) return props.display?.loadingDescription ?? `加载中：${props.title}`
        if (loadError.value) return props.display?.errorDescription ?? `模型加载失败`
        if (tileset.value) return `加载完成：${props.title}`
        return `未加载：${props.title}`
    })
    const sceneBackgroundColor = computed(() => props.display?.sceneBackgroundColor ?? '#ffffff')
    const loadErrorMessage = computed(() => {
        if (!loadError.value) return ''
        if (loadError.value instanceof Error) return loadError.value.message
        if (typeof loadError.value === 'string') return loadError.value
        if (typeof loadError.value === 'object') {
            const error = loadError.value as Record<string, any>
            const status = error.status ?? error.statusCode ?? error.response?.status
            const message = error.message ?? error.errorMessage ?? error.statusText ?? error.detail
            if (typeof message === 'string' && /Request has failed/i.test(message)) return ''
            if (message && status) return `${message} (${status})`
            if (message) return String(message)
            if (status) return `请求失败 (${status})`
        }
        return ''
    })

    const getResolvedToken = (): string | null | undefined => runtimeToken.value ?? props.token

    const syncControlsFromProps = (): void => {
        heightControl.value = props.heightOffset
        headingControl.value = props.heading
        scaleControl.value = props.scale
        lightingEnabled.value = props.enhance3D ?? true
        shadowsEnabled.value = props.enableShadows ?? true
    }

    const layerOption = computed<cesiumModelLayerType>(() => ({
        layerId: props.layerId,
        version: props.version,
        appId: props.appId,
        token: getResolvedToken(),
        baseUrl: props.baseUrl,
        tilesetFile: props.tilesetFile,
        longitudeOffset: props.longitudeOffset,
        latitudeOffset: props.latitudeOffset,
        heightOffset: heightControl.value ?? 0,
        fitToGround: props.fitToGround,
        groundHeight: props.groundHeight,
        modelBaseHeight: props.modelBaseHeight,
        heading: headingControl.value ?? 0,
        pitch: props.pitch,
        roll: props.roll,
        scale: scaleControl.value ?? 1,
        enhance3D: lightingEnabled.value,
        enableShadows: shadowsEnabled.value,
        options: props.options ?? props.modelOptions,
    }))

    const replaceUrlPlaceholders = (url: string, option: cesiumModelLayerType): string => {
        const tilesetFile = option.tilesetFile ?? 'tileset.json'

        return url
            .replaceAll('{node}', encodeURIComponent(option.layerId))
            .replaceAll('{node1}', tilesetFile)
            .replaceAll('{client_id}', encodeURIComponent(option.appId ?? ''))
            .replaceAll('{access_token}', encodeURIComponent(option.token ?? ''))
    }

    // 模型服务地址统一在这里拼接，组件外只需要关心 version、layerId、appId、token。
    const getTilesetPath = (option: cesiumModelLayerType): string => {
        const tilesetFile = option.tilesetFile ?? 'tileset.json'
        const baseUrl = (option.baseUrl ?? '').replace(/\/$/, '')
        const version = option.version ?? 'v2'

        if (baseUrl.includes('{node}')) {
            return replaceUrlPlaceholders(baseUrl, option)
        }

        if (baseUrl.endsWith('/v1') || baseUrl.endsWith('/v2/SZ3DTiles')) {
            return `${baseUrl}/${encodeURIComponent(option.layerId)}/3DTilesServer/${tilesetFile}`
        }

        if (version === 'v1') {
            return `${baseUrl}/v1/${encodeURIComponent(option.layerId)}/3DTilesServer/${tilesetFile}`
        }

        return `${baseUrl}/v2/SZ3DTiles/${encodeURIComponent(option.layerId)}/3DTilesServer/${tilesetFile}`
    }

    const getTilesetResource = (option: cesiumModelLayerType): Resource => {
        const queryParameters: Record<string, string> = {}
        const url = getTilesetPath(option)
        loadedUrl.value = url

        if (option.appId && !url.includes('client_id=')) {
            queryParameters.client_id = option.appId
        }

        if (option.token && !url.includes('access_token=')) {
            queryParameters.access_token = option.token
        }

        queryParameters._reload = String(reloadSeed.value)

        return new Resource({
            url,
            queryParameters,
        })
    }

    const clearTilesetFailureListener = (): void => {
        if (tileset.value && tilesetFailureListener.value) {
            tileset.value.tileFailed.removeEventListener(tilesetFailureListener.value)
        }
        tilesetFailureListener.value = null
    }

    const tilesetFailureListener = ref<((error: unknown) => void) | null>(null)

    const bindTilesetFailureListener = (model: Cesium3DTileset): void => {
        clearTilesetFailureListener()
        const onTileFailed = (error: unknown): void => {
            if (model !== tileset.value) return
            if (loadError.value) return

            if (rejectModelRenderWait) {
                rejectModelRenderWait(error)
                return
            }

            console.error('模型瓦片加载失败:', error)
            message.error('模型加载失败')
            loadError.value = error
            clearTilesetFailureListener()
            removeModel()
            emit('loadError', error)
        }
        tilesetFailureListener.value = onTileFailed
        model.tileFailed.addEventListener(onTileFailed)
    }

    const destroyTileset = (model: Cesium3DTileset): void => {
        const destroy = (model as unknown as { destroy?: () => void }).destroy
        if (typeof destroy === 'function') {
            destroy.call(model)
        }
    }

    const clearModelRenderWait = (): void => {
        if (modelRenderWaitCleanup) {
            modelRenderWaitCleanup()
        }
        modelRenderWaitCleanup = null
        rejectModelRenderWait = null
    }

    const waitForModelRendered = (model: Cesium3DTileset, isCurrentLoad: () => boolean): Promise<void> => {
        clearModelRenderWait()

        return new Promise((resolve, reject) => {
            let settled = false
            let renderTimeout: number | null = null
            let noVisibleTileTimeout: number | null = null
            let hasVisibleTile = false
            let pendingPostRenderViewer: Viewer | null = null
            let pendingPostRenderListener: (() => void) | null = null

            const cleanup = (): void => {
                model.initialTilesLoaded.removeEventListener(onReady)
                model.allTilesLoaded.removeEventListener(onReady)
                model.tileVisible.removeEventListener(onTileVisible)
                model.loadProgress.removeEventListener(onLoadProgress)
                if (pendingPostRenderViewer && pendingPostRenderListener) {
                    pendingPostRenderViewer.scene.postRender.removeEventListener(pendingPostRenderListener)
                }
                pendingPostRenderViewer = null
                pendingPostRenderListener = null
                if (renderTimeout !== null) {
                    window.clearTimeout(renderTimeout)
                    renderTimeout = null
                }
                if (noVisibleTileTimeout !== null) {
                    window.clearTimeout(noVisibleTileTimeout)
                    noVisibleTileTimeout = null
                }
            }

            const settle = (callback: () => void): void => {
                if (settled) return
                settled = true
                cleanup()
                modelRenderWaitCleanup = null
                rejectModelRenderWait = null
                callback()
            }

            const resolveAfterRenderedFrame = (): void => {
                if (!isCurrentLoad()) {
                    settle(() => resolve())
                    return
                }

                const currentViewer = viewer.value
                if (!currentViewer) {
                    settle(() => resolve())
                    return
                }

                const onPostRender = (): void => {
                    currentViewer.scene.postRender.removeEventListener(onPostRender)
                    pendingPostRenderViewer = null
                    pendingPostRenderListener = null
                    settle(() => resolve())
                }

                pendingPostRenderViewer = currentViewer
                pendingPostRenderListener = onPostRender
                currentViewer.scene.postRender.addEventListener(onPostRender)
                currentViewer.scene.requestRender()
            }

            const onReady = (): void => {
                if (hasVisibleTile) {
                    resolveAfterRenderedFrame()
                }
            }

            const onTileVisible = (): void => {
                hasVisibleTile = true
                resolveAfterRenderedFrame()
            }

            const rejectWithoutVisibleTile = (): void => {
                if (settled || hasVisibleTile || !isCurrentLoad()) return

                settle(() => reject(new Error('模型瓦片未渲染，请重试')))
            }

            const scheduleNoVisibleTileCheck = (): void => {
                if (hasVisibleTile || noVisibleTileTimeout !== null) return

                noVisibleTileTimeout = window.setTimeout(() => {
                    noVisibleTileTimeout = null
                    rejectWithoutVisibleTile()
                }, 1200)
            }

            const onLoadProgress = (numberOfPendingRequests: number, numberOfTilesProcessing: number): void => {
                if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
                    if (hasVisibleTile) {
                        resolveAfterRenderedFrame()
                        return
                    }

                    scheduleNoVisibleTileCheck()
                }
            }

            modelRenderWaitCleanup = cleanup
            rejectModelRenderWait = (error: unknown): void => {
                settle(() => reject(error))
            }
            renderTimeout = window.setTimeout(() => {
                settle(() => reject(new Error('模型加载超时，请重试')))
            }, 60000)

            model.initialTilesLoaded.addEventListener(onReady)
            model.allTilesLoaded.addEventListener(onReady)
            model.tileVisible.addEventListener(onTileVisible)
            model.loadProgress.addEventListener(onLoadProgress)
        })
    }

    const getModelBaseHeight = (model: Cesium3DTileset, option: cesiumModelLayerType): number | undefined => {
        if (typeof option.modelBaseHeight === 'number') {
            return option.modelBaseHeight
        }

        const rootBoundingVolume = (model.root as any)?._boundingVolume
        if (typeof rootBoundingVolume?.minimumHeight === 'number') {
            return rootBoundingVolume.minimumHeight
        }

        return undefined
    }

    const getGroundHeight = (longitude: number, latitude: number, option: cesiumModelLayerType): number => {
        if (typeof option.groundHeight === 'number') {
            return option.groundHeight
        }

        return viewer.value?.scene.globe.getHeight(new Cartographic(longitude, latitude)) ?? 0
    }

    const getTargetHeight = (
        model: Cesium3DTileset,
        sourceCartographic: Cartographic,
        longitude: number,
        latitude: number,
        option: cesiumModelLayerType,
    ): number => {
        const heightOffset = option.heightOffset ?? 0
        if (!option.fitToGround) {
            return sourceCartographic.height + heightOffset
        }

        const modelBaseHeight = getModelBaseHeight(model, option)
        const groundHeight = getGroundHeight(longitude, latitude, option)
        if (modelBaseHeight === undefined) {
            return groundHeight + heightOffset
        }

        return groundHeight + (sourceCartographic.height - modelBaseHeight) + heightOffset
    }

    const applyModelTransform = (): void => {
        if (!tileset.value) return

        const option = layerOption.value
        // 操作模型时始终基于加载后的原始中心点计算，避免旋转/抬高重复叠加导致模型闪烁或跑远。
        const sourceCenter = sourceModelCenter.value
            ? Cartesian3.clone(sourceModelCenter.value)
            : Cartesian3.clone(tileset.value.boundingSphere.center)
        const sourceCartographic = Cartographic.fromCartesian(sourceCenter)
        const longitude = sourceCartographic.longitude + cesiumMath.toRadians(option.longitudeOffset ?? 0)
        const latitude = sourceCartographic.latitude + cesiumMath.toRadians(option.latitudeOffset ?? 0)
        const targetHeight = getTargetHeight(tileset.value, sourceCartographic, longitude, latitude, option)
        const targetCenter = Cartesian3.fromRadians(longitude, latitude, targetHeight)
        const scale = option.scale ?? 1
        const hasRotation = !!(option.heading || option.pitch || option.roll)

        if (!hasRotation && scale === 1) {
            const translation = Cartesian3.subtract(targetCenter, sourceCenter, new Cartesian3())
            tileset.value.modelMatrix = Matrix4.fromTranslation(translation)
            viewer.value?.scene.requestRender()
            return
        }

        const sourceFrame = Transforms.eastNorthUpToFixedFrame(sourceCenter)
        const targetFrame = Transforms.eastNorthUpToFixedFrame(targetCenter)
        const sourceFrameInverse = Matrix4.inverseTransformation(sourceFrame, new Matrix4())
        const localRotation = Matrix3.fromHeadingPitchRoll(
            new HeadingPitchRoll(
                cesiumMath.toRadians(option.heading ?? 0),
                cesiumMath.toRadians(option.pitch ?? 0),
                cesiumMath.toRadians(option.roll ?? 0),
            ),
        )

        if (scale !== 1) {
            Matrix3.multiplyByScale(localRotation, new Cartesian3(scale, scale, scale), localRotation)
        }

        const localTransform = Matrix4.fromRotationTranslation(localRotation)
        const targetTransform = Matrix4.multiply(targetFrame, localTransform, new Matrix4())
        tileset.value.modelMatrix = Matrix4.multiply(targetTransform, sourceFrameInverse, new Matrix4())
        viewer.value?.scene.requestRender()
    }

    const applySceneEffect = (): void => {
        if (!viewer.value) return

        viewer.value.scene.globe.enableLighting = lightingEnabled.value
        viewer.value.shadows = shadowsEnabled.value
        viewer.value.scene.globe.depthTestAgainstTerrain = false
        viewer.value.scene.globe.show = false
        if (viewer.value.scene.skyBox) {
            viewer.value.scene.skyBox.show = false
        }
        if (viewer.value.scene.skyAtmosphere) {
            viewer.value.scene.skyAtmosphere.show = false
        }
        viewer.value.scene.backgroundColor = Color.fromCssColorString(sceneBackgroundColor.value)
        viewer.value.scene.globe.baseColor = Color.fromCssColorString(sceneBackgroundColor.value)

        if (tileset.value) {
            tileset.value.shadows = shadowsEnabled.value ? ShadowMode.ENABLED : ShadowMode.DISABLED
        }

        viewer.value.scene.requestRender()
    }

    const initViewer = async (): Promise<void> => {
        if (viewer.value || !containerRef.value) return

        const nextViewer = new Viewer(containerRef.value, {
            animation: false,
            timeline: false,
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            navigationHelpButton: false,
            fullscreenButton: false,
            selectionIndicator: false,
            infoBox: false,
            baseLayer: false,
            terrainProvider: props.terrainProvider,
            scene3DOnly: true,
            requestRenderMode: true,
            maximumRenderTimeChange: 1,
            contextOptions: {
                webgl: {
                    alpha: true,
                    antialias: true,
                    preserveDrawingBuffer: true,
                },
            },
        })
        nextViewer.scene.backgroundColor = Color.fromCssColorString(sceneBackgroundColor.value)
        nextViewer.scene.globe.baseColor = Color.fromCssColorString(sceneBackgroundColor.value)
        nextViewer.scene.globe.show = false
        nextViewer.scene.globe.depthTestAgainstTerrain = false
        if (nextViewer.scene.skyBox) {
            nextViewer.scene.skyBox.show = false
        }
        if (nextViewer.scene.skyAtmosphere) {
            nextViewer.scene.skyAtmosphere.show = false
        }
        viewer.value = nextViewer
        applySceneEffect()
    }

    const cancelLocateFrame = (): void => {
        if (locateFrame.value !== null) {
            window.cancelAnimationFrame(locateFrame.value)
            locateFrame.value = null
        }
    }

    const stopAutoRotate = (): void => {
        if (autoRotateTimer) {
            window.clearInterval(autoRotateTimer)
            autoRotateTimer = null
        }
        autoRotating.value = false
    }

    const removeModel = (): void => {
        stopAutoRotate()
        cancelLocateFrame()
        clearTilesetFailureListener()
        if (viewer.value && tileset.value) {
            viewer.value.scene.primitives.remove(tileset.value)
            viewer.value.scene.requestRender()
        }
        tileset.value = null
        initialModelMatrix.value = null
        sourceModelCenter.value = null
    }

    const locateModel = (options?: LocateModelOptions): void => {
        if (!viewer.value || !tileset.value) return

        if (options?.afterLayout) {
            cancelLocateFrame()
            locateFrame.value = window.requestAnimationFrame(() => {
                locateFrame.value = null
                locateModel({ recordInitialView: options.recordInitialView })
            })
            return
        }

        const modelRadius = Math.max(tileset.value.boundingSphere.radius, 1)
        viewer.value.resize()
        viewer.value.camera.viewBoundingSphere(
            tileset.value.boundingSphere,
            new HeadingPitchRange(0, cesiumMath.toRadians(-35), Math.max(modelRadius * 2.2, 80)),
        )
        viewer.value.camera.lookAtTransform(Matrix4.IDENTITY)
        if (options?.recordInitialView) {
            initialCameraDestination.value = Cartesian3.clone(viewer.value.camera.positionWC)
        }
        viewer.value.scene.requestRender()
    }

    const refreshTokenIfNeeded = async (forceRefresh = false): Promise<void> => {
        if (!forceRefresh || !props.tokenLoader) return

        const nextToken = await props.tokenLoader()
        if (!nextToken) {
            throw new Error('重新获取 token 失败')
        }
        runtimeToken.value = nextToken
    }

    type LoadModelOptions = {
        forceRefreshToken?: boolean
        keepErrorVisible?: boolean
    }

    const loadModel = async (options: LoadModelOptions = {}): Promise<void> => {
        if (!props.layerId) {
            loadError.value = new Error('模型图层 ID 不存在')
            loading.value = false
            retrying.value = false
            return
        }

        if (!viewer.value) {
            loadError.value = new Error('模型容器初始化失败')
            loading.value = false
            retrying.value = false
            return
        }

        const currentLoadRequestId = ++loadRequestId.value
        const isCurrentLoad = (): boolean => currentLoadRequestId === loadRequestId.value && visible.value && !!viewer.value

        if (!options.keepErrorVisible) {
            loadError.value = null
        }
        loading.value = true
        removeModel()

        try {
            await refreshTokenIfNeeded(options.forceRefreshToken ?? false)
            const model = await Cesium3DTileset.fromUrl(getTilesetResource(layerOption.value), {
                maximumScreenSpaceError: 2,
                dynamicScreenSpaceError: true,
                ...(props.options ?? {}),
                ...(props.modelOptions ?? {}),
                show: true,
            })

            if (!isCurrentLoad()) {
                destroyTileset(model)
                return
            }

            const renderReady = waitForModelRendered(model, isCurrentLoad)
            tileset.value = model
            sourceModelCenter.value = Cartesian3.clone(model.boundingSphere.center)
            viewer.value.scene.primitives.add(model)
            bindTilesetFailureListener(model)
            applyModelTransform()
            applySceneEffect()
            initialModelMatrix.value = Matrix4.clone(model.modelMatrix)
            locateModel({ afterLayout: true, recordInitialView: true })
            viewer.value.scene.requestRender()
            await renderReady
            if (!isCurrentLoad()) return
            emit('loaded', { tileset: model, url: loadedUrl.value })
        } catch (error) {
            if (!isCurrentLoad()) return
            console.error('模型加载失败:', error)
            message.error('模型加载失败')
            loadError.value = error
            removeModel()
            emit('loadError', error)
        } finally {
            if (isCurrentLoad()) {
                loading.value = false
                retrying.value = false
            }
        }
    }

    const destroyViewer = (): void => {
        loadRequestId.value += 1
        clearModelRenderWait()
        stopAutoRotate()
        cancelLocateFrame()
        removeModel()
        if (viewer.value && !viewer.value.isDestroyed()) {
            viewer.value.destroy()
        }
        viewer.value = null
    }

    const openModel = async (): Promise<void> => {
        if (opening.value) return
        opening.value = true
        syncControlsFromProps()
        try {
            await nextTick()
            await initViewer()
            await loadModel()
        } finally {
            opening.value = false
        }
    }

    const reloadModel = async (): Promise<void> => {
        reloadSeed.value += 1
        retrying.value = true
        loading.value = true
        loadError.value = null
        await nextTick()
        destroyViewer()
        await nextTick()
        await initViewer()
        await loadModel({ forceRefreshToken: true, keepErrorVisible: true })
    }

    const resetView = (): void => {
        if (!viewer.value) return

        if (initialCameraDestination.value) {
            viewer.value.camera.setView({
                destination: initialCameraDestination.value,
            })
            viewer.value.scene.requestRender()
            return
        }

        locateModel()
    }

    const zoomIn = (): void => {
        viewer.value?.camera.zoomIn(speedStep.value.zoom)
        viewer.value?.scene.requestRender()
    }

    const zoomOut = (): void => {
        viewer.value?.camera.zoomOut(speedStep.value.zoom)
        viewer.value?.scene.requestRender()
    }

    const rotateLeft = (): void => {
        headingControl.value = (headingControl.value ?? 0) - speedStep.value.rotate
    }

    const rotateRight = (): void => {
        headingControl.value = (headingControl.value ?? 0) + speedStep.value.rotate
    }

    const raiseModel = (): void => {
        heightControl.value = (heightControl.value ?? 0) + speedStep.value.height
    }

    const lowerModel = (): void => {
        heightControl.value = (heightControl.value ?? 0) - speedStep.value.height
    }

    const startAutoRotate = (): void => {
        stopAutoRotate()
        autoRotating.value = true
        autoRotateTimer = window.setInterval(() => {
            rotateRight()
        }, props.autoRotateInterval ?? 200)
    }

    const toggleAutoRotate = (): void => {
        if (autoRotating.value) {
            stopAutoRotate()
            return
        }

        startAutoRotate()
    }

    const resetTransform = (): void => {
        stopAutoRotate()
        heightControl.value = props.heightOffset
        headingControl.value = props.heading
        scaleControl.value = props.scale
        if (tileset.value && initialModelMatrix.value) {
            tileset.value.modelMatrix = Matrix4.clone(initialModelMatrix.value)
            viewer.value?.scene.requestRender()
        }
    }

    const refreshViewerSize = (): void => {
        viewer.value?.resize()
        viewer.value?.scene.requestRender()
    }

    const toggleFullscreen = async (): Promise<void> => {
        if (!rootRef.value) return

        // 浏览器全屏切换后 Cesium 需要重新读取容器尺寸，否则画布可能仍按旧尺寸渲染。
        if (!document.fullscreenElement) {
            await rootRef.value.requestFullscreen()
        } else {
            await document.exitFullscreen()
        }
        await nextTick()
        refreshViewerSize()
        locateModel({ afterLayout: true })
    }

    const handleFullscreenChange = (): void => {
        fullscreen.value = document.fullscreenElement === rootRef.value
        refreshViewerSize()
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    watch(
        visible,
        value => {
            if (value) {
                void openModel()
            } else {
                destroyViewer()
                retrying.value = false
            }
        },
        { immediate: true },
    )

    watch(
        () => [props.version, props.layerId, props.appId, props.token, props.baseUrl, props.tilesetFile],
        () => {
            runtimeToken.value = props.token
            syncControlsFromProps()
            if (visible.value && viewer.value) {
                void loadModel()
            }
        },
    )

    watch([heightControl, headingControl, scaleControl], () => {
        applyModelTransform()
    })

    watch([lightingEnabled, shadowsEnabled], () => {
        applySceneEffect()
    })

    onBeforeUnmount(() => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
        stopAutoRotate()
        destroyViewer()
    })

    return {
        rootRef,
        containerRef,
        viewer,
        tileset,
        loading,
        retrying,
        loadError,
        loadErrorMessage,
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
    }
}
