export enum MapType {
    shengzheng = '深圳市',
    futian = '福田区',
    nanshan = '南山区',
    longhu = '龙华区',
    baoan = '宝安区',
    luohu = '罗湖区',
    yantian = '盐田区',
    longgang = '龙岗区',
    pingshan = '坪山区',
    guangming = '光明区',
    dapeng = '大鹏新区',
    szsp = '深汕合作区',
}

export const MapImagesMap = {
    [MapType.shengzheng]: new URL('../images/map/深圳市.svg', import.meta.url).href,
    [MapType.futian]: new URL('../images/map/福田区.svg', import.meta.url).href,
    [MapType.nanshan]: new URL('../images/map/南山区.svg', import.meta.url).href,
    [MapType.longhu]: new URL('../images/map/龙华区.svg', import.meta.url).href,
    [MapType.baoan]: new URL('../images/map/宝安区.svg', import.meta.url).href,
    [MapType.luohu]: new URL('../images/map/罗湖区.svg', import.meta.url).href,
    [MapType.yantian]: new URL('../images/map/盐田区.svg', import.meta.url).href,
    [MapType.longgang]: new URL('../images/map/龙岗区.svg', import.meta.url).href,
    [MapType.pingshan]: new URL('../images/map/坪山区.svg', import.meta.url).href,
    [MapType.guangming]: new URL('../images/map/光明区.svg', import.meta.url).href,
    [MapType.dapeng]: new URL('../images/map/大鹏新区.svg', import.meta.url).href,
    [MapType.szsp]: new URL('../images/map/深汕合作区.svg', import.meta.url).href,
}
