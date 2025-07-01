export const demoCodes = {
    code1: `
<template>
    <LcCheckboxFilter :dataList v-model:value="checkboxValue" @check="check"> </LcCheckboxFilter>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { LcCheckboxFilter } from "@/components/education/components/checkBoxFilter";
import { ref } from "vue";
const checkboxValue = ref([]);
const check = (item) => {
};
const dataList = [
    {
        label: "按类型",
        children: [
            {
                label: "全部",
                value: "2",
            },
            {
                label: "已选",
                value: "3",
            },
            {
                label: "未选",
                value: "4",
            },
        ],
    },
    {
        label: "重置",
        children: [
            {
                label: "全部",
                value: "6",
            },
            {
                label: "已选",
                value: "7",
            },
            {
                label: "未选",
                value: "8",
            },
        ],
    },
];
</script>

    `,
}
