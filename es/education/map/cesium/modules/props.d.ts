import { PropType } from 'vue';
import { controlStatusType, pointType, basicConfigType } from './type';
import { Color, Cartesian3 } from 'cesium';
export declare const cesiumProps: {
    clientId: {
        type: PropType<string>;
    };
    accessToken: {
        type: PropType<string | null>;
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
    controlStatus: {
        type: PropType<controlStatusType>;
        default: {
            timeline: boolean;
            animation: boolean;
            geocoder: boolean;
            homeButton: boolean;
            sceneModePicker: boolean;
            baseLayerPicker: boolean;
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
        };
    };
    pointData: {
        type: PropType<pointType[]>;
    };
};
