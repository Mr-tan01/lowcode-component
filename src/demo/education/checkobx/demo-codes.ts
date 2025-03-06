
export const demoCodes = {
    code1: `
<template>
 <LcCheckboxGroup v-model:value="checkboxValue">
    <LcCheckbox value="1">
        Definitely Maybe
    </LcCheckbox>
    <LcCheckbox value="2">
        Definitely Maybe
    </LcCheckbox>
</LcCheckboxGroup>
</template>
<script lang="ts" setup>
import { LcCheckbox, LcCheckboxGroup } from 'lowcode-component/es/education/checkbox';
import { ref } from 'vue';

const checkboxValue = ref(['1']);
</script>
    `,
}