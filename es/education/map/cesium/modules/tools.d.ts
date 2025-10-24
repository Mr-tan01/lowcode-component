import { Entity, Cartesian3, Viewer } from 'cesium';
import { EntityConfig, pointType } from './type';
export declare const createInfoCanvas: (info: any) => Promise<{
    canvas: HTMLCanvasElement;
    cleanup: () => void;
}>;
export declare function createClusterBillboard(count: number, primaryType: string, typeCount?: Record<string, number>, typeColors?: Record<string, string>): HTMLCanvasElement;
/**
 * 修改entity信息
 */
export declare function updateViewerEntityInfo(info: any, entity: Entity | undefined): Promise<void>;
/**
 * 创建entity信息
 * @returns EntityConfig
 */
export declare const createEntityConfig: ({ point, valueInfo, isPopoverEntity, viewer, }: {
    point: pointType;
    valueInfo: HTMLCanvasElement;
    isPopoverEntity?: boolean;
    viewer: Viewer;
}) => Promise<EntityConfig>;
/**
 * 转换笛卡尔坐标到经纬度
 * @returns Cartesian3
 */
export declare const convertCartographic: (viewerData: any, cartesian: Cartesian3) => Promise<Cartesian3>;
/**
 * 热力图渐变色配置
 * 0.00 - 0.25 - 0.50 - 0.75 - 1.00
 * 蓝色 - 青色 - 绿色 - 橙色 - 红色
 */
export declare const heatmapGradient: {
    '0.00': string;
    '0.25': string;
    '0.50': string;
    '0.75': string;
    '1.00': string;
};
