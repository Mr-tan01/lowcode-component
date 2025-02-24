<template>
    <div class="demo-charts">
        <DemoBox title="图表" description="图表-图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <DemoBox title="仪表盘" rswidth="420px" rs-height="auto">
                    <LcGaugeSvgChart v-bind="useGaugeSvgOptions()"></LcGaugeSvgChart>
                </DemoBox>
                <DemoBox title="仪表盘" rswidth="420px" rs-height="auto">
                    <LcGaugeSvgChart :value="90"></LcGaugeSvgChart>
                </DemoBox>
                <DemoBox title="仪表盘" rswidth="420px" rs-height="auto">
                    <LcGaugeSvgChart :value="60"></LcGaugeSvgChart>
                </DemoBox>
                <DemoBox title="得分图" rswidth="520px" rs-height="420px">
                    <LcGaugeChart v-bind="useCommonGaugeOptions()"></LcGaugeChart>
                </DemoBox>
                <DemoBox title="仪表盘" rswidth="420px" rs-height="420px">
                    <LcGaugeChart v-bind="useGaugeOptions()"></LcGaugeChart>
                </DemoBox>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoBox } from 'lowcode-share/es/demo';
import {
    LcGaugeChart,
    LcGaugeSvgChart
} from '@/components/education/components/charts';
import { useCommonGaugeOptions, useGaugeOptions, useGaugeSvgOptions } from '../options/gauge-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>