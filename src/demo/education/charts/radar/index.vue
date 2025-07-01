<template>
    <div class="demo-charts">
        <DemoHelpBox title="图表" description="图表-柱状图分单类数据、多类数据、组合类数据、" rswidth="1360px" rs-height="auto">
            <NSpace>
                <DemoHelpBox title="圆形雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code1">
                    <LcRadarChart v-bind="useRadarOptions('circle', 0, 1, 0, 6)"></LcRadarChart>
                </DemoHelpBox>
                <DemoHelpBox title="六边雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code2">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 6)"></LcRadarChart>
                </DemoHelpBox>
                <DemoHelpBox title="五边雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code3">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 5)"></LcRadarChart>
                </DemoHelpBox>
                <DemoHelpBox title="三角雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code4">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 1, 0, 3, true)"></LcRadarChart>
                </DemoHelpBox>
                <DemoHelpBox title="六边雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code5">
                    <LcRadarChart v-bind="useRadarOptions('circle', 0, 3, 0, 6, true)"></LcRadarChart>
                </DemoHelpBox>
                <DemoHelpBox title="五边雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code6">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 3, 0, 5, true)"></LcRadarChart>
                </DemoHelpBox>
                <DemoHelpBox title="三角雷达图" rswidth="420px" rs-height="406px" :code="demoCodes.code7">
                    <LcRadarChart v-bind="useRadarOptions('polygon', 0, 3, 0, 3, true)"></LcRadarChart>
                </DemoHelpBox>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcRadarChart } from '@/components/education/components/charts'
import { useRadarOptions } from '../options/radar-options'
import { demoCodes } from './demo-codes'
</script>
<style lang="scss" scoped>
.demo-charts {
    overflow: auto;
}
</style>
