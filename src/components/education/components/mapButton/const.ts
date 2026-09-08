import type { imageryLayerType } from '../map/cesium/modules/type'

const mapModeTiandituUrl = new URL('./images/map-mode-tianditu.webp', import.meta.url).href
const mapModeSatelliteUrl = new URL('./images/map-mode-satellite.webp', import.meta.url).href
const mapModeShenzhenUrl = new URL('./images/map-mode-shenzhen.webp', import.meta.url).href
const mapModeStandardUrl = new URL('./images/map-mode-standard.webp', import.meta.url).href

export const TIANDITU_SUBDOMAINS = ['0', '1', '2', '3', '4', '5', '6', '7']

// 组件库默认使用环境变量，未注入时回落到当前项目使用的 key。
export const TIANDITU_KEY = import.meta.env.VITE_APP_TIANDITU_KEY ?? 'b1c6a2b5b634432f97a5b3891841eb10'

export interface CreateTiandituImageryProvidersOptions {
    Cesium: any
    key?: string
    maxZoom?: number
    layers?: Array<'vec' | 'cva'>
}

const createTiandituProvider = (Cesium: any, key: string, layer: 'vec' | 'cva', maxZoom: number) => {
    return new Cesium.WebMapTileServiceImageryProvider({
        url: `https://t{s}.tianditu.gov.cn/${layer}_w/wmts?tk=${key}`,
        layer,
        style: 'default',
        format: 'tiles',
        tileMatrixSetID: 'w',
        subdomains: TIANDITU_SUBDOMAINS,
        maximumLevel: maxZoom,
        credit: layer === 'cva' ? 'Tianditu Annotation' : 'Tianditu',
    })
}

/**
 * 创建天地图影像和注记两层底图。
 * 业务层只需传入 key 和最大缩放级别，图层拼装由这里统一收口。
 */
export const createTiandituImageryProviders = ({
    Cesium,
    key = TIANDITU_KEY,
    maxZoom = 18,
    layers = ['vec', 'cva'],
}: CreateTiandituImageryProvidersOptions) => {
    return layers.map(layer => createTiandituProvider(Cesium, key, layer, maxZoom))
}

// MapButton 提供组件库默认图层，业务侧传入 imageryLayerList 时会完全覆盖这里。
export const defaultImageryLayerList: imageryLayerType[] = [
    {
        label: '深圳地图',
        value: 'shenzhen',
        url: 'https://jysl.sz.edu.cn:8314/service/api/a466c72ef1ea4f93aae5af7f6ab5b56e/igs/rest/services/SZMAP_Blue_DT_ZW_2024_Q2_4490/WMTSServer?client_id={client_id}&access_token={access_token}',
        providerType: 'wmts',
        preview: mapModeShenzhenUrl,
    },
    {
        label: '卫星影像',
        value: 'satellite',
        url: 'https://jysl.sz.edu.cn:8314/service/api/73325e8f36a742388a55350efe538e4b/igs/rest/services/SZSRI/WMTSServer?client_id={client_id}&access_token={access_token}',
        providerType: 'wmts',
        preview: mapModeSatelliteUrl,
    },
    {
        label: '天地图',
        value: 'tianditu',
        url: 'https://t{s}.tianditu.gov.cn/vec_w/wmts',
        providerType: 'tianditu',
        providerOptions: {
            tiandituLayers: ['vec', 'cva'],
            maximumLevel: 18,
        },
        preview: mapModeTiandituUrl,
    },
    {
        label: '标准地图',
        value: 'standard',
        url: 'https://jysl.sz.edu.cn:8314/service/api/b15c64143e7c4d0ca18d0408c7854312/igs/rest/services/SZMAP/SZMAP_2025_Q1_T1_4490_300DPI/WMTSServer?client_id={client_id}&access_token={access_token}',
        providerType: 'wmts',
        preview: mapModeStandardUrl,
    },
]
