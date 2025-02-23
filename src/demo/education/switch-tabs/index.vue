<template>
    <div class="demo-tabs">
        <Container title="选项" description="基础用法" rswidth="700px" rs-height="auto" :code="code1">
            {{ tabValue2 }}
            <LcSwitchTabs v-model:index="tabValue2">
            </LcSwitchTabs>
        </Container>
        <Container title="选项" description="基础用法" rswidth="1000px" rs-height="auto">
            {{ tabValue }}
            <LcSwitchTabs v-model:value="tabValue">
            </LcSwitchTabs>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { LcSwitchTabs } from '~/es/education/switch-tabs';
import { ref } from 'vue';
const tabValue = ref('龙岗区');
const tabValue2 = ref(0);
const code1 = `
<template>
    <LcSwitchTabs v-model:value="tabValue">
    </LcSwitchTabs>
</template>
`
</script>



<style lang="scss" scoped></style>