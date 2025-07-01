export type TierSeriesDataOptions = {
    name: string
    value: number
}
export type TierSeriesOptions = {
    max: number
    label?: (d: TierSeriesDataOptions, serie: TierSeriesOptions) => string
    data: Array<TierSeriesDataOptions>
}
export type TierOptions = {
    color?: string[]
    series: TierSeriesOptions[]
}

export const defaultFunnelTierOptions: TierOptions = {
    color: [
        'rgba(119, 73, 255, 1)',
        'rgba(166, 207, 255, 1)',
        'rgba(0, 148, 255, 1)',
        'rgba(225, 188, 75, 1)',
        'rgba(15, 251, 248, 1)',
    ],
    series: [],
}

export const defaultFunnelTierSeriesOptions: TierOptions['series'][number] = {
    max: 100,
    label: function (d, serie): string {
        return ((d.value / serie.max) * 100).toFixed(1) + '%'
    },
    data: [],
}
