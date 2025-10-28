<template>
    <div class="demo-tabs">
        <button @click="handleChange">默认值</button>
        <DemoHelpBox title="选项" description="基础用法" rswidth="700px" rs-height="auto" :code="demoCodes.code1">
            {{ tabValue2 }}
            <LcSwitchTabs v-model:index="tabValue2" @change="handleChange"> </LcSwitchTabs>
        </DemoHelpBox>
        <DemoHelpBox title="选项" description="基础用法" rswidth="1000px" rs-height="auto" :code="demoCodes.code2">
            {{ tabValue }}
            <LcSwitchTabs v-model:value="tabValue"> </LcSwitchTabs>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcSwitchTabs } from '@/components/education/components/switch-tabs'
import { ref } from 'vue'
import { demoCodes } from './demo-codes'

const tabValue = ref('龙岗区')
const tabValue2 = ref(0)
const handleChange = () => {
    tabValue.value = '福田区'
}
</script>

<style lang="scss" scoped></style>
