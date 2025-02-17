<template>
    <div class="demo-charts">
        <Container title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <Container title="单条折线图" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(1)"></lcLineChart>
                </Container>
                <Container title="多条折线图(≥2类数据)" rswidth="390px" rs-height="265px">
                    <lcLineChart :options="combinationOpts(2)"></lcLineChart>
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
    LcBarChartOptions,
    lcLineChart,
} from '@/components/education/components/charts';
import { type EChartsOption } from 'echarts';
import orgImage from './images/org.svg';
import blueImage from './images/blue.svg';
import { barChartCodes } from './codes';
import { combinationOpts } from './options/line-options';
import { type YAXisOption } from 'echarts/types/src/coord/cartesian/AxisModel';

function chartsBarOpts(len: number): EChartsOption {
    return {
        yAxis: {
            name: '单位/人',
        },
        xAxis: {
            data: Array.from(Array(5)).map((_, i) => `${i + 1}月`),
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过2',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过3',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过4',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过5',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
        ].slice(0, len),
    }
};
function chartsHorizontalBarOpts(len: number): EChartsOption {
    return {
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        xAxis: {
            name: '',
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
            {
                name: '已通过',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ].slice(0, len),
    }
};

function chartNegativeBarOptions(): EChartsOption {
    return {
        grid: {
            right: 20,
        },
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * -100 + i)),
            },
            {
                name: '已通过',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ],
    }
}

function evenYaixsChartsBarOpts(len: number): EChartsOption {
    return {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        yAxis: [
            LcBarChartOptions.commonBarOptions.yAxis as YAXisOption ,
            LcBarChartOptions.commonBarOptions.yAxis as YAXisOption ,
        ],
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
            {
                name: '已通过',
                yAxisIndex: 1,
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ].slice(0, len),
    }
}

function pictorialBarOpts(start, len): EChartsOption | { series: {}[] } {
    return {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        yAxis: {

        },
        series: [
            {
                name: '类型名称',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: 0,
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                data: [123, 60, 25, 18],
            },
            {
                name: '类型名称1',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: 0,
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                data: [123, 60, 25, 18],
            },
            {
                name: '类型名称2',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: '-50%',
                symbol: `image://${blueImage}`,
                itemStyle: {
                    opacity: 0.9
                },
                data: [23, 60, 125, 118],
            },
            {
                name: '类型名称3',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: '-50%',
                symbol: `image://${orgImage}`,
                itemStyle: {
                    opacity: 0.9
                },
                data: [23, 160, 45, 108],
            },
        ].slice(start, len),
    }
} 
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>