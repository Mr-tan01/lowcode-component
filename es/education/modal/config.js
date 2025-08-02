import m from "./images/large-bg.png.js";
import i from "./images/16x9.png.js";
const e = {
  large: "large",
  medium: "medium",
  custom: "custom",
  a169: "a169"
}, h = {
  size: {
    [e.large]: {
      width: "1000px",
      height: "680px",
      headerWidth: "401px"
    },
    [e.medium]: {
      width: "600px",
      height: "300px",
      headerWidth: "401px"
    },
    [e.a169]: {
      width: "1520px",
      height: "683px",
      headerWidth: "450px"
    }
  },
  sizeMode: e.custom,
  bgImgs: {
    [e.large]: m,
    [e.medium]: m,
    [e.a169]: i,
    custom: m
  }
};
export {
  h as options,
  e as sizeModeEnum
};
