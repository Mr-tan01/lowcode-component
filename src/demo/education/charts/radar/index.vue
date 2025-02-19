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
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    lcRadarChart,
} from '@/components/education/components/charts';
import { useRadarOptions } from '../options/radar-options';
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>