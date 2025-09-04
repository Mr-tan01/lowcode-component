<template>
    <div class="demo-time">
        <DemoBox title="sampling" description="基础用法" rswidth="500px" :code="code1">
            <NSpace :size="150">
                <LcSampling v-model:value="checkboxValue" :show-checkbox :list> </LcSampling>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo'
import { NSpace } from 'naive-ui'
import { code1 } from './const'
import { ref } from 'vue'
import { LcSampling, type LcSamplingRecords } from '@/components/education/components/sampling'

const list: LcSamplingRecords[] = [
    {
        icon: 'blue',
        name: '正常行驶',
    },
    {
        icon: 'yellow',
        name: '预警事件',
    },
    {
        icon: 'red',
        name: '疲劳驾驶',
    },
]

const showCheckbox = true
const checkboxValue = ref([])
</script>
