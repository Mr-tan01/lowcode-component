import { Viewer, Entity } from 'cesium';
import { CesiumHeatmap, HeatmapDataOption } from 'cesium-heatmap-es6';
import { controlStatusType, optionType, pointType, changeModelParamType } from './type';
export declare class cesiumService {
    containerId: string;
    options: optionType;
    viewer: Viewer | null;
    pointData: pointType[] | null;
    pointEntities: Entity[] | null;
    polygonEntities: Entity[] | null;
    screenSpaceEventHandler: void | null;
    screenMouseMoveHandler: void | null;
    private imageLayerState;
    private imageLayerUrl;
    private tileLoadCallback;
    private dataSource;
    private centerPosition;
    private defaultCenterKey;
    private defaultConfig;
    private lastValidCameraPosition;
    private isCheckingBounds;
    private removePreUpdateListener;
    private lastHoveredEntity;
    private lastThrottleTime;
    private throttleDelay;
    private rretryCount;
    private cameraChangedListener;
    private shenzhenBounds;
    private message;
    constructor(containerId: string, options: optionType);
    /**
     * 对经纬度完全相同的数据点进行均匀环形偏移
     * @param list      原始数据数组
     * @param lngKey    经度字段名
     * @param latKey    纬度字段名
     * @param distance  偏移距离（米），默认 200
     * @returns         已做偏移的新数组
     */
    offsetDuplicateCoordinates<T extends Record<string, any>>(list: T[], lngKey: keyof T, latKey: keyof T, distance?: number): T[];
    updateViewerAttribute(): void;
    private getTypeColor;
    private setupClustering;
    private doubleClickHandler;
    initViewer(controlStatus: controlStatusType): Promise<boolean>;
    private setupCameraChangeListener;
    handleCameraHeightChange(): void;
    private setupEventHandlers;
    private handleLeftClick;
    /**
     * 根据点位集合计算最佳飞行高度
     * @param entities 聚合实体数组
     * @param scale 视野系数（>1 留边）
     */
    private calcHeightByExtent;
    private handleCanvasMouseOut;
    private handleMouseMove;
    private handleTileLoadProgress;
    loadTileLayer(url: string): Promise<void>;
    private retryLoadProvider;
    private cleanupTileLoadListener;
    private updateLayerState;
    private loadProviderWithFallback;
    private addProviderToViewer;
    private handleLoadError;
    addPoint({ point, isPopoverEntity }: {
        point: pointType;
        isPopoverEntity?: boolean;
    }): Promise<Entity | null | void>;
    private renderTasks;
    batchRenderPoints: (points: any[], defaultShowState: boolean, batchRenderConfig: {
        batchRenderSize: number;
        batchRenderDelay: number;
    }) => Promise<void>;
    cancelBatchRender(): void;
    clearEntity(key: 'pointEntities' | 'polygonEntities', type?: 'dataSource' | 'viewer'): Promise<void>;
    addPolygon(name: string): void;
    addAllDistricts(): void;
    private getPositionCartographic;
    setCameraHeight(type: string): void;
    private getEntityNameInfo;
    private pointHoverHandler;
    private handleHoverLabelDisplay;
    private applyHoverEffect;
    private hideOtherLabels;
    private pointHoverExitHandler;
    private restoreEntityState;
    private handleLabelVisibilityOnExit;
    polygonClickHandler(name: string): void;
    setInitialView(option: changeModelParamType['setInitialView'], openFly?: boolean): void;
    setViewerLayer(imageryLayersUrl: string): void;
    buildHeatMap({ points, gradient, heatOptions, heatmapDataOptions, }: {
        points: {
            x: number;
            y: number;
            value: number;
        }[];
        heatOptions: {
            radius: number;
            maxOpacity: number;
            minOpacity: number;
        };
        gradient: Record<string, string>;
        heatmapDataOptions: HeatmapDataOption;
    }): CesiumHeatmap | undefined;
    removeHeatMap(heatmap: CesiumHeatmap | any): void;
    private isPointInShenzhen;
    private setupCameraLimits;
    private getCameraViewCenter;
    destroy(): void;
}
