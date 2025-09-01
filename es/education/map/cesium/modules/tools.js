import primary from "../image/primary.png.js";
import success from "../image/success.png.js";
import warning from "../image/warning.png.js";
import danger from "../image/danger.png.js";
import primaryLabel from "../image/primary_label.png.js";
import successLabel from "../image/success_label.png.js";
import warningLabel from "../image/warning_label.png.js";
import dangerLabel from "../image/danger_label.png.js";
import iconPrimary from "../image/icon_primary.png.js";
import iconSuccess from "../image/icon_success.png.js";
import { VerticalOrigin, Cartesian2, Cartesian3, JulianDate, CallbackProperty } from "@cesium/engine";
const imageUrlOption = {
  primary,
  success,
  warning,
  danger,
  primary_label: primaryLabel,
  success_label: successLabel,
  warning_label: warningLabel,
  danger_label: dangerLabel,
  icon_primary: iconPrimary,
  icon_success: iconSuccess
};
const options = {
  width: 50,
  height: 75,
  fontStyle: {
    size: "24px",
    family: "HarmonyOS Sans SC",
    color: "#fff",
    weight: "bold"
  },
  textStyle: {
    size: "16px",
    family: "HarmonyOS_Sans_SC_Medium",
    weight: "normal"
  }
};
const reloadText = (option) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const { info, valueKey, canvas, ctx, text } = option;
  const valueFont = `
    ${((_a = info == null ? void 0 : info.fontStyle) == null ? void 0 : _a.weight) ?? ((_b = options == null ? void 0 : options.fontStyle) == null ? void 0 : _b.weight)} 
    ${((_c = info == null ? void 0 : info.fontStyle) == null ? void 0 : _c.size) ?? ((_d = options == null ? void 0 : options.fontStyle) == null ? void 0 : _d.size)}
    ${((_e = info == null ? void 0 : info.fontStyle) == null ? void 0 : _e.family) ?? ((_f = options == null ? void 0 : options.fontStyle) == null ? void 0 : _f.family)}`;
  const textFont = `
    ${((_g = info == null ? void 0 : info.textStyle) == null ? void 0 : _g.weight) ?? ((_h = options == null ? void 0 : options.textStyle) == null ? void 0 : _h.weight)} 
    ${((_i = info == null ? void 0 : info.textStyle) == null ? void 0 : _i.size) ?? ((_j = options == null ? void 0 : options.textStyle) == null ? void 0 : _j.size)}
    ${((_k = info == null ? void 0 : info.textStyle) == null ? void 0 : _k.family) ?? ((_l = options == null ? void 0 : options.textStyle) == null ? void 0 : _l.family)}`;
  ctx.font = valueKey ? valueFont : textFont;
  ctx.fillStyle = (valueKey ? (_m = info == null ? void 0 : info.fontStyle) == null ? void 0 : _m.color : (_n = info == null ? void 0 : info.textStyle) == null ? void 0 : _n.color) ?? ((_o = options.fontStyle) == null ? void 0 : _o.color);
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  const textX = valueKey ? (info == null ? void 0 : info.textOffsetX) ?? 13 : 46;
  const textY = (info == null ? void 0 : info.textOffsetY) ?? canvas.height / 2 - (valueKey ? 10 : 0);
  ctx.fillText(text, textX, textY);
};
const eraseOverlapImage = (ctx) => {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(22, 0);
  ctx.quadraticCurveTo(30, 15, 20, 26);
  ctx.lineTo(0, 45);
  ctx.closePath();
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fill();
  ctx.restore();
};
const createInfoCanvas = (info, valueKey, labelType) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Could not get canvas context"));
      return;
    }
    canvas.width = (info == null ? void 0 : info.width) ?? options.width;
    canvas.height = (info == null ? void 0 : info.height) ?? options.height;
    const { iconType, textIconType } = info;
    const icons = {
      icon: iconType ? imageUrlOption[iconType] : imageUrlOption["primary"],
      textIcon: textIconType ? imageUrlOption[textIconType] : imageUrlOption[(labelType ? "success" : "primary") + "_label"]
    };
    const bgImageUrl = icons == null ? void 0 : icons[valueKey ? "icon" : "textIcon"];
    const text = (info == null ? void 0 : info[valueKey ?? "text"]) || "";
    const cleanup = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    reloadText({
      info,
      valueKey,
      canvas,
      ctx,
      text
    });
    if (bgImageUrl) {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.src = bgImageUrl;
      image.onload = () => {
        reloadText({
          info,
          valueKey,
          canvas,
          ctx,
          text
        });
        canvas.width = valueKey ? (info == null ? void 0 : info.width) ?? image.width : ctx.measureText(text).width + 80;
        canvas.height = (info == null ? void 0 : info.height) ?? image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
        if (!valueKey) {
          eraseOverlapImage(ctx);
        }
        reloadText({
          info,
          valueKey,
          canvas,
          ctx,
          text
        });
        resolve({ canvas, cleanup });
      };
      image.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    } else {
      reloadText({
        info,
        valueKey,
        canvas,
        ctx,
        text
      });
      resolve({ canvas, cleanup });
    }
  });
};
const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
};
async function drawImageCanvas(imgSrc) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imgSrc;
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("无法获取2D上下文"));
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas);
      } catch (e) {
        reject(new Error("画布创建失败", { cause: e }));
      }
    };
  });
}
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
async function updateViewerEntityInfo(info, entity, type) {
  var _a, _b;
  if ((entity == null ? void 0 : entity.billboard) && entity.properties) {
    const currentTime = JulianDate.now();
    const changeState = (_a = entity.properties) == null ? void 0 : _a.getValue(currentTime).changeState;
    const valueIcon = changeState ? (info == null ? void 0 : info.iconType) ?? "primary" : (info == null ? void 0 : info.changeIconType) ?? "success";
    const textIcon = changeState ? (info == null ? void 0 : info.textIconType) ?? "primary_label" : (info == null ? void 0 : info.changeTextIconType) ?? "success_label";
    let valueInfo = (_b = entity.billboard.image) == null ? void 0 : _b.getValue();
    valueInfo = typeof valueInfo === "string" ? await drawImageCanvas(valueInfo) : valueInfo;
    const ctx = valueInfo.getContext("2d");
    const image = await loadImage(imageUrlOption[type ? valueIcon : textIcon]);
    ctx == null ? void 0 : ctx.clearRect(0, 0, valueInfo.width, valueInfo.height);
    ctx.drawImage(image, 0, 0, valueInfo.width, valueInfo.height);
    if (!type) {
      eraseOverlapImage(ctx);
    }
    reloadText({
      info,
      valueKey: type,
      canvas: valueInfo,
      ctx,
      text: type ? info.value : info.text
    });
    entity.billboard.image = valueInfo.toDataURL("image/png");
    entity.properties.changeState = new CallbackProperty(() => {
      return !changeState;
    }, false);
  }
}
const createEntityConfig = async (point, valueInfo, type) => {
  const commonProperties = {
    value: point == null ? void 0 : point.value,
    text: point == null ? void 0 : point.text,
    changeState: false,
    type: (point == null ? void 0 : point.iconType) ?? "primary",
    position: [point.lng, point.lat],
    name: type ? point.name : `${point.name}Label`
  };
  const commonBillboard = {
    image: valueInfo,
    pixelOffset: type ? new Cartesian2(0, 0) : new Cartesian2(valueInfo.width / 2, valueInfo.height / 2 - 3),
    disableDepthTestDistance: type ? void 0 : Number.POSITIVE_INFINITY,
    verticalOrigin: type ? VerticalOrigin.CENTER : VerticalOrigin.BOTTOM
  };
  return {
    position: Cartesian3.fromDegrees(point.lng, point.lat, 50),
    name: type ? point.name : `${point.name}Label`,
    properties: commonProperties,
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
