import { SceneMode, SkyAtmosphere, SkyBox, Color, Entity, Cartesian3, PolylineDashMaterialProperty } from 'cesium';
export declare const areaData: {
    光明区: {
        lng: number;
        lat: number;
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
export interface pointType {
    name: string;
    lng: number;
    lat: number;
    value?: string;
    iconType?: string | "primary" | "success" | "warning" | "danger" | "icon_primary" | "icon_success";
    text?: string;
    textIconType?: string | "primary_label" | "success_label" | "warning_label" | "danger_label";
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
    minZoom: number;
    maxZoom: number;
    baseColor: Color;
    areaName: string;
}
export interface optionType {
    config: basicConfigType;
    pointHandler: (value: Entity) => void;
}
export type changeModelType = "polygonClickHandler" | "setCameraHeight" | "ZoomIn" | "ZoomOut";
export declare const pointInfo: {
    宝安区: {
        name: string;
        lng: number;
        lat: number;
        value: string;
        iconType: string;
        text: string;
        textIconType: string;
    }[];
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
