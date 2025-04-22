import { PropType } from 'vue';
import { controlStatusType, pointType, basicConfigType } from './type';
import { Cartesian3, Color } from 'cesium';
export declare const cesiumProps: {
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
            areaName: string;
        };
    };
    pointData: {
        type: PropType<pointType[]>;
    };
};
