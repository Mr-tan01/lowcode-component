<template>
    <div class="demo-charts">
        <DemoHelpBox
            title="图表"
            description="图表-图分单类数据、多类数据、组合类数据、"
            rswidth="1360px"
            rs-height="auto"
        >
            <NSpace>
                <DemoHelpBox
                    title="仪表盘"
                    rswidth="420px"
                    rs-height="auto"
                    :code="deomCodes.code1(100)"
                >
                    <LcGaugeSvgChart
                        v-bind="useGaugeSvgOptions()"
                    ></LcGaugeSvgChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="仪表盘"
                    rswidth="420px"
                    rs-height="auto"
                    :code="deomCodes.code1(90)"
                >
                    <LcGaugeSvgChart :value="90"></LcGaugeSvgChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="仪表盘"
                    rswidth="420px"
                    rs-height="auto"
                    :code="deomCodes.code1(60)"
                >
                    <LcGaugeSvgChart :value="60"></LcGaugeSvgChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="得分图"
                    rswidth="520px"
                    rs-height="420px"
                    :code="deomCodes.code2"
                >
                    <LcGaugeChart
                        v-bind="useCommonGaugeOptions()"
                    ></LcGaugeChart>
                </DemoHelpBox>
                <DemoHelpBox
                    title="仪表盘"
                    rswidth="420px"
                    rs-height="420px"
                    :code="deomCodes.code3"
                >
                    <LcGaugeChart v-bind="useGaugeOptions()"></LcGaugeChart>
                </DemoHelpBox>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import {
    LcGaugeChart,
    LcGaugeSvgChart,
} from '@/components/education/components/charts'
import { deomCodes } from './demo-codes'
import {
    useCommonGaugeOptions,
    useGaugeOptions,
    useGaugeSvgOptions,
} from '../options/gauge-options'
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>
