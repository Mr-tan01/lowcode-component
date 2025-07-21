import { SceneMode, SkyAtmosphere, SkyBox, Color, Entity, Cartesian3, PolylineDashMaterialProperty, Cartesian2 } from 'cesium';
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
    value?: string;
    iconType?: iconType | string;
    text?: string;
    textIconType?: textIconType | string;
    changeIconType?: changeIconType | string;
    changeTextIconType?: textIconType | string;
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
    value?: any;
    text?: string;
    changeState: boolean;
    type: string;
    position: number[];
    name: string;
}
export interface EntityConfig {
    position: Cartesian3;
    name: string;
    properties: EntityProperties;
    billboard: {
        image: HTMLCanvasElement;
        disableDepthTestDistance: number | undefined;
        pixelOffset: Cartesian2;
    };
}
export interface controlStatusType {
    timeline?: boolean;
    animation?: boolean;
    geocoder?: boolean;
    homeButton?: boolean;
    sceneModePicker?: boolean;
    baseLayerPicker?: boolean;
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
    hoverState?: boolean;
    defaultUrl?: string;
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
}
export type changeModelType = 'polygonClickHandler' | 'setCameraHeight' | 'setInitialView' | 'setViewerLayer' | 'ZoomIn' | 'ZoomOut' | 'clearEntity' | 'removeHeatMap';
export type changeModelParamType = {
    polygonClickHandler: string;
    setCameraHeight: string;
    setInitialView: {
        destination: Cartesian3;
        duration?: number;
    };
    setViewerLayer: string;
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
    } | {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
        changeIconType?: undefined;
    } | {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType?: undefined;
        changeIconType?: undefined;
    } | {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
        changeIconType: string;
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
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
    }[];
};
