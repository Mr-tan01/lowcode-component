<template>
    <div class="demo-ranking">
        <Container title="排行条形图" description="深圳教育项目-排行条形图" rswidth="806px" rs-height="300px">
            <LcRanking :list="rankingList"></LcRanking>
        </Container>
        <Container title="排行占比图" description="深圳教育项目-排行占比图" rswidth="806px" rs-height="300px">
            <LcRanking :list="rankingList" type="proprotion" :showBall="false"></LcRanking>
        </Container>
    </div>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import { LcRanking, type RankingRecord } from '~/es/education/ranking';

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
</script>

<style lang="scss" scoped>
.demo-ranking {
    overflow: auto;
}
</style>