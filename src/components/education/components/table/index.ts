import LcDescTable, { type Columns as LcDescTableColumns } from './descTable.vue'
import LcDataTable, { type RowData as LcDataTableRowData } from './dataTable.vue'

export type DescTableInstanceType = InstanceType<typeof LcDescTable>
export type DataTableInstanceType = InstanceType<typeof LcDataTable>

export { LcDescTable, type LcDescTableColumns }
export { LcDataTable, type LcDataTableRowData }
