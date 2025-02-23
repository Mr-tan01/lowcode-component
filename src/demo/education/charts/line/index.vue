<template>
    <div class="demo-charts">
        <Container title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">

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
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    LcBarChart,
    lcLineChart,
} from '~/es/education/charts';
import { combinationOpts } from '../options/line-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>