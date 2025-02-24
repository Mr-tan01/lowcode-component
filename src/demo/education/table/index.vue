<template>
    <div class="demo-table">
        <DemoBox title="Table" description="基础用法" rswidth="1300px">
            <DemoBox title="描述列表" description="描述列表-配合LcElasticScrollbar组件适配高度" rswidth="500px" rs-height="500px">
                <LcDescTable :columns :data>
                </LcDescTable>
            </DemoBox>
        </DemoBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { LcDescTable, type LcDescTableColumns } from '@/components/education/components/table';

const columns: LcDescTableColumns[] = [
    {
        title: '序号',
        type: 'index',
        align: 'center',
        width: '100px',
        flex: 'none',
    },
    {
        title: '项目名称',
        dataIndex: 'name',
        flex: 2,
    },
    {
        title: '占比',
        dataIndex: 'rate',
    },
];
const data = Array.from(Array(20)).map((_, i) => ({
    name: `项目一${i + 1}`,
    rate: '20%',
}));

</script>

<style lang="scss" scoped></style>