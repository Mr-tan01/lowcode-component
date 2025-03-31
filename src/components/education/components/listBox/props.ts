import type { CSSProperties } from 'vue'

export interface ColumnStyle extends CSSProperties {
  backgroundColor?: string
}

export type DataItem ={
  key: string
  value: string
  keyStyle?: ColumnStyle
  valueStyle?: ColumnStyle
}

export type RowData ={
  [key: string]: any
}

export type DataListProps= {
  items: DataItem[]
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
}