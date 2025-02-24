<template>
    <div class="demo-charts">
        <DemoBox title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">

            <NSpace>
                <DemoBox title="圆形雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('circle', 0, 1, 0, 6)"></LcRadarChart>
                </DemoBox>
                <DemoBox title="六边雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 6)"></LcRadarChart>
                </DemoBox>
                <DemoBox title="五边雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 5)"></LcRadarChart>
                </DemoBox>
                <DemoBox title="三角雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 3, true)"></LcRadarChart>
                </DemoBox>
                <DemoBox title="六边雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('circle', 0, 3, 0, 6, true)"></LcRadarChart>
                </DemoBox>
                <DemoBox title="五边雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 3, 0, 5, true)"></LcRadarChart>
                </DemoBox>
                <DemoBox title="三角雷达图" rswidth="420px" rs-height="406px">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 3, 0, 3, true)"></LcRadarChart>
                </DemoBox>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { DemoBox } from 'lowcode-share/es/demo';
import {
    LcRadarChart,
} from '@/components/education/components/charts';
import { useRadarOptions } from '../options/radar-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>