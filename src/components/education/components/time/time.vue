<template>
  <div class="lctime">
    <img class="img" :src="imageIconSrc" draggable="false" />
    <n-time :time="currentTime" class="n-time-class"></n-time>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { EducationTimeProps } from "./props";
import { NTime } from "naive-ui/es/time";
import defaultImage from "./images/time.png";

const {
  icon = "",
  color = '#fff',
  fontSize = '20px',
} = defineProps<EducationTimeProps>();

const imageIconSrc = computed<string>(() => icon || defaultImage);

const currentTime = ref();

function readCurrentTime() {
  currentTime.value = Date.now();
  setTimeout(readCurrentTime, 1000);
}
readCurrentTime();
</script>

<style lang="scss" scoped>
.lctime {
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    width: 50px;
    height: 50px;
  }

  .n-time-class {
    color: v-bind(color);
    font-size: v-bind(fontSize);
  }
}
</style>
