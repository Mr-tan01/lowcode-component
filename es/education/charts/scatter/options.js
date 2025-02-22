import s from "lodash-es/merge";
import { deepMergeArrayOptions as c } from "../@mmj-code-lib/lowcode/es/components/index.js";
import { tooltipOptions as p, legendOptions as a, gridOptions as l, xAxisOptions as u, yAxisOptions as O, scatterColors as n, commonScatterSeries as m } from "./const.js";
import { setRgbaAlpha as g } from "lowcode-share/es/share";
const e = {
  tooltip: p,
  legend: a,
  grid: l,
  xAxis: u,
  yAxis: O,
  color: n,
  series: m
};
function x(o) {
  return c(o, Object.keys(e), Object.values(e)), s({}, e, o);
}
function i(o, t) {
  const r = n[t % n.length];
  return s(
    {},
    m,
    {
      itemStyle: {
        color: () => g(r, 0.2),
        borderColor: r
      }
    },
    o
  );
}
function y(o) {
  return Array.isArray(o) ? o.map((t, r) => i(t, r)) : i(o ?? {}, 0);
}
export {
  e as commonScatterOptions,
  x as useCommonScatterOptions,
  y as useCommonScatterSeries
};
