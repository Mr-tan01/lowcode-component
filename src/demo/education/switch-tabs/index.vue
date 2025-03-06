<template>
    <div class="demo-tabs">
        <DemoBox title="选项" description="基础用法" rswidth="700px" rs-height="auto" :code="demoCodes.code1">
            {{ tabValue2 }}
            <LcSwitchTabs v-model:index="tabValue2">
            </LcSwitchTabs>
        </DemoBox>
        <DemoBox title="选项" description="基础用法" rswidth="1000px" rs-height="auto" :code="demoCodes.code2">
            {{ tabValue }}
            <LcSwitchTabs v-model:value="tabValue">
            </LcSwitchTabs>
        </DemoBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { LcSwitchTabs } from '@/components/education/components/switch-tabs';
import { ref } from 'vue';
import { demoCodes } from './demo-codes';

const tabValue = ref('龙岗区');
const tabValue2 = ref(0);

</script>



<style lang="scss" scoped></style>