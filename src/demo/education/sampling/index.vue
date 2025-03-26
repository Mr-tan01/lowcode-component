<template>
  <div class="demo-time">
      <DemoBox title="sampling" description="基础用法" rswidth="500px" :code="code1">
          <NSpace :size="150">
            <LcSampling>
              <template #left>
                正常行驶
              </template>
              <template #center>
                报警事件
              </template>
              <template #right>
                预警事件
              </template>
            </LcSampling>
          </NSpace>
      </DemoBox>
  </div>
</template>
<script lang="ts" setup>
import { DemoBox } from 'lowcode-share/es/demo';
import { NSpace } from 'naive-ui';
import  LcSampling  from '@/components/education/components/sampling/sampling.vue';
import { code1 } from './const';

</script>
