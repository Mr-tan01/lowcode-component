
export const demoCodes = {
    code1: `
<template>
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
</template>

<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import { LcMark } from 'lowcode-component/es/education/mark';
</script>
    `,
}