import p from "lodash-es/merge";
import { deepMergeArrayOptions as d } from "@mmj-code-lib/lowcode/es/components";
import { tooltipOptions as u, legendOptions as f, gridOptions as y, xAxisOptions as O, yAxisOptions as g, scatterColors as m, commonScatterSeries as c } from "./const.js";
import { setRgbaAlpha as A } from "lowcode-share/es/share";
const n = {
  tooltip: u,
  legend: f,
  grid: y,
  xAxis: O,
  yAxis: g,
  color: m,
  series: c
};
function h(o, r) {
  return r && Reflect.deleteProperty(n, "tooltip"), d(o, Object.keys(n), Object.values(n)), p({}, n, o);
}
function l(o, r) {
  var a, i;
  const t = m[r % m.length];
  return p(
    {},
    c,
    {
      itemStyle: {
        color: A(t, 0.51),
        borderColor: t
      },
      markPoint: {
        emphasis: {
          itemStyle: {
            // @ts-ignore
            borderColor: ((a = o == null ? void 0 : o.itemStyle) == null ? void 0 : a.borderColor) ?? t
          }
        },
        data: ((i = o.data) == null ? void 0 : i.map((e, s) => ({
          name: e.name,
          coord: [s, e.value, e],
          meta: {
            color: t,
            ...e.meta ?? {}
          },
          item: e
        }))) ?? []
      }
    },
    o
  );
}
function R(o) {
  return Array.isArray(o) ? o.map((r, t) => l(r, t)) : l(o, 0);
}
export {
  n as commonScatterOptions,
  h as useCommonScatterOptions,
  R as useCommonScatterSeries
};
