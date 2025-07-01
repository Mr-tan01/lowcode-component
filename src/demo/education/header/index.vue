<template>
    <div class="deom-headers">
        <DemoHelpBox rswidth="1620px" :code="demoCodes.code1">
            <LcHeader v-model:index="hideArrorIndex" hide-arrow :nav-datas="defNavData"></LcHeader>
        </DemoHelpBox>
        <DemoHelpBox rswidth="100%" :code="demoCodes.code2">
            <LcHeader v-model:index="headerIndex" :nav-datas="defNavData" :highlight-handler="customHighlightHandler"></LcHeader>
        </DemoHelpBox>
    </div>
</template>
<script lang="ts" setup>
import { LcHeader } from '@/components/education/components/header'
import { demoCodes } from './demo-codes'
import { ref } from 'vue'
import { DemoHelpBox } from '@/components/common/DemoHelpBox'
// 没有箭头固定就是5个 所以索引默认一个2
const hideArrorIndex = ref(2)
const headerIndex = ref(0)
const defNavData = [
    {
        label: '高质量发展中心',
        path: '/home',
    },
    {
        label: '学生发展中心',
        path: '/join',
    },
    {
        label: '教师发展中心',
        path: '/join',
        list: [
            {
                label: '数据概览',
                children: [
                    {
                        label: '数据概览',
                        path: 'a',
                    },
                ],
            },
            {
                label: '教师队伍建设教师队伍建设教师队伍建设教师队伍建设',
                children: [
                    {
                        label: '基础教育教师队伍结构',
                        path: 'b',
                    },
                    {
                        label: '基础教育校长队伍',
                        path: 'c',
                    },
                    {
                        label: '基础教育交流轮岗',
                        path: '',
                    },
                    {
                        label: '教师资源均衡发展分析',
                        path: '',
                    },
                ],
            },
            {
                label: '教师职业发展',
                children: [
                    {
                        label: '教师成长',
                        path: '',
                    },
                    {
                        label: '教师专业技术水平分析',
                        path: '',
                    },
                    {
                        label: '教师风采',
                        path: '',
                    },
                ],
            },
        ],
    },
    {
        label: '治理决策中心',
        path: '/join',
    },
    {
        label: '发展规划中心',
        path: '/join',
    },
]

// 自定义高亮
function customHighlightHandler() {
    return '基础教育教师队伍结构'
}
</script>

<style lang="scss" scoped>
.deom-headers {
    width: 100%;
}
</style>
