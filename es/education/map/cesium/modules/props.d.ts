import { PropType } from 'vue';
import { controlStatusType, pointType, basicConfigType, imageryLayerType } from './type';
import { Color, Cartesian3 } from 'cesium';
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
    imageryLayerList: {
        type: PropType<imageryLayerType[]>;
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
    showPopoverHeight: {
        type: NumberConstructor;
        default: number;
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
            baseLayer: boolean;
            navigationHelpButton: boolean;
            fullscreenButton: boolean;
            scene3DOnly: boolean;
            orderIndependentTranslucency: boolean;
            selectionIndicator: boolean;
            useDefaultRenderLoop: boolean;
            requestRenderMode: boolean;
            maximumRenderTimeChange: number;
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
            labelShowHeightThreshold: number;
        };
    };
    pointData: {
        type: PropType<pointType[]>;
    };
    openIndexDB: {
        type: BooleanConstructor;
    };
    openOffset: {
        type: PropType<{
            flag: boolean;
            offset: number;
        }>;
        default: {
            flag: boolean;
            offset: number;
        };
    };
    popoverOffset: {
        type: PropType<{
            popoverOffsetX: number;
            popoverOffsetY: number;
        }>;
        default: {
            popoverOffsetX: number;
            popoverOffsetY: number;
        };
    };
    pointBatchRender: {
        type: PropType<{
            batchRenderSize: number;
            batchRenderDelay: number;
        }>;
        default: {
            batchRenderSize: number;
            batchRenderDelay: number;
        };
    };
    enableAllTooltips: {
        type: BooleanConstructor;
        default: boolean;
    };
    allTooltipsHeight: {
        type: NumberConstructor;
        default: number;
    };
};
