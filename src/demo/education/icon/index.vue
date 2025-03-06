<template>
    <div class="demo-page">
        <DemoBox title="功能图标" description="基础用法" rswidth="1000px" :code="code1">
            <div class="text-box">
                <n-space>
                    <LcIcon v-for="(item, key) in innerImageDomain.func" :key :name="item">{{ item }}</LcIcon>
                </n-space>
                <n-space>
                    <LcIcon v-for="(item, key) in innerImageDomain.event" :key domain="event" :name="item" :size="70">{{ item }}</LcIcon>
                </n-space>
            </div>
        </DemoBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { NSpace } from 'naive-ui';
import { LcIcon, innerImageDomain } from '@/components/education/components/icon';
import { code1 } from './const';
</script>

<style lang="scss" scoped>
.demo-page {
    overflow: auto;
}
</style>