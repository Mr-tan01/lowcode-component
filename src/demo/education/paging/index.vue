<template>
    <div class="demo-paging">
        <DemoBox title="" description="基础用法" rswidth="500px" :code="code1">
            <NSpace :size="150">
                <LcPaging :model-value="1" :total-pages="3"></LcPaging>
                <LcPaging :model-value="2" :total-pages="3" :font-color="'blue'" :font-size="'20px'"></LcPaging>
            </NSpace>
        </DemoBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { NSpace } from 'naive-ui';
import  LcPaging  from '@/components/education/components/paging/paging.vue';
import {
    code1,
} from './const';

</script>
