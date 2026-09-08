<template>
    <div class="demo-headers mr-setting-w">
        <button @click="add">添加热力图</button>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-cesium" rswidth="1500px" rs-height="740px">
            <div class="size-box">
                <LcCesium
                    ref="cesiumMap"
                    v-model:imagery-layer="imageryLayerValue"
                    :access-token="accessToken"
                    :point-data="optionInfo"
                    :basic-config="basicConfig"
                    :imagery-layer-list="imageryLayerList"
                    base-url="https://jysl.sz.edu.cn:8314"
                    :default-show-state="false"
                    :enable-all-tooltips="true"
                    :area-name="'福田区'"
                    @load-handler="loadHandler"
                    @point-handler="onPointHandler"
                ></LcCesium>
            </div>
        </DemoHelpBox>
        <LcCesiumModelDialog
            v-if="activeModel"
            v-model:show="modelDialogVisible"
            v-bind="activeModel"
            :app-id="activeModel.appId ?? clientId"
            :token="activeModel.token ?? accessToken"
            :title="activeModel.name || '模型预览'"
            :operation-speed="activeModel.operationSpeed ?? 'normal'"
            :rotate-step="activeModel.rotateStep ?? 10"
            :auto-rotate-interval="activeModel.autoRotateInterval ?? 200"
        ></LcCesiumModelDialog>
        <div style="position: absolute; top: 30%; left: 70%">
            <LcMapButton v-model:imagery-layer="imageryLayerValue" :imagery-layer-list="imageryLayerList" @icon-clicked="iconHandler"></LcMapButton>
        </div>
        <LcSwitchTabs v-model:value="tabValue" :list="defSwitchTabList" style="margin-top: 20px" @change="changePolygon"></LcSwitchTabs>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { LcSwitchTabs } from '@/components/education'
import LcMapButton from '@/components/education/components/mapButton/mapButton.vue'
import { LcCesium, LcCesiumModelDialog, CesiumInstanceType } from '@/components/education/components/map'
// import { LcCesium, CesiumInstanceType } from "~/es/education/map/index"
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import type { ChangeEvent } from '@/components/education/components/carouseBox/types'
import {
    CanvasMode,
    CanvasType,
    pointInfo,
    type pointType,
    type basicConfigType,
    type mapPointModelType,
} from '@/components/education/components/map/cesium/modules/type'
import { Cartesian3, HeightReference } from 'cesium'
import data from './index.json'
import { getToken } from '@/request'
import { defaultImageryLayerList } from '@/components/education/components/mapButton'

const clientId = 'f765f64dc1fd40f480dcf8e274850931'

const basicConfig = ref<basicConfigType>({
    clusteringEnabled: false,
    cameraLimitsEnabled: true,
    labelShowHeightThreshold: 5000,
    minZoom: 50,
})

type SchoolModelPoint = mapPointModelType & {
    lng: number
    lat: number
    markerLabel?: string
    markerIconType?: CanvasType
}

const schoolModelPointList: SchoolModelPoint[] = [
    {
        code: '44030000068',
        identifier: '3444000872',
        name: '广东实验中学深圳学校',
        layerId: 'Mesh_Update_GDSYZX_20251106',
        lng: 114.06799,
        lat: 22.669478,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '实',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44030300201',
        identifier: '3144003290',
        name: '深圳市布心中学',
        layerId: 'Mesh_Update_Bxzx_20251120',
        lng: 114.141047,
        lat: 22.580126,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '布',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44030600612',
        identifier: '3144004091',
        name: '深圳市宝安区红星实验学校',
        layerId: 'Mesh_Update_Bahxsyxx_20251230',
        lng: 113.827415,
        lat: 22.765367,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '红',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030900341',
        identifier: '2144010684',
        name: '深圳市龙华区龙飞小学',
        layerId: 'Mesh_Update_Lfxx_20251230',
        lng: 114.048476,
        lat: 22.607115,
        version: 'v1',
        heightOffset: 0,
        markerLabel: '龙',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030600492',
        identifier: '2144008589',
        name: '深圳市宝安区阳台山小学',
        layerId: 'Mesh_Update_Ytsxx_20260108',
        lng: 113.932675,
        lat: 22.68121,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '阳',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030500279',
        identifier: '3144000697',
        name: '深圳市南山区桃源中学',
        layerId: 'Mesh_Update_Tyzxgkj_20260122',
        lng: 113.97768,
        lat: 22.5608,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '桃',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030900391',
        identifier: '3444001227',
        name: '深圳市致理中学',
        layerId: 'Mesh_Update_26gjzx_20260130',
        lng: 113.978509,
        lat: 22.67405,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '致',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44030601035',
        identifier: '3144004279',
        name: '深圳市宝安区智造城实验学校',
        layerId: 'Mesh_Update_Syzx_20260205',
        lng: 113.940269,
        lat: 22.669717,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '智',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030600471',
        identifier: '2144003074',
        name: '深圳市宝安区蚝业小学',
        layerId: 'Mesh_Update_HYXX_20260226',
        lng: 113.805471,
        lat: 22.740122,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '蚝',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030601100',
        identifier: '3144090244',
        name: '深圳市宝安区步涌实验学校',
        layerId: 'Mesh_Update_BAQBYSYXX_20260305',
        lng: 113.817062,
        lat: 22.752404,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '步',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44031100157',
        identifier: '3144004217',
        name: '深圳中学光明科学城学校',
        layerId: 'Mesh_Update_CABZFPQXXKJ_20260305',
        lng: 113.945419,
        lat: 22.755775,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '深',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030900319',
        identifier: '3144003854',
        name: '深圳市龙华区第二外国语学校',
        layerId: 'Mesh_Update_lhqdewgyxx_20260326',
        lng: 113.925581,
        lat: 22.73077,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '二',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030900425',
        identifier: '3444001263',
        name: '深圳市龙华科技实验高级中学',
        layerId: 'Mesh_Update_szsd27gjzx_20260326',
        lng: 114.019771,
        lat: 22.720464,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '科',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44030900373',
        identifier: '3144004128',
        name: '深圳市龙华区华盛学校',
        layerId: 'Mesh_Update_szslhqhsxx_20260326',
        lng: 114.009727,
        lat: 22.674774,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '华',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030900280',
        identifier: '2144008510',
        name: '深圳市龙华区清泉外国语学校',
        layerId: 'Mesh_Update_qqwgyxxczb_20260326',
        lng: 114.020996,
        lat: 22.651922,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '清',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030900324',
        identifier: '3144003910003',
        name: '深圳市龙华区民治中学教育集团民新学校',
        layerId: 'Mesh_Update_LHQMZZX_20260402',
        lng: 114.03505,
        lat: 22.62952,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '民',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44030900323',
        identifier: '3144003910001',
        name: '深圳市龙华区民治中学教育集团初中部',
        layerId: 'Mesh_Update_MZZXKJ_202605021',
        lng: 114.03505,
        lat: 22.62952,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '初',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030600613',
        identifier: '3144004094',
        name: '深圳市宝安区龙田学校',
        layerId: 'SZPSMESH_202606_B7A-202501356_A726-0161LTXX',
        lng: 113.965182,
        lat: 22.697875,
        version: 'v2',
        heightOffset: 10,
        markerLabel: '田',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030900261',
        identifier: '2144003143',
        name: '深圳市龙华区龙澜学校',
        layerId: 'SZMESH_202607_Update_0B7A-202501474LLXX',
        lng: 114.016356,
        lat: 22.73134,
        version: 'v2',
        heightOffset: 10,
        markerLabel: '澜',
        markerIconType: CanvasType.Warning,
    },
    {
        code: '44030900339',
        identifier: '5144000142',
        name: '深圳市龙华区润泽学校',
        layerId: 'SZMESH_202607_Update_0B7A-202501484RZXX',
        lng: 114.10333,
        lat: 22.711041,
        version: 'v2',
        heightOffset: 10,
        markerLabel: '润',
        markerIconType: CanvasType.Success,
    },
    {
        code: '44030101197',
        identifier: '',
        name: '深圳益新中学',
        layerId: 'SZ_20260805_YXZX_3DGS',
        lng: 114.36002,
        lat: 22.69102,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '益',
        markerIconType: CanvasType.Primary,
    },
    {
        code: '44030901056',
        identifier: '3144003883002',
        name: '深圳市龙华区教育科学研究院附属外国语学校新围校区',
        layerId: 'Mesh_Update_XWXX_20260402',
        lng: 114.06975,
        lat: 22.69067,
        version: 'v1',
        heightOffset: 10,
        markerLabel: '新',
        markerIconType: CanvasType.Warning,
    },
]

const buildModelPointData = (): pointType[] => {
    return schoolModelPointList.map(item => ({
        name: `model-${item.layerId}`,
        lng: item.lng,
        lat: item.lat,
        height: 0,
        heightReference: HeightReference.CLAMP_TO_GROUND,
        options: {
            currentMode: CanvasMode.Text,
            iconType: item.markerIconType ?? CanvasType.Primary,
            label: item.markerLabel ?? '模',
            popoverLabel: item.name ?? item.layerId,
            model: {
                layerId: item.layerId,
                version: item.version,
                appId: item.appId ?? clientId,
                token: item.token ?? accessToken.value,
                baseUrl: item.baseUrl,
                tilesetFile: item.tilesetFile,
                longitudeOffset: item.longitudeOffset,
                latitudeOffset: item.latitudeOffset,
                heightOffset: item.heightOffset,
                fitToGround: item.fitToGround ?? true,
                groundHeight: item.groundHeight,
                modelBaseHeight: item.modelBaseHeight,
                heading: item.heading,
                pitch: item.pitch,
                roll: item.roll,
                scale: item.scale,
                enhance3D: item.enhance3D ?? true,
                enableShadows: item.enableShadows ?? true,
                options: item.options,
                code: item.code,
                identifier: item.identifier,
                name: item.name,
            },
        },
    }))
}

// 热力图数据
const heatMapDataHandle = (data: Array<any>) => {
    if (!data || data.length === 0) return []
    // 数据
    const heatMapData = data
        .filter(item => Number(item.schoolLat) > 0 && Number(item.schoolLng) > 0)
        .map(item => ({
            x: Number(item.schoolLng),
            y: Number(item.schoolLat),
            value: Number(item.value),
        }))
    return heatMapData
}
const defSwitchTabList = [
    {
        label: '深圳市',
        value: '深圳市',
    },
    {
        label: '龙华区',
        value: '龙华区',
    },
    {
        label: '南山区',
        value: '南山区',
    },
    {
        label: '宝安区',
        value: '宝安区',
    },
    {
        label: '福田区',
        value: '福田区',
    },
    {
        label: '罗湖区',
        value: '罗湖区',
    },
    {
        label: '盐田区',
        value: '盐田区',
    },
    {
        label: '龙岗区',
        value: '龙岗区',
    },
    {
        label: '坪山区',
        value: '坪山区',
    },
    {
        label: '光明区',
        value: '光明区',
    },
    {
        label: '大鹏新区',
        value: '大鹏新区',
    },
    {
        label: '深汕特别合作区',
        value: '深汕特别合作区',
    },
]

const show = ref<boolean>(false)
let accessToken = ref<string | null>(null)

const tabValue = ref('福田区')
const imageryLayerList = defaultImageryLayerList
const imageryLayerValue = ref(defaultImageryLayerList[0].value)
let cesiumMap = ref<CesiumInstanceType | null>(null)
let optionInfo = ref<pointType[]>([])
const pointInfoMap = pointInfo as unknown as Record<string, pointType[]>
const modelDialogVisible = ref(false)
const activeModel = ref<mapPointModelType | null>(null)
const getAreaPointData = (area: string): pointType[] => [...(pointInfoMap[area] ?? []), ...buildModelPointData()]
let buildHeatMap
function changePolygon(value: ChangeEvent): void {
    if (value.label === '深圳市') {
        cesiumMap.value?.clearEntity()
    }
    cesiumMap.value?.changeModel('removeHeatMap', buildHeatMap)
    cesiumMap.value?.loadedTileLayer(true)
    cesiumMap.value?.changeModel('polygonClickHandler', value.label)
    optionInfo.value = getAreaPointData(value.label)
    console.log(optionInfo.value, '==>')
    setTimeout(() => {
        cesiumMap.value?.loadedTileLayer(false)
    }, 1000)
}

function loadHandler(state: boolean) {
    show.value = state
}

function iconHandler(alt: string) {
    console.log(alt, '====>')
    if (alt === 'Map') {
        cesiumMap.value?.changeModel('setInitialView', {
            destination: Cartesian3.fromDegrees(114.187446, 22.674131, 130000),
            duration: 0.8,
        })
    } else {
        const state = alt === 'Layer'
        cesiumMap.value?.changeModel(
            state ? 'setViewerLayer' : 'setCameraHeight',
            state ? 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer' : alt,
        )
    }
}

function onPointHandler(data: { options?: { model?: mapPointModelType } }) {
    console.log(data)
    if (!data.options?.model) return

    activeModel.value = {
        ...data.options.model,
        appId: data.options.model.appId ?? clientId,
        token: data.options.model.token ?? accessToken.value,
    }
    modelDialogVisible.value = true
}

onMounted(async () => {
    await getToken
    const token = localStorage.getItem('access_token')
    accessToken.value = token

    // await cesiumMap.value?.changeModel("buildHeatMap", heatMapData);
    // cesiumMap.value?.changeModel("updateHeatMapPoints", heatMapData);
    // cesiumMap.value?.changeModel("updateHeatMapMaxMin", { max: max, min: min });
    optionInfo.value = getAreaPointData('福田区')
})
const add = () => {
    const heatMapData = heatMapDataHandle(data.data)
    // 点位value

    buildHeatMap = cesiumMap.value?.cesiumUtils.buildHeatMap({ points: heatMapData } as any)
}
</script>

<style lang="scss" scoped>
.size-box {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
