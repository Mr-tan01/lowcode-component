import t from "lodash-es/merge";
import { deepMergeArrayOptions as s } from "@mmj-code-lib/lowcode/es/components";
import { gaugeTitleOptions as g, gaugeSeriesRecordOptions as p, gaugeColors as c, gaugeInnerGraphicColors as i } from "./const.js";
import { commonTooltipOptions as l } from "../common/components/Charts/options/index.js";
const e = {
  tooltip: l,
  title: g,
  series: p,
  color: c
};
function f(o) {
  return {
    itemStyle: {
      color: i[o % i.length]
    }
  };
}
function n(o) {
  const r = o == null ? void 0 : o.data;
  return t({
    data: (r == null ? void 0 : r.map((u, m) => t(f(m), u))) ?? []
  }, o);
}
function d(o) {
  return Array.isArray(o) ? o.map((r) => n(r)) : n(o);
}
function G(o) {
  return s(o, Object.keys(e), Object.values(e)), t({}, e, o);
}
export {
  G as useCommonGaugeOptions,
  d as useGaugeSeriesOptions
};
