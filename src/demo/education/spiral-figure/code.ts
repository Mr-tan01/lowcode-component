export const code1 = `
<template>
    <LcSpiralFigure 
        image-url="/path/to/image.jpg"
        :texts="texts"
        :radius="120"
        :max-per-side="5" />
      </DemoHelpBox>
</template>
<script setup>
  const texts = ref([
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
  ])
</script>
`;

export const code2 = `
<template>
    <LcSpiralFigure 
        image-url="/path/to/image.jpg"
        :texts="texts"
        :radius="150"
        :max-per-side="3" />
      </DemoHelpBox>
</template>
<script setup>
  const texts = ref([
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
  ])
</script>
`;