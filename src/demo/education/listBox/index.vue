<template>
  <div class="demo-listBox">
    <DemoHelpBox title="listBox" description="列表框" rswidth="962px" :code="code1">
      <LclistBox :items="dataItems" :rows="dataRows" ></LclistBox>
    </DemoHelpBox>
  </div>
</template>
<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { LclistBox } from '@/components/education/components/listBox';
import { code1 } from './demo-codes';

const dataItems = [
  { key: 'name', value: 'nameValue' },
  { key: 'age', value: 'ageValue' }
]

const dataRows = [
  { name: '姓名', nameValue: '张三', age: '年龄', ageValue: 28 },
  { name: '职业', nameValue: '前端工程师', age: '经验', ageValue: '5年' }
]
</script>
