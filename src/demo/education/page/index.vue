<template>
    <div class="demo-page">
        <Container title="页面标题" description="基础用法" :code="pageTitle.code1" rswidth="1000px">
            <div class="text-box">
                <n-space>
                    <LcPageTitle>
                        数据概览
                    </LcPageTitle>
                    <LcPageTitle>
                        基础教师队伍结构
                    </LcPageTitle>
                    <LcTextTitle text="二级小标题"></LcTextTitle>
                    <LcTextTitle text="超长二级小标题，最多十五个字符最多十五个字符最多十五个字符"></LcTextTitle>
                </n-space>
            </div>
        </Container>
        <Container title="标题头部" description="左右排序" rswidth="1000px" :code="pageTitle.decoratorCode">
            <n-space>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle text="标题文字最多十二个字符"></LcDecoratorTitle>
                </VueResizable>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle text="标题文字最多十二个字符" dir="rtl"></LcDecoratorTitle>
                </VueResizable>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle text="标题文字最多十二个字符标题文字最多十二个字符标题文字最多十二个字符" ></LcDecoratorTitle>
                </VueResizable>
            </n-space>
        </Container>
    </div>
</template>

<script lang="ts" setup>
import Container from '@/demo/components/help/Container.vue';
import { NSpace } from 'naive-ui';
import { LcPageTitle, LcTextTitle } from '~/es/education/pageTitle';
import { LcDecoratorTitle } from '~/es/education/decoratorTitle';
import * as pageTitle from './pageTitle';
import VueResizable from 'vue-resizable'
</script>

<style lang="scss" scoped>
.text-box {}
</style>