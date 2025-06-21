import { Entity, Cartesian3 } from 'cesium';
import { EntityConfig, pointType } from './type';
export declare const changeIconOption: any;
export declare const createInfoCanvas: (info: any, valueKey?: string, labelType?: string) => Promise<{
    canvas: HTMLCanvasElement;
    cleanup: () => void;
}>;
export declare const createClusterBillboard: (count: number, primaryType: string) => HTMLCanvasElement;
/**
 * 修改entity信息
 */
export declare function updateViewerEntityInfo(info: any, entity: Entity | undefined, type?: string): Promise<void>;
/**
 * 创建entity信息
 * @returns EntityConfig
 */
export declare const createEntityConfig: (point: pointType, valueInfo: HTMLCanvasElement, type?: string) => Promise<EntityConfig>;
/**
 * 转换笛卡尔坐标到经纬度
 * @returns Cartesian3
 */
export declare const convertCartographic: (viewerData: any, cartesian: Cartesian3) => Promise<Cartesian3>;
