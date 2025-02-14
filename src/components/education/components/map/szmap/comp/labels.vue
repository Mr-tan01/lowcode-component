<template>
    <g class="lables-group" id="编组-17" transform="translate(100.4352, 99.2194)" font-family="HarmonyOS_Sans_SC, HarmonyOS Sans SC"
        font-size="16" font-weight="normal" line-spacing="28">
        <text class="text" id="南山" fill="url(#linearGradient-46)">
            <tspan x="95.7816" y="230.4492">
                {{ mergedLabels[szBlockNames['南山']] }}
            </tspan>
        </text>
        <text class="text" id="福田" fill="url(#linearGradient-46)">
            <tspan x="188.56944" y="268.4872">
                {{ mergedLabels[szBlockNames['福田']] }}
            </tspan>
        </text>
        <text class="text" id="罗湖" fill="url(#linearGradient-46)">
            <tspan x="318.6216" y="220.43644">
                {{ mergedLabels[szBlockNames['罗湖']] }}
            </tspan>
        </text>
        <text class="text" id="盐田" fill="url(#linearGradient-46)">
            <tspan x="418.52288" y="196.19084">
                {{ mergedLabels[szBlockNames['盐田']] }}
            </tspan>
        </text>
        <text class="text" id="宝安" fill="url(#linearGradient-46)">
            <tspan x="0" y="151.7938">
                {{ mergedLabels[szBlockNames['宝安']] }}
            </tspan>
        </text>
        <text class="text" id="光明" fill="url(#linearGradient-46)">
            <tspan x="62.1208" y="15">
                {{ mergedLabels[szBlockNames['光明']] }}
            </tspan>
        </text>
        <text class="text" id="龙岗" fill="url(#linearGradient-46)">
            <tspan x="418.27104" y="66.9946">
                {{ mergedLabels[szBlockNames['龙岗']] }}
            </tspan>
        </text>
        <text class="text" id="坪山" fill="url(#linearGradient-46)">
            <tspan x="521.8768" y="116.5672">
                {{ mergedLabels[szBlockNames['坪山']] }}
            </tspan>
        </text>
        <text class="text" id="大鹏新区" fill="url(#linearGradient-47)">
            <tspan x="612.31892" y="180.2158">
                {{ mergedLabels[szBlockNames['大鹏新区']] }}
            </tspan>
        </text>
        <text class="text" id="龙华" fill="url(#linearGradient-48)">
            <tspan x="166" y="105">
                {{ mergedLabels[szBlockNames['龙华']] }}
            </tspan>
        </text>
        <text class="text" id="深汕合作区" fill="url(#linearGradient-48)">
            <tspan x="690" y="-48">
                {{ mergedLabels[szBlockNames['深汕合作区']] }}
            </tspan>
        </text>
    </g>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import merge from 'lodash-es/merge';
import { type BlockLableMapType, type BlockName, defBlockLableMap, szBlockNames } from '../const';
import { type SZMapMarkProps } from '../props';

const {
    labels = {},
    values = {},
} = defineProps<{
    labels?: BlockLableMapType;
    values?: SZMapMarkProps;
}>();

const mergedLabels = computed(() => merge({}, defBlockLableMap, labels));

function getValueByName(name: BlockName) {
    return values[szBlockNames[name]]?.value ?? 0;
}

</script>
<style lang="scss" scoped>
.lables-group {
    .text {
        pointer-events: none;
        position: relative;
        .rawmap-mark {
            position: fixed;
            z-index: 99;
        }
    }
}
</style>