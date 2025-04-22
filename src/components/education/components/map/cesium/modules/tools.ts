/**
 * 创建信息Canvas元素
 * @param info 信息对象
 * @param valueKey 值键名
 * @param changeType 变化类型
 * @returns Promise<{canvas: HTMLCanvasElement, cleanup: () => void}>
 */

import primary from "../image/primary.png";
import success from "../image/success.png";
import warning from "../image/warning.png";
import danger from "../image/danger.png";
import primaryLabel from "../image/primary_label.png";
import warningLabel from "../image/warning_label.png";
import dangerLabel from "../image/danger_label.png";
import iconPrimary from "../image/icon_primary.png";
import iconSuccess from "../image/icon_success.png";

interface fontStyle {
    size?: string;
    family?: string;
    color?: string;
    width?: number;
    weight?:
        | number // 100-900
        | "normal" // 400
        | "bold" // 700
        | "bolder"
        | "lighter";
}

interface canvasOption {
    width?: number;
    height?: number;
    fontStyle?: fontStyle;
    textStyle?: fontStyle;
}

const imageUrlOption: any = {
    primary: primary,
    success: success,
    warning: warning,
    danger: danger,
    primary_label: primaryLabel,
    success_label: primaryLabel,
    warning_label: warningLabel,
    danger_label: dangerLabel,
    icon_primary: iconPrimary,
    icon_success: iconSuccess,
};

export const changeIconOption: any = {
    icon_success: iconSuccess,
    icon_primary: iconPrimary,
};

const options = {
    width: 50,
    height: 75,
    fontStyle: {
        size: "24px",
        family: "HarmonyOS Sans SC",
        color: "#fff",
        weight: "bold",
    },
    textStyle: {
        size: "16px",
        family: "HarmonyOS_Sans_SC_Medium",
        color: "#fff",
        weight: "normal",
    },
} as canvasOption;

export const createInfoCanvas = (
    info: any,
    valueKey?: string,
    changeType?: string
): Promise<{ canvas: HTMLCanvasElement; cleanup: () => void }> => {
    return new Promise((resolve, reject) => {
        // 创建canvas元素
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            reject(new Error("Could not get canvas context"));
            return;
        }

        // 设置canvas尺寸
        canvas.width = info?.width ?? options.width;
        canvas.height = info?.height ?? options.height;

        const { iconType, textIconType, changeIconType } = info;
        const icons = {
            icon: iconType ? imageUrlOption[iconType] : undefined,
            textIcon: textIconType ? imageUrlOption[textIconType] : undefined,
            changeIcon: changeIconType ? changeIconOption[changeIconType] : undefined,
        };

        // 绘制背景
        const bgImageUrl = changeType
            ? icons.changeIcon
            : icons?.[valueKey ? "icon" : "textIcon"] ?? (valueKey ? icons.icon : icons.textIcon);

        const text = info?.[valueKey ?? "text"] || "";

        // 清理dom中的canvas
        const cleanup = () => {
            ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置变换
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        const valueFont = `
    ${info?.fontStyle?.weight ?? options?.fontStyle?.weight} 
    ${info?.fontStyle?.size ?? options?.fontStyle?.size}
    ${info?.fontStyle?.family ?? options?.fontStyle?.family}`;

        const textFont = `
    ${info?.textStyle?.weight ?? options?.textStyle?.weight} 
    ${info?.textStyle?.size ?? options?.textStyle?.size}
    ${info?.textStyle?.family ?? options?.textStyle?.family}`;

        // 绘制文本
        const reloadText = (textOption: any) => {
            textOption.font = valueKey ? valueFont : textFont;
            textOption.fillStyle = (valueKey ? info?.fontStyle?.color : info?.textStyle?.color) ?? options.fontStyle?.color;
            textOption.textBaseline = "middle";
            textOption.textAlign = "left";
            const textX = valueKey ? info?.textOffsetX ?? 13 : 40;
            const textY = info?.textOffsetY ?? canvas.height / 2 - (valueKey ? 10 : 6);
            ctx.fillText(text, textX, textY);
        };

        if (bgImageUrl) {
            const image = new Image();
            image.crossOrigin = "Anonymous";
            image.onload = () => {
                // 先绘制文本 获取添加文字后的宽高
                reloadText(ctx);
                canvas.width = valueKey ? info?.width ?? image.width : ctx.measureText(text).width + 80;
                canvas.height = info?.height ?? image.height;

                // 绘制图片到画布 宽高为获取后的值
                ctx.drawImage(image, 0, 0, valueKey ? canvas.width : canvas.width, canvas.height);

                // 重新绘制文本 绘制图片会清空画布
                reloadText(ctx);

                resolve({ canvas, cleanup });
            };

            image.onerror = () => {
                reject(new Error("Failed to load image"));
            };

            image.src = bgImageUrl;
        } else {
            reloadText(ctx);
            resolve({ canvas, cleanup });
        }
    });
};

/**
 * 获取设备地理位置
 * @returns Promise<{position: GeolocationPosition}>
 */

export async function geolocation(): Promise<{ position: GeolocationPosition }> {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve({ position });
            });
        } else {
            reject(new Error("Geolocation is not available."));
        }
    });
}
