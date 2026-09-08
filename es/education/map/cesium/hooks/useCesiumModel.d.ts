import { ComputedRef, Ref } from 'vue';
import { Cesium3DTileset, Viewer, TerrainProvider } from 'cesium';
import { cesiumModelOperationSpeedType, cesiumModelVersionType } from '../modules/type';
export type OperationSpeed = cesiumModelOperationSpeedType;
export interface CesiumModelDialogProps {
    title?: string;
    width?: string;
    height?: string;
    display?: CesiumModelDialogDisplayConfig;
    version?: cesiumModelVersionType;
    layerId: string;
    appId?: string;
    token?: string | null;
    baseUrl?: string;
    tilesetFile?: string;
    longitudeOffset?: number;
    latitudeOffset?: number;
    heightOffset?: number;
    fitToGround?: boolean;
    groundHeight?: number;
    modelBaseHeight?: number;
    heading?: number;
    pitch?: number;
    roll?: number;
    scale?: number;
    enhance3D?: boolean;
    enableShadows?: boolean;
    operationSpeed?: OperationSpeed;
    rotateStep?: number;
    autoRotateInterval?: number;
    tokenLoader?: () => Promise<string | null | undefined>;
    options?: Cesium3DTileset.ConstructorOptions;
    modelOptions?: Cesium3DTileset.ConstructorOptions;
    terrainProvider?: TerrainProvider;
}
export interface CesiumModelDialogDisplayConfig {
    viewerBackground?: string;
    panelBackground?: string;
    panelBorderColor?: string;
    panelTextColor?: string;
    sceneBackgroundColor?: string;
    loadingDescription?: string;
    retryDescription?: string;
    loadingStroke?: string;
    errorTitle?: string;
    errorDescription?: string;
    retryText?: string;
    showToolbar?: boolean;
    showControls?: boolean;
    showRetryButton?: boolean;
}
export type LoadedPayload = {
    tileset: Cesium3DTileset;
    url: string;
};
type CesiumModelEmit = {
    (e: 'loaded', value: LoadedPayload): void;
    (e: 'loadError', value: unknown): void;
};
type LocateModelOptions = {
    afterLayout?: boolean;
    recordInitialView?: boolean;
};
export interface UseCesiumModelReturn {
    rootRef: Ref<HTMLDivElement | null>;
    containerRef: Ref<HTMLDivElement | null>;
    viewer: Ref<Viewer | null>;
    tileset: Ref<Cesium3DTileset | null>;
    loading: Ref<boolean>;
    retrying: Ref<boolean>;
    loadError: Ref<unknown | null>;
    loadErrorMessage: ComputedRef<string>;
    loadStatusText: ComputedRef<string>;
    autoRotating: Ref<boolean>;
    fullscreen: Ref<boolean>;
    reloadModel: () => Promise<void>;
    locateModel: (options?: LocateModelOptions) => void;
    resetView: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    rotateLeft: () => void;
    rotateRight: () => void;
    raiseModel: () => void;
    lowerModel: () => void;
    resetTransform: () => void;
    toggleAutoRotate: () => void;
    toggleFullscreen: () => Promise<void>;
}
export declare function useCesiumModel(props: Readonly<CesiumModelDialogProps>, visible: Ref<boolean>, emit: CesiumModelEmit): UseCesiumModelReturn;
export {};
