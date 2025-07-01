<template>
    <div class="pagination-container">
        <div class="pagination-left">
            <button :disabled="model === 1" class="arrow-button left-arrow" @click="prevPage"></button>
            <span class="page-info">{{ model }}</span> /
            <span class="page-info">{{ totalPages }}</span>
            <button :disabled="model === totalPages" class="arrow-button right-arrow" @click="nextPage"></button>
        </div>
        <div class="pagination-right total-pages">
            <span>共 {{ totalPages }} 页</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { EducationPagingProps } from './props'

const { totalPages = 1, fontSize = '16px', fontColor = '#FFFFFF' } = defineProps<EducationPagingProps>()

const model = defineModel<number>({ default: 1 })

const prevPage = () => {
    if (model.value > 1) {
        model.value--
    }
}

const nextPage = () => {
    if (model.value < totalPages) {
        model.value++
    }
}
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
                    border-color: transparent #0ffbf8 transparent transparent;
                }

                &.right-arrow {
                    border-width: 6px 0 6px 8px;
                    border-color: transparent transparent transparent #0ffbf8;
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
    .pagination-right {
        margin-left: 15px;
    }
}
</style>
