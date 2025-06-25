<template>
    <div class="lc-cesium">
        <NSpin :show="initImageryLayersStatus || initPointDataStatus" :stroke="spinStroke" :style="spinStyle" size="large">
            <div class="lc-cesium_map" id="cesium-3d-viewer"></div>
            <template #description> 地图加载中... </template>
        </NSpin>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
import { cesiumService } from "./modules/cesiumUtils";
import { cesiumProps } from "./modules/props";
import type { changeModelType, changeModelParamType, EntityProperties } from "./modules/type";
import { Entity, Cartesian3, JulianDate } from "cesium";
import { NSpin } from "naive-ui";

const initImageryLayersStatus = ref<boolean>(true);
const initPointDataStatus = ref<boolean>(true);
const emit = defineEmits<{
    (e: "pointHandler", value: EntityProperties): void;
    (e: "limitHeightHandler", value: number): void;
    (e: "loadHandler", value: boolean): void;
}>();

const {
    clientId = "74109f7095974ab1a5e930c8e998580d",
    accessToken,
    baseUrl,
    imageryLayersUrl,
    areaName,
    defaultShowState,
    flyToHeight,
    offsetState,
    spinStroke,
    spinContainerBg,
    spinDescriptionColor,
    defaultCenterKey = "深圳市",
    centerPosition = Cartesian3.fromDegrees(114.187446, 22.674131, 130000),
    controlStatus,
    basicConfig,
    pointData = [],
    openIndexDB = false,
} = defineProps(cesiumProps);

const reloadPointData = async (): Promise<void> => {
    clearEntity();
    cesiumUtils.pointData = pointData;
    pointData?.forEach((point) => {
        cesiumUtils.addPoint(point, "value");
        if (defaultShowState) {
            cesiumUtils.addPoint(point);
        }
    });
};

const loadedTileLayer = async (status: boolean): Promise<void> => {
    initPointDataStatus.value = status;
};

const loadImageryLayers = async (status: boolean): Promise<void> => {
    emit("loadHandler", !status);
    initImageryLayersStatus.value = status;
    if (initPointDataStatus.value) {
        initPointDataStatus.value = status;
    }
};

// 初始化 Cesium 服务
const cesiumUtils = new cesiumService("cesium-3d-viewer", {
    config: basicConfig,
    defaultShowState: defaultShowState,
    flyToHeight: flyToHeight,
    offsetState: offsetState,
    centerPosition: centerPosition,
    defaultCenterKey,
    openIndexDB,
    pointHandler: (data: Entity) => {
        const currentTime = JulianDate.now();
        const value0ption = data.properties?.getValue(currentTime);
        if(!value0ption) return 
        emit("pointHandler", value0ption);
    },
    limitHeightHandler: (value: number) => {
        emit("limitHeightHandler", value);
    },
    loadTileLayerHandler: (status: boolean) => {
        loadImageryLayers(status);
    },
});

// 清除选中图层
const clearEntity = () => {
    cesiumUtils.clearEntity("pointEntities", "dataSource");
    cesiumUtils.clearEntity("pointEntities", "viewer");
};
const changeModel = <T extends changeModelType>(type: changeModelType, value: changeModelParamType[T]): void => {
    if (cesiumUtils[type]) {
        cesiumUtils[type](value);
    } else {
        console.log("未匹配cesiumUtils的方法");
    }
};

const initCesium = async (): Promise<{ status: boolean }> => {
    try {
        if (!accessToken) {
            return { status: false };
        }
        // 同步数据
        cesiumUtils.pointData = pointData;
        cesiumUtils.options.config = basicConfig;
        cesiumUtils.options.defaultShowState = defaultShowState;
        cesiumUtils.options.flyToHeight = flyToHeight;
        cesiumUtils.options.offsetState = offsetState;

        // 初始化 Viewer
        const viewerInitSuccess = await cesiumUtils.initViewer(controlStatus);
        if (!viewerInitSuccess) {
            throw new Error("Viewer 初始化失败");
        }

        // 更新属性
        cesiumUtils.updateViewerAttribute();

        // 设置初始视角
        cesiumUtils.setInitialView({ destination: centerPosition });

        // 加载瓦片图层
        const titleUrl =
            imageryLayersUrl ??
            `${baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${clientId}&access_token=${accessToken}`;

        await cesiumUtils.loadTileLayer(titleUrl);
        if (areaName) {
            cesiumUtils.polygonClickHandler(areaName);
        }
        return { status: true };
    } catch (err: any) {
        loadedTileLayer(false);
        return { status: false };
    }
};

const spinStyle = computed(() => {
    return {
        "--spin-container-bg": spinContainerBg ?? "#6C7E93",
        "--n-spin-description-color": spinDescriptionColor ?? "#046ab1",
    };
});

const initCesiumDebounced = () => {
    cesiumUtils.destroy();
    initCesium();
};

defineExpose({
    changeModel,
    loadedTileLayer,
    clearEntity,
    cesiumUtils,
});

const initCesiumDebouncedChange = watch([() => accessToken, () => imageryLayersUrl], initCesiumDebounced);

const offsetStateChange = watch(
    () => offsetState,
    (newValue) => {
        cesiumUtils.options = {
            ...cesiumUtils.options,
            offsetState: newValue,
        };
    },
    { deep: true }
);

const initPointDataChange = watch([initPointDataStatus, pointData], () => {
    if (!initPointDataStatus.value) {
        reloadPointData();
    }
});

onMounted(async () => {
    await initCesium();
});

onBeforeUnmount(() => {
    initCesiumDebouncedChange();
    offsetStateChange();
    initPointDataChange();
    cesiumUtils.destroy();
});
</script>

<style lang="scss" scoped>
.lc-cesium {
    width: 100%;
    height: 100%;
    min-width: 1px;
    min-height: 1px;
    box-sizing: border-box;
    cursor: pointer;

    :deep(.n-spin-container) {
        position: absolute;
        box-sizing: border-box;

        width: 100%;
        height: 100%;
        background: var(--spin-container-bg);

        .n-spin-content--spinning {
            width: 100%;
            height: 100%;
        }

        .n-spin-description {
            color: var(--n-spin-description-color);
        }
    }

    &_map {
        position: relative;
        width: 100%;
        height: 100%;

        // 优化渲染性能
        :deep(.cesium-widget) {
            canvas {
                image-rendering: -moz-crisp-edges;
                -ms-interpolation-mode: nearest-neighbor;
            }
        }
    }

    .initImageryLayersStatus-indicator {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 4px;
        z-index: 10;
    }
}
</style>
