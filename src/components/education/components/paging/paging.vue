<template>
  <div class="pagination-container">
    <div class="pagination-left">
      <button @click="prevPage" :disabled="currentPage === 1" class="arrow-button left-arrow"></button>
      <span class="page-info">{{ currentPage }}</span> / <span class="page-info">{{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="arrow-button right-arrow"></button>
    </div>
    <div class="pagination-right total-pages">
      <span>共 {{ totalPages }} 页</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { EducationPagingProps } from './props';


const {
  totalPages= 1,
  modelValue= 1,
  fontSize= '16px',
  fontColor= '#FFFFFF',
} = defineProps<EducationPagingProps>();

const currentPage = ref(modelValue);

const emit = defineEmits(['update:modelValue']);

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('update:modelValue', currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    emit('update:modelValue', currentPage.value);
  }
};

watch(
  () => modelValue,
  (newValue) => {
    currentPage.value = newValue;
  }
);
</script>

<style scoped lang="scss">
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .pagination-left,
  .pagination-right {
    display: flex;
    align-items: center;
  }

  .pagination-left {
    button {
      cursor: pointer;
      padding: 0;
      border: none;
      background: none;
      margin: 0 5px;
      width: 0;
      height: 0;
      border-style: solid;

      &.arrow-button {
        &.left-arrow {
          border-width: 6px 8px 6px 0;
          border-color: transparent #0FFBF8  transparent transparent;
        }

        &.right-arrow {
          border-width: 6px 0 6px 8px;
          border-color: transparent transparent transparent #0FFBF8 ;
        }
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
      }
    }
  }

  .page-info,
  .total-pages {
    font-family: HarmonyOS_Sans_SC;
    font-size: v-bind(fontSize);
    color: v-bind(fontColor);
    line-height: 26px;
    font-style: normal;
    text-transform: none;
    display: flex;
    align-items: center;
  }
  .pagination-right{
    margin-left: 15px;
  }
}
</style>
