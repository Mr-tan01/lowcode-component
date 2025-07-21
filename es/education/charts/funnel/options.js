import s from "lodash-es/merge";
import { deepMergeArrayOptions as c } from "@mmj-code-lib/lowcode/es/components";
import { tooltipOptions as a, legendOptions as u, gridOptions as l, xAxisOptions as f, yAxisOptions as p, funnelColors as O, commonScatterSeries as m } from "./const.js";
const t = {
  tooltip: a,
  legend: u,
  grid: l,
  xAxis: f,
  yAxis: p,
  color: O,
  series: m
};
function A(e) {
  var n;
  c(e, Object.keys(t), Object.values(t));
  const o = {};
  return (((n = e == null ? void 0 : e.series[0]) == null ? void 0 : n.data) ?? []).forEach((r) => {
    o[r.name] = r.value;
  }), s(
    {},
    t,
    {
      legend: [
        {},
        {
          formatter(r) {
            return r + "：" + o[r] + "%";
          }
        }
      ]
    },
    e
  );
}
function i(e) {
  return s({}, m, e);
}
function S(e) {
  return Array.isArray(e) ? e.map((o) => i(o)) : i(e ?? {});
}
export {
  t as commonScatterOptions,
  A as useCommonScatterOptions,
  S as useCommonScatterSeries
};
