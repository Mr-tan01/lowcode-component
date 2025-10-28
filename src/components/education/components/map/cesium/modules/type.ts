import {
    SceneMode,
    type SkyAtmosphere,
    type SkyBox,
    type Color,
    type Entity,
    type Cartesian3,
    type PolylineDashMaterialProperty,
    Cartesian2,
} from 'cesium'
import { type CesiumHeatmap } from 'cesium-heatmap-es6'
import shenZhen from './深圳市（各区）.json'

export const areaData = {
    深圳市: { lng: 114.063109, lat: 22.544522, value: 440300, position: [] },
    光明区: {
        lng: 113.91634116522685,
        lat: 22.77147302900205,
        value: 440300,
        position: shenZhen.features[0],
    },
    坪山区: {
        lng: 114.35193598950553,
        lat: 22.688581371110487,
        value: 440311,
        position: shenZhen.features[1],
    },
    龙华区: {
        lng: 114.01646181978259,
        lat: 22.68598921119512,
        value: 440310,
        position: shenZhen.features[2],
    },
    盐田区: {
        lng: 114.26346681948235,
        lat: 22.604011992313712,
        value: 440309,
        position: shenZhen.features[3],
    },
    大鹏新区: {
        lng: 114.47102586735873,
        lat: 22.609556483035444,
        value: 440312,
        position: shenZhen.features[4],
    },
    宝安区: {
        lng: 113.86094318766183,
        lat: 22.67707802403516,
        value: 440306,
        position: shenZhen.features[6],
    },
    龙岗区: {
        lng: 114.22287589397995,
        lat: 22.69074582647359,
        value: 440307,
        position: shenZhen.features[5],
    },
    南山区: {
        lng: 113.93782045247285,
        lat: 22.564987074695313,
        value: 440305,
        position: shenZhen.features[7],
    },
    福田区: {
        lng: 114.04493542407288,
        lat: 22.551374363514963,
        value: 440304,
        position: shenZhen.features[8],
    },
    罗湖区: {
        lng: 114.14519824740296,
        lat: 22.58076759041863,
        value: 440303,
        position: shenZhen.features[9],
    },
    深汕特别合作区: {
        lng: 115.05755762333229,
        lat: 22.864619116888704,
        value: 440313,
        position: shenZhen.features[10],
    },
}

export type baseIconType = 'primary' | 'success' | 'warning' | 'danger'
export type changeIconType = 'icon_success' | 'icon_primary'
export type iconType = baseIconType | changeIconType
export type textIconType = `${baseIconType}_label`

export interface pointType {
    name: string // 唯一name属性 获取唯一entity实例 切勿重复
    lng: number
    lat: number
    changeIconType?: changeIconType | string // 变动图标
    options: CanvasConfigOptions
}

export interface polygonType {
    name: string // 唯一name属性 获取唯一entity实例 切勿重复
    polyline: {
        positions: Cartesian3 // 线条位置
        material?: PolylineDashMaterialProperty // 线条类型
        width?: number // 线条宽度
    }
    polygon: {
        hierarchy: Cartesian3 // polygon位置
        material?: Color // 背景色
        outline?: boolean // 状态
        outlineColor?: boolean // 颜色
    }
}

// Enity自定义属性配置
export interface EntityProperties {
    changeState: boolean
    position: number[]
    options: BaseCanvasConfigOptions
    valueInfo?: HTMLCanvasElement
}

// Enity配置
export interface EntityConfig {
    name: string
    position: Cartesian3
    properties: EntityProperties
    isPopoverEntity: boolean
    billboard: {
        image: HTMLCanvasElement
        disableDepthTestDistance: number | undefined
        pixelOffset: Cartesian2
    }
}

export interface controlStatusType {
    timeline?: boolean // 时间轴控件
    animation?: boolean // 动画控件
    geocoder?: boolean // 地理编码搜索框
    homeButton?: boolean // 初始视图
    sceneModePicker?: boolean // 场景模式切换
    baseLayerPicker?: boolean // 底图图层选择器
    navigationHelpButton?: boolean // 导航帮助按钮
    fullscreenButton?: boolean // 全屏按钮
    skyBox?: SkyBox // 天空盒（星空背景）
    skyAtmosphere?: SkyAtmosphere // 大气效果
    sceneMode?: SceneMode // 3D 模式
    scene3DOnly?: boolean // 强制使用 3D 模式
    orderIndependentTranslucency?: boolean // 顺序无关半透明
    selectionIndicator?: boolean // point高亮框
    contextOptions?: {
        allowTextureFilterAnisotropic?: boolean // 禁用各向异性过滤
        webgl?: {
            alpha?: boolean // 提高性能
            antialias?: boolean // 启用抗锯齿
            preserveDrawingBuffer?: boolean // 允许截图
        }
    }
}

export interface basicConfigType {
    minZoom?: number
    maxZoom?: number
    baseColor?: Color
    clusteringEnabled?: boolean // 启用聚合
    clusteringPixelRange?: number // 聚合像素范围
    clusteringMinimumClusterSize?: number // 最小聚合数量
    cameraLimitsEnabled?: boolean // 启用相机控制限制
    defaultUrl?: string // 默认瓦片地址
    providerOptions?: Record<string, any> // 瓦片参数
    labelShowHeightThreshold?: number // 多少高度显示全瓦片
}

export interface optionType {
    config: basicConfigType
    defaultShowState: boolean
    flyToHeight: number
    offsetState: boolean
    centerPosition: Cartesian3
    defaultCenterKey: string
    openIndexDB: boolean
    pointHandler: (value: Entity) => void
    pointHoverHandler?: (value: Entity) => void
    pointHoverExitHandler?: (value: Entity) => void
    limitHeightHandler: (value: number) => void
    loadTileLayerHandler: (status: boolean) => void
    createdTooltip: (value: Entity, point: pointType) => void
}

export type changeModelType =
    | 'polygonClickHandler'
    | 'setCameraHeight'
    | 'setInitialView'
    | 'setViewerLayer'
    | 'ZoomIn'
    | 'ZoomOut'
    | 'clearEntity'
    | 'removeHeatMap'

export type changeModelParamType = {
    polygonClickHandler: string
    setCameraHeight: string
    setInitialView: { destination: Cartesian3; duration?: number }
    setViewerLayer: string
    ZoomIn: string
    ZoomOut: string
    clearEntity: {
        key: 'pointEntities' | 'polygonEntities'
        type: 'dataSource' | 'viewer'
    }
    removeHeatMap: {
        heatmap: CesiumHeatmap | any
    }
}

export const pointInfo = {
    宝安区: [
        {
            name: 'a',
            lng: 113.808156,
            lat: 22.636116,
            value: '机',
            text: '深圳宝安国际机场是个大机场哟！',
        },
        {
            name: 'dad',
            lng: 113.815194,
            lat: 22.666691,
            value: '',
            iconType: 'icon_primary',
            text: '怀德社区怀德社区怀德社区',
            textIconType: 'primary_label',
        },
        {
            name: 'c',
            lng: 113.829785,
            lat: 22.663998,
            value: '峰',
            iconType: 'primary',
            text: '美林峰美林峰',
        },
        {
            name: 'd',
            lng: 113.827554,
            lat: 22.686886,
            value: '',
            iconType: 'icon_success',
            text: '立湖新公园园园美林峰美林峰',
            textIconType: 'success_label',
            changeIconType: 'icon_primary',
            customIcon: 'icon_primary',
        },
    ],
    龙华区: [
        {
            name: 'a1',
            lng: 114.056926,
            lat: 22.710116,
            value: '澜',
            iconType: 'warning',
            text: '观澜！',
            textIconType: 'warning_label',
        },
        {
            name: 'dad1',
            lng: 1114.057785,
            lat: 22.702911,
            value: '',
            iconType: 'icon_primary',
            text: '观城社区',
            textIconType: 'primary_label',
        },
        {
            name: 'b1',
            lng: 114.054695,
            lat: 22.714946,
            value: '医',
            iconType: 'danger',
            text: '龙华区中心医院',
            textIconType: 'danger_label',
        },
        {
            name: 'c1',
            lng: 114.046627,
            lat: 22.69531,
            value: '院',
            iconType: 'primary',
            text: '易同院',
            textIconType: 'primary_label',
        },
        {
            name: '2d',
            lng: 114.026027,
            lat: 22.709087,
            value: '',
            iconType: 'icon_success',
            text: '洗屋',
            textIconType: 'success_label',
        },
    ],
    罗湖区: [
        {
            name: 'a33',
            lng: 114.119271,
            lat: 22.553951,
            value: '人',
            iconType: 'warning',
            text: '人民公园',
            textIconType: 'warning_label',
        },
        {
            name: 'dad23',
            lng: 114.12648,
            lat: 22.544272,
            value: '',
            iconType: 'icon_primary',
            text: '湖贝',
            textIconType: 'primary_label',
        },
        {
            name: 'c34',
            lng: 114.132154,
            lat: 22.542361,
            value: '锦',
            iconType: 'primary',
            text: '文锦',
            textIconType: 'primary_label',
        },
        {
            name: 'd545',
            lng: 114.141099,
            lat: 22.5558,
            value: '',
            iconType: 'icon_success',
            text: '怡景',
            textIconType: 'success_label',
        },
    ],
    福田区: [
        {
            name: '999',
            lng: 114.060581,
            lat: 22.523143,
            options: {
                currentMode: 'text',
                iconType: 'primary',
                label: '测',
                popoverLabel: '测试',
                fontConfig: {
                    size: '24px',
                    family: 'HarmonyOS Sans SC',
                    color: '#fff',
                    weight: 'bold',
                },
            },
        },
        {
            name: 'dad1',
            lng: 114.050475,
            lat: 22.518673,
            options: {
                currentMode: 'text',
                iconType: 'danger',
                label: '测',
                popoverLabel: 'adasdsadasdasdsadasdasdaddasdas',
                fontConfig: {
                    size: '24px',
                    family: 'HarmonyOS Sans SC',
                    color: '#fff',
                    weight: 'bold',
                },
            },
        },
        {
            name: 'b1',
            lng: 114.045403,
            lat: 22.523431,
            options: {
                currentMode: 'text',
                iconType: 'success',
                label: '8',
                popoverLabel: '我',
                fontConfig: {
                    size: '24px',
                    family: 'HarmonyOS Sans SC',
                    color: '#fff',
                    weight: 'bold',
                },
            },
        },
        {
            name: '2d23',
            lng: 114.049383,
            lat: 22.525512,
            options: {
                currentMode: 'text',
                iconType: 'warning',
                label: '9',
                popoverLabel: '测试你勒我真是无语',
                fontConfig: {
                    size: '24px',
                    family: 'HarmonyOS Sans SC',
                    color: '#fff',
                    weight: 'bold',
                },
            },
        },
    ],
}

export interface fontStyle {
    size: string
    family: string
    color: string
    weight:
        | number // 100-900
        | 'normal' // 400
        | 'bold' // 700
        | 'bolder'
        | 'lighter'
    fillText?: (ctx: CanvasRenderingContext2D) => void // 自定义文字的位置
    customCanvasText?: (ctx: CanvasRenderingContext2D, label: string) => void // 自定义文字的渲染
}
export enum CanvasMode {
    Text = 'text',
    Image = 'image',
}
// 默认的水滴类型
export enum CanvasType {
    Danger = 'danger',
    Success = 'success',
    Primary = 'primary',
    Warning = 'warning',
    Hover = 'hover',
}
type BaseCanvasConfigOptions = {
    width?: number
    height?: number
    iconType?: CanvasType
    currentMode?: CanvasMode
    popoverLabel: string
    fontConfig?: fontStyle
    customCanvas?: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void
    customPopoverCanvas?: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void
    borderColor?: string
    backgroundColor?: string
}

export type TextModeConfig = BaseCanvasConfigOptions & {
    currentMode: CanvasMode.Text
    label: string
}

export type ImageModeConfig = BaseCanvasConfigOptions & {
    currentMode: CanvasMode.Image
    uploadedImage: string
}

export type CanvasConfigOptions = TextModeConfig | ImageModeConfig
