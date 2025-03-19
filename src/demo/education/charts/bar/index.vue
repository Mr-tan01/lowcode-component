<template>
    <div class="demo-charts">
        <DemoHelpBox title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <DemoHelpBox title="多柱(差值类数据)" rswidth="390px" rs-height="265px" :code="barChartCodes.difference">
                    <LcBarChart :options="differenceChartsBarOpts()" type="bar"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="多柱(≥2类数据-markLine)" rswidth="390px" rs-height="265px" :code="barChartCodes.code0">
                    <LcBarChart :options="chartsBarOpts(2)" type="bar-line"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="单柱" rswidth="390px" rs-height="265px" :code="barChartCodes.code1">
                    <LcBarChart :options="chartsBarOpts(1)" type="bar"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="多柱(≥2类数据)" rswidth="390px" rs-height="265px" :code="barChartCodes.code2">
                    <LcBarChart :options="chartsBarOpts(2)" type="bar"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="堆叠柱" rswidth="390px" rs-height="265px" :code="barChartCodes.code3">
                    <LcBarChart :options="chartsBarOpts(2)" stack type="bar"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="单条横柱" rswidth="390px" rs-height="385px" :code="barChartCodes.code4">
                    <LcBarChart :options="chartsHorizontalBarOpts(1)" is-horizontal :fake3d="false" type="bar">
                    </LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="多条横柱" rswidth="390px" rs-height="385px" :code="barChartCodes.code5">
                    <LcBarChart :options="chartsHorizontalBarOpts(2)" is-horizontal :fake3d="false" type="bar">
                    </LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="多条横柱" rswidth="390px" rs-height="385px" :code="barChartCodes.code6">
                    <LcBarChart :options="chartNegativeBarOptions()" is-horizontal stack :fake3d="false" type="bar">
                    </LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="单柱多维(2类数据)" rswidth="390px" rs-height="365px" :code="barChartCodes.code7">
                    <LcBarChart :options="evenYaixsChartsBarOpts(2)" type="bar"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="横向堆叠柱" rswidth="390px" rs-height="365px" :code="barChartCodes.code8">
                    <LcBarChart :options="chartsBarOpts(100)" is-horizontal stack :fake3d="false" type="bar">
                    </LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="纵向堆叠柱" rswidth="390px" rs-height="365px" :code="barChartCodes.code9">
                    <LcBarChart :options="chartsBarOpts(100)" stack type="bar" :fake3d="false"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="其他形态柱状图" rswidth="390px" rs-height="365px" :code="barChartCodes.code10">
                    <template #title>
                        <span>其他形态柱状图</span>
                        <NSpace>
                            <a :href="blueImage" download="blue-bg-iocn">下载蓝色图标</a>
                            <a :href="orgImage" download="orange-bg-iocn">下载橙色图标</a>
                        </NSpace>
                    </template>
                    <LcBarChart :options="pictorialBarOpts(2, 100)" type="bar" :fake3d="false"></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="象形" rswidth="390px" rs-height="365px" :code="barChartCodes.code11">
                    <LcBarChart :options="pictorialBarOpts(0, 2)" type="bar" :fake3d="false"></LcBarChart>
                </DemoHelpBox>

            </NSpace>

        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import {
    LcBarChart,
} from '@/components/education/components/charts';
import { barChartCodes } from './demo-codes';
import {
    chartsBarOpts,
    chartsHorizontalBarOpts,
    chartNegativeBarOptions,
    evenYaixsChartsBarOpts,
    pictorialBarOpts,
    orgImage,
    blueImage,
    differenceChartsBarOpts,
} from '../options/bar-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;

    span {
        color: #fff;
    }

    a {
        color: #23cec3;
    }
}
</style>