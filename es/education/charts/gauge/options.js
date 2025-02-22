import t from "lodash-es/merge";
import { deepMergeArrayOptions as s } from "../@mmj-code-lib/lowcode/es/components/index.js";
import { gaugeTitleOptions as g, gaugeSeriesRecordOptions as p, gaugeColors as c, gaugeInnerGraphicColors as i } from "./const.js";
import { commonTooltipOptions as l } from "../src/components/education/common/components/Charts/options/index.js";
const e = {
  tooltip: l,
  title: g,
  series: p,
  color: c
};
function a(o) {
  return {
    itemStyle: {
      color: i[o % i.length]
    }
  };
}
function n(o) {
  const r = o == null ? void 0 : o.data;
  return t({
    data: (r == null ? void 0 : r.map((u, m) => t(a(m), u))) ?? []
  }, o);
}
function S(o) {
  return Array.isArray(o) ? o.map((r) => n(r)) : n(o);
}
function d(o) {
  return s(o, Object.keys(e), Object.values(e)), t({}, e, o);
}
export {
  d as useCommonGaugeOptions,
  S as useGaugeSeriesOptions
};
