import { graphic as e } from "echarts";
import l from "lodash-es/merge";
const p = [
  "#0FFBF8",
  "rgba(225, 188, 75, 1)",
  "rgba(0, 148, 255, 1)",
  "rgba(166, 207, 255, 1)",
  "rgba(119, 73, 255, 1)",
  "rgba(238, 111, 124, 1)",
  "rgba(255, 121, 12, 1)",
  "rgba(100, 214, 119, 1)",
  "rgba(222, 130, 57, 1)",
  "rgba(34, 118, 252, 1)",
  "rgba(234, 34, 252, 1)",
  "rgba(89, 149, 184, 1)"
], h = {
  text: "0",
  subtext: "总数",
  left: "center",
  top: "center",
  itemGap: 0,
  textVerticalAlign: "top",
  textStyle: {
    color: "#fff",
    fontSize: 30,
    width: 106,
    height: 42,
    lineHeight: 42,
    padding: 0,
    overflow: "truncate"
  },
  subtextStyle: {
    color: "#F2F3F4",
    fontSize: 16,
    padding: 0,
    lineHeight: 16,
    overflow: "truncate"
  }
}, w = {
  appendTo: "body",
  trigger: "item",
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  formatter: function(o) {
    var t, n, a;
    const r = ((t = g[o.dataIndex]) == null ? void 0 : t.colorStops) ?? [], i = ((n = r == null ? void 0 : r[0]) == null ? void 0 : n.color) ?? "rgba(166, 207, 255, 0.20)", f = ((a = r == null ? void 0 : r[1]) == null ? void 0 : a.color) ?? "rgba(166, 207, 255, 1)";
    return `
        <div style="display: flex; align-items: center;">
          <span style="
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(to bottom, ${i}, ${f});
            margin-right: 6px;
          "></span>
          ${o.name}: ${o.value} (${o.percent}%)
        </div>
      `;
  }
}, m = {
  show: !1,
  orient: "vertical",
  left: "left",
  top: "center",
  textStyle: {
    color: "#fff"
  }
}, g = [
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(15, 251, 248, 0.20)" },
    // 渐变色起始颜色
    { offset: 1, color: "#0FFBF8" }
    // 渐变色结束颜色
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(225, 188, 75, 0.20)" },
    { offset: 1, color: "rgba(225, 188, 75, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(0, 148, 255, 0.20)" },
    { offset: 1, color: "rgba(0, 148, 255, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(166, 207, 255, 0.20)" },
    { offset: 1, color: "rgba(166, 207, 255, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(119, 73, 255, 0.20)" },
    { offset: 1, color: "rgba(119, 73, 255, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(238, 111, 124, 0.20)" },
    { offset: 1, color: "rgba(238, 111, 124, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(255, 196, 34, 1)" },
    { offset: 1, color: "rgba(255, 121, 12, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(222, 130, 57, 0.20)" },
    { offset: 1, color: "rgba(222, 130, 57, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(100, 214, 119, 0.20)" },
    { offset: 1, color: "rgba(100, 214, 119, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(34, 118, 252, 0.20)" },
    { offset: 1, color: "rgba(34, 118, 252, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(34, 118, 252, 0.20)" },
    { offset: 1, color: "rgba(234, 34, 252, 1)" }
  ]),
  new e.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(34, 118, 252, 0.20)" },
    { offset: 1, color: "rgba(89, 149, 184, 1)" }
  ])
], c = {
  name: "pie",
  type: "pie",
  radius: ["62%", "92%"],
  center: ["50%", "50%"],
  label: {
    show: !1
  },
  emphasis: {
    itemStyle: {}
  }
}, s = {
  radius: ["42%", "62%"],
  label: {
    show: !0,
    alignTo: "edge",
    formatter: `{prop|{d}}{unit|%}
{name|{b}}`,
    minMargin: 5,
    edgeDistance: 10,
    rich: {
      prop: {
        fontSize: 20,
        lineHeight: 0,
        padding: [-20, 0, 0, 0]
      },
      unit: {
        fontSize: 14,
        lineHeight: 0,
        padding: [-17, 0, 0, 0]
      },
      name: {
        fontSize: 14,
        lineHeight: 20,
        color: "#ffffff"
      }
    }
  },
  labelLine: {
    length: 15,
    length2: 0,
    maxSurfaceAngle: 0
  }
}, u = l({}, c, s);
export {
  g as innerGraphicColors,
  u as innerLabelSeries1,
  p as pieColors,
  m as pieLegend,
  c as pieSeriesRecord,
  h as pieTitleOptions,
  w as pieTooltipOptions
};
