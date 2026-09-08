import { SceneMode, SkyAtmosphere, SkyBox, Color, Entity, Cartesian3, PolylineDashMaterialProperty, Cartesian2, Cesium3DTileset, HeightReference, ImageryLayer } from 'cesium';
import { CesiumHeatmap } from 'cesium-heatmap-es6';
export declare const areaData: {
    深圳市: {
        lng: number;
        lat: number;
        value: number;
        position: never[];
    };
    光明区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    坪山区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    龙华区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    盐田区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    大鹏新区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    宝安区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    龙岗区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    南山区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    福田区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    罗湖区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
    深汕特别合作区: {
        lng: number;
        lat: number;
        value: number;
        position: {
            type: string;
            properties: {
                name: string;
                gb: string;
            };
            geometry: {
                type: string;
                coordinates: number[][][][];
            };
        };
    };
};
export type baseIconType = 'primary' | 'success' | 'warning' | 'danger';
export type changeIconType = 'icon_success' | 'icon_primary';
export type iconType = baseIconType | changeIconType;
export type textIconType = `${baseIconType}_label`;
export interface pointType {
    name: string;
    lng: number;
    lat: number;
    height?: number;
    heightReference?: HeightReference;
    changeIconType?: changeIconType | string;
    options: CanvasConfigOptions;
}
export interface polygonType {
    name: string;
    polyline: {
        positions: Cartesian3;
        material?: PolylineDashMaterialProperty;
        width?: number;
    };
    polygon: {
        hierarchy: Cartesian3;
        material?: Color;
        outline?: boolean;
        outlineColor?: boolean;
    };
}
export interface EntityProperties {
    changeState: boolean;
    position: number[];
    options: BaseCanvasConfigOptions;
    valueInfo?: HTMLCanvasElement;
}
export interface EntityConfig {
    name: string;
    position: Cartesian3;
    properties: EntityProperties;
    isPopoverEntity: boolean;
    billboard: {
        image: HTMLCanvasElement;
        disableDepthTestDistance: number | undefined;
        pixelOffset: Cartesian2;
        heightReference?: HeightReference;
    };
}
export interface controlStatusType {
    timeline?: boolean;
    animation?: boolean;
    geocoder?: boolean;
    homeButton?: boolean;
    sceneModePicker?: boolean;
    baseLayerPicker?: boolean;
    baseLayer?: ImageryLayer | false;
    navigationHelpButton?: boolean;
    fullscreenButton?: boolean;
    skyBox?: SkyBox;
    skyAtmosphere?: SkyAtmosphere;
    sceneMode?: SceneMode;
    scene3DOnly?: boolean;
    orderIndependentTranslucency?: boolean;
    selectionIndicator?: boolean;
    contextOptions?: {
        allowTextureFilterAnisotropic?: boolean;
        webgl?: {
            alpha?: boolean;
            antialias?: boolean;
            preserveDrawingBuffer?: boolean;
        };
    };
}
export interface basicConfigType {
    minZoom?: number;
    maxZoom?: number;
    baseColor?: Color;
    clusteringEnabled?: boolean;
    clusteringPixelRange?: number;
    clusteringMinimumClusterSize?: number;
    cameraLimitsEnabled?: boolean;
    defaultUrl?: string;
    providerOptions?: Record<string, any>;
    labelShowHeightThreshold?: number;
}
export type imageryLayerProviderType = 'wmts' | 'arcgis' | 'tianditu';
export interface imageryLayerType {
    label: string;
    value: string;
    url: string;
    providerType?: imageryLayerProviderType;
    providerOptions?: {
        layer?: string;
        style?: string;
        format?: string;
        tileMatrixSetID?: string;
        tileMatrixLabels?: string[];
        minimumLevel?: number;
        maximumLevel?: number;
        tilingSchemeType?: 'geographic' | 'webMercator';
        rectangle?: [number, number, number, number];
        tiandituKey?: string;
        tiandituLayers?: Array<'vec' | 'cva'>;
    };
    preview?: string;
}
export type cesiumModelVersionType = 'v1' | 'v2';
export type cesiumModelOperationSpeedType = 'slow' | 'normal' | 'fast';
export interface cesiumModelLayerType {
    layerId: string;
    version?: cesiumModelVersionType;
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
    operationSpeed?: cesiumModelOperationSpeedType;
    rotateStep?: number;
    autoRotateInterval?: number;
    options?: Cesium3DTileset.ConstructorOptions;
}
export interface mapPointModelType extends cesiumModelLayerType {
    code?: string;
    identifier?: string;
    name?: string;
}
export interface optionType {
    config: basicConfigType;
    defaultShowState: boolean;
    flyToHeight: number;
    offsetState: boolean;
    centerPosition: Cartesian3;
    defaultCenterKey: string;
    openIndexDB: boolean;
    pointHandler: (value: Entity) => void;
    pointHoverHandler?: (value: Entity) => void;
    pointHoverExitHandler?: (value: Entity) => void;
    limitHeightHandler: (value: number) => void;
    loadTileLayerHandler: (status: boolean) => void;
    createdTooltip: (value: Entity, point: pointType) => void;
}
export type changeModelType = 'polygonClickHandler' | 'setCameraHeight' | 'setInitialView' | 'setViewerLayer' | 'ZoomIn' | 'ZoomOut' | 'clearEntity' | 'removeHeatMap';
export type changeModelParamType = {
    polygonClickHandler: string;
    setCameraHeight: string;
    setInitialView: {
        destination: Cartesian3;
        duration?: number;
    };
    setViewerLayer: string | imageryLayerType;
    ZoomIn: string;
    ZoomOut: string;
    clearEntity: {
        key: 'pointEntities' | 'polygonEntities';
        type: 'dataSource' | 'viewer';
    };
    removeHeatMap: {
        heatmap: CesiumHeatmap | any;
    };
};
export declare const pointInfo: {
    宝安区: ({
        name: string;
        lng: number;
        lat: number;
        value: string;
        text: string;
        iconType?: undefined;
        textIconType?: undefined;
        changeIconType?: undefined;
        customIcon?: undefined;
    } | {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
        changeIconType?: undefined;
        customIcon?: undefined;
    } | {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType?: undefined;
        changeIconType?: undefined;
        customIcon?: undefined;
    } | {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
        changeIconType: string;
        customIcon: string;
    })[];
    龙华区: {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
    }[];
    罗湖区: {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
    }[];
    福田区: {
        name: string;
        lng: number;
        lat: number;
        options: {
            currentMode: string;
            iconType: string;
            label: string;
            popoverLabel: string;
            fontConfig: {
                size: string;
                family: string;
                color: string;
                weight: string;
            };
        };
    }[];
};
export interface fontStyle {
    size: string;
    family: string;
    color: string;
    weight: number | 'normal' | 'bold' | 'bolder' | 'lighter';
    fillText?: (ctx: CanvasRenderingContext2D) => void;
    customCanvasText?: (ctx: CanvasRenderingContext2D, label: string) => void;
}
export declare enum CanvasMode {
    Text = "text",
    Image = "image"
}
export declare enum CanvasType {
    Danger = "danger",
    Success = "success",
    Primary = "primary",
    Warning = "warning",
    Hover = "hover"
}
type BaseCanvasConfigOptions = {
    width?: number;
    height?: number;
    iconType?: CanvasType;
    currentMode?: CanvasMode;
    popoverLabel: string;
    fontConfig?: fontStyle;
    customCanvas?: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void;
    customPopoverCanvas?: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void;
    borderColor?: string;
    backgroundColor?: string;
    model?: mapPointModelType;
};
export type TextModeConfig = BaseCanvasConfigOptions & {
    currentMode: CanvasMode.Text;
    label: string;
};
export type ImageModeConfig = BaseCanvasConfigOptions & {
    currentMode: CanvasMode.Image;
    uploadedImage: string;
};
export type CanvasConfigOptions = TextModeConfig | ImageModeConfig;
export {};
