<template>
  <div class="demo-tabs">
      <DemoHelpBox title="spiralFigure" description="基础用法" rswidth="700px" :rs-height="500" :code="code1">
          <LcSpiralFigure 
            image-url="/path/to/image.jpg"
            :texts="texts" 
            :radius="120"
            :max-per-side="5" />
      </DemoHelpBox>
      <DemoHelpBox title="spiralFigure" description="基础用法" rswidth="700px" :rs-height="500" :code="code2">
          <LcSpiralFigure 
            image-url="/path/to/image.jpg"
            :texts="texts" 
            :radius="150"
            :max-per-side="3" />
      </DemoHelpBox>
  </div>
</template>

<script lang="ts" setup>
import { DemoHelpBox } from '@/components/common/DemoHelpBox';
import { LcSpiralFigure } from '@/components/education/components/spiralFigure';
import { ref } from 'vue';
import { code1, code2 } from './code';


const texts = ref(
  [
    '身份识别打卡机', 
    '酒精检测仪', 
    '一键报警', 
    '行车记录仪',
    '毫米波雷达',
    'C450主机',
    '安全巡查',
    'DSM摄像头',
    '车内摄像头',
    'ADAS摄像头'
    ]
)
</script>


<style lang="scss" scoped></style>