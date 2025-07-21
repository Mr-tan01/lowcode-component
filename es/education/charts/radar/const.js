const r = {
  show: !1
}, o = ["rgba(15, 251, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(0, 148, 255, 1)"], a = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  appendTo: "body"
}, n = {
  show: !0,
  top: "bottom",
  left: "center",
  icon: "roundRect",
  itemWidth: 12,
  itemHeight: 12,
  itemGap: 20,
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  type: "scroll"
}, i = {
  containLabel: !0
}, l = {
  splitArea: {
    show: !1
  },
  center: ["50%", "50%"],
  radius: "50%",
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.4)"
    }
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.5)"
    }
  },
  axisName: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    formatter(e, t) {
      return `{max|${t == null ? void 0 : t.max}}
{name|${e}}`;
    },
    rich: {
      max: {
        color: "#fff",
        fontSize: 18,
        padding: [2, 4],
        align: "center",
        borderRadius: 4
      }
    }
  },
  indicator: []
}, s = {
  type: "radar",
  itemStyle: {
    // @ts-ignore
    color(e) {
      return o[e.dataIndex % o.length];
    }
  },
  symbol: "none",
  areaStyle: {
    opacity: 0.2
  },
  lineStyle: {
    width: 1.5,
    opacity: 1
  }
};
export {
  o as radarColors,
  i as radarGridOptions,
  l as radarItemOptions,
  n as radarLegendOptions,
  s as radarSeriesOptions,
  r as radarTitleOptions,
  a as radarTooltipOptions
};
