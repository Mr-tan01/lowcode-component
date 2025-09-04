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

const test = [
    {
        path: '/bigscreen/governanceDecisionsCenter',
        label: '治理决策中心',
        list: [
            {
                path: '/bigscreen/governanceDecisionsCenter/dataOverview',
                label: '数据概览',
                children: [
                    { path: '/bigscreen/governanceDecisionsCenter/educationalDataOverview/educationalBigData', label: '教育大数据', children: [] },
                ],
            },
            {
                path: '/bigscreen/governanceDecisionsCenter/supervisionAndEvaluation',
                label: '督导评测',
                children: [
                    {
                        path: '/bigscreen/governanceDecisionsCenter/supervisionAndEvaluation/preschoolMonitoring',
                        label: '学前教育质量监测',
                        children: [],
                    },
                    {
                        path: '/bigscreen/governanceDecisionsCenter/supervisionAndEvaluation/analysisOfEducationalQuality',
                        label: '义务教育质量分析',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/governanceDecisionsCenter/riskIdentification',
                label: '校园安全',
                children: [{ path: '/bigscreen/governanceDecisionsCenter/riskIdentification/schoolBusMonitoring', label: '校车监控', children: [] }],
            },
        ],
    },
    {
        path: '/bigscreen/developmentPlanningCenter',
        label: '发展规划中心',
        list: [
            {
                path: '/bigscreen/developmentPlanningCenter/overview',
                label: '数据概览',
                children: [
                    { path: '/bigscreen/developmentPlanningCenter/overview/conditionGuaranteeOverview', label: '发展规划数据概览', children: [] },
                ],
            },
            {
                path: '/bigscreen/developmentPlanningCenter/educationGuarantee',
                label: '办学条件保障',
                children: [
                    {
                        path: '/bigscreen/developmentPlanningCenter/educationGuarantee/conditionGuarantee',
                        label: '义务教育办学条件保障',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/developmentPlanningCenter/planningBlueprint',
                label: '规划蓝图',
                children: [
                    { path: '/bigscreen/developmentPlanningCenter/planningBlueprint/conditionGuarantee', label: '学校点位分布', children: [] },
                ],
            },
        ],
    },
    {
        path: '/bigscreen/highQualityDevelopmentCenter',
        label: '高质量发展中心',
        list: [
            {
                path: '/bigscreen/highQualityDevelopmentCenter/highQualityOverview',
                label: '数据概览',
                children: [{ path: '/bigscreen/highQualityDevelopmentCenter/highQualityOverview/overview', label: '数据概览', children: [] }],
            },
            {
                path: '/bigScreen/centerscreen/decisionCenter/index',
                label: '民办教育数据概览',
                children: [
                    {
                        path: '/bigscreen/highQualityDevelopmentCenter/preSchoolEducation/overviewOfPrivateEducation',
                        label: '民办教育数据概览',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/highQualityDevelopmentCenter/preSchoolEducation',
                label: '学前教育数据概览',
                children: [
                    { path: '/bigscreen/highQualityDevelopmentCenter/preSchoolEducation/overview', label: '学前教育数据概览', children: [] },
                    {
                        path: '/bigscreen/highQualityDevelopmentCenter/preSchoolEducation/overviewOfPrivateEducation',
                        label: '民办教育数据概览',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/highQualityDevelopmentCenter/compulsoryEducation',
                label: '义务教育数据概览',
                children: [{ path: '/bigscreen/highQualityDevelopmentCenter/compulsoryEducation/overview', label: '义务教育数据概览', children: [] }],
            },
            {
                path: '/bigscreen/highQualityDevelopmentCenter/overviewOfSecondaryVocationalEducation',
                label: '中职教育数据概览',
                children: [
                    {
                        path: '/bigscreen/highQualityDevelopmentCenter/overviewOfSecondaryVocationalEducation/secondaryVocationalEducation',
                        label: '中职教育数据概览',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/highQualityDevelopmentCenter/highSchoolEducation',
                label: '高中教育数据概览',
                children: [{ path: '/bigscreen/highQualityDevelopmentCenter/highSchoolEducation/overview', label: '高中教育数据概览', children: [] }],
            },
            {
                path: '/bigscreen/highQualityDevelopmentCenter/higherEducation',
                label: '高等教育',
                children: [
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/dataSnapshot', label: '高等教育数据概览', children: [] },
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/researchPlatform', label: '科研平台', children: [] },
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/teacherResource', label: '师资力量', children: [] },
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/internationalCooperation', label: '国际合作', children: [] },
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/educationalConditions', label: '经费及办学条件', children: [] },
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/subjectMajor', label: '学科专业', children: [] },
                    { path: '/bigscreen/highQualityDevelopmentCenter/higherEducation/studentEmployment', label: '学生培养及就业创业', children: [] },
                ],
            },
            {
                path: '/bigscreen/governanceDecisionsCenter/riskIdentification',
                label: '校外培训机构监管',
                children: [
                    {
                        path: '/bigscreen/governanceDecisionsCenter/riskIdentification/institutionalSupervision',
                        label: '教培机构数币管理',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/governanceDecisionsCenter/riskIdentification',
                label: '校外培训机构监管',
                children: [
                    {
                        path: '/bigscreen/governanceDecisionsCenter/riskIdentification/institutionalSupervision',
                        label: '教培机构数币管理',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigscreen/governanceDecisionsCenter/riskIdentification',
                label: '校外培训机构监管',
                children: [
                    {
                        path: '/bigscreen/governanceDecisionsCenter/riskIdentification/institutionalSupervision',
                        label: '教培机构数币管理',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        path: '/bigscreen/studentDevelopmentCenter',
        label: '学生发展中心',
        list: [
            {
                path: '/bigscreen/studentDevelopmentCenter/dataOverview',
                label: '数据概览',
                children: [{ path: '/bigscreen/studentDevelopmentCenter/dataOverview/studentDataOverview', label: '学生发展数据概览', children: [] }],
            },
            {
                path: '/bigscreen/studentDevelopmentCenter/educationSimultaneously',
                label: '五育并举',
                children: [
                    {
                        path: '/bigscreen/studentDevelopmentCenter/educationSimultaneously/psychologicalHealthEducation',
                        label: '学生心理健康教育',
                        children: [],
                    },
                    {
                        path: '/bigscreen/studentDevelopmentCenter/educationSimultaneously/healthAndFitnessEducation',
                        label: '医教体教',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        path: '/bigscreen/teacherDevelopmentCenter',
        label: '教师发展中心',
        list: [
            {
                path: '/bigscreen/teacherDevelopmentCenter/dataOverview',
                label: '数据概览',
                children: [
                    { path: '/bigscreen/teacherDevelopmentCenter/dataOverview/overviewOfTeacherData', label: '基础教育教师数据概览', children: [] },
                ],
            },
            {
                path: '/bigscreen/teacherDevelopmentCenter/teacherDevelopment',
                label: '教师队伍建设',
                children: [
                    {
                        path: '/bigscreen/teacherDevelopmentCenter/teacherDevelopment/teachingStaffStructure',
                        label: '基础教育专任教师队伍结构',
                        children: [],
                    },
                    { path: '/bigscreen/teacherDevelopmentCenter/teacherDevelopment/teachersLook', label: '教师风采', children: [] },
                    {
                        path: '/bigscreen/teacherDevelopmentCenter/teacherDevelopment/teachersResourcesDistribution',
                        label: '义务教育教师资源均衡分配',
                        children: [],
                    },
                ],
            },
            {
                path: '/bigScreen/centerscreen/decisionCenter/index',
                label: '教育帮扶',
                children: [
                    { path: '/bigscreen/governanceDecisionsCenter/riskIdentification/EducationalAssistance', label: '教育帮扶', children: [] },
                ],
            },
        ],
    },
]
// 没有箭头固定就是5个 所以索引默认一个2
const hideArrorIndex = ref(2)
const headerIndex = ref(0)
const defNavData = test

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
