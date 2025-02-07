<template>
    <div class="demo-tabs">
        <Container title="选项" description="基础用法" rswidth="1200px">
            {{ tabValue2 }}
            <LcSwitchTabs v-model:value="tabValue2">

            </LcSwitchTabs>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '../components/help/Container.vue';
import { LcSwitchTabs } from '@/components/education/components/switch-tabs';
import { ref } from 'vue';
const tabValue2 = ref('龙华区');
</script>


<style lang="scss" scoped></style>