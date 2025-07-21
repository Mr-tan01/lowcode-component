import r from "./images/tooltip-content-bg.png.js";
import i from "./images/tooltip-content-blue-bg.png.js";
const a = ["rgba(15, 251, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(34, 118, 252, 1)", "rgba(222, 56, 4, 1)"], l = [i, r], s = `
width: 107px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: 7px 14p;
z-index: 100;
backdrop-filter: blur(5px);
transform: translate(-6px, 0px);
`, p = [
  {
    trigger: "item",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    position: "right",
    padding: 0,
    appendTo: "body",
    formatter(t) {
      var n;
      const e = ((n = t.data) == null ? void 0 : n.meta) ?? {}, o = (e == null ? void 0 : e.bg) ?? l[t.seriesIndex];
      return `<div class="tooltip-content" style="${s}background: url(${o}) no-repeat center center / 100% 100%;">
                <div style="width: 100%;white-space: nowrap; overflow: hidden;  text-overflow: ellipsis; color: ${e.color}; font-size: 16px;">${t.name}</div>
            </div>`;
    },
    axisPointer: {
      type: "none",
      label: {
        backgroundColor: "#6a7985",
        formatter(t) {
          var o;
          const e = (o = Number(t.value)) == null ? void 0 : o.toFixed(2);
          return t.axisDimension === "y" ? `${e}%` : e;
        }
      }
    }
  }
], c = {
  show: !0,
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
}, g = {
  bottom: 70,
  left: 100,
  right: 100,
  top: 30
}, m = [
  {
    type: "value",
    axisLabel: {
      show: !1
    },
    min: 40,
    max: 110,
    interval: 10,
    position: "right"
  },
  {
    boundaryGap: !1,
    axisLabel: {
      formatter(t) {
        return `${t}%`;
      },
      color(t, e) {
        return e === 4 ? "rgba(225, 75, 75, 1)" : "#ffffff";
      }
    },
    type: "category",
    position: "left",
    data: [40, 50, 60, 70, 75, 80, 90, 100, 110],
    axisTick: {
      show: !1
    },
    name: `平
均
达
成
率
︵
优
质
︶`,
    nameLocation: "middle",
    nameRotate: 0,
    nameTextStyle: {
      padding: [0, 105, 0, 0],
      verticalAlign: "middle",
      align: "center"
    }
  }
], b = [
  {
    show: !1,
    position: "top"
  },
  {
    position: "bottom",
    boundaryGap: !1,
    data: ["(0.05)", "0.00", "0.05", "0.10", "0.15", "0.20", "0.25", "0.30", "0.35"],
    axisLabel: {
      color(t, e) {
        return e === 0 ? "rgba(225, 75, 75, 1)" : "#ffffff";
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
], x = {
  type: "effectScatter",
  symbolSize: function(t) {
    return Math.max(Math.sqrt(t), 25);
  },
  itemStyle: {
    color: (t) => a[t.componentIndex],
    borderColor: "#fff",
    borderWidth: 2.5,
    opacity: 1
  },
  animation: !0,
  markPoint: {
    symbol: "circle",
    silent: !1,
    itemStyle: {
      borderType: "dotted",
      borderWidth: 2,
      borderColor: "transparent",
      opacity: 1,
      color: "transparent"
    },
    tooltip: {
      show: !0,
      trigger: "item"
    },
    label: {
      show: !1,
      silent: !0,
      formatter(t) {
        var e, o;
        return (o = (e = t.data) == null ? void 0 : e.coord) == null ? void 0 : o[1].toFixed(2);
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
        show: !0
      }
    },
    data: []
  }
};
export {
  x as commonScatterSeries,
  g as gridOptions,
  c as legendOptions,
  a as scatterColors,
  p as tooltipOptions,
  b as xAxisOptions,
  m as yAxisOptions
};
