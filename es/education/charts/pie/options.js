import { deepMergeArrayOptions as l } from "@mmj-code-lib/lowcode/es/components";
import { pieTitleOptions as d, pieTooltipOptions as f, pieLegend as y, pieColors as O, innerLabelSeries1 as S, pieSeriesRecord as g } from "./const.js";
import o from "lodash-es/merge";
const a = {
  title: d,
  tooltip: f,
  legend: y,
  color: O
};
function C(e, t, n, r) {
  const p = r === "innerLabel" ? S : g, m = Array.isArray(n) ? n : n ? [n] : [];
  return Array.isArray(e) ? e.map((i) => (i.data = c(i.data, m), o(u(t), p, i))) : (e.data = c(e.data, m), o(u(t), p, e));
}
function u(e) {
  return {
    itemStyle: {
      color: function(t) {
        return e[t.dataIndex % e.length];
      }
    }
  };
}
function c(e, t) {
  return (e ?? []).map((n, r) => o({
    label: {
      rich: {
        prop: {
          color: t[r]
        },
        unit: {
          color: t[r]
        }
      }
    }
  }, n));
}
function L(e) {
  return l(e, Object.keys(a), Object.values(a)), o({}, a, e);
}
export {
  a as pieCommonOptions,
  L as useCommonPieOptions,
  C as usePieCommonSeries
};
