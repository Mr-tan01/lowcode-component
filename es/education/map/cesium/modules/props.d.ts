import { PropType } from 'vue';
import { controlStatusType, pointType, basicConfigType } from './type';
import { Color, Cartesian3, ArcGisMapServerImageryProvider } from 'cesium';
export declare const cesiumProps: {
    clientId: {
        type: PropType<string>;
    };
    accessToken: {
        type: PropType<string | null>;
    };
    baseUrl: {
        type: PropType<string | null>;
        default: string;
    };
    imageryLayersUrl: {
        type: PropType<string>;
    };
    areaName: {
        type: PropType<string>;
    };
    defaultShowState: {
        type: PropType<boolean>;
        default: boolean;
    };
    flyToHeight: {
        type: PropType<number>;
        default: number;
    };
    offsetState: {
        type: PropType<boolean>;
        default: boolean;
    };
    spinStroke: {
        type: PropType<string>;
        default: string;
    };
    spinContainerBg: {
        type: PropType<string>;
        default: string;
    };
    spinDescriptionColor: {
        type: PropType<string>;
        default: string;
    };
    centerPosition: {
        type: PropType<Cartesian3>;
    };
    defaultCenterKey: {
        type: StringConstructor;
    };
    controlStatus: {
        type: PropType<controlStatusType>;
        default: {
            timeline: boolean;
            animation: boolean;
            geocoder: boolean;
            homeButton: boolean;
            sceneModePicker: boolean;
            baseLayerPicker: boolean;
            imageryProvider: Promise<ArcGisMapServerImageryProvider>;
            navigationHelpButton: boolean;
            fullscreenButton: boolean;
            scene3DOnly: boolean;
            orderIndependentTranslucency: boolean;
            selectionIndicator: boolean;
            contextOptions: {
                allowTextureFilterAnisotropic: boolean;
                webgl: {
                    alpha: boolean;
                    antialias: boolean;
                    preserveDrawingBuffer: boolean;
                };
            };
        };
    };
    basicConfig: {
        type: PropType<basicConfigType>;
        default: {
            minZoom: number;
            maxZoom: number;
            baseColor: Color;
            clusteringEnabled: boolean;
            clusteringPixelRange: number;
            clusteringMinimumClusterSize: number;
        };
    };
    pointData: {
        type: PropType<pointType[]>;
    };
    openIndexDB: {
        type: BooleanConstructor;
    };
};
