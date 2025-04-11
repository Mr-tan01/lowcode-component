<template>
  <div class="legend-progress">
    <div class="legend-progress__lable">{{ lable }}</div>
    <div class="legend-progress__center">
      <div class="legend-progress__center__min-value sample-text">{{ minValue }}</div>
      <div class="legend-progress__center__progress-bar"></div>
      <div class="legend-progress__center__max-value sample-text">{{ maxValue }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  lable = '预警人数占比',
  minValue = '0%',
  maxValue = '20%',
  startColor = 'rgba(34, 253, 252, 0)',
  endColor = '#FF4545'
} = defineProps({
    lable: {
       type: String
    },
    minValue: {
      type: String
    },
    maxValue: {
      type: String
    },
    startColor: {
      type: String
    },
    endColor: {
      type: String
    }
});
</script>

<style scoped lang="scss">
.legend-progress {
  width: 351px;
  height: 39px;
  background: rgba(8, 68, 113, 0.75);
  border-radius: 8px;
  border: 1px solid #0FFBF8;
  backdrop-filter: blur(3px);
  display: flex;
  padding: 10px 15px;
  box-sizing: border-box;

  &__lable {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    text-align: left;
    font-style: normal;
  }

  &__center {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-left: 9px;

    .sample-text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 12px;
      color: #FFFFFF;
      line-height: 17px;
      text-align: left;
      font-style: normal;
    }

    &__progress-bar {
      width: 169px;
      height: 5px;
      background: linear-gradient(63deg, v-bind(startColor) 0%, v-bind(endColor) 100%);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      border: 1px solid;
      backdrop-filter: blur(4px);
    }
  }
}
</style>
