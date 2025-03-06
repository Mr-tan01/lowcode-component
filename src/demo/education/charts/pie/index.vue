<template>
    <div class="demo-charts">
        <DemoBox title="图表" description="图表-饼图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <DemoBox title="饼图" rswidth="547px" rs-height="406px" :code="demoCodes.code1">
                    <LcPieChart v-bind="(usePieOptions())"></LcPieChart>
                </DemoBox>
                <DemoBox title="饼图" rswidth="547px" rs-height="406px" :code="demoCodes.code2">
                    <LcPieChart v-bind="(useLabelPieOptions())"></LcPieChart>
                </DemoBox>
                <DemoBox title="圆环图" rswidth="447px" rs-height="306px" :code="demoCodes.code3">
                    <LcPieChart v-bind="(useProperctionPieOptions())"></LcPieChart>
                </DemoBox>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoBox } from 'lowcode-share/es/demo';
import {
    LcPieChart,
} from '@/components/education/components/charts';
import { usePieOptions, useLabelPieOptions, useProperctionPieOptions, } from '../options/pie-options';
import { demoCodes } from './demo-codes';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>