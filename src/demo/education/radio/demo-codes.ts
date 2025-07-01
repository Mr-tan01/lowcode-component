export const demoCodes = {
    code1: `
<template>
    <LcRadioButtonGroup v-model="radioButtonValue1">
        <LcRadioButton text="地图" value="1"></LcRadioButton>
        <LcRadioButton text="图表" value="2"></LcRadioButton>
        <LcRadioButton text="图表2" value="3"></LcRadioButton>
        <LcRadioButton text="图表3" value="4"></LcRadioButton>
        <LcRadioButton text="图表4" value="5"></LcRadioButton>
    </LcRadioButtonGroup>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const radioButtonValue1 = ref('1');
</script>
    `,
    code2: `
<template>
    <LcRadioGroup v-model:value="radioValue">
        <LcRadio value="1">
            Definitely Maybe
        </LcRadio>
        <LcRadio value="2">
            Definitely Maybe
        </LcRadio>
    </LcRadioGroup>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const radioValue = ref('1');
</script>
        `,
}
