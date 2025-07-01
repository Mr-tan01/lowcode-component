export type LegendActiveType = 'highlight' | 'downplay' | 'legendUnSelect' | 'legendSelect'
export type LegendDataRecord = {
    name: string | number
    value: number | number[]
}
export type LegendDataSelectRecord = LegendDataRecord & { selected: boolean }

export type LegendSelectParams = {
    type: LegendActiveType
    name: LegendDataRecord['name']
}
