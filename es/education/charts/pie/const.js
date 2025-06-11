import { graphic as t } from "echarts";
import f from "lodash-es/merge";
const b = ["#0FFBF8", "#E1BC4B", "#2276FC", "#A6CFFF", "#7749FF", "#64D677", "#EE6F7C"], h = {
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
}, m = {
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
    var r, n, i;
    const e = ((r = c[o.dataIndex]) == null ? void 0 : r.colorStops) ?? [], l = ((n = e == null ? void 0 : e[0]) == null ? void 0 : n.color) ?? "rgba(166, 207, 255, 0.20)", a = ((i = e == null ? void 0 : e[1]) == null ? void 0 : i.color) ?? "rgba(166, 207, 255, 1)";
    return `
        <div style="display: flex; align-items: center;">
          <span style="
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(to bottom, ${l}, ${a});
            margin-right: 6px;
          "></span>
          ${o.name}: ${o.value} (${o.percent}%)
        </div>
      `;
  }
}, u = {
  show: !1,
  orient: "vertical",
  left: "left",
  top: "center",
  textStyle: {
    color: "#fff"
  }
}, c = [
  new t.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(15, 251, 248, 0.20)" },
    // 渐变色起始颜色
    { offset: 1, color: "#0FFBF8" }
    // 渐变色结束颜色
  ]),
  new t.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(225, 188, 75, 0.20)" },
    { offset: 1, color: "rgba(225, 188, 75, 1)" }
  ]),
  new t.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(0, 148, 255, 0.20)" },
    { offset: 1, color: "rgba(0, 148, 255, 1)" }
  ]),
  new t.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(166, 207, 255, 0.20)" },
    { offset: 1, color: "rgba(166, 207, 255, 1)" }
  ]),
  new t.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(119, 73, 255, 0.20)" },
    { offset: 1, color: "rgba(119, 73, 255, 1)" }
  ])
], g = {
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
}, F = f({}, g, s);
export {
  c as innerGraphicColors,
  F as innerLabelSeries1,
  b as pieColors,
  u as pieLegend,
  g as pieSeriesRecord,
  h as pieTitleOptions,
  m as pieTooltipOptions
};
