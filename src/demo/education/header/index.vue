<template>
     <LcHeader v-model:index="headerIndex" hideArrow :nav-datas="defNavData"></LcHeader>
     <LcHeader v-model:index="headerIndex" :nav-datas="defNavData"></LcHeader>
</template>
<script lang="ts" setup>
import { LcHeader } from "@/components/education/components/header";
import { ref } from "vue";
const headerIndex = ref(2);
const defNavData = [{
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
                         path: '',
                    },
               ]
          },
          {
               label: '教师队伍建设',
               children: [
                    {
                         label: '基础教育教师队伍结构',
                         path: '',
                    },
                    {
                         label: '基础教育校长队伍',
                         path: '',
                    },
                    {
                         label: '基础教育交流轮岗',
                         path: '',
                    },
                    {
                         label: '基础教育交流轮岗',
                         path: '',
                    },
                    {
                         label: '教师资源均衡发展分析',
                         path: '',
                    },
               ]
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
               ]
          },
     ]
},
{
     label: '治理决策中心',
     path: '/join',
},
{
     label: '发展规划中心',
     path: '/join',
},
     // {
     //     label: '发展规划中心2',
     //     path: '/join',
     // },
     // {
     //     label: '发展规划中心3',
     //     path: '/join',
     // }
];
</script>