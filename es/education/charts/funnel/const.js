const t = [
  "rgba(15, 251, 248, 1)",
  "rgba(225, 188, 75, 1)",
  "rgba(34, 118, 252, 1)",
  "rgba(166, 207, 255, 1)",
  "rgba(119, 73, 255, 1)"
], o = {
  nameLocation: "end",
  show: !1,
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
    formatter: (e) => e
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
  },
  trigger: "item",
  formatter: "{a} <br/>{b} : {c}%"
}, n = [
  {
    show: !0,
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
    },
    borderWidth: 0
  },
  {
    left: "67%",
    top: "center",
    orient: "vertical",
    icon: "none",
    type: "scroll",
    formatter(e) {
      return e;
    },
    padding: [0, 0, 0, 10],
    textStyle: {
      fontSize: 14,
      color: "#fff",
      lineHeight: 20,
      padding: [0, 0, 0, 0]
    }
  }
], r = {
  top: 50,
  bottom: 40
}, l = {
  type: "category",
  show: !1,
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
  type: "funnel",
  name: "Funnel",
  left: "10%",
  top: 60,
  bottom: 60,
  width: "60%",
  min: 0,
  max: 100,
  minSize: "0%",
  maxSize: "100%",
  sort: "descending",
  gap: 2,
  label: {
    show: !0,
    position: "inside",
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
    formatter: "{c}%"
  },
  labelLine: {
    length: 10,
    lineStyle: {
      width: 1,
      type: "solid"
    }
  },
  itemStyle: {
    borderColor: "transparent",
    borderWidth: 1
  },
  emphasis: {
    label: {
      fontSize: 20
    }
  }
};
export {
  a as commonScatterSeries,
  t as funnelColors,
  r as gridOptions,
  n as legendOptions,
  i as tooltipOptions,
  l as xAxisOptions,
  o as yAxisOptions
};
