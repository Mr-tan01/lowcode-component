import { defaultFontConfig, defaultCanvasConfig } from "./const.js";
import { CanvasType, CanvasMode } from "./type.js";
import { cloneDeep, merge } from "lodash-es";
import { CallbackProperty, VerticalOrigin, Cartesian3, JulianDate } from "@cesium/engine";
function darkenColor(color, percent) {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  let R = (num >> 16) - amt;
  let G = (num >> 8 & 255) - amt;
  let B = (num & 255) - amt;
  R = R < 0 ? 0 : R;
  G = G < 0 ? 0 : G;
  B = B < 0 ? 0 : B;
  return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
}
const drawText = (ctx, fontSizeConfig, label) => {
  if (fontSizeConfig == null ? void 0 : fontSizeConfig.customCanvasText) {
    fontSizeConfig.customCanvasText(ctx, label);
    return;
  }
  const text = label || "-";
  ctx.font = `${fontSizeConfig.weight} ${fontSizeConfig.size} ${fontSizeConfig.family}`;
  ctx.fillStyle = fontSizeConfig.color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  fontSizeConfig.fillText ? fontSizeConfig.fillText(ctx) : ctx.fillText(text, 25, 25);
};
function drawOnCanvas(options) {
  const { width = 60, height = 85, iconType = CanvasType.Primary, currentMode = CanvasMode.Text, fontConfig, canvas, ctx, customCanvas } = options;
  if (customCanvas) {
    customCanvas == null ? void 0 : customCanvas(canvas, ctx);
    return;
  }
  const fontSizeConfig = merge(defaultFontConfig, fontConfig ?? {});
  const { borderColor, backgroundColor } = merge(defaultCanvasConfig[iconType], options, {});
  ctx.clearRect(0, 0, width, height);
  canvas.width = width ? width : 60;
  canvas.height = height ? height : 85;
  ctx.save();
  ctx.translate(5, 5);
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, backgroundColor);
  gradient.addColorStop(1, darkenColor(backgroundColor, 20));
  ctx.beginPath();
  ctx.moveTo(50, 24.58);
  ctx.bezierCurveTo(50, 34.36, 43.6, 40.76, 35.78, 46.77);
  ctx.bezierCurveTo(31.83, 49.8, 28.81, 55.58, 26.73, 64.11);
  ctx.bezierCurveTo(26.54, 64.9, 25.79, 65.4, 25, 65.31);
  ctx.bezierCurveTo(24.21, 65.4, 23.46, 64.9, 23.27, 64.11);
  ctx.bezierCurveTo(21.19, 55.58, 18.17, 49.8, 14.22, 46.77);
  ctx.lineTo(13.49, 46.2);
  ctx.bezierCurveTo(6, 40.35, 0, 34.06, 0, 24.58);
  ctx.bezierCurveTo(0, 11, 11.19, 0, 25, 0);
  ctx.bezierCurveTo(38.81, 0, 50, 11, 50, 24.58);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.save();
  ctx.clip();
  if (currentMode === CanvasMode.Text) {
    const { label } = options;
    drawText(ctx, fontSizeConfig, label);
  } else if (currentMode === CanvasMode.Image) ;
  ctx.restore();
  ctx.strokeStyle = borderColor ?? backgroundColor;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(25.52, 67.88, 7.88, 1.6, 0, 0, Math.PI * 2);
  ctx.shadowColor = "#325581";
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = "#325581";
  ctx.globalAlpha = 0.72;
  ctx.fill();
  ctx.restore();
}
const createInfoCanvas = (info) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Could not get canvas context"));
      return;
    }
    const cleanup = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    drawOnCanvas({ ...info.options, canvas, ctx });
    resolve({ canvas, cleanup });
  });
};
function createClusterBillboard(count, primaryType, typeCount = {}, typeColors = {}) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  canvas.width = 50;
  canvas.height = 50;
  if (typeCount && Object.keys(typeCount).length > 1) {
    ctx.fillStyle = "rgba(40, 40, 40, 0.7)";
    ctx.beginPath();
    ctx.roundRect(0, 0, canvas.width, canvas.height, 15);
    ctx.fill();
  }
  if (typeCount && Object.keys(typeCount).length > 1) {
    const types = Object.keys(typeCount);
    const angleStep = Math.PI * 2 / types.length;
    types.forEach((type, index) => {
      const angle = index * angleStep;
      const radius = 15;
      const x = canvas.width / 2 + Math.cos(angle) * radius;
      const y = canvas.height / 2 + Math.sin(angle) * radius;
      ctx.fillStyle = typeColors[type] || "#1E9EFA";
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "bold 10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(typeCount[type].toString(), x, y);
    });
    ctx.fillStyle = "white";
    ctx.font = "bold 14px Arial";
    ctx.fillText(count.toString(), canvas.width / 2, canvas.height / 2);
  } else {
    ctx.fillStyle = typeColors[primaryType] || "#1E9EFA";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(count.toString(), canvas.width / 2, canvas.height / 2);
  }
  return canvas;
}
async function updateViewerEntityInfo(info, entity) {
  var _a, _b;
  if ((entity == null ? void 0 : entity.billboard) && entity.properties) {
    const currentTime = JulianDate.now();
    const changeState = (_a = entity.properties) == null ? void 0 : _a.getValue(currentTime).changeState;
    const canvasOptions = cloneDeep(info.options);
    const { canvas } = await createInfoCanvas({
      options: merge(canvasOptions, { iconType: !changeState ? CanvasType.Hover : ((_b = info.options) == null ? void 0 : _b.iconType) ?? CanvasType.Primary })
    });
    entity.billboard.image = canvas;
    entity.properties.changeState = new CallbackProperty(() => {
      return !changeState;
    }, false);
  }
}
const createEntityConfig = async ({
  point,
  valueInfo,
  isPopoverEntity = false,
  viewer
}) => {
  const commonProperties = {
    changeState: false,
    position: [point.lng, point.lat],
    options: point.options,
    valueInfo
  };
  const commonBillboard = {
    image: valueInfo,
    disableDepthTestDistance: isPopoverEntity ? Number.POSITIVE_INFINITY : void 0,
    verticalOrigin: VerticalOrigin.BOTTOM,
    scale: new CallbackProperty(() => {
      const height = viewer.camera.positionCartographic.height;
      const scale = Math.max(0.3, Math.min(2, 1 - height / 1e5));
      return scale;
    }, false)
  };
  return {
    name: isPopoverEntity ? `${point.name}Label` : point.name,
    position: Cartesian3.fromDegrees(point.lng, point.lat, 50),
    properties: commonProperties,
    isPopoverEntity,
    billboard: commonBillboard
  };
};
const heatmapGradient = {
  "0.00": "#0c29ce",
  "0.25": "#09d3d0",
  "0.50": "#91fa68",
  "0.75": "#fca22c",
  "1.00": "#fb0f0f"
};
export {
  createClusterBillboard,
  createEntityConfig,
  createInfoCanvas,
  heatmapGradient,
  updateViewerEntityInfo
};
