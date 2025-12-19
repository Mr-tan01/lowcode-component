import { cesiumService } from './modules/cesiumUtils';
import { changeModelType, changeModelParamType, EntityProperties } from './modules/type';
import { Cartesian3 } from 'cesium';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    clientId: {
        type: import('vue').PropType<string>;
    };
    accessToken: {
        type: import('vue').PropType<string | null>;
    };
    baseUrl: {
        type: import('vue').PropType<string | null>;
        default: string;
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
    offsetState: {
        type: import('vue').PropType<boolean>;
        default: boolean;
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
    showPopoverHeight: {
        type: NumberConstructor;
        default: number;
    };
    centerPosition: {
        type: import('vue').PropType<Cartesian3>;
    };
    defaultCenterKey: {
        type: StringConstructor;
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
            imageryProvider: Promise<import('cesium').ArcGisMapServerImageryProvider>;
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
        type: import('vue').PropType<import('./modules/type').basicConfigType>;
        default: {
            minZoom: number;
            maxZoom: number;
            baseColor: import('cesium').Color;
            clusteringEnabled: boolean;
            clusteringPixelRange: number;
            clusteringMinimumClusterSize: number;
            labelShowHeightThreshold: number;
        };
    };
    pointData: {
        type: import('vue').PropType<import('./modules/type').pointType[]>;
    };
    openIndexDB: {
        type: BooleanConstructor;
    };
    openOffset: {
        type: import('vue').PropType<{
            flag: boolean;
            offset: number;
        }>;
        default: {
            flag: boolean;
            offset: number;
        };
    };
    popoverOffset: {
        type: import('vue').PropType<{
            popoverOffsetX: number;
            popoverOffsetY: number;
        }>;
        default: {
            popoverOffsetX: number;
            popoverOffsetY: number;
        };
    };
    pointBatchRender: {
        type: import('vue').PropType<{
            batchRenderSize: number;
            batchRenderDelay: number;
        }>;
        default: {
            batchRenderSize: number;
            batchRenderDelay: number;
        };
    };
}>, {
    reloadPointData: () => Promise<void>;
    changeModel: <T extends changeModelType>(type: changeModelType, value: changeModelParamType[T]) => void;
    loadedTileLayer: (status: boolean) => void;
    clearEntity: () => Promise<void>;
    cesiumUtils: cesiumService;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    pointHandler: (value: EntityProperties) => any;
    limitHeightHandler: (value: number) => any;
    loadHandler: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    clientId: {
        type: import('vue').PropType<string>;
    };
    accessToken: {
        type: import('vue').PropType<string | null>;
    };
    baseUrl: {
        type: import('vue').PropType<string | null>;
        default: string;
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
    offsetState: {
        type: import('vue').PropType<boolean>;
        default: boolean;
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
    showPopoverHeight: {
        type: NumberConstructor;
        default: number;
    };
    centerPosition: {
        type: import('vue').PropType<Cartesian3>;
    };
    defaultCenterKey: {
        type: StringConstructor;
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
            imageryProvider: Promise<import('cesium').ArcGisMapServerImageryProvider>;
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
        type: import('vue').PropType<import('./modules/type').basicConfigType>;
        default: {
            minZoom: number;
            maxZoom: number;
            baseColor: import('cesium').Color;
            clusteringEnabled: boolean;
            clusteringPixelRange: number;
            clusteringMinimumClusterSize: number;
            labelShowHeightThreshold: number;
        };
    };
    pointData: {
        type: import('vue').PropType<import('./modules/type').pointType[]>;
    };
    openIndexDB: {
        type: BooleanConstructor;
    };
    openOffset: {
        type: import('vue').PropType<{
            flag: boolean;
            offset: number;
        }>;
        default: {
            flag: boolean;
            offset: number;
        };
    };
    popoverOffset: {
        type: import('vue').PropType<{
            popoverOffsetX: number;
            popoverOffsetY: number;
        }>;
        default: {
            popoverOffsetX: number;
            popoverOffsetY: number;
        };
    };
    pointBatchRender: {
        type: import('vue').PropType<{
            batchRenderSize: number;
            batchRenderDelay: number;
        }>;
        default: {
            batchRenderSize: number;
            batchRenderDelay: number;
        };
    };
}>> & Readonly<{
    onPointHandler?: ((value: EntityProperties) => any) | undefined;
    onLimitHeightHandler?: ((value: number) => any) | undefined;
    onLoadHandler?: ((value: boolean) => any) | undefined;
}>, {
    baseUrl: string | null;
    defaultShowState: boolean;
    flyToHeight: number;
    offsetState: boolean;
    spinStroke: string;
    spinContainerBg: string;
    spinDescriptionColor: string;
    showPopoverHeight: number;
    controlStatus: import('./modules/type').controlStatusType;
    basicConfig: import('./modules/type').basicConfigType;
    openIndexDB: boolean;
    openOffset: {
        flag: boolean;
        offset: number;
    };
    popoverOffset: {
        popoverOffsetX: number;
        popoverOffsetY: number;
    };
    pointBatchRender: {
        batchRenderSize: number;
        batchRenderDelay: number;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    tooltipRef: HTMLDivElement;
    tooltipContentRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
