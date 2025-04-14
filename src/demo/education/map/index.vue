<template>
    <div class="demo-map">
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px" rs-height="560px">
            <LcTianditu tk="a7a093036e0140d5a8dd309f33f1e382"></LcTianditu>
        </DemoHelpBox>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px" :code="demoCodes.code1">
            <div class="size-box">
                <Szmap :values :disabledGradient="true"></Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图自定义" rswidth="962px" :code="demoCodes.code1">
            <div class="size-box">
                <Szmap :values :disabledGradient="true">
                    <template #mapLabel="{ blockList, labelClass, getVlaue, currentMapKey }">
                        <MapMarker
                            v-for="(item, index) in getBlockList(blockList)"
                            :class="labelClass(index)"
                            :label="getVlaue(index).mapLabel"
                            :value="getVlaue(index).value"
                            unit="所"
                        ></MapMarker>
                    </template>
                </Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图悬浮" rswidth="962px" :code="demoCodes.code1">
            <div class="size-box">
                <Szmap :values :disabledGradient="true" :labelModel="LabelModelEnum.HOVER">
                    <template #mapLabel="{ labelClass, getVlaue, currentMapKey }">
                        <span>
                            <MapMarker
                                v-if="currentMapKey"
                                :class="labelClass(currentMapKey)"
                                :label="getVlaue(currentMapKey as BlockName).mapLabel"
                                :value="getVlaue(currentMapKey as BlockName).value"
                                unit="所"
                            ></MapMarker>
                        </span>
                    </template>
                </Szmap>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="深圳地图" description="深圳教育项目-深圳地图" rswidth="962px" :code="demoCodes.code2">
            <div class="size-box">
                <Szmap :values :rotate-x="-30"></Szmap>
            </div>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { Szmap, LabelModelEnum, type SZMapMarkProps, LcTianditu, BlockName } from "@/components/education/components/map";
import { demoCodes } from "./demo-codes";
import MapMarker from "./components/index.vue";
import { omit } from "lodash-es";

type FilteredBlockName = Exclude<BlockName, "shenshan">;

const getBlockList = (list): Record<FilteredBlockName, string> => {
    return omit(list, ["shenshan"]) as Record<FilteredBlockName, string>;
};

const values: SZMapMarkProps = {
    guangming: {
        value: 1,
        unit: "人",
    },
    longgang: {
        value: 10000,
        unit: "人",
    },
};
</script>
