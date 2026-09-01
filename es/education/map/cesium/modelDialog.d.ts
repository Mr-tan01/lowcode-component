import { CesiumModelDialogProps, LoadedPayload } from './hooks/useCesiumModel';
type __VLS_Props = CesiumModelDialogProps;
type __VLS_PublicProps = {
    'show'?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {
    reloadModel: () => void;
    locateModel: (options?: {
        afterLayout?: boolean;
        recordInitialView?: boolean;
    }) => void;
    resetView: () => void;
    resetTransform: () => void;
    raiseModel: () => void;
    lowerModel: () => void;
    toggleAutoRotate: () => void;
    toggleFullscreen: () => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:show": (value: boolean) => any;
} & {
    loaded: (value: LoadedPayload) => any;
    loadError: (value: unknown) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:show"?: ((value: boolean) => any) | undefined;
    onLoaded?: ((value: LoadedPayload) => any) | undefined;
    onLoadError?: ((value: unknown) => any) | undefined;
}>, {
    scale: number;
    title: string;
    width: string;
    height: string;
    version: import('./modules/type').cesiumModelVersionType;
    baseUrl: string;
    options: import("cesium").Cesium3DTileset.ConstructorOptions;
    terrainProvider: import('cesium').TerrainProvider;
    appId: string;
    token: string | null;
    tilesetFile: string;
    longitudeOffset: number;
    latitudeOffset: number;
    heightOffset: number;
    fitToGround: boolean;
    groundHeight: number;
    modelBaseHeight: number;
    heading: number;
    pitch: number;
    roll: number;
    enhance3D: boolean;
    enableShadows: boolean;
    operationSpeed: import('./hooks/useCesiumModel').OperationSpeed;
    rotateStep: number;
    autoRotateInterval: number;
    modelOptions: import("cesium").Cesium3DTileset.ConstructorOptions;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    rootRef: HTMLDivElement;
    containerRef: HTMLDivElement;
}, any>;
export default _default;
