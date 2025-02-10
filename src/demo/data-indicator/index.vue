<template>
    <div class="demo-data-indicator">
        <Container title="数据指标" description="图表区指标" rswidth="1000px">
            <NSpace>
                <LcSkewIndicator label="总教职工人" :value="3336" unit="人"></LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人"></LcSkewIndicator>
            </NSpace>
        </Container>
        <Container title="指标卡" description="基本用法" rswidth="1000px">
            <NSpace>
                <LcIndicatorCard :value="3457" fixed hint="教职工人(人)"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" fixed hint="在编教职工(人)"></LcIndicatorCard>
                <LcIndicatorCard :value="102020.22" fixed :decimal="2" hint="公办教师(人)"></LcIndicatorCard>
                <LcIndicatorCard :value="50000" fixed hint="民办教师(人)"></LcIndicatorCard>
            </NSpace>
            <br>
            <NSpace>
                <LcIndicatorCard :value="3457" hint="教职工人(人)" size="medium"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" hint="在编教职工(人)" size="medium"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" hint="公办教师(人)" size="medium"></LcIndicatorCard>
            </NSpace>
            <br>
            <NSpace>
                <LcIndicatorCard :value="30" unit="万" hint="教职工人(人)" size="large"></LcIndicatorCard>
                <LcIndicatorCard :value="23" unit="万" hint="在编教职工(人)" size="large"></LcIndicatorCard>
            </NSpace>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '../components/help/Container.vue';
import { LcSkewIndicator, LcIndicatorCard } from '@/components/education/components/dataIndicator';

</script>
