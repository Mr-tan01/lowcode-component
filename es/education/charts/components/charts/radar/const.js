const radarTitleOptions = {
  show: false
};
const radarColors = ["rgba(15, 251, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(0, 148, 255, 1)"];
const radarTooltipOptions = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  appendTo: "body"
};
const radarLegendOptions = {
  show: true,
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
};
const radarGridOptions = {
  containLabel: true
};
const radarItemOptions = {
  splitArea: {
    show: false
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
    formatter(name, indicatorOpt) {
      return `{max|${indicatorOpt == null ? void 0 : indicatorOpt.max}}
{name|${name}}`;
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
};
const radarSeriesOptions = {
  type: "radar",
  itemStyle: {
    // @ts-ignore
    color(params) {
      return radarColors[params.dataIndex % radarColors.length];
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
  radarColors,
  radarGridOptions,
  radarItemOptions,
  radarLegendOptions,
  radarSeriesOptions,
  radarTitleOptions,
  radarTooltipOptions
};
