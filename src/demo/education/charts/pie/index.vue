<template>
    <div class="demo-charts">
        <Container title="图表" description="图表-饼图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">
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
            </NSpace>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    LcPieChart,
} from '~/es/education/charts';
import { usePieOptions, useLabelPieOptions, useProperctionPieOptions, } from '../options/pie-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>