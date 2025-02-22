const e = {
  large: "large",
  medium: "medium",
  custom: "custom"
}, i = {
  size: {
    [e.large]: {
      width: 1e3,
      height: 680
    },
    [e.medium]: {
      width: 600,
      height: 300
    }
  },
  sizeMode: e.custom
};
export {
  i as options,
  e as sizeModeEnum
};
