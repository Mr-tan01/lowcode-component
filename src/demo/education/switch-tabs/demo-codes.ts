
export const demoCodes = {
    code1: `
<template>
    <LcSwitchTabs v-model:index="tabValue">
    </LcSwitchTabs>
</template>

<script lang="ts" setup>
    import { LcSwitchTabs } from 'lowcode-component/es/education/switch-tabs';
    import { ref } from 'vue';
    const tabValue = ref(0);
</script>
    `,
    code2: `
<template>
    <LcSwitchTabs v-model:value="tabValue">
    </LcSwitchTabs>
</template>

<script lang="ts" setup>
    import { LcSwitchTabs } from 'lowcode-component/es/education/switch-tabs';
    import { ref } from 'vue';
    const tabValue = ref('龙岗区');
</script>
        `,
}