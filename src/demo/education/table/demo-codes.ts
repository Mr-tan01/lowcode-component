
export const demoCodes = {
    code1: `
<template>
    <LcDescTable :columns :data></LcDescTable>
</template>

<script lang="ts" setup>
import { LcDescTable, type LcDescTableColumns } from 'lowcode-component/es/education/table';

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
    name: \`项目一\${i + 1}\`,
    rate: '20%',
}));
</script>
    `,
}