import s1Img from './images/s1.png'
import s2Img from './images/s2.png'
import s3Img from './images/s3.png'
import s4Img from './images/s4.png'
import {
    type Domains,
    type NameTypes,
} from '@/components/education/components/icon'

export const robotBQMap = {
    s1: s1Img,
    s2: s2Img,
    s3: s3Img,
    s4: s4Img,
}

export type RobotBQMapKeys = keyof typeof robotBQMap
type ReadValue<T> = T[keyof T]

export const imageShowTrigger = {
    none: 'none',
    focus: 'focus',
} as const

export type ImageShowTrigger = ReadValue<typeof imageShowTrigger>

export const imageHideDir = {
    lt: 'lt',
    rt: 'rt',
    auto: 'auto',
} as const

export type ImageHideDir = ReadValue<typeof imageHideDir>

export type StarItemType = {
    key?: string | number
    label: string
}

export type StarType = {
    key: string | number
    domain: Domains
    name: NameTypes
    size: number | string
    meta: StarItemType[]
}
export const defStarData: StarType[] = [
    {
        key: '001',
        domain: 'event',
        name: 'dataOverview',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '002',
        domain: 'event',
        name: 'team',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '003',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '004',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '005',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '006',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '007',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '008',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育交流轮岗',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
    {
        key: '009',
        domain: 'event',
        name: 'person2',
        size: '88%',
        meta: [
            {
                label: '教师职业发展',
            },
            {
                label: '教师资源均衡发展分析',
            },
            {
                label: '基础教育校长队伍',
            },
            {
                label: '基础教育教师队伍结构',
            },
        ],
    },
]
