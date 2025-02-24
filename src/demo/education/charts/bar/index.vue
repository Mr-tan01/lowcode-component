<template>
    <div class="demo-charts">
        <Container title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">

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
                    <template #title>
                        <span>其他形态柱状图</span>
                        <NSpace>
                            <a href="../images/blue.svg" download="blue-bg-iocn">下载蓝色图标</a>
                            <a href="../images/org.svg" download="orange-bg-iocn">下载橙色图标</a>
                        </NSpace>
                    </template>
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
} from '@/components/education/components/charts';
import { barChartCodes } from './codes';
import {
    chartsBarOpts,
    chartsHorizontalBarOpts,
    chartNegativeBarOptions,
    evenYaixsChartsBarOpts,
    pictorialBarOpts,
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