import p from "lodash-es/merge";
import { deepMergeArrayOptions as u } from "@mmj-code-lib/lowcode/es/components";
import { tooltipOptions as d, legendOptions as O, gridOptions as g, xAxisOptions as y, yAxisOptions as f, scatterColors as m, commonScatterSeries as l } from "./const.js";
import { setRgbaAlpha as A } from "lowcode-share/es/share";
const n = {
  tooltip: d,
  legend: O,
  grid: g,
  xAxis: y,
  yAxis: f,
  color: m,
  series: l
};
function h(o) {
  return u(o, Object.keys(n), Object.values(n)), p({}, n, o);
}
function c(o, e) {
  var a, i;
  const r = m[e % m.length];
  return p(
    {},
    l,
    {
      itemStyle: {
        color: A(r, 0.51),
        borderColor: r
      },
      markPoint: {
        emphasis: {
          itemStyle: {
            // @ts-ignore
            borderColor: ((a = o == null ? void 0 : o.itemStyle) == null ? void 0 : a.borderColor) ?? r
          }
        },
        data: ((i = o.data) == null ? void 0 : i.map((t, s) => ({
          name: t.name,
          coord: [s, t.value, t],
          meta: {
            color: r,
            ...t.meta ?? {}
          },
          item: t
        }))) ?? []
      }
    },
    o
  );
}
function j(o) {
  return Array.isArray(o) ? o.map((e, r) => c(e, r)) : c(o, 0);
}
export {
  n as commonScatterOptions,
  h as useCommonScatterOptions,
  j as useCommonScatterSeries
};
