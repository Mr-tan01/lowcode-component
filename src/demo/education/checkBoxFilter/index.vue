<template>
    <div class="demo-map">
        <DemoHelpBox title="复选框过滤" description="深圳教育项目-复选框过滤" rswidth="1210px" rs-height="500px" :code="demoCodes.code1">
            value: {{ checkboxValue }}
            <div class="size-box">
                <LcCheckboxFilter :dataList v-model:value="checkboxValue" @check="check"> </LcCheckboxFilter>
            </div>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { LcCheckboxFilter } from "@/components/education/components/checkBoxFilter";
import { demoCodes } from "./demo-codes";
import { ref } from "vue";
const checkboxValue = ref([]);
const check = (item) => {
    console.log(item, "===>");
};
const dataList = [
    {
        label: "按类型",
        children: [
            {
                label: "全部",
                value: "2",
                disabled: true,
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
