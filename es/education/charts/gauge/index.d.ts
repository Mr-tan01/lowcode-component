import { default as LcGaugeChart } from './gauge';
import { default as LcGaugeSvgChart } from './gaugeSvg';
export type LcGaugeChartInstanceType = InstanceType<typeof LcGaugeChart>;
export type LcGaugeSvgChartInstanceType = InstanceType<typeof LcGaugeSvgChart>;
export * as gaugeThemeOptions from './theme';
export * as gaugeConstants from './const';
export { LcGaugeChart, LcGaugeSvgChart };
export default LcGaugeChart;
