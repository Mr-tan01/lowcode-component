const rankingListCodeString = `
const rankingList: RankingRecord[] = [
    {
        label: '类目名称一',
        value: 23.8,
        unit: '单位',
    },
    {
        label: '类目名称二',
        value: 21.1,
        unit: '单位',
        formatter: '{b}'
    },
    {
        label: '类目名称三',
        value: 16.8,
        unit: '单位',
    },
    {
        label: '类目名称四',
        value: 16.8,
        unit: '单位',
    }
];
`
export const demoCodes = {
    code1: `
<template>
    <LcRanking :list="rankingList"></LcRanking>
</template>

<script lang="ts" setup>  
    import { LcRanking, type RankingRecord } from 'lowcode-component/es/education/ranking';
    ${rankingListCodeString}
</script>
    `,
    code2: `
<template>
    <LcRanking :list="rankingList" type="proprotion" :showBall="false"></LcRanking>
</template>

<script lang="ts" setup>  
    import { LcRanking, type RankingRecord } from 'lowcode-component/es/education/ranking';
    ${rankingListCodeString}
</script>
        `,
}
