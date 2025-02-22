import s from "lodash-es/merge";
import { deepMergeArrayOptions as c } from "@mmj-code-lib/lowcode/es/components";
import { tooltipOptions as p, legendOptions as l, gridOptions as a, xAxisOptions as u, yAxisOptions as O, scatterColors as i, commonScatterSeries as m } from "./const.js";
import { setRgbaAlpha as g } from "lowcode-share/es/share";
const e = {
  tooltip: p,
  legend: l,
  grid: a,
  xAxis: u,
  yAxis: O,
  color: i,
  series: m
};
function x(o) {
  return c(o, Object.keys(e), Object.values(e)), s({}, e, o);
}
function n(o, t) {
  const r = i[t % i.length];
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
  return Array.isArray(o) ? o.map((t, r) => n(t, r)) : n(o ?? {}, 0);
}
export {
  e as commonScatterOptions,
  x as useCommonScatterOptions,
  y as useCommonScatterSeries
};
