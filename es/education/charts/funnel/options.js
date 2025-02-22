import s from "lodash-es/merge";
import { deepMergeArrayOptions as a } from "../@mmj-code-lib/lowcode/es/components/index.js";
import { tooltipOptions as c, legendOptions as u, gridOptions as l, xAxisOptions as d, yAxisOptions as f, funnelColors as p, commonScatterSeries as m } from "./const.js";
const t = {
  tooltip: c,
  legend: u,
  grid: l,
  xAxis: d,
  yAxis: f,
  color: p,
  series: m
};
function A(e) {
  var o;
  a(e, Object.keys(t), Object.values(t));
  const r = {};
  return (((o = e == null ? void 0 : e.series[0]) == null ? void 0 : o.data) ?? []).forEach((n) => {
    r[n.name] = n.value;
  }), s({}, t, {
    legend: [{}, {
      formatter(n) {
        return n + "：" + r[n] + "%";
      }
    }]
  }, e);
}
function i(e, r) {
  return s({}, m, e);
}
function S(e) {
  return Array.isArray(e) ? e.map((r, o) => i(r)) : i(e ?? {});
}
export {
  t as commonScatterOptions,
  A as useCommonScatterOptions,
  S as useCommonScatterSeries
};
