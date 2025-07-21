import { graphic as o } from "echarts";
const t = {
  color: [
    new o.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(15, 249, 246, 1)" },
      { offset: 1, color: "rgba(4, 91, 111, 1)" }
    ]),
    new o.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(225, 188, 75, 1)" },
      { offset: 1, color: "rgba(53, 69, 64, 1)" }
    ]),
    new o.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(0, 146, 251, 1)" },
      { offset: 1, color: "rgba(0, 125, 216, 1)" }
    ]),
    new o.LinearGradient(1, 0, 0, 1, [
      { offset: 1, color: "rgba(166, 207, 255, 0)" },
      { offset: 0, color: "rgba(166, 207, 255, 1)" }
    ]),
    new o.LinearGradient(1, 0, 0, 1, [
      { offset: 1, color: "rgba(119, 73, 255, 0)" },
      { offset: 0, color: "rgba(119, 73, 255, 1)" }
    ])
  ],
  symbols: []
}, r = ["rgba(54, 115, 245, 1)", "rgba(1, 158, 43, 1)", "rgba(222, 56, 4, 1)"], i = {
  nameLocation: "end",
  nameTextStyle: {
    padding: [0, 20, 0, 0],
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    margin: 13
  }
}, n = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, a = {
  show: !0,
  top: "bottom",
  left: "center",
  icon: "roundRect",
  textStyle: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 24
  },
  itemGap: 20,
  itemWidth: 12,
  itemHeight: 12,
  type: "scroll",
  pageIconColor: "rgba(15, 251, 248, 1)",
  pageIconInactiveColor: "#e5e5e5",
  pageTextStyle: {
    fontSize: 12,
    color: "#fff"
  }
}, l = {
  top: 50,
  bottom: 40
}, f = {
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
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
};
export {
  t as barBuiltInStyle,
  r as barColors,
  l as gridOptions,
  a as legendOptions,
  n as tooltipOptions,
  f as xAxisOptions,
  i as yAxisOptions
};
