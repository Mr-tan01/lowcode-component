import { changeModelType, changeModelParamType } from './modules/type';
import { Entity, Cartesian3 } from 'cesium';
declare function changeModel<T extends changeModelType>(type: changeModelType, value: changeModelParamType[T]): void;
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    clientId: {
        type: import('vue').PropType<string>;
    };
    accessToken: {
        type: import('vue').PropType<string | null>;
    };
    imageryLayersUrl: {
        type: import('vue').PropType<string>;
    };
    areaName: {
        type: import('vue').PropType<string>;
    };
    defaultShowState: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    flyToHeight: {
        type: import('vue').PropType<number>;
        default: number;
    };
    spinStroke: {
        type: import('vue').PropType<string>;
        default: string;
    };
    spinContainerBg: {
        type: import('vue').PropType<string>;
        default: string;
    };
    spinDescriptionColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
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
        };
    };
    pointData: {
        type: import('vue').PropType<import('./modules/type').pointType[]>;
    };
}>, {
    changeModel: typeof changeModel;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    pointHandler: (value: Entity) => any;
    limitHeightHandler: (value: number) => any;
    loadHandler: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    clientId: {
        type: import('vue').PropType<string>;
    };
    accessToken: {
        type: import('vue').PropType<string | null>;
    };
    imageryLayersUrl: {
        type: import('vue').PropType<string>;
    };
    areaName: {
        type: import('vue').PropType<string>;
    };
    defaultShowState: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    flyToHeight: {
        type: import('vue').PropType<number>;
        default: number;
    };
    spinStroke: {
        type: import('vue').PropType<string>;
        default: string;
    };
    spinContainerBg: {
        type: import('vue').PropType<string>;
        default: string;
    };
    spinDescriptionColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
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
        };
    };
    pointData: {
        type: import('vue').PropType<import('./modules/type').pointType[]>;
    };
}>> & Readonly<{
    onPointHandler?: ((value: Entity) => any) | undefined;
    onLimitHeightHandler?: ((value: number) => any) | undefined;
    onLoadHandler?: ((value: boolean) => any) | undefined;
}>, {
    defaultShowState: boolean;
    flyToHeight: number;
    spinStroke: string;
    spinContainerBg: string;
    spinDescriptionColor: string;
    controlStatus: import('./modules/type').controlStatusType;
    basicConfig: import('./modules/type').basicConfigType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
