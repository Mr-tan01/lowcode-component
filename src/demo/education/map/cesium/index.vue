<template>
    <div class="demo-headers mr-setting-w">
        <DemoHelpBox title="深圳地图" description="深圳教育项目-高德地图" rswidth="962px" rsHeight="600px">
            <div class="size-box">
                <LcCesium ref="cesiumMap" :basic-config="basicConfig" :point-data="optionInfo" @pointHandler="pointHandler"></LcCesium>
            </div>
        </DemoHelpBox>
        <div style="position: absolute; top: 30%; left: 70%">
            <LcMapButton @iconClicked="iconHandler"></LcMapButton>
        </div>
        <LcSwitchTabs v-model:value="tabValue" @change="changePolygon"></LcSwitchTabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { LcSwitchTabs } from "@/components/education";
import LcMapButton from "@/components/education/components/mapButton/mapButton.vue";
import { LcCesium } from "@/components/education/components/map";
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import type { ChangeEvent } from "@/components/education/components/carouseBox/types";
import { type Entity } from "cesium";
import { pointInfo, basicConfigType } from "@/components/education/components/map/cesium/modules/type";
import { Color } from "cesium";

const tabValue = ref("宝安区");
let cesiumMap = ref<any>(null);
let optionInfo = ref(pointInfo["宝安区"]);
let basicConfig = ref<basicConfigType>({
    maxZoom: 90000,
    minZoom: 200,
    areaName: "宝安区",
    baseColor: Color.fromCssColorString("#1E9EFA").withAlpha(0.7),
});

function changePolygon(value: ChangeEvent): void {
    cesiumMap.value?.changeModel("polygonClickHandler", value.label);
    optionInfo.value = pointInfo[value.label];
}

function iconHandler(alt: string) {
    cesiumMap.value?.changeModel("setCameraHeight", alt);
}

function pointHandler(value: Entity) {
    // console.log(value)
}
</script>

<style></style>
