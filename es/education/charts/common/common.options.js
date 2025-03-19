import l from "lodash-es/merge";
const n = {
  type: "bar",
  data: [],
  showBackground: !1,
  markPoint: {
    symbol: "none",
    label: {
      show: !1
    }
  },
  markLine: {
    symbol: [
      "rect",
      "rect"
    ],
    symbolSize: [10, 1],
    lineStyle: {
      type: "solid"
    },
    label: {
      show: !1
    }
  },
  itemStyle: {
    opacity: 0,
    color: "rgba(225, 188, 75, 1)"
  }
};
function s(r, o) {
  return l({}, n, {
    markLine: {
      data: r.map((e, a) => e.map((t) => ({
        coord: [a, t],
        name: a
      })))
    },
    data: r.map((e) => e[1])
  }, o);
}
export {
  s as useDifferenceSeries
};
