<template>
    <div class="demo-page">
        <DemoHelpBox title="功能图标" description="基础用法" rswidth="1000px" :code="code1">
            <div class="text-box">
                <n-space>
                    <LcIcon v-for="(item, key) in innerImageDomain.func" :size="18" :key :name="item">{{ item }}</LcIcon>
                </n-space>
                <n-space>
                    <LcIcon v-for="(item, key) in innerImageDomain.menus" :key domain="menus" :name="item">{{ item }}</LcIcon>
                </n-space>
                <n-space>
                    <LcIcon v-for="(item, key) in innerImageDomain.event" :key domain="event" :name="item" :size="70">{{ item }}</LcIcon>
                </n-space>
                <n-space>
                    <LcIconCard domain="menus" name="data-overview"></LcIconCard>
                    <LcIconCard domain="func" name="occupation"></LcIconCard>
                    <LcIconCard domain="func" name="safety"></LcIconCard>
                    <LcIconCard domain="func" name="instrument"></LcIconCard>
                    <LcIconCard bag-name="booth" domain="menus" name="data-overview"></LcIconCard>
                </n-space>
            </div>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { NSpace } from "naive-ui";
import { LcIcon, innerImageDomain, LcIconCard } from "@/components/education/components/icon";
import { code1 } from "./const";
</script>

<style lang="scss" scoped>
.demo-page {
    overflow: auto;
}
</style>
