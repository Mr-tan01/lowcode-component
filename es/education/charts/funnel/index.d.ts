import { default as LcFunnelChart } from './funnel';
import { default as LcFunnelTierChart } from './funnelTier';
import { TierOptions } from './themeConfig';
export type LcFunnelChartInstanceType = InstanceType<typeof LcFunnelChart>;
export * as LcFunnelChartOptions from './options';
export type LcFunnelTierChartInstanceType = InstanceType<typeof LcFunnelTierChart>;
export { LcFunnelChart, LcFunnelTierChart, type TierOptions, };
export default LcFunnelChart;
