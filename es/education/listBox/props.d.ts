import { CSSProperties } from 'vue'
export interface ColumnStyle extends CSSProperties {
    backgroundColor?: string
}
export type RowData = {
    [key: string]: any
}
export type DataListProps = {
    rows: RowData[]
    rowStyle?: {
        even?: ColumnStyle
        odd?: ColumnStyle
    }
    bordered?: boolean
    keyStyle?: ColumnStyle
    valueStyle?: ColumnStyle
    cellPadding?: string
    defaultAlign?: 'left' | 'center' | 'right'
    gap?: number
    cols?: number
}
