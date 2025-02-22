import { graphic as e } from "echarts";
const o = [
  "rgba(15, 251, 248, 1)",
  "rgba(225, 188, 75, 1)",
  "rgba(34, 118, 252, 1)",
  "rgba(166, 207, 255, 1)",
  "rgba(119, 73, 255, 1)",
  "rgba(100, 214, 119, 1)"
], r = [
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
  ])
], a = {
  text: "0",
  subtext: "",
  left: "center",
  top: "center",
  itemGap: 0,
  textVerticalAlign: "top",
  textStyle: {
    color: "#fff",
    fontSize: 28,
    width: 106,
    height: 42,
    lineHeight: 42,
    padding: 0,
    overflow: "truncate"
  },
  subtextStyle: {
    color: "#F2F3F4",
    fontSize: 14,
    padding: 0,
    lineHeight: 16,
    overflow: "truncate"
  }
}, i = {
  type: "gauge",
  startAngle: 90,
  endAngle: -270,
  pointer: {
    show: !1
  },
  progress: {
    show: !0,
    overlap: !1,
    roundCap: !1,
    clip: !1,
    itemStyle: {
      borderColor: "rgba(3, 29, 61, 1)",
      borderWidth: 5
    }
  },
  axisLine: {
    lineStyle: {
      width: 15,
      color: [[1, "rgba(3, 29, 61, 1)"]]
    }
  },
  splitLine: {
    show: !1,
    distance: 0,
    length: 10
  },
  axisTick: {
    show: !1
  },
  axisLabel: {
    show: !1,
    distance: 50
  },
  title: {
    fontSize: 14,
    show: !1
  },
  detail: {
    show: !1,
    height: 14,
    fontSize: 14,
    formatter: "{value}%"
  }
}, n = {};
export {
  o as gaugeColors,
  r as gaugeInnerGraphicColors,
  n as gaugeSeriesDataItemOptions,
  i as gaugeSeriesRecordOptions,
  a as gaugeTitleOptions
};
