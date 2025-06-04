<template>
  <div class="demo-listBox">
    <DemoHelpBox title="listBox" description="列表框" rswidth="962px" rsHeight="600px" :code="code1">
      <LclistBox :rows="dataRows" :bordered="true" ></LclistBox>
    </DemoHelpBox>
  </div>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { LclistBox } from '@/components/education/components/listBox';
import { code1 } from './demo-codes';

const dataRows = [
  { indicatorId: "1", indicatorName: '介个人的名字是是是是是是是', indicatorValue: '张三'},
  { indicatorId: "2", indicatorName: '职业', indicatorValue: '职业是是是是是是是前端工程师哦哦哦哦'},
  { indicatorId: "3", indicatorName: '年龄', indicatorValue: '36岁'},
  { indicatorId: "4", indicatorName: '工龄', indicatorValue: '10年'},

]
</script>
