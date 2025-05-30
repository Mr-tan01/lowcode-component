import { SceneMode, type SkyAtmosphere, type SkyBox, type Color, type Entity, type Cartesian3, type PolylineDashMaterialProperty } from "cesium";
import shenZhen from "./深圳市（各区）.json";

export const areaData = {
    深圳市: { lng: 114.063109, lat: 22.544522, position: [] },
    光明区: { lng: 113.91634116522685, lat: 22.77147302900205, position: shenZhen.features[0] },
    坪山区: { lng: 114.35193598950553, lat: 22.688581371110487, position: shenZhen.features[1] },
    龙华区: { lng: 114.01646181978259, lat: 22.68598921119512, position: shenZhen.features[2] },
    盐田区: { lng: 114.26346681948235, lat: 22.604011992313712, position: shenZhen.features[3] },
    大鹏新区: { lng: 114.47102586735873, lat: 22.609556483035444, position: shenZhen.features[4] },
    宝安区: { lng: 113.86094318766183, lat: 22.67707802403516, position: shenZhen.features[6] },
    龙岗区: { lng: 114.22287589397995, lat: 22.69074582647359, position: shenZhen.features[5] },
    南山区: { lng: 113.93782045247285, lat: 22.564987074695313, position: shenZhen.features[7] },
    福田区: { lng: 114.04493542407288, lat: 22.551374363514963, position: shenZhen.features[8] },
    罗湖区: { lng: 114.14519824740296, lat: 22.58076759041863, position: shenZhen.features[9] },
};

export type baseIconType = "primary" | "success" | "warning" | "danger";
export type changeIconType = "icon_success" | "icon_primary";
export type iconType = baseIconType | changeIconType;
export type textIconType = `${baseIconType}_label`;

export interface pointType {
    name: string; // 唯一name属性 获取唯一entity实例 切勿重复
    lng: number;
    lat: number;
    value?: string; // 文字内容
    iconType?: iconType | string; // 点图标
    text?: string; // 窗体文字内容
    textIconType?: textIconType | string; // 窗体图标
    changeIconType?: changeIconType | string; // 变动图标
    changeTextIconType?: textIconType | string; // 窗体变动图标
}

export interface polygonType {
    name: string; //唯一name属性 获取唯一entity实例 切勿重复
    polyline: {
        positions: Cartesian3; // 线条位置
        material?: PolylineDashMaterialProperty; // 线条类型
        width?: number; // 线条宽度
    };
    polygon: {
        hierarchy: Cartesian3; // polygon位置
        material?: Color; // 背景色
        outline?: boolean; // 状态
        outlineColor?: boolean; // 颜色
    };
}

export interface controlStatusType {
    timeline?: boolean; //时间轴控件
    animation?: boolean; //动画控件
    geocoder?: boolean; //地理编码搜索框
    homeButton?: boolean; //初始视图
    sceneModePicker?: boolean; //场景模式切换
    baseLayerPicker?: boolean; //底图图层选择器
    navigationHelpButton?: boolean; //导航帮助按钮
    fullscreenButton?: boolean; //全屏按钮
    skyBox?: SkyBox; //天空盒（星空背景）
    skyAtmosphere?: SkyAtmosphere; //大气效果
    sceneMode?: SceneMode; //3D 模式
    scene3DOnly?: boolean; //强制使用 3D 模式
    orderIndependentTranslucency?: boolean; //顺序无关半透明
    selectionIndicator?: boolean; //point高亮框
    contextOptions?: {
        allowTextureFilterAnisotropic?: boolean; // 禁用各向异性过滤
        webgl?: {
            alpha?: boolean; // 提高性能
            antialias?: boolean; // 启用抗锯齿
            preserveDrawingBuffer?: boolean; // 允许截图
        };
    };
}

export interface basicConfigType {
    minZoom?: number;
    maxZoom?: number;
    baseColor?: Color;
    clusteringEnabled?: boolean; // 启用聚合
    clusteringPixelRange?: number; // 聚合像素范围
    clusteringMinimumClusterSize?: number; // 最小聚合数量
    cameraLimitsEnabled?: boolean; // 启用相机控制限制
}

export interface optionType {
    config: basicConfigType;
    defaultShowState: boolean;
    flyToHeight: number;
    offsetState: boolean;
    pointHandler: (value: Entity) => void;
    limitHeightHandler: (value: number) => void;
    loadTileLayerHandler: (status: boolean) => void;
}

export type changeModelType = "polygonClickHandler" | "setCameraHeight" | "setInitialView" | "setViewerLayer" | "ZoomIn" | "ZoomOut" | "clearEntity";

export type changeModelParamType = {
    polygonClickHandler: string;
    setCameraHeight: string;
    setInitialView: { destination: Cartesian3; duration?: number };
    setViewerLayer: string;
    ZoomIn: string;
    ZoomOut: string;
    clearEntity: { key: "pointEntities" | "polygonEntities"; type: "dataSource" | "viewer" };
};

export const testData = [
    {
        schoolType: "小学",
        schoolName: "深圳市福田区红岭实验小学",
        schoolLng: "114.003233",
        schoolLat: "22.549864",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区深圳中学梅香学校(小学部)",
        schoolLng: "114.045062",
        schoolLat: "22.574704",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园小学(荔园教育集团)通新岭校区",
        schoolLng: "114.099783",
        schoolLat: "22.559266",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园小学(荔园教育集团)百花校区",
        schoolLng: "114.099710",
        schoolLat: "22.558490",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园小学(荔园教育集团)玮鹏校区",
        schoolLng: "114.100770",
        schoolLat: "22.549100",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园小学(荔园教育集团)众孚校区",
        schoolLng: "114.055110",
        schoolLat: "22.525970",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园小学(荔园教育集团)园岭校区",
        schoolLng: "114.103560",
        schoolLat: "22.558880",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园小学(荔园教育集团)八卦岭校区",
        schoolLng: "114.07371",
        schoolLat: "22.552264",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区园岭教育集团园岭小学",
        schoolLng: "114.104758",
        schoolLat: "22.556459",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学(香蜜湖)",
        schoolLng: "114.022670",
        schoolLat: "22.556470",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学(天骄)",
        schoolLng: "114.049370",
        schoolLat: "22.557570",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学(狮岭)",
        schoolLng: "114.048353",
        schoolLat: "22.555053",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学(水围)",
        schoolLng: "114.070411",
        schoolLat: "22.526598",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学",
        schoolLng: "114.044699",
        schoolLat: "22.551534",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学(深南校区)",
        schoolLng: "114.051110",
        schoolLat: "22.546450",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区荔园外国语小学(景田)",
        schoolLng: "114.050270",
        schoolLat: "22.549190",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区园岭教育集团园岭外国语小学",
        schoolLng: "114.09696",
        schoolLat: "22.558084",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区园岭教育集团园岭实验小学",
        schoolLng: "114.108420",
        schoolLat: "22.559681",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区园岭教育集团百花小学(南校区)",
        schoolLng: "114.095660",
        schoolLat: "22.559080",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区东海实验小学",
        schoolLng: "114.026294",
        schoolLat: "22.547667",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福华小学",
        schoolLng: "114.075976",
        schoolLat: "22.539080",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福民小学",
        schoolLng: "114.075643",
        schoolLat: "22.527591",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福南小学",
        schoolLng: "114.086543",
        schoolLat: "22.536634",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福强小学",
        schoolLng: "114.058660",
        schoolLat: "22.520510",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福田小学",
        schoolLng: "114.088995",
        schoolLat: "22.542685",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福新小学",
        schoolLng: "114.057263",
        schoolLat: "22.538379",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区福苑小学",
        schoolLng: "114.056860",
        schoolLat: "22.514067",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区文天祥小学(岗厦)",
        schoolLng: "114.075900",
        schoolLat: "22.542083",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区华新小学",
        schoolLng: "114.088992",
        schoolLat: "22.565105",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区皇岗小学",
        schoolLng: "114.065249",
        schoolLat: "22.533084",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区景莲小学",
        schoolLng: "114.054805",
        schoolLat: "22.565233",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区景龙小学",
        schoolLng: "114.052658",
        schoolLat: "22.558455",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区景鹏小学",
        schoolLng: "114.053822",
        schoolLat: "22.548597",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区外国语小学",
        schoolLng: "114.041305",
        schoolLat: "22.563351",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区莲花小学",
        schoolLng: "114.074899",
        schoolLat: "22.553001",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区绿洲小学",
        schoolLng: "114.046646",
        schoolLat: "22.529575",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区梅华小学",
        schoolLng: "114.070381",
        schoolLat: "22.578079",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区梅丽小学",
        schoolLng: "114.064480",
        schoolLat: "22.572382",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区梅林小学",
        schoolLng: "114.050586",
        schoolLat: "22.570715",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区梅山小学",
        schoolLng: "114.037002",
        schoolLat: "22.571280",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区美莲小学",
        schoolLng: "114.077322",
        schoolLat: "22.557892",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区南华小学",
        schoolLng: "114.096824",
        schoolLat: "22.539170",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区南园小学(东校区)",
        schoolLng: "114.100947",
        schoolLat: "22.542435",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区南园小学(西校区)",
        schoolLng: "114.101520",
        schoolLat: "22.543090",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区全海小学",
        schoolLng: "114.053588",
        schoolLat: "22.521153",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区上步小学",
        schoolLng: "114.105266",
        schoolLat: "22.544225",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区文天祥小学",
        schoolLng: "114.073500",
        schoolLat: "22.543280",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区下沙小学",
        schoolLng: "114.030109",
        schoolLat: "22.532071",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区新莲小学",
        schoolLng: "114.058896",
        schoolLat: "22.565344",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区新沙小学",
        schoolLng: "114.051297",
        schoolLat: "22.528697",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区新洲小学",
        schoolLng: "114.055618",
        schoolLat: "22.530818",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区益强小学",
        schoolLng: "114.051694",
        schoolLat: "22.550654",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区益田小学",
        schoolLng: "114.059233",
        schoolLat: "22.517884",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区丽中小学",
        schoolLng: "114.073932",
        schoolLat: "22.531435",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区红岭实验小学(侨安)",
        schoolLng: "114.010890",
        schoolLat: "22.555700",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区红岭教育集团华富实验学校",
        schoolLng: "114.089293",
        schoolLat: "22.559295",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区外国语学校(香蜜)",
        schoolLng: "114.029195",
        schoolLat: "22.562188",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区外国语学校(福保)",
        schoolLng: "114.066367",
        schoolLat: "22.519512",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区石厦学校(小学部)",
        schoolLng: "114.059280",
        schoolLat: "22.530080",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区石厦学校(中学部)",
        schoolLng: "114.057575",
        schoolLat: "22.529566",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区彩田学校",
        schoolLng: "114.07019",
        schoolLat: "22.567534",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区实验教育集团翰林学校",
        schoolLng: "114.075317",
        schoolLat: "22.578989",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区皇岗创新实验学校",
        schoolLng: "114.071659",
        schoolLat: "22.531633",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区实验教育集团黄埔学校(小学部)",
        schoolLng: "114.060260",
        schoolLat: "22.548700",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区实验教育集团黄埔学校(中学部)",
        schoolLng: "114.059972",
        schoolLat: "22.552933",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区第二实验学校(西校区)",
        schoolLng: "114.090870",
        schoolLat: "22.540630",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区第二实验学校(东校区)",
        schoolLng: "114.090992",
        schoolLat: "22.54069",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区第二实验学校(北校区)",
        schoolLng: "114.067820",
        schoolLat: "22.580620",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区贝赛思学校",
        schoolLng: "114.054071",
        schoolLat: "22.535592",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区城市绿洲学校(小学部)",
        schoolLng: "114.081705",
        schoolLat: "22.547255",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区城市绿洲学校(初中部)",
        schoolLng: "114.068714",
        schoolLat: "22.523939",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区方方乐趣中英文学校",
        schoolLng: "114.049623",
        schoolLat: "22.522908",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区福港艺林学校",
        schoolLng: "114.030125",
        schoolLat: "22.533226",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区美林学校",
        schoolLng: "114.052337",
        schoolLat: "22.574776",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区益田花园学校",
        schoolLng: "114.064464",
        schoolLat: "22.519904",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "小学",
        schoolName: "深圳市福田区红岭实验学校(上沙)小学部",
        schoolLng: "114.051057",
        schoolLat: "22.717832",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区红岭实验学校(上沙)东校区",
        schoolLng: "114.048516",
        schoolLat: "22.532775",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区致远学校",
        schoolLng: "114.079892",
        schoolLat: "22.575564",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区实验教育集团福龙学校",
        schoolLng: "114.022637",
        schoolLat: "22.568596",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "九年一贯制学校",
        schoolName: "深圳市福田区第二实验学校(皇御苑)",
        schoolLng: "114.080890",
        schoolLat: "22.530100",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区外国语学校",
        schoolLng: "114.073972",
        schoolLat: "22.550114",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区莲花中学北校区",
        schoolLng: "114.075335",
        schoolLat: "22.556724",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区莲花中学南校区",
        schoolLng: "114.071496",
        schoolLat: "22.535695",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区深大附中创新中学",
        schoolLng: "114.058913",
        schoolLat: "22.566812",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区红岭教育集团华富中学",
        schoolLng: "114.088446",
        schoolLat: "22.565092",
        area: "福田区",
        isQualify: 1,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区梅山中学",
        schoolLng: "114.038177",
        schoolLat: "22.572031",
        area: "福田区",
        isQualify: 0,
    },
    {
        schoolType: "初级中学",
        schoolName: "深圳市福田区红岭实验学校(新洲)",
        schoolLng: "114.046939",
        schoolLat: "22.531731",
        area: "福田区",
        isQualify: 0,
    },
];

export const pointInfo = {
    宝安区: [
        {
            name: "a",
            lng: 113.808156,
            lat: 22.636116,
            value: "机",
            text: "深圳宝安国际机场是个大机场哟！",
        },
        {
            name: "dad",
            lng: 113.815194,
            lat: 22.666691,
            value: "",
            iconType: "icon_primary",
            text: "怀德社区怀德社区怀德社区",
            textIconType: "primary_label",
        },
        {
            name: "c",
            lng: 113.829785,
            lat: 22.663998,
            value: "峰",
            iconType: "primary",
            text: "美林峰美林峰",
        },
        {
            name: "d",
            lng: 113.827554,
            lat: 22.686886,
            value: "",
            iconType: "icon_success",
            text: "立湖新公园园园美林峰美林峰",
            textIconType: "success_label",
            changeIconType: "icon_primary",
        },
    ],
    龙华区: [
        {
            name: "a1",
            lng: 114.056926,
            lat: 22.710116,
            value: "澜",
            iconType: "warning",
            text: "观澜！",
            textIconType: "warning_label",
        },
        {
            name: "dad1",
            lng: 1114.057785,
            lat: 22.702911,
            value: "",
            iconType: "icon_primary",
            text: "观城社区",
            textIconType: "primary_label",
        },
        {
            name: "b1",
            lng: 114.054695,
            lat: 22.714946,
            value: "医",
            iconType: "danger",
            text: "龙华区中心医院",
            textIconType: "danger_label",
        },
        {
            name: "c1",
            lng: 114.046627,
            lat: 22.69531,
            value: "院",
            iconType: "primary",
            text: "易同院",
            textIconType: "primary_label",
        },
        {
            name: "2d",
            lng: 114.026027,
            lat: 22.709087,
            value: "",
            iconType: "icon_success",
            text: "洗屋",
            textIconType: "success_label",
        },
    ],
    罗湖区: [
        {
            name: "a33",
            lng: 114.119271,
            lat: 22.553951,
            value: "人",
            iconType: "warning",
            text: "人民公园",
            textIconType: "warning_label",
        },
        {
            name: "dad23",
            lng: 114.12648,
            lat: 22.544272,
            value: "",
            iconType: "icon_primary",
            text: "湖贝",
            textIconType: "primary_label",
        },
        {
            name: "c34",
            lng: 114.132154,
            lat: 22.542361,
            value: "锦",
            iconType: "primary",
            text: "文锦",
            textIconType: "primary_label",
        },
        {
            name: "d545",
            lng: 114.141099,
            lat: 22.5558,
            value: "",
            iconType: "icon_success",
            text: "怡景",
            textIconType: "success_label",
        },
    ],
    福田区: [
        {
            name: "a12323",
            lng: 114.060581,
            lat: 22.523143,
            value: "皇",
            iconType: "primary",
            text: "皇岗村",
            textIconType: "primary_label",
        },
        {
            name: "dad1",
            lng: 114.050475,
            lat: 22.518673,
            value: "",
            iconType: "icon_primary",
            text: "深圳市幼妇保健院",
            textIconType: "primary_label",
        },
        {
            name: "b1",
            lng: 114.045403,
            lat: 22.523431,
            value: "小",
            iconType: "success",
            text: "新沙小学",
            textIconType: "success_label",
        },
        {
            name: "2d23",
            lng: 114.049383,
            lat: 22.525512,
            value: "",
            iconType: "icon_success",
            text: "新洲小学",
            textIconType: "success_label",
        },
    ],
};
