<template>
    <div class="demo-charts">
        <DemoBox title="漏斗图" description="散点图主要包括单系列散点图、多系列散点图、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <DemoBox title="漏斗图(HTMLElement)" rswidth="520px" rs-height="306px">
                    <LcFunnelTierChart v-bind="useTierOptions()"></LcFunnelTierChart>
                </DemoBox>
                <DemoBox title="漏斗图（echarts)" rswidth="520px" rs-height="306px">
                    <LcFunnelChart v-bind="useOptions()"></LcFunnelChart>
                </DemoBox>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoBox } from 'lowcode-share/es/demo';
import {
    LcFunnelChart,
    LcFunnelTierChart,
} from '@/components/education/components/charts';
import { useOptions, useTierOptions } from '../options/funnel-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>