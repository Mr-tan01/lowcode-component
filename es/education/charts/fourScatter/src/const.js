import tooltipContentBg from "./images/tooltip-content-bg.png.js";
import tooltipContentBlueBg from "./images/tooltip-content-blue-bg.png.js";
import { scale } from "mmjs-core";
const scatterColors = ["rgba(15, 251, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(34, 118, 252, 1)", "rgba(222, 56, 4, 1)"];
const tooltipContentImageList = [tooltipContentBlueBg, tooltipContentBg];
const tooltipContentStyler = `
width: ${scale("107px")};
height: ${scale("32px")};
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: ${scale("7px")} ${scale("14px")};
z-index: 100;
backdrop-filter: blur(${scale("5px")});
transform: translate(-${scale("6px")}, 0px);
`;
const tooltipOptions = [
  {
    trigger: "item",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    position: "right",
    padding: 0,
    appendTo: "body",
    formatter(params) {
      var _a;
      const meta = ((_a = params.data) == null ? void 0 : _a.meta) ?? {};
      const bg = (meta == null ? void 0 : meta.bg) ?? tooltipContentImageList[params.seriesIndex];
      return `<div class="tooltip-content" style="${tooltipContentStyler}background: url(${bg}) no-repeat center center / 100% 100%;">
                <div style="width: 100%;white-space: nowrap; overflow: hidden;  text-overflow: ellipsis; color: ${meta.color}; font-size: ${scale("16px")};">${params.name}</div>
            </div>`;
    },
    axisPointer: {
      type: "none",
      label: {
        backgroundColor: "#6a7985",
        formatter(params) {
          var _a;
          const value = (_a = Number(params.value)) == null ? void 0 : _a.toFixed(2);
          if (params.axisDimension === "y") {
            return `${value}%`;
          }
          return value;
        }
      }
    }
  }
];
const legendOptions = {
  show: true,
  icon: "roundRect",
  top: "65%",
  left: null,
  right: 15,
  orient: "vertical",
  align: "left",
  padding: 0,
  itemGap: 6,
  itemWidth: 12,
  itemHeight: 12,
  textStyle: {
    align: "left",
    verticalAlign: "middle",
    fontSize: 14,
    padding: [0, 0, 0, 0]
  }
};
const gridOptions = {
  bottom: 70,
  left: 100,
  right: 100,
  top: 30
};
const yAxisOptions = [
  {
    type: "value",
    axisLabel: {
      show: false
    },
    min: 40,
    max: 110,
    interval: 10,
    position: "right"
  },
  {
    boundaryGap: false,
    axisLabel: {
      formatter(value) {
        return `${value}%`;
      },
      color(_value, index) {
        return index === 4 ? "rgba(225, 75, 75, 1)" : "#ffffff";
      }
    },
    type: "category",
    position: "left",
    data: [40, 50, 60, 70, 75, 80, 90, 100, 110],
    axisTick: {
      show: false
    },
    name: "平\n均\n达\n成\n率\n︵\n优\n质\n︶",
    nameLocation: "middle",
    nameRotate: 0,
    nameTextStyle: {
      padding: [0, 105, 0, 0],
      verticalAlign: "middle",
      align: "center"
    }
  }
];
const xAxisOptions = [
  {
    show: false,
    position: "top"
  },
  {
    position: "bottom",
    boundaryGap: false,
    data: ["(0.05)", "0.00", "0.05", "0.10", "0.15", "0.20", "0.25", "0.30", "0.35"],
    axisLabel: {
      color(_value, index) {
        return index === 0 ? "rgba(225, 75, 75, 1)" : "#ffffff";
      }
    },
    name: "标准差(均衡)",
    nameLocation: "middle",
    nameTextStyle: {
      padding: [20, 0, 0, 0],
      color: "#ffffff",
      fontSize: 14,
      lineHeight: 20
    }
  }
];
const commonScatterSeries = {
  type: "effectScatter",
  symbolSize: function(data) {
    return Math.max(Math.sqrt(data), scale(25));
  },
  itemStyle: {
    color: (data) => scatterColors[data.componentIndex],
    borderColor: "#fff",
    borderWidth: 2.5,
    opacity: 1
  },
  animation: true,
  markPoint: {
    symbol: "circle",
    silent: false,
    itemStyle: {
      borderType: "dotted",
      borderWidth: 2,
      borderColor: "transparent",
      opacity: 1,
      color: "transparent"
    },
    tooltip: {
      show: true,
      trigger: "item"
    },
    label: {
      show: false,
      silent: true,
      formatter(params) {
        var _a, _b;
        return (_b = (_a = params.data) == null ? void 0 : _a.coord) == null ? void 0 : _b[1].toFixed(2);
      },
      color: "#ffffff",
      fontSize: 14,
      fontWeight: "bold",
      position: "inside",
      align: "center",
      verticalAlign: "middle",
      textBorderColor: "#000000",
      textBorderType: "solid",
      textBorderWidth: 2
    },
    emphasis: {
      label: {
        show: true
      }
    },
    data: []
  }
};
export {
  commonScatterSeries,
  gridOptions,
  legendOptions,
  scatterColors,
  tooltipOptions,
  xAxisOptions,
  yAxisOptions
};
