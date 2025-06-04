
export const code1 = `
<template>
    <NSpace>
        <LcSkewIndicator label="总教职工人" :value="3336" unit="人" tip="测试tip"></LcSkewIndicator>
        <LcSkewIndicator label="总教职工人" :value="3533336" unit="人"></LcSkewIndicator>

        <LcLargesKewIndicator label="正增长" :value="3336" unit="人" :year-value="30"></LcLargesKewIndicator>
        <LcLargesKewIndicator label="负增长" :value="3336" unit="人" :year-value="-10"></LcLargesKewIndicator>

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
</template>
`;

export const code2 = `
<template>
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
        <LcIndicatorCard :value="23" unit="万" hint="在编教职工(人)"  size="large" value-color="rgba(15, 251, 248, 1)" hint-color="rgba(15, 251, 248, 1)"> </LcIndicatorCard>
        <LcIndicatorCard :value="23" unit="万" hint="在编教职工(人)" size="large" value-color="rgba(15, 251, 248, 1)" hint-color="rgba(15, 251, 248, 1)"></LcIndicatorCard>
    </NSpace>
</template>
`;

export const code3 = `
<template>
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
</template>
`;

export const code4 = `
<template>
    <LcIndicatorCardArrows label="已建成并投入运行设施(个)" :value="20" ></LcIndicatorCardArrows>
    <LcMinitypeCard label="已建成并投入运行设施(个)" :value="20">
    </LcMinitypeCard>
        <LcHumanShapeCard
            :let-data="[
                { title: 'BMI达标', lefValue: 150, rigValue: 5.56 },
                { title: 'BMI达标', lefValue: 150, rigValue: 5.56 },
                { title: 'BMI达标', lefValue: 150, rigValue: 5.56 },
                { title: 'BMI达标', lefValue: 150, rigValue: 5.56 },
            ]"
            :rig-data="[
                { title: '近视人数', lefValue: 150, rigValue: 5.56 },
                { title: '近视人数', lefValue: 150, rigValue: 5.56 },
                { title: '近视人数', lefValue: 150, rigValue: 5.56 },
                { title: '近视人数', lefValue: 150, rigValue: 5.56 },
            ]"
            lef-unit="人"
            rig-unit="%"
        ></LcHumanShapeCard>
</template>
`;