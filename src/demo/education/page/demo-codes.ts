
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
</template>

<script lang="ts" setup>
import { LcDecoratorTitle } from 'lowcode-component/es/education/decoratorTitle';
</script>
`;