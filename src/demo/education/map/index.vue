<template>
    <div class="demo-map">
        <DemoHelpBox
            title="深圳地图"
            description="深圳教育项目-深圳地图"
            rswidth="962px"
            rs-height="560px"
        >
            <LcTianditu tk="a7a093036e0140d5a8dd309f33f1e382"></LcTianditu>
        </DemoHelpBox>
        <DemoHelpBox
            title="深圳地图"
            description="深圳教育项目-深圳地图"
            rswidth="962px"
            :code="demoCodes.code1"
        >
            <div class="size-box">
                <Szmap :values :disabled-gradient="true"></Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox
            title="深圳地图"
            description="深圳教育项目-深圳地图自定义"
            rswidth="962px"
            :code="demoCodes.code1"
        >
            <div class="size-box">
                <Szmap :values :disabled-gradient="true">
                    <template #mapLabel="{ blockList, labelClass, getVlaue }">
                        <MapMarker
                            v-for="(_, index) in getBlockList(blockList)"
                            :key="index"
                            :class="labelClass(index)"
                            :label="getVlaue(index).mapLabel"
                            :value="getVlaue(index).value"
                            unit="所"
                        ></MapMarker>
                    </template>
                </Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox
            title="深圳地图"
            description="深圳教育项目-深圳地图悬浮"
            rswidth="962px"
            :code="demoCodes.code1"
        >
            <div class="size-box">
                <Szmap
                    :levels
                    :values
                    :disabled-gradient="false"
                    :label-model="LabelModelEnum.HOVER"
                >
                    <template
                        #mapLabel="{ labelClass, getVlaue, currentMapKey }"
                    >
                        <span>
                            <MapMarker
                                v-if="currentMapKey"
                                :class="labelClass(currentMapKey)"
                                :label="
                                    getVlaue(currentMapKey as BlockName)
                                        .mapLabel
                                "
                                :value="
                                    getVlaue(currentMapKey as BlockName).value
                                "
                                unit="所"
                            ></MapMarker>
                        </span>
                    </template>
                </Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox
            title="深圳地图"
            description="深圳教育项目-深圳地图"
            rswidth="962px"
            :code="demoCodes.code2"
        >
            <div class="size-box">
                <Szmap :values :rotate-x="-30"></Szmap>
            </div>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import {
    Szmap,
    LabelModelEnum,
    type SZMapMarkProps,
    LcTianditu,
    BlockName,
    Levels,
} from '@/components/education/components/map'
import { demoCodes } from './demo-codes'
import MapMarker from './components/index.vue'
import { omit } from 'lodash-es'

type FilteredBlockName = Exclude<BlockName, 'shenshan'>

const getBlockList = (list): Record<FilteredBlockName, string> => {
    return omit(list, ['shenshan']) as Record<FilteredBlockName, string>
}

const values: SZMapMarkProps = {
    guangming: {
        value: 1,
        unit: '人',
    },
    longgang: {
        value: 10000,
        unit: '人',
    },
}

const levels: Levels = {
    warning: {
        range: [1, 100],
        scale: 1.1,
        stop: [
            {
                'stop-color': 'rgba(225, 188, 75, 1)',
                'stop-opacity': 1,
                'offset': '0%',
            },
            {
                'stop-color': 'rgba(225, 188, 75, 0)',
                'stop-opacity': 1,
                'offset': '100%',
            },
        ],
    },
    series: {
        range: [101, 100000],
        scale: 1.2,
        stop: [
            {
                'stop-color': 'rgba(238, 111, 124, 1)',
                'stop-opacity': 1,
                'offset': '0%',
            },
            {
                'stop-color': 'rgba(238, 111, 124, 0)',
                'stop-opacity': 1,
                'offset': '100%',
            },
        ],
    },
}
</script>
