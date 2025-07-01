export const code1 = `
<template>
    <n-space>
        <LcRobot value="s1"></LcRobot>
        <LcRobot value="s2"></LcRobot>
        <LcRobot value="s3"></LcRobot>
        <LcRobot value="s4"></LcRobot>
        <LcRobot src="https://b0.bdstatic.com/a6a0f12117cd6488ec39bb46d308b498.jpg@h_1280"></LcRobot>
    </n-space>
</template>
`

export const code2 = `
<template>
    <NSpace>
        // 拖拽机器人
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup draggable></LcRobot>
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup draggable position="absolute"></LcRobot>
        // 其它用法
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup></LcRobot>
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" hid-dir="rt" showPopup></LcRobot>
        <LcRobot width="auto" height="147px"
            src="https://b0.bdstatic.com/2d43e63ca240bdf793814be0dbc9c3a5.jpg@h_1280" trigger="focus"
            hid-dir="rt" showPopup></LcRobot>
    </NSpace>
</template>
`

export const codeStr0 = `
<template>
    <LcMainRobot :animate="true" :stars="defStarData"></LcMainRobot>
</template>

<script setup lang="ts">
import { LcMainRobot, type StarType } from 'lowcode-component/es/education/robot';
export const defStarData: StarType[] = [
    {
        key: '001',
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
        key: '002',
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
    }
];
</script>
`
