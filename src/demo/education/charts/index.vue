<template>
    <div class="demo-charts">
        <Container title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <Container title="圆形雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('circle', 0, 1, 0, 6)"></lcRadarChart>
                </Container>
                <Container title="六边雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 6)"></lcRadarChart>
                </Container>
                <Container title="五边雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 5)"></lcRadarChart>
                </Container>
                <Container title="三角雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 3, true)"></lcRadarChart>
                </Container>
                <Container title="六边雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('circle', 0, 3, 0, 6, true)"></lcRadarChart>
                </Container>
                <Container title="五边雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('polygon', 0, 3, 0, 5, true)"></lcRadarChart>
                </Container>
                <Container title="三角雷达图" rswidth="420px" rs-height="406px">
                    <lcRadarChart v-bind="useRadarOptions('polygon', 0, 3, 0, 3, true)"></lcRadarChart>
                </Container>
            </NSpace>
            <NSpace>
                <Container title="饼图" rswidth="547px" rs-height="406px">
                    <LcPieChart v-bind="(usePieOptions())"></LcPieChart>
                </Container>
                <Container title="饼图" rswidth="547px" rs-height="406px">
                    <LcPieChart v-bind="(useLabelPieOptions())"></LcPieChart>
                </Container>
                <Container title="圆环图" rswidth="447px" rs-height="306px">
                    <LcPieChart v-bind="(useProperctionPieOptions())"></LcPieChart>
                </Container>
                <Container title="得分图" rswidth="520px" rs-height="420px">
                    <LcGaugeChart v-bind="useCommonGaugeOptions()"></LcGaugeChart>
                </Container>
                <Container title="仪表盘" rswidth="520px" rs-height="420px">
                    <LcGaugeChart v-bind="useGaugeOptions()"></LcGaugeChart>
                </Container>
            </NSpace>
            <NSpace>
                <Container title="单条折线图" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(1)"></lcLineChart>
                </Container>
                <Container title="多条折线图(≥2类数据)" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(4, 2)"></lcLineChart>
                </Container>
                <Container title="组合折线数据图" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(2)"></lcLineChart>
                </Container>
                <Container title="组合折线数据图3D" rswidth="390px" rs-height="265px">
                    <LcBarChart :options="combinationOpts(4, 2)" fake3d></LcBarChart>
                </Container>
                <Container title="单条曲线图" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(4, 3)" fake3d></lcLineChart>
                </Container>
                <Container title="多条曲线图(≥2类数据)" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(6, 4)" fake3d></lcLineChart>
                </Container>
                <Container title="面积曲线图" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(7, 6)" fake3d></lcLineChart>
                </Container>
                <Container title="多条曲线图(≥2类数据)" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(8, 6)" fake3d></lcLineChart>
                </Container>
            </NSpace>
            <NSpace>
                <Container title="单柱" rswidth="390px" rs-height="265px" :code="barChartCodes.code1">
                    <LcBarChart :options="chartsBarOpts(1)" type="bar"></LcBarChart>
                </Container>
                <Container title="多柱(≥2类数据)" rswidth="390px" rs-height="265px">
                    <LcBarChart :options="chartsBarOpts(2)" type="bar"></LcBarChart>
                </Container>
                <Container title="堆叠柱" rswidth="390px" rs-height="265px">
                    <LcBarChart :options="chartsBarOpts(2)" stack type="bar"></LcBarChart>
                </Container>
                <Container title="单条横柱" rswidth="390px" rs-height="385px">
                    <LcBarChart :options="chartsHorizontalBarOpts(1)" is-horizontal :fake3d="false" type="bar">
                    </LcBarChart>
                </Container>
                <Container title="多条横柱" rswidth="390px" rs-height="385px">
                    <LcBarChart :options="chartsHorizontalBarOpts(2)" is-horizontal :fake3d="false" type="bar">
                    </LcBarChart>
                </Container>
                <Container title="多条横柱" rswidth="390px" rs-height="385px">
                    <LcBarChart :options="chartNegativeBarOptions()" is-horizontal stack :fake3d="false" type="bar">
                    </LcBarChart>
                </Container>
                <Container title="单柱多维(2类数据)" rswidth="390px" rs-height="365px">
                    <LcBarChart :options="evenYaixsChartsBarOpts(2)" type="bar"></LcBarChart>
                </Container>
                <Container title="横向堆叠柱" rswidth="390px" rs-height="365px">
                    <LcBarChart :options="chartsBarOpts(100)" is-horizontal stack :fake3d="false" type="bar">
                    </LcBarChart>
                </Container>
                <Container title="纵向堆叠柱" rswidth="390px" rs-height="365px">
                    <LcBarChart :options="chartsBarOpts(100)" stack type="bar" :fake3d="false"></LcBarChart>
                </Container>
                <Container title="其他形态柱状图" rswidth="390px" rs-height="365px">
                    <LcBarChart :options="pictorialBarOpts(2, 100)" type="bar" :fake3d="false"></LcBarChart>
                </Container>
                <Container title="象形" rswidth="390px" rs-height="365px">
                    <LcBarChart :options="pictorialBarOpts(0, 2)" type="bar" :fake3d="false"></LcBarChart>
                </Container>
            </NSpace>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    LcBarChart,
    lcLineChart,
    LcPieChart,
    lcRadarChart,
    LcGaugeChart,
} from '@/components/education/components/charts';
import { barChartCodes } from './codes';
import { combinationOpts } from './options/line-options';
import { useRadarOptions } from './options/radar-options';
import { usePieOptions, useLabelPieOptions, useProperctionPieOptions, } from './options/pie-options';
import { useCommonGaugeOptions, useGaugeOptions } from './options/gauge-options';
import {
    chartsBarOpts,
    chartsHorizontalBarOpts,
    chartNegativeBarOptions,
    evenYaixsChartsBarOpts,
    pictorialBarOpts,
} from './options/bar-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>