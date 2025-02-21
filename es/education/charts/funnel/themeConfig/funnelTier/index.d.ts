export type TierSeriesDataOptions = {
    name: string;
    value: number;
};
export type TierSeriesOptions = {
    max: number;
    label?: (d: TierSeriesDataOptions, serie: TierSeriesOptions) => string;
    data: Array<TierSeriesDataOptions>;
};
export type TierOptions = {
    color?: string[];
    series: TierSeriesOptions[];
};
export declare const defaultFunnelTierOptions: TierOptions;
export declare const defaultFunnelTierSeriesOptions: TierOptions['series'][number];
