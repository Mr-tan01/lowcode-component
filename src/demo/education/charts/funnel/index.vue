<template>
    <div class="demo-charts">
        <DemoHelpBox title="漏斗图" description="散点图主要包括单系列散点图、多系列散点图、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <DemoHelpBox title="漏斗图(HTMLElement)" rswidth="520px" rs-height="306px" :code="deomCodes.code1">
                    <LcFunnelTierChart v-bind="useTierOptions()"></LcFunnelTierChart>
                </DemoHelpBox>
                <DemoHelpBox title="漏斗图（echarts)" rswidth="520px" rs-height="306px" :code="deomCodes.code2">
                    <LcFunnelChart v-bind="useOptions()"></LcFunnelChart>
                </DemoHelpBox>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import {
    LcFunnelChart,
    LcFunnelTierChart,
} from '@/components/education/components/charts';
import { useOptions, useTierOptions } from '../options/funnel-options';
import { deomCodes } from './deom-codes';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>