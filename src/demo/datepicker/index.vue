<template>
    <div class="demo-page">
        <Container title="日期选择器" description="基础用法" :code="code1">
            <div class="text-box">
                <LcDatePicker type="date"></LcDatePicker>
            </div>
        </Container>
        <Container title="日期范围选择器" description="基础用法" :code="code2">
            <div class="text-box">
                <LcDatePicker></LcDatePicker>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '../components/help/Container.vue';
import { LcDatePicker } from '../../components/education/components/DatePicker';
import { code1, code2 } from './const';
</script>

<style lang="scss" scoped>
.demo-page {
    flex: 1;
    overflow: auto;
}
</style>