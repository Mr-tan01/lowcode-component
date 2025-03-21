import e from "./images/large-bg.png.js";
import i from "./images/16x9.png.js";
const m = {
  large: "large",
  medium: "medium",
  custom: "custom",
  a169: "a169"
}, g = {
  size: {
    [m.large]: {
      width: 1e3,
      height: 680
    },
    [m.medium]: {
      width: 600,
      height: 300
    },
    [m.a169]: {
      width: 1520,
      height: 683
    }
  },
  sizeMode: m.custom,
  bgImgs: {
    [m.large]: e,
    [m.medium]: e,
    [m.a169]: i,
    custom: e
  }
};
export {
  g as options,
  m as sizeModeEnum
};
