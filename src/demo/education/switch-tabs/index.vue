<template>
    <div class="demo-tabs">
        <Container title="选项" description="基础用法" rswidth="700px" :code="code1">
            {{ tabValue }}
            <LcSwitchTabs v-model:value="tabValue">
            </LcSwitchTabs>
        </Container>
        <Container title="选项" description="基础用法" rswidth="1000px">
            {{ tabValue }}
            <LcSwitchTabs v-model:value="tabValue">
            </LcSwitchTabs>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { LcSwitchTabs } from '@/components/education/components/switch-tabs';
import { ref } from 'vue';
const tabValue = ref('龙岗区');
const code1 = `
<template>
    <LcSwitchTabs v-model:value="tabValue">
    </LcSwitchTabs>
</template>
`
</script>



<style lang="scss" scoped></style>