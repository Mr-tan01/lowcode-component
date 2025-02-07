<template>
    <div class="demo-tabs">
        <Container title="选项" description="基础用法" rswidth="1200px">
            {{ tabValue }}
            <LcSwitchTabs v-model:value="tabValue">



            </LcSwitchTabs>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '../components/help/Container.vue';
import { LcSwitchTabs } from '@/components/education/components/switch-tabs';
import { ref } from 'vue';
const tabValue = ref('龙岗区');
</script>



<style lang="scss" scoped></style>