import { Entity } from 'cesium';
/**
 * 创建信息Canvas元素
 * @param info 信息对象
 * @param valueKey 值键名
 * @param labelType 文字键值
 * @returns Promise<{canvas: HTMLCanvasElement, cleanup: () => void}>
 */
export declare const changeIconOption: any;
export declare const createInfoCanvas: (info: any, valueKey?: string, labelType?: string) => Promise<{
    canvas: HTMLCanvasElement;
    cleanup: () => void;
}>;
/**
 * 修改entity信息
 */
export declare function updateViewerEntityInfo(info: any, entity: Entity | undefined, type?: string): Promise<void>;
