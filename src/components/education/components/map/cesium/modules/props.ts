import type { PropType } from "vue";
import type { controlStatusType, pointType, basicConfigType } from "./type";
import { Cartesian3, Color } from "cesium";

export const cesiumProps = {
    centerPosition: {
        type: Object as PropType<Cartesian3>,
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
            maxZoom: 90000,
            baseColor: Color.TRANSPARENT,
            areaName: "龙华区",
        },
    },
    pointData: {
        type: Array as PropType<pointType[]>,
    },
};
