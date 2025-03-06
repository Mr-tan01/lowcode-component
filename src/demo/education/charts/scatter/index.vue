<template>
    <div class="demo-charts">
        <DemoBox title="气泡图" description="散点图主要包括单系列散点图、多系列散点图、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <DemoBox title="单气泡图" rswidth="520px" rs-height="306px" :code="demoCodes.code1(1)">
                    <LcScatterChart v-bind="useScatterOptions()"></LcScatterChart>
                </DemoBox>
                <DemoBox title="多气泡图(≥2类数据)" rswidth="520px" rs-height="306px" :code="demoCodes.code1(3)">
                    <LcScatterChart v-bind="useScatterOptions(3, 0)"></LcScatterChart>
                </DemoBox>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoBox } from 'lowcode-share/es/demo';
import {
    LcScatterChart,
} from '@/components/education/components/charts';
import { useScatterOptions } from '../options/scatter-options';
import { demoCodes } from './demo-codes';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>