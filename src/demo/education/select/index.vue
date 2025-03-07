<template>
    <div class="demo-select">

        <DemoHelpBox title="Select" description="基础用法/渐变" :code="code1">
            <n-space>
                <div class="select-box">
                    <LcSelect v-model:value="value" :options>
                    </LcSelect>
                </div>
                <div class="select-box">
                    <LcSelect v-model:value="value" :options gradient>
                    </LcSelect>
                </div>
            </n-space>
        </DemoHelpBox>

    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { NSpace } from 'naive-ui';
import { LcSelect } from '@/components/education/components/select';
import { ref } from 'vue';
import {
    code1,
} from './demo-codes';
const value = ref('song1')
const options = [
    {
        label: 'Drive My Car',
        value: 'song1'
    },
    {
        label: 'Norwegian Wood',
        value: 'song2'
    },
];
</script>

<style lang="scss" scoped>
.demo-select {
    margin: 0 auto;

    .select-box {
        width: 200px;
    }
}
</style>