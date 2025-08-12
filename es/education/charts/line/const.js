import { graphic } from "echarts";
const lineColors = ["rgba(15, 250, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(222, 56, 4, 1)"];
const yAxisOptions = {
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
    formatter: (value) => {
      return value;
    }
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  }
};
const tooltipOptions = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
};
const legendOptions = {
  show: true,
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
};
const gridOptions = {
  top: 50,
  bottom: 40
};
const xAxisOptions = {
  type: "category",
  boundaryGap: true,
  splitLine: {
    show: true,
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted",
      width: 1
    }
  },
  axisTick: {
    show: false
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
const defLinearGradients = [
  new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: "rgba(15, 251, 248, 1)"
    },
    {
      offset: 1,
      color: "rgba(15, 251, 248, 0.05)"
    }
  ]),
  new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: "rgba(255, 175, 103, 1)"
    },
    {
      offset: 1,
      color: "rgba(225, 188, 75, 0)"
    }
  ])
];
export {
  defLinearGradients,
  gridOptions,
  legendOptions,
  lineColors,
  tooltipOptions,
  xAxisOptions,
  yAxisOptions
};
