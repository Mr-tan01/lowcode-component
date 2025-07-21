const e = [
  "rgba(15, 251, 248, 1)",
  "rgba(254, 210, 77, 1)",
  "rgba(34, 252, 158, 1)",
  "rgba(255, 132, 83, 1)",
  "rgba(173, 210, 255, 1)",
  "rgba(222, 56, 4, 1)"
], o = {
  nameLocation: "end",
  nameTextStyle: {
    padding: [0, 20, 0, 0],
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    margin: 13,
    formatter: (t) => t
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  }
}, i = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, r = {
  show: !1,
  top: "bottom",
  left: "center",
  textStyle: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 24
  },
  itemWidth: 12,
  itemHeight: 12,
  itemGap: 20,
  type: "scroll",
  pageIconColor: "rgba(15, 251, 248, 1)",
  pageIconInactiveColor: "#e5e5e5",
  pageTextStyle: {
    fontSize: 12,
    color: "#fff"
  }
}, n = {
  top: 50,
  bottom: 40
}, l = {
  type: "category",
  boundaryGap: !0,
  splitLine: {
    show: !0,
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted",
      width: 1
    }
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
}, a = {
  type: "scatter",
  symbolSize: function(t) {
    return Math.max(Math.sqrt(t), 10);
  },
  itemStyle: {
    color: (t) => e[t.componentIndex],
    borderColor: "#fff",
    borderWidth: 1.2,
    opacity: 1
  }
};
export {
  a as commonScatterSeries,
  n as gridOptions,
  r as legendOptions,
  e as scatterColors,
  i as tooltipOptions,
  l as xAxisOptions,
  o as yAxisOptions
};
