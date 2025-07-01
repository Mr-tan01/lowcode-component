<template>
    <div class="demo-time">
        <DemoBox
            title=""
            time
            description="基础用法"
            rswidth="500px"
            :code="code1"
        >
            <NSpace :size="150">
                <LcTime :icon="icon"></LcTime>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { DemoBox } from 'lowcode-share/es/demo'
import { NSpace } from 'naive-ui'
import LcTime from '@/components/education/components/time/time.vue'
import { code1 } from './const'

const icon = ref('')
</script>
