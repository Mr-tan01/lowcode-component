const r = {
  color: [
    "rgba(119, 73, 255, 1)",
    "rgba(166, 207, 255, 1)",
    "rgba(0, 148, 255, 1)",
    "rgba(225, 188, 75, 1)",
    "rgba(15, 251, 248, 1)"
  ],
  series: []
}, n = {
  max: 100,
  label: function(e, a) {
    return (e.value / a.max * 100).toFixed(1) + "%";
  },
  data: []
};
export {
  r as defaultFunnelTierOptions,
  n as defaultFunnelTierSeriesOptions
};
