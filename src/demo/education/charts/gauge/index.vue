<template>
    <div class="demo-charts">
        <Container title="图表" description="图表-图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <Container title="仪表盘" rswidth="420px" rs-height="auto">
                    <LcGaugeSvgChart v-bind="useGaugeSvgOptions()"></LcGaugeSvgChart>
                </Container>
                <Container title="仪表盘" rswidth="420px" rs-height="auto">
                    <LcGaugeSvgChart :value="90"></LcGaugeSvgChart>
                </Container>
                <Container title="仪表盘" rswidth="420px" rs-height="auto">
                    <LcGaugeSvgChart :value="60"></LcGaugeSvgChart>
                </Container>
                <Container title="得分图" rswidth="520px" rs-height="420px">
                    <LcGaugeChart v-bind="useCommonGaugeOptions()"></LcGaugeChart>
                </Container>
                <Container title="仪表盘" rswidth="420px" rs-height="420px">
                    <LcGaugeChart v-bind="useGaugeOptions()"></LcGaugeChart>
                </Container>
            </NSpace>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    LcGaugeChart,
    LcGaugeSvgChart
} from '@/components/education/components/charts';
import { useCommonGaugeOptions, useGaugeOptions, useGaugeSvgOptions } from '../options/gauge-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>