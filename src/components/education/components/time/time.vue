<template>
    <div class="lctime">
        <img 
        class="img" 
        :src="imageIconSrc" 
        draggable="false"
      />
      <n-time></n-time>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, } from 'vue';
import { EducationTimeProps } from './props';
import { NTime } from 'naive-ui/es';
import defaultImage from './images/time.png';

const {
    url='',
} = defineProps<EducationTimeProps>();

const imageIconSrc = computed<string>(() => url || defaultImage);



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
}
</style>
  