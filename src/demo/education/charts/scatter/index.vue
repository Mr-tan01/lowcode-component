<template>
    <div class="demo-charts">
        <DemoHelpBox title="气泡图" description="散点图主要包括单系列散点图、多系列散点图、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <DemoHelpBox title="单气泡图" rswidth="520px" rs-height="306px" :code="demoCodes.code1(1)">
                    <LcScatterChart v-bind="useScatterOptions()"></LcScatterChart>
                </DemoHelpBox>
                <DemoHelpBox title="多气泡图(≥2类数据)" rswidth="520px" rs-height="306px" :code="demoCodes.code1(3)">
                    <LcScatterChart v-bind="useScatterOptions(3, 0)"></LcScatterChart>
                </DemoHelpBox>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
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