<template>
    <div class="lc-data-table">
        <n-data-table
            ref="dataTableRef"
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :style="{ height: '100%' }"
            flex-height
            v-bind="$attrs"
            @update:sorter="handleSorterChange"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, PropType, computed } from 'vue'
import { NDataTable } from 'naive-ui'
import type { DataTableSortState, DataTableColumns, DataTableBaseColumn, DataTableRenderSorter } from 'naive-ui'

export interface RowData {
    key: number
    name: string
    age: number
    address: string
    chinese: number
    math: number
    english: number
}

const props = defineProps({
    columns: {
        type: Array as PropType<
            Array<
                | DataTableColumns<RowData>[number]
                | (DataTableBaseColumn<RowData> & {
                      renderSorter?: DataTableRenderSorter
                  })
            >
        >,
        default: () => [],
    },
    data: {
        type: Array as PropType<Record<string, any>[]>,
        default: () => [],
    },
    pageSize: {
        type: Number,
        default: undefined,
    },
    showPagination: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits<{
    (e: 'sort', state: DataTableSortState): void
}>()

const dataTableRef = ref<InstanceType<typeof NDataTable> | null>(null)
const pagination = computed(() => (props.showPagination ? { pageSize: props.pageSize || 10 } : false))

const handleSorterChange = (state: DataTableSortState) => {
    emit('sort', state)
}

defineExpose({
    getInstance: () => dataTableRef.value,
})
</script>

<style scoped lang="scss">
.lc-data-table {
    width: 100%;
    height: 100%;
    :deep(.n-data-table) {
        --n-merged-td-color: rgba(0, 148, 255, 0.1);
        --n-merged-td-color-hover: rgba(15, 251, 247, 0.363) !important;
        --n-border-color: none;
        --n-th-color: rgba(0, 149, 255, 0.219) !important;
    }
    :deep(.n-data-table-th__title) {
        font-family: HarmonyOS_Sans_SC;
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        font-style: normal;
    }
    :deep(.n-data-table-td) {
        font-family: HarmonyOS_Sans_SC;
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        font-style: normal;
        line-height: 26px;
        font-style: normal;
    }
}
</style>
