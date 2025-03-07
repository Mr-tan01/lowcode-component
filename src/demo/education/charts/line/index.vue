<template>
    <div class="demo-charts">
        <DemoHelpBox title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <DemoHelpBox title="单条折线图" rswidth="390px" rs-height="265px" :code="demoCodes.code1">
                    <lcLineChart :options="combinationOpts(1)"></lcLineChart>
                </DemoHelpBox>
                <DemoHelpBox title="多条折线图(≥2类数据)" rswidth="390px" rs-height="265px" :code="demoCodes.code2">
                    <lcLineChart :options="combinationOpts(4, 2)"></lcLineChart>
                </DemoHelpBox>
                <DemoHelpBox title="组合折线数据图" rswidth="390px" rs-height="265px" :code="demoCodes.code3">
                    <lcLineChart :options="combinationOpts(2)"></lcLineChart>
                </DemoHelpBox>
                <DemoHelpBox title="组合折线数据图3D" rswidth="390px" rs-height="265px" :code="demoCodes.code4">
                    <LcBarChart :options="combinationOpts(4, 2)" fake3d></LcBarChart>
                </DemoHelpBox>
                <DemoHelpBox title="单条曲线图" rswidth="390px" rs-height="265px" :code="demoCodes.code5">
                    <lcLineChart :options="combinationOpts(4, 3)" fake3d></lcLineChart>
                </DemoHelpBox>
                <DemoHelpBox title="多条曲线图(≥2类数据)" rswidth="390px" rs-height="265px" :code="demoCodes.code6">
                    <lcLineChart :options="combinationOpts(6, 4)" fake3d></lcLineChart>
                </DemoHelpBox>
                <DemoHelpBox title="面积曲线图" rswidth="390px" rs-height="265px" :code="demoCodes.code7">
                    <lcLineChart :options="combinationOpts(7, 6)" fake3d></lcLineChart>
                </DemoHelpBox>
                <DemoHelpBox title="多条曲线图(≥2类数据)" rswidth="390px" rs-height="265px" :code="demoCodes.code8">
                    <lcLineChart :options="combinationOpts(8, 6)" fake3d></lcLineChart>
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
    lcLineChart,
} from '@/components/education/components/charts';
import { combinationOpts } from '../options/line-options';
import { demoCodes } from './demo-codes';

</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>