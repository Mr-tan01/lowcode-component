<template>
    <div class="demo-headers mr-setting-w">
        <DemoHelpBox title="深圳地图" description="深圳教育项目-cesium" rswidth="1500px" rsHeight="740px">
            <div class="size-box">
                <LcCesium
                    ref="cesiumMap"
                    :access-token="accessToken"
                    :point-data="optionInfo"
                    :basic-config="basicConfig"
                    :default-show-state="false"
                    :area-name="'深圳市'"
                    v-on:load-handler="loadHandler"
                    @point-handler="onPointHandler"
                ></LcCesium>
            </div>
        </DemoHelpBox>
        <div style="position: absolute; top: 30%; left: 70%">
            <LcMapButton @iconClicked="iconHandler"></LcMapButton>
        </div>
        <LcSwitchTabs v-model:value="tabValue" :list="defSwitchTabList" @change="changePolygon" style="margin-top: 20px"></LcSwitchTabs>
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
import { pointType, basicConfigType, pointInfo } from "@/components/education/components/map/cesium/modules/type";
import { Cartesian3 } from "cesium";
const basicConfig = ref<basicConfigType>({ clusteringEnabled: true, cameraLimitsEnabled: false });
import { getToken } from "@/request";
const defSwitchTabList = [
    {
        label: "深圳市",
        value: "深圳市",
    },
    {
        label: "龙华区",
        value: "龙华区",
    },
    {
        label: "南山区",
        value: "南山区",
    },
    {
        label: "宝安区",
        value: "宝安区",
    },
    {
        label: "福田区",
        value: "福田区",
    },
    {
        label: "罗湖区",
        value: "罗湖区",
    },
    {
        label: "盐田区",
        value: "盐田区",
    },
    {
        label: "龙岗区",
        value: "龙岗区",
    },
    {
        label: "坪山区",
        value: "坪山区",
    },
    {
        label: "光明区",
        value: "光明区",
    },
    {
        label: "大鹏新区",
        value: "大鹏新区",
    },
    {
        label: "深汕特别合作区",
        value: "深汕特别合作区",
    },
];

const show = ref<boolean>(false);
let accessToken = ref<string | null>(null);

const tabValue = ref("宝安区");
let cesiumMap = ref<CesiumInstanceType | null>(null);
let optionInfo = ref<pointType[]>([]);

function changePolygon(value: ChangeEvent): void {
    if (value.label === "深圳市") {
        cesiumMap.value?.clearEntity();
    }
    cesiumMap.value?.loadedTileLayer(true);
    cesiumMap.value?.changeModel("polygonClickHandler", value.label);
    optionInfo.value = pointInfo[value.label];
    setTimeout(() => {
        cesiumMap.value?.loadedTileLayer(false);
    }, 1000);
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

function onPointHandler(data) {
    console.log(data);
}

onMounted(async () => {
    await getToken;
    accessToken.value = localStorage.getItem("access_token");
});
</script>

<style></style>
