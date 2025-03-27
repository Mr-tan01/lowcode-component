<template>
  <div class="Lc-boder">
    <div class="Lc-boder-box">
      <img src="./images/sampling-blue.png" alt="">
      <span class="Lc-boder-box-text">
        <slot name="left"></slot>
      </span>
    </div>
    <div class="Lc-boder-box">
      <img src="./images/sampling-red.png" alt="">
      <span class="Lc-boder-box-text">
        <slot name="center"></slot>
      </span>
    </div>
    <div class="Lc-boder-box">
      <img src="./images/sampling-yellow.png" alt="">
      <span class="Lc-boder-box-text">
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EducationsamplingProps } from './props'

const {
  fontSize='14px',
  fontColor='#fff',
} = defineProps<EducationsamplingProps>();

</script>

<style scoped lang="scss">
.Lc-boder {
  width: 311px;
  height: 39px;
  background: rgba(8,68,113,0.75);
  border-radius: 8px;
  border: 1px solid #0FFBF8;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  &-box{
    display: flex;
    align-items: center;
    img{
      width: 11px;
      height: 16px;
    }
    &-text{
      margin-left: 7px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size:v-bind(fontSize);
      color: v-bind(fontColor);
      line-height: 20px;
      text-align: left;
      font-style: normal;
    }
  }
}
</style>