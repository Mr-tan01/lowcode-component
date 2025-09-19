import { CanvasType } from "./type.js";
const defaultFontConfig = {
  size: "24px",
  family: "HarmonyOS Sans SC",
  color: "#fff",
  weight: "bold"
};
const defaultPopoverConfig = {
  size: "16px",
  family: "HarmonyOS_Sans_SC_Medium",
  color: "#fff",
  weight: "normal"
};
const defaultCanvasConfig = {
  [CanvasType.Danger]: {
    borderColor: "#fb0f0f",
    backgroundColor: "#c60a0a"
  },
  [CanvasType.Primary]: {
    borderColor: "#0094ff",
    backgroundColor: "#1a9fff"
  },
  [CanvasType.Success]: {
    borderColor: "#0ffbf8",
    backgroundColor: "#09d2cf"
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
  defaultFontConfig,
  defaultPopoverConfig
};
