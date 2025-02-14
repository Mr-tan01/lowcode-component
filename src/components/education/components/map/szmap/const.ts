import { Levels } from "./props";

export const szBlockNames = {
    '光明': 'guangming',
    '宝安': 'baoan',
    '龙华': 'longhua',
    '南山': 'nanshan',
    '福田': 'futian',
    '罗湖': 'luohu',
    '盐田': 'yantian',
    '坪山': 'pingshan',
    '龙岗': 'longgang',
    '大鹏新区': 'dapeng',
    '深汕合作区': 'shenshan',
} as const;
export type SzBlockNames = typeof szBlockNames
export type BlockName = SzBlockNames[keyof SzBlockNames];

export const defBlockLableMap = {
    [szBlockNames['光明']]: '光明区',
    [szBlockNames['宝安']]: '宝安区',
    [szBlockNames['龙华']]: '龙华区',
    [szBlockNames['南山']]: '南山区',
    [szBlockNames['福田']]: '福田区',
    [szBlockNames['罗湖']]: '罗湖区',
    [szBlockNames['盐田']]: '盐田区',
    [szBlockNames['坪山']]: '坪山区',
    [szBlockNames['龙岗']]: '龙岗区',
    [szBlockNames['大鹏新区']]: '大鹏新区',
    [szBlockNames['深汕合作区']]: '深汕合作区',
}

export type BlockLableMapType = Record<BlockName, string>;

export const defFloatLevelConfig: Levels = {
    warning: {
        range: [0, 100],
        stop: [
            {
                'stop-color': 'rgb(225, 188, 75)',
                'stop-opacity': 1,
                offset: '0%',
            },
            {
                'stop-color': 'rgb(225, 188, 75)',
                'stop-opacity': 0,
                offset: '100%',
            }
        ],
    },
    series: {
        range: [101, Infinity],
        stop: [
            {
                'stop-color': 'rgb(238, 111, 124)',
                'stop-opacity': 1,
                offset: '0%',
            },
            {
                'stop-color': 'rgb(238, 111, 124)',
                'stop-opacity': 0,
                offset: '100%',
            }
        ],
    },
}