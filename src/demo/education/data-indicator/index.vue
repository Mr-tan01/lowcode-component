<template>
    <div class="demo-data-indicator">
        <DemoHelpBox title="数据指标" description="图表区指标" rswidth="1000px" :code="code1">
            <NSpace>
                <LcSkewIndicator label="总教职工人" :value="3336" unit="人" tip="测试tip"> </LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人"></LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" icon-type="teacher">
                    <template #helper>
                        <LcIcon name="teacher"></LcIcon>
                    </template>
                </LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" icon-type="student">
                    <template #helper>
                        <LcIcon name="student"></LcIcon>
                    </template>
                </LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" icon-type="international">
                    <template #helper>
                        <LcIcon name="international"></LcIcon>
                    </template>
                </LcSkewIndicator>

                <LcStudentIndicatorCard label="总教职工人" :value="3533336" unit="人"></LcStudentIndicatorCard>

                <LcLargesKewIndicator label="正增长" :value="100000" :fixed="true" :decimal="2" unit="人" :year-value="30"></LcLargesKewIndicator>
                <LcLargesKewIndicator label="负增长" :value="3336" unit="人" :year-value="-10"></LcLargesKewIndicator>

                <lcArrowIndicators label="心理教师总数" :value="2370" unit="人"></lcArrowIndicators>
                <lcArrowIndicators label="心理教师总数" :icon="'reward'">
                    <template #value> 1:900 </template>
                </lcArrowIndicators>

                <LcRangeIndicator
                    :data="[
                        { label: '配备1名的学校1', value: 0, unit: '1' },
                        { label: '配备2名以上的学校', value: 0, unit: '2' },
                    ]"
                ></LcRangeIndicator>
                <LcRangeIndicator
                    :data="[
                        { label: '配备1名的学校', value: 32323 },
                        { label: '配备2名以上的学校', value: 125 },
                    ]"
                ></LcRangeIndicator>
            </NSpace>
            <br />
            <NSpace>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" type="tile"></LcSkewIndicator>
                <LcSkewIndicator label="总教职工人" :value="3533336" unit="人" type="tile"></LcSkewIndicator>
            </NSpace>
            <br />
            <NSpace>
                <LcIndicatorCard :value="3457" fixed hint="教职工人(人)" type="noborder"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" fixed hint="教职工人(人)" type="noborder"></LcIndicatorCard>
            </NSpace>
            <br />
            <NSpace>
                <LcPlanningIndicators :data="data"></LcPlanningIndicators>
            </NSpace>
            <br />
            <NSpace>
                <lcBimodalIndex
                    :data="[
                        { label: '双一流学科', value: '数学' },
                        { label: '关联学校', value: '南方科技大学' },
                    ]"
                ></lcBimodalIndex>
                <lcBimodalIndex
                    :data="[
                        { label: '只能保留两组', value: '只能保留两组' },
                        { label: '只能保留两组', value: '只能保留两组' },
                        { label: '学科专业', value: '数学' },
                    ]"
                ></lcBimodalIndex>
            </NSpace>
        </DemoHelpBox>

        <DemoHelpBox title="指标卡" description="基本用法" rswidth="1000px" :code="code4">
            <NSpace>
                <LcIndicatorCardArrows label="已建成并投入运行设施(个)" :value="20"></LcIndicatorCardArrows>
                <LcMinitypeCard label="已建成并投入运行设施(个)" :value="20"></LcMinitypeCard>
            </NSpace>
        </DemoHelpBox>
        <DemoHelpBox title="指标卡" description="基本用法" rswidth="1000px" :code="code2">
            <NSpace>
                <LcIndicatorCard :value="3457" fixed hint="教职工人(人)"> </LcIndicatorCard>
                <LcIndicatorCard :value="3457" fixed hint="在编教职工(人)"></LcIndicatorCard>
                <LcIndicatorCard :value="102020.22" fixed :decimal="2" hint="公办教师(人)"></LcIndicatorCard>
                <LcIndicatorCard :value="50000" fixed hint="民办教师(人)"></LcIndicatorCard>
            </NSpace>
            <br />
            <NSpace>
                <LcIndicatorCard :value="3457" hint="教职工人(人)" size="medium"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" hint="在编教职工(人)" size="medium"></LcIndicatorCard>
                <LcIndicatorCard :value="3457" hint="公办教师(人)" size="medium"></LcIndicatorCard>
            </NSpace>
            <br />
            <NSpace>
                <LcIndicatorCard :value="30" unit="万" hint="教职工人(人)" size="large"></LcIndicatorCard>
                <LcIndicatorCard :value="23" unit="万" hint="在编教职工(人)" size="large"></LcIndicatorCard>
                <LcIndicatorCard :value="23" unit="万" hint="在编教职工(人)" size="large" value-color="rgba(15, 251, 248, 1)" hint-color="rgba(15, 251, 248, 1)"> </LcIndicatorCard>
                <LcIndicatorCard :value="23" unit="万" hint="在编教职工(人)" size="large" value-color="rgba(15, 251, 248, 1)" hint-color="rgba(15, 251, 248, 1)"> </LcIndicatorCard>
            </NSpace>
        </DemoHelpBox>
        <DemoHelpBox title="指标卡列表" description="基本用法" rswidth="1000px" :code="code3">
            <NSpace>
                <LcIndicatorList
                    icon="https://b0.bdstatic.com/2d43e63ca240bdf793814be0dbc9c3a5.jpg@h_1280"
                    name="哪吒"
                    :msg="[
                        {
                            label: 'RAP：',
                            value: '天雷滚滚我好怕怕, 劈的我浑身掉渣渣。 突破天劫我笑哈哈, 逆天改命我吹喇叭',
                        },
                        { label: '时间：', value: '2025年2月10日' },
                    ]"
                ></LcIndicatorList>
                <LcIndicatorList
                    icon="https://b0.bdstatic.com/a6a0f12117cd6488ec39bb46d308b498.jpg@h_1280"
                    name="哪吒"
                    :msg="[
                        {
                            label: 'RAP：',
                            value: '天雷滚滚我好怕怕, 劈的我浑身掉渣渣。 突破天劫我笑哈哈, 逆天改命我吹喇叭',
                        },
                        { label: '时间：', value: '2025年2月10日' },
                    ]"
                ></LcIndicatorList>
            </NSpace>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { NSpace } from "naive-ui";
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { LcIcon } from "@/components/education/components/icon";
import {
    LcSkewIndicator,
    LcIndicatorCard,
    LcRangeIndicator,
    LcIndicatorList,
    LcPlanningIndicators,
    lcBimodalIndex,
    lcArrowIndicators,
    LcLargesKewIndicator,
    LcIndicatorCardArrows,
    LcMinitypeCard,
} from "@/components/education/components/dataIndicator";
import { code1, code2, code3, code4 } from "./demo-codes";
import Icon from "./image/test.png";
const data = {
    header: "学校建设",
    icon: Icon,
    leftItem: {
        title: "规划学生用地",
        value: 11111,
        unit: "个",
        decimal: 0,
    },
    righItem: {
        title: "建设学生用地",
        value: 11111,
        unit: "个",
        decimal: 0,
    },
};
</script>
<style lang="scss" scoped>
.demo-data-indicator {
    overflow: auto;
}
</style>
