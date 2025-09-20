<template>
    <div class="demo-table">
        <DemoHelpBox title="Table" description="基础用法" rswidth="1300px">
            <DemoHelpBox
                title="描述列表"
                description="描述列表-配合LcElasticScrollbar组件适配高度"
                rswidth="500px"
                rs-height="500px"
                :code="demoCodes.code1"
            >
                <LcDescTable :columns :data> </LcDescTable>
            </DemoHelpBox>
            <DemoHelpBox title="描述列表" description="描述列表-空数据" rswidth="500px" rs-height="500px" :code="demoCodes.code1">
                <LcDescTable :columns :data="[]"> </LcDescTable>
            </DemoHelpBox>
        </DemoHelpBox>
        <DemoHelpBox title="Table" description="基础用法" rswidth="1300px">
            <DemoHelpBox
                title="描述列表"
                description="描述列表-配合LcElasticScrollbar组件适配高度"
                rswidth="500px"
                rs-height="500px"
                :code="demoCodes.code1"
            >
                <LcDescTable :columns="c" :data="a">
                    <template #d="{ value, record }">
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
        <DemoHelpBox title="Table" description="基础用法" rswidth="1300px">
            <DemoHelpBox title="数据表格" rswidth="500px" rs-height="500px" :code="demoCodes.code2">
                <div style="height: 500px">
                    <LcDataTable :columns="dataColumns" :data="dataRow" bordered :show-pagination="false" />
                </div>
            </DemoHelpBox>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
import { LcDescTable, LcDataTable, type LcDescTableColumns, type LcDataTableRowData } from '@/components/education/components/table'
import { demoCodes } from './demo-codes'
import { ref, h } from 'vue'
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
]
const data = Array.from(Array(20)).map((_, i) => ({
    name: `项目一${i + 1}`,
    rate: '20%',
}))

const c: LcDescTableColumns[] = [
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
]
let a = ref()
setTimeout(() => {
    a.value = Array.from(Array(20)).map((_, i) => ({
        name: `项目一${i + 1}`,
        rate: '20%',
        tip: '这是一段描述信息',
    }))
}, 5000)

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
