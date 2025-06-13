import { Ref } from 'vue';
import * as Cesium from "cesium";
import * as echarts from "echarts";
/**
 * 初始化Cesium地球视图
 * @param props 组件属性，包含是否开启旋转(openRotate)和旋转速度(rotateSpeed)等配置
 */
export declare const useInitPlanet: (props: any) => {
    destroyViewer: () => void;
    initViewer: () => void;
    viewer: Ref<Cesium.Viewer | null, Cesium.Viewer | null>;
};
/**
 * ECharts图层类，用于在Cesium地图上叠加ECharts图表
 */
export declare class EchartsLayer {
    private _map;
    private _overlay;
    private _echartsContainer;
    private _isRegistered;
    constructor(map: any, options: any);
    /**
     * 注册地图到ECharts坐标系统
     */
    _registerMap(): void;
    /**
     * 创建图表覆盖层
     * @returns 初始化的ECharts实例
     */
    _createChartOverlay(): echarts.ECharts;
    /**
     * 销毁图层，清理资源
     */
    dispose(): void;
    /**
     * 更新图表配置
     * @param t 新的ECharts配置选项
     */
    updateOverlay(t: any): void;
    /**
     * 调整图表大小以适应地图容器
     */
    resize(): void;
}
