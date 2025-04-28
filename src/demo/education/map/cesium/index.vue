<template>
    <div class="demo-headers mr-setting-w">
        <DemoHelpBox title="深圳地图" description="深圳教育项目-高德地图" rswidth="962px" rsHeight="600px">
            <div class="size-box">
                <LcCesium ref="cesiumMap" :access-token="accessToken" :point-data="optionInfo" @pointHandler="pointHandler"></LcCesium>
            </div>
        </DemoHelpBox>
        <div style="position: absolute; top: 30%; left: 70%">
            <LcMapButton @iconClicked="iconHandler"></LcMapButton>
        </div>
        <LcSwitchTabs v-model:value="tabValue" @change="changePolygon"></LcSwitchTabs>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { LcSwitchTabs } from "@/components/education";
import LcMapButton from "@/components/education/components/mapButton/mapButton.vue";
// import { LcCesium, CesiumInstanceType } from "@/components/education/components/map";
import { LcCesium, CesiumInstanceType } from "~/es/education/map/index"
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import type { ChangeEvent } from "@/components/education/components/carouseBox/types";
import { type Entity } from "cesium";
import { pointInfo, basicConfigType } from "@/components/education/components/map/cesium/modules/type";
import { getToken } from "@/request"

let accessToken = ref<string | null>(null)

const tabValue = ref("宝安区");
let cesiumMap = ref<CesiumInstanceType | null>(null);
let optionInfo = ref(pointInfo["宝安区"]);

function changePolygon(value: ChangeEvent): void {
    cesiumMap.value?.changeModel("polygonClickHandler", value.label);
    optionInfo.value = pointInfo[value.label];
}

function iconHandler(alt: string) {
  const state = alt === "Layer"
    cesiumMap.value?.changeModel((state ? "setViewerLayer" : "setCameraHeight"), state ? "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer" : alt);
}

function pointHandler(value: Entity) {
    // console.log(value)
}

onMounted(async() => {
    await getToken
    accessToken.value = localStorage.getItem('access_token') + "1"
})
</script>

<style></style>
