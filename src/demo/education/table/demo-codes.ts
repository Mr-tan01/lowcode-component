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
    code2: `
<template>
    <LcDataTable :columns="dataColumns" :data="dataRow" bordered :show-pagination="false" />
</template>

<script lang="ts" setup>
import { LcDescTable, type LcDescTableColumns } from 'lowcode-component/es/education/table';

const dataColumns = [
    {
        title: '姓名',
        key: 'name',
    },
    {
        title: '年龄',
        key: 'age',
        sorter: (a: LcDataTableRowData, b: LcDataTableRowData) => a.age - b.age,
        renderSorterIcon: ({ order }) => {
            const style = 'transform: translateY(0px);'
            if (order === false) return h('div', { style }, ['🤔'])
            if (order === 'ascend') return h('div', { style }, ['👇'])
            if (order === 'descend') return h('div', { style }, ['👆'])
        },
    },
    {
        title: '地址',
        key: 'address',
    },
]

const dataRow = [
    { key: 1, name: '张三', age: 25, address: '北京市' },
    { key: 2, name: '李四', age: 30, address: '上海市' },
    { key: 3, name: '王五', age: 22, address: '广州市' },
    { key: 4, name: '赵六', age: 28, address: '深圳市' },
    { key: 5, name: '钱七', age: 35, address: '杭州市' },
    { key: 6, name: '孙八', age: 26, address: '成都市' },
]
</script>
    `,
}
