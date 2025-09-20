import { default as LcDescTable, Columns as LcDescTableColumns } from './descTable';
import { default as LcDataTable, RowData as LcDataTableRowData } from './dataTable';
export type DescTableInstanceType = InstanceType<typeof LcDescTable>;
export type DataTableInstanceType = InstanceType<typeof LcDataTable>;
export { LcDescTable, type LcDescTableColumns };
export { LcDataTable, type LcDataTableRowData };
