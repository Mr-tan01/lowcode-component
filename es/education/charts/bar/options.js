import e from "lodash-es/merge";
import { mergeLineRecord as c } from "../line/options.js";
import { tooltipOptions as s, legendOptions as d, gridOptions as y, xAxisOptions as m, yAxisOptions as u, barColors as g } from "./const.js";
import { deepMergeArrayOptions as b } from "@mmj-code-lib/lowcode/es/components";
const p = {
  tooltip: s,
  legend: d,
  grid: y,
  xAxis: m,
  yAxis: u,
  color: g
}, f = {
  grid: {
    top: 40,
    right: 80,
    bottom: 40,
    left: 20
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0],
    nameLocation: "end",
    nameTextStyle: {
      padding: [0, 0, 0, 5],
      color: "#fff",
      fontSize: 14,
      lineHeight: 20
    },
    splitLine: {
      show: !0,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)",
        type: "dotted"
      }
    }
  },
  yAxis: {
    type: "category",
    boundaryGap: !0,
    splitLine: {
      show: !1
    },
    axisTick: {
      show: !1
    },
    axisLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)"
      }
    }
  }
}, h = e({}, p, f), a = {
  barWidth: 20,
  showBackground: !0,
  itemStyle: {
    shadowBlur: 0,
    shadowColor: "transparent"
  },
  backgroundStyle: {
    borderWidth: 20,
    borderColor: "rgba(0, 148, 255, 0.1)",
    borderRadius: 0,
    color: "transparent",
    opacity: 1
  },
  markPoint: {
    symbolSize: [20, 10]
  }
}, i = e({}, a, {
  barWidth: 12,
  backgroundStyle: {
    borderWidth: 12,
    opacity: 1
  },
  markPoint: {
    symbolSize: [12, 6]
  }
});
function A(o, t) {
  const r = t.isHorizontal ? h : p;
  return b(o, Object.keys(r), Object.values(r)), e({}, r, o);
}
function l(o, t, r) {
  return t.type === "bar" || !t.type ? e({}, o, t) : t.type === "line" ? c(r, t) : t;
}
function B(o, t) {
  return Array.isArray(o) ? o.length > 1 ? (t.stack ? i.backgroundStyle.opacity = 1 / o.length : i.backgroundStyle.opacity = 1, o.map((r, n) => l(i, r, n))) : o.map((r, n) => l(a, r, n)) : e({}, a, o);
}
export {
  p as commonBarOptions,
  a as commonBarSeries,
  h as horizontalBarOptions,
  i as smallBarSeries,
  A as useCommonBarOptions,
  B as useCommonBarSeries
};
