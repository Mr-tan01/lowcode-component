<template>
    <div class="demo-table">
        <DemoHelpBox title="Table" description="基础用法" rswidth="1300px">
            <DemoHelpBox title="描述列表" description="描述列表-配合LcElasticScrollbar组件适配高度" rswidth="500px" rs-height="500px" :code="demoCodes.code1">
                <LcDescTable :columns :data> </LcDescTable>
            </DemoHelpBox>
            <DemoHelpBox title="描述列表" description="描述列表-空数据" rswidth="500px" rs-height="500px" :code="demoCodes.code1">
                <LcDescTable :columns :data="[]"> </LcDescTable>
            </DemoHelpBox>
        </DemoHelpBox>
        <DemoHelpBox title="Table" description="基础用法" rswidth="1300px">
            <DemoHelpBox title="描述列表" description="描述列表-配合LcElasticScrollbar组件适配高度" rswidth="500px" rs-height="500px" :code="demoCodes.code1">
                <LcDescTable :columns="c" :data="a">
                    <template v-slot:d="{ value, record }">
                        <div class="desctable__cell__content--hover-show display-none">
                            {{ record.tip }}
                        </div>
                        <div class="desctable__cell__content--hover-hide">
                            {{ value }}
                        </div>
                    </template>
                </LcDescTable>
            </DemoHelpBox>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { LcDescTable, type LcDescTableColumns } from "@/components/education/components/table";
import { demoCodes } from "./demo-codes";
import { ref }from 'vue'
const columns: LcDescTableColumns[] = [
    {
        title: "序号",
        type: "index",
        align: "center",
        width: "100px",
        flex: "none",
    },
    {
        title: "项目名称",
        dataIndex: "name",
        flex: 2,
    },
    {
        title: "占比",
        dataIndex: "rate",
    },
];
const data = Array.from(Array(20)).map((_, i) => ({
    name: `项目一${i + 1}`,
    rate: "20%",
}));

const c: LcDescTableColumns[] = [
    {
        title: "序号",
        type: "index",
        align: "center",
        width: "100px",
        flex: "none",
    },
    {
        title: "项目名称",
        dataIndex: "name",
        flex: 2,
    },
    {
        title: "占比",
        dataIndex: "rate",
    },
];
let a = ref()
setTimeout(() => {
    a.value = Array.from(Array(20)).map((_, i) => ({
        name: `项目一${i + 1}`,
        rate: "20%",
        tip: "这是一段描述信息",
    }));
}, 5000);
</script>

<style lang="scss" scoped>
.display-none {
    display: none;
}

:deep(.lc-desc-list__tbody__tr) {
    .lc-desc-list__tbody__tr__cell__span {
        display: inline-flex;
        align-items: center;
        height: 100%;
    }

    &:hover {
        .desctable__cell__content {
            &--hover-hide {
                display: none;
            }

            &--hover-show {
                display: block;
            }
        }
    }
}
</style>
