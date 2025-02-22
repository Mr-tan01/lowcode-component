import LcFunnelChart from './funnel.vue';
import LcFunnelTierChart from './funnelTier.vue';
import { type TierOptions } from './themeConfig';

export type LcFunnelChartInstanceType = InstanceType<typeof LcFunnelChart>;
export * as LcFunnelChartOptions from './options';
export type LcFunnelTierChartInstanceType = InstanceType<typeof LcFunnelTierChart>;

export {
    LcFunnelChart,
    LcFunnelTierChart,
    type TierOptions,
};

export default LcFunnelChart;