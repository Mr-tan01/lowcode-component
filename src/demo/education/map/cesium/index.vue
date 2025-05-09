<template>
    <div class="demo-headers mr-setting-w">
        <DemoHelpBox title="深圳地图" description="深圳教育项目-高德地图" rswidth="900px" rsHeight="600px">
            <div class="size-box">
                <LcCesium
                    ref="cesiumMap"
                    :access-token="accessToken"
                    :point-data="optionInfo"
                    :basic-config="basicConfig"
                    :default-show-state="false"
                    :fly-to-height="30000"
                    v-on:load-handler="loadHandler"
                ></LcCesium>
            </div>
        </DemoHelpBox>
        <div style="position: absolute; top: 30%; left: 70%">
            <LcMapButton v-if="show" @iconClicked="iconHandler"></LcMapButton>
        </div>
        <LcSwitchTabs v-model:value="tabValue" @change="changePolygon"></LcSwitchTabs>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { LcSwitchTabs } from "@/components/education";
import LcMapButton from "@/components/education/components/mapButton/mapButton.vue";
import { LcCesium, CesiumInstanceType } from "@/components/education/components/map";
// import { LcCesium, CesiumInstanceType } from "~/es/education/map/index"
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import type { ChangeEvent } from "@/components/education/components/carouseBox/types";
import { pointInfo, basicConfigType } from "@/components/education/components/map/cesium/modules/type";
import { Color, Cartesian3 } from "cesium";
const basicConfig = ref<basicConfigType>({ minZoom: 200, maxZoom: 130000, baseColor: Color.TRANSPARENT });
import { getToken } from "@/request";

const show = ref<boolean>(false);
let accessToken = ref<string | null>(null);

const tabValue = ref("宝安区");
let cesiumMap = ref<CesiumInstanceType | null>(null);
let optionInfo = ref([]);

function changePolygon(value: ChangeEvent): void {
    cesiumMap.value?.changeModel("polygonClickHandler", value.label);
    optionInfo.value = pointInfo[value.label];
}

function loadHandler(state: boolean) {
    show.value = state;
}

function iconHandler(alt: string) {
    if (alt === "Map") {
        cesiumMap.value?.changeModel("setInitialView", { destination: Cartesian3.fromDegrees(114.187446, 22.674131, 130000), duration: 0.8 });
    } else {
        const state = alt === "Layer";
        cesiumMap.value?.changeModel(
            state ? "setViewerLayer" : "setCameraHeight",
            state ? "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer" : alt
        );
    }
}

onMounted(async () => {
    await getToken;
    accessToken.value = localStorage.getItem("access_token");
});
</script>

<style></style>
