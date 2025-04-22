/**
 * 创建信息Canvas元素
 * @param info 信息对象
 * @param valueKey 值键名
 * @param changeType 变化类型
 * @returns Promise<{canvas: HTMLCanvasElement, cleanup: () => void}>
 */
export declare const changeIconOption: any;
export declare const createInfoCanvas: (info: any, valueKey?: string, changeType?: string) => Promise<{
    canvas: HTMLCanvasElement;
    cleanup: () => void;
}>;
/**
 * 获取设备地理位置
 * @returns Promise<{position: GeolocationPosition}>
 */
export declare function geolocation(): Promise<{
    position: GeolocationPosition;
}>;
