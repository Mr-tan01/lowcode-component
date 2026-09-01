import { imageryLayerType } from '../map/cesium/modules/type';
export declare const TIANDITU_SUBDOMAINS: string[];
export declare const TIANDITU_KEY: any;
export interface CreateTiandituImageryProvidersOptions {
    Cesium: any;
    key?: string;
    maxZoom?: number;
    layers?: Array<'vec' | 'cva'>;
}
/**
 * 创建天地图影像和注记两层底图。
 * 业务层只需传入 key 和最大缩放级别，图层拼装由这里统一收口。
 */
export declare const createTiandituImageryProviders: ({ Cesium, key, maxZoom, layers, }: CreateTiandituImageryProvidersOptions) => any[];
export declare const defaultImageryLayerList: imageryLayerType[];
