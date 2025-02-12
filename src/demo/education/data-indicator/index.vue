<template>
    <div class="demo-data-indicator">
        <Container title="数据指标" description="图表区指标" rswidth="1000px" :code="code1">
            <NSpace>
                <LcSkewIndicator label="总教职工人" :value="3336" unit="人" tip="测试tip"></LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人"></LcSkewIndicator>

                <LcRangeIndicator :data="[{ label: '配备1名的学校', value: 32323 }, { label: '配备2名以上的学校', value: 125 }]"
                    unit="所"></LcRangeIndicator>
                <LcRangeIndicator :data="[{ label: '配备1名的学校', value: 32323 }, { label: '配备2名以上的学校', value: 125 }]"
                    unit="所"></LcRangeIndicator>
            </NSpace>
            <br>
            <NSpace>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" type="tile"></LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" type="tile"></LcSkewIndicator>
            </NSpace>
            <br>
            <NSpace>
                <LcIndicatorCard :value="3457" fixed hint="教职工人(人)" type="noborder"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" fixed hint="教职工人(人)" type="noborder"></LcIndicatorCard>
            </NSpace>
        </Container>
        <Container title="指标卡" description="基本用法" rswidth="1000px" :code="code2">
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
        <Container title="指标卡列表" description="基本用法" rswidth="1000px" :code="code3">
            <NSpace>
                <LcIndicatorList icon="https://b0.bdstatic.com/2d43e63ca240bdf793814be0dbc9c3a5.jpg@h_1280" name="哪吒"
                    :msg="[
                        { label: 'RAP：', value: '天雷滚滚我好怕怕, 劈的我浑身掉渣渣。 突破天劫我笑哈哈, 逆天改命我吹喇叭' },
                        { label: '时间：', value: '2025年2月10日' }
                    ]"></LcIndicatorList>
                <LcIndicatorList icon="https://b0.bdstatic.com/a6a0f12117cd6488ec39bb46d308b498.jpg@h_1280" name="哪吒"
                    :msg="[
                        { label: 'RAP：', value: '天雷滚滚我好怕怕, 劈的我浑身掉渣渣。 突破天劫我笑哈哈, 逆天改命我吹喇叭' },
                        { label: '时间：', value: '2025年2月10日' }
                    ]"></LcIndicatorList>
            </NSpace>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import { NSpace } from 'naive-ui';
import Container from '@/demo/components/help/Container.vue';
import {
    LcSkewIndicator,
    LcIndicatorCard,
    LcRangeIndicator,
    LcIndicatorList,
} from '@/components/education/components/dataIndicator';
import { code1, code2, code3, } from './const';

</script>
<style lang="scss" scoped>
.demo-data-indicator {
    overflow: auto;
}
</style>