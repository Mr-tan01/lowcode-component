<template>
    <div class="demo-page">
        <DemoHelpBox title="页面标题" description="基础用法" :code="pageTitle.code1" rswidth="1000px">
            <div class="text-box">
                <n-space>
                    <LcPageTitle> 数据概览 </LcPageTitle>
                    <LcPageTitle> 基础教师队伍结构 </LcPageTitle>
                    <LcTextTitle text="二级小标题"></LcTextTitle>
                    <LcTextTitle text="超长二级小标题，最多十五个字符最多十五个字符最多十五个字符"></LcTextTitle>
                </n-space>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="标题头部" description="左右排序" rswidth="1000px" :code="pageTitle.decoratorCode">
            <n-space>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle>
                        <template #title>
                            111
                        </template>
                    </LcDecoratorTitle>
                </VueResizable>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle  dir="rtl">
                          <template #title>
                            标题文字最多十二个字符
                        </template>
                    </LcDecoratorTitle>
                </VueResizable>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle text="标题文字最多十二个字符标题文字最多十二个字符标题文字最多十二个字符"></LcDecoratorTitle>
                </VueResizable>
                <VueResizable width="390px" height="35px">
                    <LcDecoratorTitle text="插槽插槽插槽 helper" dir="rtl">
                        <template #helper>
                            <LcIcon name="pause" :size="21"></LcIcon>
                        </template>
                    </LcDecoratorTitle>
                </VueResizable>
            </n-space>
        </DemoHelpBox>
        <DemoHelpBox title="图表标题" description="左右排序" rswidth="1000px" :code="pageTitle.chartTitleCode">
            <n-space>
                <LcChartTitle text="优质均衡园区" dir="ltr"></LcChartTitle>
                <LcChartTitle text="优质均衡园区" dir="rtl"></LcChartTitle>
                <LcChartTitle text="文字最多6个字符标题文字最多十二个字符标题文字最多十二个字符"></LcChartTitle>
            </n-space>
        </DemoHelpBox>
        <DemoHelpBox title="大标题" description="基础用法" :code="pageTitle.HeadlineCode" rswidth="1000px">
            <div class="text-box">
                <n-space>
                    <LcHeadline> 监测试点样本园所优质均衡分析四象限图 </LcHeadline>
                    <LcHeadline> 基础教师队伍结构 </LcHeadline>
                </n-space>
            </div>
        </DemoHelpBox>
        <DemoHelpBox title="副标题" description="基础用法" :code="pageTitle.SubheadCode" rswidth="1000px">
            <div class="text-box">
                <n-space>
                    <LcSubhead text="福田区学前教育质量监测概况" />
                    <LcSubhead text="文字最多15个字符标题文字最多十五个字符标题文字最多十二个字符" :font-size="'20px'" type="right" />
                    <LcSubhead text="文字最多15个字符标题文字最多十五个字符标题文字最多十二个字符" :font-size="'20px'" type="center" />
                    <LcSubhead text="添加图标">
                        <template #icon-right><LcIcon name="pause"></LcIcon></template>
                    </LcSubhead>
                </n-space>
            </div>
            <div>
                <LcRadiohead
                    domain="func"
                    name="person"
                    text="师生师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比师生比比"
                >
                </LcRadiohead>
            </div>
        </DemoHelpBox>
    </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from "@/components/common/DemoHelpBox";
import { NSpace } from "naive-ui";
import { LcPageTitle, LcTextTitle } from "@/components/education/components/pageTitle";
import { LcDecoratorTitle } from "@/components/education/components/decoratorTitle";
import * as pageTitle from "./demo-codes";
import VueResizable from "vue-resizable";
import { LcChartTitle } from "@/components/education/components/chartTitle";
import { LcHeadline, LcSubhead } from "@/components/education/components/headline";
import { LcIcon } from "@/components/education/components/icon";
import { LcRadiohead } from "@/components/education/components/headline";
</script>

<style lang="scss" scoped></style>
