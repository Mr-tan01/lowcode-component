import { CanvasType } from "./type.js";
const defaultFontConfig = {
  size: "24px",
  family: "HarmonyOS Sans SC",
  color: "#fff",
  weight: "bold"
};
const defaultCanvasConfig = {
  [CanvasType.Danger]: {
    borderColor: "#fb0f0f",
    backgroundColor: "#c60a0a"
  },
  [CanvasType.Primary]: {
    borderColor: "#1a9fff",
    backgroundColor: "#0094ff"
  },
  [CanvasType.Success]: {
    borderColor: "#62b83d",
    backgroundColor: "#4fae22"
  },
  [CanvasType.Warning]: {
    borderColor: "#fbbf0f",
    backgroundColor: "#d18608"
  },
  [CanvasType.Hover]: {
    borderColor: "#0ffaf7",
    backgroundColor: "#1bdee0"
  }
};
export {
  defaultCanvasConfig,
  defaultFontConfig
};
