export const code1 = `
<template>
    <LcPageTitle>
        数据概览
    </LcPageTitle>
    <LcPageTitle>
        基础教师队伍结构
    </LcPageTitle>
</template>

<script lang="ts" setup>
import { LcPageTitle, LcTextTitle } from 'lowcode-component/es/education/pageTitle';
</script>
`;

export const decoratorCode = `
<template>
    <LcDecoratorTitle text="标题文字最多十二个字符"></LcDecoratorTitle>
    <LcDecoratorTitle text="标题文字最多十二个字符" dir="rtl"></LcDecoratorTitle>
    <LcDecoratorTitle text="标题文字最多十二个字符标题文字最多十二个字符标题文字最多十二个字符" ></LcDecoratorTitle>
    <LcDecoratorTitle text="插槽插槽插槽 helper" dir="rtl">
        <template #helper>
            <LcIcon name="pause" :size="21"></LcIcon>
        </template>
    </LcDecoratorTitle>
</template>

<script lang="ts" setup>
import { LcDecoratorTitle } from 'lowcode-component/es/education/decoratorTitle';
import { LcIcon } from 'lowcode-component/es/education/icon';
</script>
`;

export const chartTitleCode = `
<template>
    <LcChartTitle text="优质均衡园区"></LcChartTitle>
    <LcChartTitle text="优质均衡园区" dir="rtl"></LcChartTitle>
    <LcChartTitle text="文字最多6个字符标题文字最多十二个字符标题文字最多十二个字符" ></LcChartTitle>
</template>
`;

export const HeadlineCode = `
<template>
    <LcHeadline>
        监测试点样本园所优质均衡分析四象限图
    </LcHeadline>
    <LcHeadline>
        基础教师队伍结构
    </LcHeadline>
</template>
`;

export const SubheadCode = `
<template>
    <LcSubhead text="福田区学前教育质量监测概况"/>
    <LcSubhead :font-size="'20px'" :reverseOrder="true" text="文字最多15个字符标题文字最多十五个字符标题文字最多十二个字符"/>
    <LcRadiohead domain="event" name="person" :size="56" text="师生师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比比"/>
</template>
`;
