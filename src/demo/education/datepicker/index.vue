<template>
    <div class="demo-page">
        <DemoBox title="日期选择器" description="基础用法" :code="code1">
            <div class="text-box">
                <LcDatePicker type="date"></LcDatePicker>
            </div>
        </DemoBox>
        <DemoBox title="日期范围选择器" description="基础用法" :code="code2">
            <div class="text-box">
                <LcDatePicker></LcDatePicker>
            </div>
        </DemoBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { LcDatePicker } from '@/components/education/components/datePicker';
import { code1, code2 } from './const';
</script>

<style lang="scss" scoped>
.demo-page {
    flex: 1;
    overflow: auto;
}
</style>