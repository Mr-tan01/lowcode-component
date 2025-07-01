<template>
    <div class="demo-charts">
        <DemoHelpBox
            title="图表"
            description="图表-饼图分单类数据、多类数据、组合类数据、"
            rswidth="1360px"
            rs-height="auto"
        >
            <NSpace>
                <DemoHelpBox
                    title="饼图-自定义label"
                    rswidth="547px"
                    rs-height="306px"
                    :code="demoCodes.customLabel"
                >
                    <LcPieChart
                        v-bind="usePieOptions()"
                        :legend-label="legendLabel"
                        legend-width="fit-content"
                    ></LcPieChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="饼图-没有设置text"
                    rswidth="547px"
                    rs-height="306px"
                    :code="demoCodes.customLabel"
                >
                    <LcPieChart
                        :options="usePieNotTileOptions().options"
                    ></LcPieChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="饼图"
                    rswidth="547px"
                    rs-height="306px"
                    :code="demoCodes.code1"
                >
                    <LcPieChart v-bind="usePieOptions()"></LcPieChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="饼图"
                    rswidth="547px"
                    rs-height="406px"
                    :code="demoCodes.code2"
                >
                    <LcPieChart v-bind="useLabelPieOptions()"></LcPieChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="圆环图"
                    rswidth="447px"
                    rs-height="306px"
                    :code="demoCodes.code3"
                >
                    <LcPieChart
                        v-bind="useProperctionPieOptions()"
                    ></LcPieChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="南丁格尔玫瑰图"
                    rswidth="447px"
                    rs-height="306px"
                    :code="demoCodes.code3"
                >
                    <LcPieChart
                        v-bind="useFlorenceNightingaleRoseChartPieOption()"
                        class="florence-nightingale-rose"
                    ></LcPieChart>
                </DemoHelpBox>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcPieChart } from '@/components/education/components/charts'
import {
    usePieOptions,
    usePieNotTileOptions,
    useLabelPieOptions,
    useProperctionPieOptions,
    useFlorenceNightingaleRoseChartPieOption,
} from '../options/pie-options'
import { demoCodes } from './demo-codes'
const legendLabel = (name, value) =>
    `${name} <span style="margin-left: 20px;color: yellow;">${value}</span>`
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
    .florence-nightingale-rose {
        :deep(.lc-pie__wrapper__chart__inner) {
            &::before {
                display: none;
            }
        }
    }
}
</style>
