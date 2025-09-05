import {
    Viewer,
    Cartesian2,
    Cartesian3,
    Color,
    defined,
    Entity,
    Math as cesiumMath,
    PolylineDashMaterialProperty,
    ScreenSpaceEventHandler,
    ScreenSpaceEventType,
    WebMapTileServiceImageryProvider,
    ArcGisMapServerImageryProvider,
    JulianDate,
    CustomDataSource,
    VerticalOrigin,
    HorizontalOrigin,
    Rectangle,
    Cartographic,
    PolygonHierarchy,
    ImageryLayer,
    Primitive,
    BoundingSphere,
} from 'cesium'
import { CesiumHeatmap } from 'cesium-heatmap-es6'
import { areaData, type controlStatusType, type optionType, type pointType, type changeModelParamType } from './type'
import { createInfoCanvas, createClusterBillboard, updateViewerEntityInfo, createEntityConfig, heatmapGradient } from './tools'
import { useMessage } from 'naive-ui'
export class cesiumService {
    public viewer: Viewer | null = null
    public pointData: pointType[] | null = []
    public pointEntities: Entity[] | null = []
    public polygonEntities: Entity[] | null = []
    public screenSpaceEventHandler: void | null = null
    public screenMouseMoveHandler: void | null = null
    private imageLayerState: boolean | null = true
    private imageLayerUrl: string | null = null
    private tileLoadCallback: OmitThisParameter<(remaining: number) => void> | null = null

    private dataSource: CustomDataSource | null = null
    private centerPosition: Cartesian3 | null = null
    private defaultCenterKey: string = '深圳市'
    private defaultConfig = {
        minZoom: 200,
        maxZoom: 130000,
        baseColor: Color.TRANSPARENT,
        clusteringEnabled: true,
        clusteringPixelRange: 30,
        clusteringMinimumClusterSize: 2,
        flyToHeight: 26000,
        cameraLimitsEnabled: true,
        hoverState: true,
        defaultUrl: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
    }

    private lastValidCameraPosition: Cartesian3 | null = null
    private isCheckingBounds = false
    private removePreUpdateListener: (() => void) | null = null // 修改为函数类型
    private lastHoveredEntity: Entity | null = null
    private lastThrottleTime: number = 0
    private throttleDelay: number = 100
    private rretryCount: number = 3
    private cameraChangedListener: (() => void) | null = null
    private shouldShowLabels: boolean = false // 当前是否展示全部悬浮label

    // 深圳市地理边界（根据瓦片定义经纬度范围）
    private shenzhenBounds = Rectangle.fromDegrees(113.94, 22.43, 114.57, 22.83)

    private message = useMessage()
    constructor(
        public containerId: string,
        public options: optionType,
    ) {
        // 合并配置
        this.options.config = {
            ...this.defaultConfig,
            ...(this.options.config || {}),
        }
        this.centerPosition = options.centerPosition
        this.defaultCenterKey = options.defaultCenterKey
        // 图层加载监听器
        this.tileLoadCallback = this.handleTileLoadProgress.bind(this)
    }

    /**
     * 对经纬度完全相同的数据点进行均匀环形偏移
     * @param list      原始数据数组
     * @param lngKey    经度字段名
     * @param latKey    纬度字段名
     * @param distance  偏移距离（米），默认 200
     * @returns         已做偏移的新数组
     */
    public offsetDuplicateCoordinates<T extends Record<string, any>>(list: T[], lngKey: keyof T, latKey: keyof T, distance = 200): T[] {
        const EARTH_RADIUS = 6_371_000 // 地球半径（米）

        // 1. 按经纬度分组
        const map = new Map<string, T[]>()
        list.forEach(item => {
            const key = `${item[lngKey]},${item[latKey]}`
            if (!map.has(key)) map.set(key, [])
            map.get(key)!.push(item)
        })

        // 2. 对每个重合簇做环形偏移
        return Array.from(map.values()).flatMap(group => {
            if (group.length === 1) return group
            return group.map((item, idx) => {
                const angle = (idx * 2 * Math.PI) / group.length
                const lng = Number(item[lngKey])
                const lat = Number(item[latKey])

                // 经纬度偏移量（弧度）
                const deltaLng = (distance * Math.cos(angle)) / (EARTH_RADIUS * Math.cos(lat * (Math.PI / 180)))
                const deltaLat = (distance * Math.sin(angle)) / EARTH_RADIUS
                const r = {
                    ...item,
                    [lngKey]: Number((lng + deltaLng * (180 / Math.PI)).toFixed(6)),
                    [latKey]: Number((lat + deltaLat * (180 / Math.PI)).toFixed(6)),
                } as T
                return r
            })
        })
    }

    // Cesium属性更新
    updateViewerAttribute(): void {
        if (!this.viewer) return

        const config = this.options.config
        const { scene } = this.viewer

        scene.screenSpaceCameraController.minimumZoomDistance = config?.minZoom ?? this.defaultConfig.minZoom
        scene.screenSpaceCameraController.maximumZoomDistance = config?.maxZoom ?? this.defaultConfig.maxZoom
        scene.globe.baseColor = config?.baseColor ?? this.defaultConfig.baseColor
    }

    // 添加点聚合配置方法
    private getTypeColor(type: string): string {
        const colorMap: Record<string, string> = {
            primary: '#1E9EFA',
            success: '#67C23A',
            warning: '#E6A23C',
            danger: '#E41F1F',
            default: '#1E9EFA',
        }
        return colorMap[type] || colorMap.default
    }

    private setupClustering(): void {
        if (!this.viewer) return

        this.dataSource = new CustomDataSource('clusterSource')
        this.viewer.dataSources.add(this.dataSource)

        const config = this.options.config
        const clustering = this.dataSource.clustering

        clustering.enabled = config?.clusteringEnabled ?? this.defaultConfig.clusteringEnabled
        clustering.pixelRange = config?.clusteringPixelRange ?? this.defaultConfig.clusteringPixelRange
        clustering.minimumClusterSize = config?.clusteringMinimumClusterSize ?? this.defaultConfig.clusteringMinimumClusterSize

        if (!clustering.enabled) return

        clustering.clusterEvent.addEventListener((clusteredEntities, cluster) => {
            // 设置聚合点的基本样式
            cluster.billboard.show = true
            cluster.label.show = false

            // 各类型点位数量和颜色
            const typeCount = {}
            const typeColors = {}
            let primaryType = ''
            let maxCount = 0

            clusteredEntities.forEach(entity => {
                if (!entity.properties) return

                const entityType = entity.properties.type?.getValue(JulianDate.now())
                if (!entityType) return

                // 获取该类型的颜色
                const color = this.getTypeColor(entityType)

                typeCount[entityType] = (typeCount[entityType] || 0) + 1
                typeColors[entityType] = color

                if (typeCount[entityType] > maxCount) {
                    maxCount = typeCount[entityType]
                    primaryType = entityType
                }
            })

            // 创建自定义聚合点图标，传入所有类型信息
            const canvas = createClusterBillboard(clusteredEntities.length, primaryType || 'primary', typeCount, typeColors)

            Object.assign(cluster.billboard, {
                id: {
                    type: 'cluster',
                    entities: clusteredEntities, // 保存所有被聚合的实体
                    count: clusteredEntities.length, // 存数量
                    types: typeCount, // 保存类型统计信息
                    colors: typeColors, // 保存类型颜色信息
                },
                image: canvas.toDataURL(),
                width: 50,
                height: 50,
                verticalOrigin: VerticalOrigin.CENTER,
                horizontalOrigin: HorizontalOrigin.CENTER,
                disableDepthTestDistance: undefined,
            })
        })
    }

    private doubleClickHandler = (event: MouseEvent): void => {
        event.preventDefault()
        event.stopPropagation()
        this.setCameraHeight('ZoomIn')
    }

    async initViewer(controlStatus: controlStatusType): Promise<boolean> {
        if (this.viewer) this.destroy()

        try {
            this.viewer = new Viewer(this.containerId, controlStatus)

            // @ts-ignore
            this.viewer.cesiumWidget.creditContainer.style.display = 'none'

            const { scene } = this.viewer
            scene.debugShowFramesPerSecond = false
            scene.globe.depthTestAgainstTerrain = true
            scene.screenSpaceCameraController.enableTranslate = true
            // 场景效果配置
            this.viewer.scene.skyBox.show = false // 禁用天空盒
            this.viewer.scene.sun.show = false // 禁用太阳效果
            this.viewer.scene.moon.show = false // 禁用月亮效果
            this.viewer.scene.skyAtmosphere.show = false // 禁用天空大气效果
            this.viewer.scene.globe.showGroundAtmosphere = false // 禁用地面大气散射效果
            this.viewer.scene.globe.atmosphereBrightnessShift = 0.25 // 设置大气亮度偏移
            this.viewer.scene.globe.baseColor = Color.TRANSPARENT // 设置地球基础颜色为透明

            // 使用浏览器推荐的分辨率
            this.viewer.useBrowserRecommendedResolution = true

            // 设置场景背景为透明
            this.viewer.scene.backgroundColor = Color.TRANSPARENT

            // 移除所有默认影像图层
            this.viewer.imageryLayers.removeAll()
            this.updateViewerAttribute()

            // 移除默认双击事件并添加自定义双击事件
            this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
            this.viewer.scene.canvas.addEventListener('dblclick', this.doubleClickHandler, false)

            // 设置聚类
            this.setupClustering()

            // 设置相机限制
            if (this.options.config?.cameraLimitsEnabled ?? this.defaultConfig.cameraLimitsEnabled) {
                this.setupCameraLimits()
            }

            this.setupEventHandlers()
            this.setupCameraChangeListener()
            return true
        } catch (error) {
            console.error('初始化Cesium失败:', error)
            return false
        }
    }

    // 设置相机变化监听器
    private setupCameraChangeListener(): void {
        const that = this
        if (!this.viewer) return

        // 移除现有的监听器
        if (this.cameraChangedListener) {
            this.cameraChangedListener()
            this.cameraChangedListener = null
        }

        // 添加新的监听器
        this.cameraChangedListener = this.viewer.camera.changed.addEventListener(() => {
            that.handleCameraHeightChange()
        })
    }

    // 处理相机高度变化
    private handleCameraHeightChange(): void {
        if (!this.viewer || !this.pointEntities) return

        const cameraHeight = this.viewer.camera.positionCartographic.height
        this.shouldShowLabels = cameraHeight <= (this.options.config?.labelShowHeightThreshold ?? 5000)
        if (this.shouldShowLabels) {
            this.pointData?.forEach(item => {
                this.addPoint(item, undefined, 'Label')
            })
        }
        this.pointEntities.forEach(entity => {
            if (entity.name && entity.name.endsWith('Label')) {
                // 只有在应该显示标签且标签当前未显示时才更新
                if (this.shouldShowLabels && !entity.show) {
                    entity.show = true

                    // 设置标签的避让属性
                    if (entity.label) {
                        // @ts-expect-error
                        entity.label.disableDepthTestDistance = Number.POSITIVE_INFINITY
                        entity.label.heightReference = 1 as any // 使用高度参考
                    }
                } else if (!this.shouldShowLabels && entity.show) {
                    // 如果不需要显示标签且标签当前显示，则隐藏
                    entity.show = false
                }
            }
        })
    }

    // 设置事件处理器
    private setupEventHandlers(): void {
        if (!this.viewer) return

        const canvas = this.viewer.scene.canvas

        // 注册单击事件
        this.screenSpaceEventHandler = new ScreenSpaceEventHandler(canvas).setInputAction(
            this.handleLeftClick.bind(this),
            ScreenSpaceEventType.LEFT_CLICK,
        )

        // 注册鼠标悬浮事件
        this.screenMouseMoveHandler = new ScreenSpaceEventHandler(canvas).setInputAction(
            this.handleMouseMove.bind(this),
            ScreenSpaceEventType.MOUSE_MOVE,
        )
        // 添加鼠标离开地图事件监听
        canvas.addEventListener('mouseout', this.handleCanvasMouseOut.bind(this))
    }

    /**
     * 根据点位集合计算最佳飞行高度
     * @param entities 聚合实体数组
     * @param scale 视野系数（>1 留边）
     */
    private calcHeightByExtent(entities: any[], scale = 2.8) {
        const positions = entities.map(e => e.position?.getValue(JulianDate.now())).filter(p => p)

        if (positions.length < 2) return { longitude: 0, latitude: 0, height: 500 }

        // 2 个点：用实际水平距离
        if (positions.length === 2) {
            const [p1, p2] = positions
            const c1 = Cartographic.fromCartesian(p1)
            const c2 = Cartographic.fromCartesian(p2)
            const dist = Cartesian3.distance(
                Cartesian3.fromDegrees(cesiumMath.toDegrees(c1.longitude), cesiumMath.toDegrees(c1.latitude)),
                Cartesian3.fromDegrees(cesiumMath.toDegrees(c2.longitude), cesiumMath.toDegrees(c2.latitude)),
            )
            const center = BoundingSphere.fromPoints(positions).center
            const cart = Cartographic.fromCartesian(center)
            return {
                longitude: cesiumMath.toDegrees(cart.longitude),
                latitude: cesiumMath.toDegrees(cart.latitude),
                height: dist * scale, // 距离越近高度越低
            }
        }

        // 多点：沿用包围球半径
        const sphere = BoundingSphere.fromPoints(positions)
        const cart = Cartographic.fromCartesian(sphere.center)
        return {
            longitude: cesiumMath.toDegrees(cart.longitude),
            latitude: cesiumMath.toDegrees(cart.latitude),
            height: sphere.radius * scale,
        }
    }

    // 处理左键点击
    private handleLeftClick(click: { position: Cartesian2 }): void {
        if (!this.viewer) return

        this.viewer.selectedEntity = undefined // 取消选中，阻止默认弹窗

        if (this.options?.offsetState) {
            // 处理缩放偏移
            click.position.x *= 1.18
            click.position.y *= 1.18
        }
        const pickedObject: any = this.viewer.scene.pick(click.position)
        if (defined(pickedObject) && pickedObject.id) {
            if (pickedObject.id.type === 'cluster') {
                const entities = pickedObject.id.entities
                const { longitude, latitude, height } = this.calcHeightByExtent(entities, 4)
                this.viewer.camera.flyTo({
                    destination: Cartesian3.fromDegrees(longitude, latitude, height),
                    duration: 0.5,
                })
            }
            this.options.config.hoverState ? this.pointClickHandler(pickedObject.id) : this.options.pointHandler(pickedObject.id)
        }
    }

    // 新增方法：处理鼠标离开地图事件
    private handleCanvasMouseOut(): void {
        // 如果鼠标离开了地图，清除最后一个悬浮的实体
        if (this.lastHoveredEntity) {
            this.pointHoverExitHandler(this.lastHoveredEntity)
            this.lastHoveredEntity = null
        }
    }

    // 处理鼠标移动
    private handleMouseMove(movement: { endPosition: Cartesian2 }): void {
        if (!this.viewer || this.shouldShowLabels) return

        // 添加时间戳节流
        const now = Date.now()
        if (now - this.lastThrottleTime < this.throttleDelay) return
        this.lastThrottleTime = now

        if (this.options?.offsetState) {
            // 处理缩放偏移
            movement.endPosition.x *= 1.18
            movement.endPosition.y *= 1.18
        }

        const pickedObject: any = this.viewer.scene.pick(movement.endPosition)

        // 如果鼠标移出了实体或悬浮在区域上
        if (!defined(pickedObject) || !pickedObject.id || pickedObject.id.name in areaData) {
            // 当鼠标离开实体时，清除最后一个悬浮的实体
            if (this.lastHoveredEntity) {
                this.pointHoverExitHandler(this.lastHoveredEntity)
                this.lastHoveredEntity = null
            }
            return
        }

        // 如果悬浮的是Label元素，不做处理
        if (pickedObject.id.name?.includes('Label')) {
            return
        }

        // 如果鼠标悬浮在一个新实体上
        if (pickedObject.id !== this.lastHoveredEntity) {
            // 恢复上一个悬浮实体的状态
            if (this.lastHoveredEntity) {
                this.pointHoverExitHandler(this.lastHoveredEntity)
            }

            // 处理新的悬浮实体
            this.pointHoverHandler(pickedObject.id)
            this.lastHoveredEntity = pickedObject.id
        }
    }

    // 瓦片加载状完成（首次添加point、polygon）
    private handleTileLoadProgress(remaining: number) {
        // 需等待瓦片加载完成
        if (remaining === 0) {
            this.options.loadTileLayerHandler(false)
            // 移除监听器
            this.cleanupTileLoadListener()
        }
    }

    // 加载瓦片
    async loadTileLayer(url: string): Promise<void> {
        let provider
        this.options.loadTileLayerHandler(true)
        const { viewer, imageLayerState, imageLayerUrl } = this

        this.cleanupTileLoadListener()
        this.updateLayerState(url)

        try {
            provider = await this.loadProviderWithFallback({
                targetUrl: imageLayerUrl || url,
                useZondy: imageLayerState,
                fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl,
            })

            if (viewer && provider) {
                await this.addProviderToViewer(viewer, provider)
            }
        } catch (error) {
            await this.retryLoadProvider(imageLayerUrl || url, imageLayerState)
            this.handleLoadError(error)
        }
    }

    // 重试
    private async retryLoadProvider(url: string, useZondy: boolean | null): Promise<void> {
        let attempts = 0
        while (attempts < this.rretryCount) {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                const provider = await this.loadProviderWithFallback({
                    targetUrl: url,
                    useZondy,
                    fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl,
                })
                if (this.viewer && provider) {
                    await this.addProviderToViewer(this.viewer, provider)
                    return
                }
            } catch {
                attempts++
                this.message.error('瓦片加载失败,请刷新重试')
            }
        }
    }

    private cleanupTileLoadListener(): void {
        if (this.tileLoadCallback && this.viewer?.scene?.globe) {
            this.viewer.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)
        }
    }

    private updateLayerState(url: string): void {
        if (!this.imageLayerUrl) {
            this.imageLayerUrl = url
        }
        this.imageLayerState = !this.imageLayerState
    }

    private async loadProviderWithFallback(options: {
        targetUrl: string
        useZondy: boolean | null
        fallbackUrl: string
    }): Promise<WebMapTileServiceImageryProvider | ArcGisMapServerImageryProvider> {
        try {
            let provider: any

            if (options.useZondy) {
                // @ts-ignore
                provider = await Zondy.WebMapTileServiceImageryProvider.fromUrl(options.targetUrl, {
                    rectangle: Rectangle.fromDegrees(
                        113.72, // 西经
                        22.11, // 南纬
                        115.05, // 东经
                        22.88, // 北纬
                    ),
                    ...(this.options?.config?.providerOptions ?? {}),
                })
            } else {
                provider = await ArcGisMapServerImageryProvider.fromUrl(options.targetUrl)
            }

            return provider
        } catch {
            try {
                return await ArcGisMapServerImageryProvider.fromUrl(options.fallbackUrl)
            } catch (fallbackError) {
                this.options.loadTileLayerHandler(false)
                throw fallbackError
            }
        }
    }

    private async addProviderToViewer(viewer: Viewer, provider: WebMapTileServiceImageryProvider | ArcGisMapServerImageryProvider): Promise<void> {
        try {
            viewer.imageryLayers.addImageryProvider(provider)
            if (this.tileLoadCallback) {
                viewer.scene?.globe?.tileLoadProgressEvent.addEventListener(this.tileLoadCallback)
            }
        } catch (error) {
            console.error('添加图层失败:', error)
            throw error
        }
    }

    private handleLoadError(error: unknown): void {
        console.error('图层加载流程失败:', error)
    }

    // 添加点标记
    async addPoint(point: pointType, type?: string, labelType?: string): Promise<Entity | null | void> {
        if (!this.viewer && !this.dataSource) return null
        const valueInfo = await createInfoCanvas(point, type, labelType)
        const entityConfig = await createEntityConfig({ point, valueInfo: valueInfo.canvas, type, viewer: this.viewer! })
        const entity: Entity | null = this[labelType === 'Label' ? 'viewer' : 'dataSource']?.entities.add(entityConfig) ?? null
        if (!this.pointEntities) {
            this.pointEntities = []
        }

        if (entity) {
            this.pointEntities.push(entity)
        }

        return entity
    }

    // 清除指定entity
    async clearEntity(key: 'pointEntities' | 'polygonEntities', type: 'dataSource' | 'viewer'): Promise<void> {
        if (!this[type] || !this[key]) return

        for (const entity of this[key]) {
            this[type]?.entities.remove(entity)
        }
        this[key] = []
    }

    addPolygon(name: string): void {
        if (!this.viewer || !(name in areaData)) return

        const getPositions = (data: any) => data.position.geometry.coordinates.flat(2).map(([lng, lat]) => Cartesian3.fromDegrees(lng, lat))
        const positions = getPositions(areaData[name])

        const entity = this.viewer.entities.add({
            name: name,
            polyline: {
                positions,
                material: new PolylineDashMaterialProperty({
                    color: Color.fromCssColorString('#1E9EFA').withAlpha(0.7),
                }),
                width: 2,
            },
            polygon: {
                hierarchy: new PolygonHierarchy(positions),
                material: Color.fromCssColorString('#A2D8FF').withAlpha(0.3),
                outline: true,
                outlineColor: Color.fromCssColorString('#4694CD'),
            },
        })

        this.polygonEntities = this.polygonEntities || []
        this.polygonEntities.push(entity)
    }

    // 深圳全市添加Polygon
    addAllDistricts() {
        this.clearEntity('polygonEntities', 'viewer')
        ;(Object.keys(areaData) as Array<keyof typeof areaData>).filter(key => key !== '深圳市').forEach(this.addPolygon.bind(this))
    }

    // 获取当前地图经纬度、高度
    private getPositionCartographic() {
        if (!this.viewer) return

        const position = this.viewer.camera.positionCartographic
        const longitude = cesiumMath.toDegrees(position.longitude)
        const latitude = cesiumMath.toDegrees(position.latitude)

        return [longitude, latitude, position.height]
    }

    // 设置地图高度
    setCameraHeight(type: string) {
        if (type !== 'ZoomIn' && type !== 'ZoomOut') return

        const value = this.getPositionCartographic()
        if (!value || !this.viewer) return

        const { maxZoom = this.defaultConfig.maxZoom, minZoom = this.defaultConfig.minZoom } = this.options.config ?? {}

        // 根据当前高度确定缩放步长
        const heightLimit = value[2] >= 30000 ? 20000 : value[2] >= 20000 ? 10000 : value[2] >= 10000 ? 8000 : 1000

        const height = value[2] - (type === 'ZoomIn' ? heightLimit : -heightLimit)
        const heightResult = height <= maxZoom && height >= minZoom ? height : type === 'ZoomIn' ? minZoom : maxZoom

        this.viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(value[0], value[1], heightResult),
            duration: 0.3,
        })
    }

    // 获取实体名称相关信息
    private getEntityNameInfo(name: string | undefined) {
        const baseName = name?.endsWith('Label') ? name?.replace('Label', '') : name
        const labelName = `${baseName}Label`

        return {
            baseName,
            labelName,
            dataIndex: this.pointData?.findIndex(item => item.name === baseName) ?? -1,
            entityIndex: this.pointEntities?.findIndex(item => item.name === baseName) ?? -1,
            labelEntityIndex: this.pointEntities?.findIndex(item => item.name === labelName) ?? -1,
        }
    }

    // 控制窗体
    pointClickHandler(pickedObject: Entity): void {
        const { name } = pickedObject
        const { labelName, dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name)

        // 文字描述状态
        const shouldAddPoint = dataIndex !== -1 && labelEntityIndex === -1 && !this.options.defaultShowState

        // 更新图标状态
        updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities?.[entityIndex], 'value')

        // 更新标签状态
        if (labelEntityIndex !== -1 && this.options.defaultShowState) {
            updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities?.[labelEntityIndex])
        }

        // 添加文字描述
        if (shouldAddPoint && this.pointData) {
            this.addPoint(this.pointData[dataIndex], undefined, 'Label')
        }

        // 处理标签显示/隐藏逻辑
        this.handleLabelsVisibility(labelName)

        // Entity事件回调
        this.options.pointHandler(pickedObject)
    }

    // 处理标签显示/隐藏
    private handleLabelsVisibility(currentLabelName: string): void {
        if (this.options.defaultShowState || !this.pointEntities) return

        const currentTime = JulianDate.now()

        this.pointEntities.forEach(item => {
            if (item.name?.endsWith('Label')) {
                // 切换当前标签的显示状态，隐藏其他标签
                item.show = item.name === currentLabelName && !item.show
            } else {
                // 处理非标签实体的状态恢复
                const changeState = item.properties?.getValue(currentTime).changeState
                if (!changeState) return

                const valueIndex = this.pointData?.findIndex(option => option.name === item.name) ?? -1
                if (valueIndex !== -1) {
                    updateViewerEntityInfo(this.pointData?.[valueIndex], item, 'value')
                }
            }
        })
    }

    // 鼠标悬浮处理
    private pointHoverHandler(pickedObject: Entity): void {
        const { name } = pickedObject
        // 如果悬浮的是Label元素，不做处理
        if (name?.includes('Label')) return

        const { labelName, dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name)

        this.handleHoverLabelDisplay(dataIndex, labelName, labelEntityIndex)
        this.applyHoverEffect(dataIndex, entityIndex)
        this.hideOtherLabels(labelName)
    }

    // 处理悬浮时标签显示
    private handleHoverLabelDisplay(dataIndex: number, labelName: string, labelEntityIndex: number): void {
        if (dataIndex === -1 || this.options.defaultShowState) return

        // 检查是否需要添加新标签
        if (labelEntityIndex === -1 && this.pointData) {
            // 添加文字描述
            this.addPoint(this.pointData[dataIndex], undefined, 'Label')
        } else if (labelEntityIndex !== -1 && this.pointEntities) {
            // 如果标签已存在但未显示，则显示它
            this.pointEntities[labelEntityIndex].show = true
        }
    }

    // 应用悬浮效果
    private applyHoverEffect(dataIndex: number, entityIndex: number): void {
        if (entityIndex === -1 || !this.pointEntities) return

        const entity = this.pointEntities[entityIndex]
        if (!entity || !entity.properties) return

        const currentTime = JulianDate.now()
        const properties = entity.properties.getValue(currentTime)

        // 设置悬浮状态标记
        if (!properties.hoverState) {
            entity.properties.addProperty('hoverState', true)
        }

        // 应用悬浮效果
        updateViewerEntityInfo(this.pointData?.[dataIndex], entity, 'value')
    }

    // 隐藏其他标签
    private hideOtherLabels(currentLabelName: string): void {
        if (this.options.defaultShowState || !this.pointEntities) return

        this.pointEntities.forEach(item => {
            if (item.name?.endsWith('Label') && item.name !== currentLabelName) {
                item.show = false
            }
        })
    }

    // 鼠标离开悬浮元素处理
    private pointHoverExitHandler(entity: Entity): void {
        const { name } = entity

        // 如果离开的是Label元素，不做处理
        if (name?.includes('Label')) return

        const { dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name)

        this.restoreEntityState(dataIndex, entityIndex)
        this.handleLabelVisibilityOnExit(dataIndex, labelEntityIndex)

        // 回调函数
        if (this.options.pointHoverExitHandler) {
            this.options.pointHoverExitHandler(entity)
        }
    }

    // 恢复实体状态
    private restoreEntityState(dataIndex: number, entityIndex: number): void {
        if (entityIndex === -1 || !this.pointEntities) return

        const entity = this.pointEntities[entityIndex]
        if (!entity || !entity.properties) return

        const currentTime = JulianDate.now()
        const properties = entity.properties.getValue(currentTime)

        // 清除悬浮状态标记
        if (properties.hoverState) {
            entity.properties.removeProperty('hoverState')
        }

        const point = this.pointData?.[dataIndex]
        if (!point) return

        // 根据当前状态恢复正确的图标
        if (properties.changeState) {
            // 变更状态图标
            point.changeIconType ? updateViewerEntityInfo(point, entity, 'change') : updateViewerEntityInfo(point, entity, 'value')
        } else {
            // 恢复原始图标
            updateViewerEntityInfo(point, entity, 'value')
        }
    }

    // 处理鼠标离开时标签可见性
    private handleLabelVisibilityOnExit(dataIndex: number, labelEntityIndex: number): void {
        if (labelEntityIndex === -1 || !this.pointEntities) return

        if (this.options.defaultShowState) {
            // 默认显示模式下，保持标签可见，恢复原始样式
            updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities[labelEntityIndex])
        } else {
            // 非默认显示模式下，隐藏标签
            this.pointEntities[labelEntityIndex].show = false
        }
    }

    // 控制多边形
    polygonClickHandler(name: string) {
        if (name === this.defaultCenterKey && this.centerPosition) {
            this.addAllDistricts()
            this.setInitialView({ destination: this.centerPosition })
            return
        }

        if (!(name in areaData)) {
            console.log('未找到匹配的数据')
            return
        }

        // 确保多边形存在
        const findValue = this.polygonEntities?.find(item => item.name === name)
        if (!findValue) {
            this.addPolygon(name)
        }

        // 只显示当前多边形
        this.polygonEntities?.forEach(item => {
            item.show = item.name === name
        })

        // 飞行到目标位置
        const { lng, lat } = areaData[name]
        this.viewer?.camera.flyTo({
            destination: Cartesian3.fromDegrees(lng, lat, this.options?.flyToHeight ?? this.defaultConfig.flyToHeight),
            duration: 1,
        })
    }

    // 设置初始视角
    setInitialView(option: changeModelParamType['setInitialView'], openFly = true): void {
        if (!this.viewer) return
        if (!openFly) {
            this.viewer.camera.setView({
                destination: option.destination,
            })
            return
        }
        this.viewer.camera.flyTo({
            destination: option.destination,
            duration: option.duration || 1,
        })
    }

    // 切换图层
    setViewerLayer(imageryLayersUrl: string): void {
        if (!this.viewer) return

        // 清除现有图层和实体
        this.viewer.imageryLayers.removeAll()

        // 加载新图层
        this.loadTileLayer(imageryLayersUrl)
    }

    // 热力图
    buildHeatMap(points: { x: number; y: number; value: number }[], gradient: Record<string, string> = heatmapGradient) {
        if (!this.viewer) return
        const heatmap = new CesiumHeatmap(this.viewer, {
            zoomToLayer: false,
            points,
            heatmapOptions: {
                radius: 5,
                maxOpacity: 0,
                minOpacity: 0.5,
                gradient: gradient,
            },
        })
        return heatmap
    }

    // 删除
    removeHeatMap(heatmap: CesiumHeatmap | any): void {
        if (!this.viewer || !heatmap) return
        if (heatmap.element) {
            document.body.removeChild(heatmap.element)
            heatmap.element = undefined
            if (heatmap.provider instanceof ImageryLayer) {
                if (heatmap.provider) this.viewer.imageryLayers.remove(heatmap.provider)
                heatmap.createSingleTileImageryLayer()
            } else if (heatmap.provider instanceof Primitive) {
                this.viewer.scene.primitives.remove(heatmap.provider)
            } else if (heatmap.provider instanceof Entity) {
                this.viewer.entities.remove(heatmap.provider)
            }
            if (heatmap.cameraMoveEnd) {
                this.viewer.camera.moveEnd.removeEventListener(heatmap.cameraMoveEnd)
                heatmap.cameraMoveEnd = undefined
            }
        }
    }

    // 检查是否在深圳边界内
    private isPointInShenzhen(longitude: number, latitude: number): boolean {
        return (
            longitude >= cesiumMath.toDegrees(this.shenzhenBounds.west) &&
            longitude <= cesiumMath.toDegrees(this.shenzhenBounds.east) &&
            latitude >= cesiumMath.toDegrees(this.shenzhenBounds.south) &&
            latitude <= cesiumMath.toDegrees(this.shenzhenBounds.north)
        )
    }

    // 设置视角移动限制
    private setupCameraLimits(): void {
        if (!this.viewer) return
        const scene = this.viewer.scene
        scene.screenSpaceCameraController.enableRotate = true
        scene.screenSpaceCameraController.enableTranslate = true
        scene.screenSpaceCameraController.enableZoom = true
        scene.screenSpaceCameraController.enableTilt = true
        scene.screenSpaceCameraController.enableLook = true

        // 预更新阻止相机移出边界
        this.removePreUpdateListener = scene.preUpdate.addEventListener(() => {
            if (this.isCheckingBounds || !this.viewer) return

            try {
                this.isCheckingBounds = true

                // 获取当前视口中心点
                const centerPosition = new Cartesian2(Math.floor(this.viewer.canvas.clientWidth / 2), Math.floor(this.viewer.canvas.clientHeight / 2))

                // 获取视口中心点的世界坐标
                const pickRay = this.viewer.camera.getPickRay(centerPosition)
                if (!pickRay) return

                const worldPosition = this.viewer.scene.globe.pick(pickRay, this.viewer.scene)
                if (!worldPosition) {
                    // 直接获取
                    const viewCenter = this.getCameraViewCenter()
                    if (!viewCenter) return

                    const centerLon = cesiumMath.toDegrees(viewCenter.longitude)
                    const centerLat = cesiumMath.toDegrees(viewCenter.latitude)

                    if (!this.isPointInShenzhen(centerLon, centerLat)) {
                        // 恢复到上一个有效位置
                        if (this.lastValidCameraPosition) {
                            this.viewer.camera.position = this.lastValidCameraPosition.clone()
                        }
                    } else {
                        // 更新有效位置
                        this.lastValidCameraPosition = this.viewer.camera.position.clone()
                    }
                    return
                }

                // 将世界坐标转换为地理坐标
                const cartographic = Cartographic.fromCartesian(worldPosition)
                const longitude = cesiumMath.toDegrees(cartographic.longitude)
                const latitude = cesiumMath.toDegrees(cartographic.latitude)

                // 判断是否在边界内
                if (!this.isPointInShenzhen(longitude, latitude)) {
                    // 恢复到上一个有效位置
                    if (this.lastValidCameraPosition) {
                        this.viewer.camera.position = this.lastValidCameraPosition.clone()
                        this.viewer.camera.direction = this.viewer.scene.camera.direction.clone()
                    }
                } else {
                    // 更新有效位置
                    this.lastValidCameraPosition = this.viewer.camera.position.clone()
                }
            } finally {
                this.isCheckingBounds = false
            }
        })
    }

    // 获取相机视角中心
    private getCameraViewCenter(): Cartographic | undefined {
        if (!this.viewer) return undefined

        try {
            // 获取视口中心
            const windowCenter = new Cartesian2(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2)

            // 尝试拾取地球表面的点
            const ray = this.viewer.camera.getPickRay(windowCenter)
            if (!ray) return undefined

            // 尝试获取射线与地球表面的交点
            const cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene)
            if (cartesian) {
                // 如果有交点，转换为地理坐标
                return Cartographic.fromCartesian(cartesian)
            }

            // 如果没有交点，使用相机位置
            return this.viewer.camera.positionCartographic
        } catch (e) {
            console.warn('获取相机视角中心失败', e)
            return this.viewer.camera.positionCartographic
        }
    }

    destroy(): void {
        if (this.viewer) {
            const canvas = this.viewer.scene.canvas
            canvas.removeEventListener('mouseout', this.handleCanvasMouseOut.bind(this))
            this.viewer.scene.canvas.removeEventListener('dblclick', this.doubleClickHandler, false)
            if (this.viewer.scene && this.viewer.scene.camera) {
                // 移除边界限制监听器
                if (this.removePreUpdateListener) {
                    this.removePreUpdateListener()
                    this.removePreUpdateListener = null
                }
            }
            this.screenSpaceEventHandler = null
            this.screenMouseMoveHandler = null
            if (this.dataSource) {
                this.viewer.dataSources.remove(this.dataSource)
                this.dataSource = null
            }

            this.lastValidCameraPosition = null
            this.lastHoveredEntity = null
            this.viewer.destroy()
            this.viewer = null
            this.pointEntities = null
            this.polygonEntities = null
            this.imageLayerState = null
            this.imageLayerUrl = null
            this.tileLoadCallback = null
        }
    }
}
