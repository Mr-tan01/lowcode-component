<template>
    <div class="lc-select" :class="{
        'lc-select--gradient': gradient,
    }">
        <n-select placeholder="下拉选择" :options="options" clearable :to="false" v-bind="$attrs">
            <template #arrow>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512">
                    <path
                        d="M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                        fill="currentColor"></path>
                </svg>
            </template>
        </n-select>
    </div>
</template>
<script lang="ts" setup>
import { NSelect } from 'naive-ui/es/select';
import { PropType } from 'vue';

const {
    options = [],
    gradient = false,
} = defineProps({
    options: {
        type: Array as PropType<{
            label: string;
            value: string;
        }[]>,
    },
    gradient: {
        type: Boolean,
    }
});
</script>
<style lang="scss" scoped>
.lc-select {

    &--gradient {
        --gradient: linear-gradient(to right, rgba(0, 96, 163, 0.1) 0%, #033547b3 40%, #007FCE 100%);

        :deep(.n-select) {
            .n-base-selection,
            .n-base-select-menu {
                mask: var(--gradient);
                -webkit-mask: var(--gradient);
            }
        }
    }

    :deep(.n-select) {

        .n-base-selection {
            --n-border: 1px solid rgba(11, 105, 157, 1) !important;


            .n-base-selection-label {
                --n-color: rgba(2, 32, 61, 1);
                --n-color-active: rgba(0, 98, 163, 0.206);
                --n-text-color: #fff;
                text-align: center;
            }

        }

        .n-base-select-menu {
            --n-color: rgba(2, 32, 61, 1) !important;
            border: 1px solid rgba(11, 100, 158, 1) !important;

            .n-base-select-option {
                color: rgba(160, 171, 182, 1);
                justify-content: center;

                &--pending {
                    color: #fff;

                    &::before {
                        background-color: rgba(9, 159, 170, 1);

                    }
                }
            }
        }

    }
}
</style>