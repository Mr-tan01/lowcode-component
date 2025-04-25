import { changeModelType } from './modules/type';
import { Entity, Cartesian3 } from 'cesium';
declare function changeModel(type: changeModelType, value: string): void;
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    clientId: import('vue').PropType<string>;
    accessToken: import('vue').PropType<string | null>;
    imageryLayersUrl: import('vue').PropType<string>;
    centerPosition: {
        type: import('vue').PropType<Cartesian3>;
    };
    controlStatus: {
        type: import('vue').PropType<import('./modules/type').controlStatusType>;
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
        type: import('vue').PropType<import('./modules/type').basicConfigType>;
        default: {
            minZoom: number;
            maxZoom: number;
            baseColor: import('cesium').Color;
            areaName: string;
        };
    };
    pointData: {
        type: import('vue').PropType<import('./modules/type').pointType[]>;
    };
}>, {
    changeModel: typeof changeModel;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    pointHandler: (value: Entity) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    clientId: import('vue').PropType<string>;
    accessToken: import('vue').PropType<string | null>;
    imageryLayersUrl: import('vue').PropType<string>;
    centerPosition: {
        type: import('vue').PropType<Cartesian3>;
    };
    controlStatus: {
        type: import('vue').PropType<import('./modules/type').controlStatusType>;
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
        type: import('vue').PropType<import('./modules/type').basicConfigType>;
        default: {
            minZoom: number;
            maxZoom: number;
            baseColor: import('cesium').Color;
            areaName: string;
        };
    };
    pointData: {
        type: import('vue').PropType<import('./modules/type').pointType[]>;
    };
}>> & Readonly<{
    onPointHandler?: ((value: Entity) => any) | undefined;
}>, {
    controlStatus: import('./modules/type').controlStatusType;
    basicConfig: import('./modules/type').basicConfigType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
