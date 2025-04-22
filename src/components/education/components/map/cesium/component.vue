<template>
    <div class="lc-cesium">
        <div class="lc-cesium_map" id="cesium-3d-viewer"></div>
        <div v-if="initImageryLayersStatus" class="initImageryLayersStatus-indicator">地图加载中...</div>
        <div v-if="error" class="error-message">地图加载失败: {{ error }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { getToken } from "@/request";
import { cesiumService } from "./modules/cesiumUtils";
import { cesiumProps } from "./modules/props";
import { Cartesian3, Entity } from "cesium";
import {changeModelType} from './modules/type'

const initImageryLayersStatus = ref(true);
const error = ref<string | null>(null);
const emit = defineEmits<{
    (e: "pointHandler", value: Entity): void;
}>();

const {
    centerPosition = Cartesian3.fromDegrees(114.155799, 22.617691, 90000),
    controlStatus,
    basicConfig,
    pointData = [],
} = defineProps(cesiumProps);

// 初始化 Cesium 服务
const cesiumUtils = new cesiumService("cesium-3d-viewer", {
    config: basicConfig,
    pointHandler: (value: Entity) => {
        emit("pointHandler", value);
    },
});

function changeModel(type: changeModelType, value: string): void {
    if (cesiumUtils[type]) {
        cesiumUtils[type](value);
    } else {
      console.log('未匹配cesiumUtils的方法')
    }
}

async function initCesium(): Promise<void> {
    try {
        // 同步点数据
        cesiumUtils.pointData = pointData;

        // 初始化 Viewer
        const viewerInitSuccess = await cesiumUtils.initViewer(controlStatus);
        if (!viewerInitSuccess) {
            throw new Error("Viewer 初始化失败");
        }

        // 设置初始视角
        cesiumUtils.setInitialView(centerPosition);

        // 加载瓦片图层
        const clientId = import.meta.env.VITE_JYSLAPI_CLIENT_ID;
        const access_token = localStorage.getItem("access_token") || undefined;
        const tileUrl = `jysl/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${clientId}&access_token=${access_token}`;
        await cesiumUtils.loadTileLayer(tileUrl);

        // 监听瓦片加载状态
        cesiumUtils.viewer?.scene.globe.tileLoadProgressEvent.addEventListener(function (remaining) {
            // 瓦片加载状完成（首次添加point、polygon）
            if (remaining === 0 && initImageryLayersStatus.value) {
                cesiumUtils.addPolygon(basicConfig.areaName);
                pointData?.forEach((point) => cesiumUtils.addPoint(point, "value"));
                initImageryLayersStatus.value = false;
            }
        });
    } catch (err: any) {
        cesiumUtils.addPolygon(basicConfig.areaName);
        pointData?.forEach((point) => cesiumUtils.addPoint(point, "value"));
        initImageryLayersStatus.value = false;
        error.value = `地图初始化失败: ${err.message}`;
    }
}

defineExpose({
    changeModel,
});

watch(
    () => pointData,
    (newVal) => {
        cesiumUtils.clearEntity("pointEntities");
        cesiumUtils.pointData = newVal;
        newVal?.forEach((point) => cesiumUtils.addPoint(point, "value"));
    }
);

onMounted(async () => {
    await getToken;
    await initCesium();
});

onBeforeUnmount(() => {
    cesiumUtils.destroy();
});
</script>

<style lang="scss" scoped>
.lc-cesium {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

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

    .initImageryLayersStatus-indicator,
    .error-message {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        width: 50%;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 4px;
        z-index: 999;
    }

    .error-message {
        background: rgba(255, 0, 0, 0.7);
    }
}
</style>
