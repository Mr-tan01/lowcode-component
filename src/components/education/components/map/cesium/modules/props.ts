import type { Prop, PropType } from "vue";
import type { controlStatusType, pointType, basicConfigType } from "./type";
import { Color, Cartesian3, ArcGisMapServerImageryProvider } from "cesium";

export const cesiumProps = {
    clientId: { type: String as PropType<string> },
    accessToken: { type: String as PropType<string | null> },
    baseUrl: { type: String as PropType<string | null>, default: "/jysl" },
    imageryLayersUrl: { type: String as PropType<string> },
    areaName: { type: String as PropType<string> }, // 初始化区域
    defaultShowState: { type: Boolean as PropType<boolean>, default: false }, // 默认展示状态
    flyToHeight: { type: Number as PropType<number>, default: 26000 }, // 相机飞行高度
    offsetState: { type: Boolean as PropType<boolean>, default: false }, // 启用/禁用 缩放偏移
    spinStroke: { type: String as PropType<string>, default: "#046ab1" }, // spin图标颜色
    spinContainerBg: { type: String as PropType<string>, default: "#6C7E93" }, // spin遮挡背景
    spinDescriptionColor: { type: String as PropType<string>, default: "#046ab1" }, // spin文字颜色
    centerPosition: {
        type: Object as PropType<Cartesian3>,
    },
    defaultCenterKey: {
        type: String,
    },
    controlStatus: {
        type: Object as PropType<controlStatusType>,
        default: {
            timeline: false,
            animation: false,
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            imageryProvider: ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"), // 避免使用cesium ions资源
            navigationHelpButton: false,
            fullscreenButton: false,
            scene3DOnly: true,
            orderIndependentTranslucency: true,
            selectionIndicator: false,
            contextOptions: {
                allowTextureFilterAnisotropic: true,
                webgl: {
                    alpha: true,
                    antialias: true,
                    preserveDrawingBuffer: true,
                },
            },
        },
    },
    basicConfig: {
        type: Object as PropType<basicConfigType>,
        default: {
            minZoom: 200,
            maxZoom: 130000,
            baseColor: Color.TRANSPARENT,
            clusteringEnabled: false,
            clusteringPixelRange: 30,
            clusteringMinimumClusterSize: 2,
        },
    },
    pointData: {
        type: Array as PropType<pointType[]>,
    },
};
