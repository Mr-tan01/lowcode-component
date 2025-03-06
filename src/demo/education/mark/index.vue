<template>
    <div class="demo-map">
        <DemoBox title="mark" description="深圳教育项目-深圳地图-mark" rswidth="962px" :code="demoCodes.code1">
            <NSpace :size="150">
                <LcMark :value="11000" unit="人" size="small"></LcMark>
                <LcMark :value="11000" unit="人"></LcMark>
                <LcMark :value="1132000" unit="人" model="focus"></LcMark>
                <LcMark :value="100" unit="人" model="hover"></LcMark>
            </NSpace>
            <NSpace :size="200">
                <LcMark :value="11000" unit="人" size="small" icon-name="normal" label="小"></LcMark>
                <LcMark :value="11000" unit="人" icon-name="normal" label="中"></LcMark>
                <LcMark :value="1132000" unit="人" model="focus" icon-name="normal" label="中"></LcMark>
                <LcMark :value="100" unit="人" model="hover" icon-name="normal" label="中"></LcMark>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { NSpace } from 'naive-ui';
import { LcMark } from '@/components/education/components/mark';
import { demoCodes } from './demo-codes';
</script>
