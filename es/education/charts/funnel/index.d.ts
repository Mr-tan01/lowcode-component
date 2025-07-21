import { default as LcFunnelChart } from './funnel';
import { default as LcFunnelTierChart } from './funnelTier';
export * as funnelThemeConfig from './themeConfig';
export * as LcFunnelChartOptions from './options';
export type LcFunnelChartInstanceType = InstanceType<typeof LcFunnelChart>;
export type LcFunnelTierChartInstanceType = InstanceType<typeof LcFunnelTierChart>;
export { LcFunnelChart, LcFunnelTierChart };
export default LcFunnelChart;
