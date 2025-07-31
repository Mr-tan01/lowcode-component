const defaultFunnelTierOptions = {
  color: ["rgba(119, 73, 255, 1)", "rgba(166, 207, 255, 1)", "rgba(0, 148, 255, 1)", "rgba(225, 188, 75, 1)", "rgba(15, 251, 248, 1)"],
  series: []
};
const defaultFunnelTierSeriesOptions = {
  max: 100,
  label: function(d, serie) {
    return (d.value / serie.max * 100).toFixed(1) + "%";
  },
  data: []
};
export {
  defaultFunnelTierOptions,
  defaultFunnelTierSeriesOptions
};
