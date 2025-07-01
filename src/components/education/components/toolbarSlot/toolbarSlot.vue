<template>
    <div
        class="lc-toolbar-slot"
        :class="[
            {
                'lc-toolbar-slot--float': float,
                'lc-toolbar-slot--flex': flex,
            },
        ]"
    >
        <div class="lc-toolbar-slot__toolbar">
            <div class="lc-toolbar-slot__toolbar__start">
                <slot name="toolbarStart"></slot>
            </div>
            <div class="lc-toolbar-slot__toolbar__end">
                <slot name="toolbarRefresh">
                    <LcIcon
                        name="refresh"
                        class="lc-toolbar-slot__toolbar__refresh"
                        @click="refresh"
                    ></LcIcon>
                </slot>
                <slot name="toolbarTimePicker">
                    <n-date-picker
                        v-model:value="formattedValue"
                        class="n-date-picker"
                        placeholder="请选择日期"
                        format="yyyy.MM.dd"
                        type="date"
                        @update:value="refresh"
                    >
                        <template #date-icon>
                            <span></span>
                        </template>
                    </n-date-picker>
                </slot>
            </div>
        </div>
        <div class="lc-toolbar-slot__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NDatePicker } from 'naive-ui/es/date-picker'
import { LcIcon } from '@/components/education/components/icon'
const formattedValue = defineModel('formattedValue', {
    type: Number,
    default: Date.now(),
})
const { float = false, flex = false } = defineProps<{
    float?: boolean
    flex?: boolean
}>()
const $emit = defineEmits<{
    (
        e: 'refresh',
        data: {
            value: number
            valueString: string
        },
    ): void
}>()
function refresh() {
    const emitValue = {
        value: formattedValue.value,
        valueString: new Date(formattedValue.value).toLocaleString(),
    }
    $emit('refresh', emitValue)
}
</script>

<style lang="scss" scoped>
.lc-toolbar-slot {
    &--float {
        position: relative;

        .lc-toolbar-slot {
            &__toolbar {
                position: absolute;
                z-index: 2;
            }
        }
    }

    &--flex {
        display: flex;
        flex-direction: column;
        flex: 1;

        .lc-toolbar-slot {
            &__content {
                display: flex;
                flex-direction: column;
                flex: 1;
            }
        }
    }

    &__toolbar {
        display: flex;
        align-items: center;
        width: 100%;

        &__refresh {
            &:hover {
                opacity: 0.8;
                cursor: pointer;
            }
        }

        &__start {
            flex: 1;
        }

        &__end {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            .n-date-picker {
                width: 85px;
                margin-left: 6px;

                :deep(.n-input) {
                    --n-color: transparent !important;
                    --n-color-focus: transparent !important;
                    --n-box-shadow-focus: transparent !important;
                    --n-border-focus: transparent !important;
                    --n-border-hover: transparent !important;

                    .n-input-wrapper {
                        --n-padding-left: 0;
                        --n-padding-right: 0;
                    }

                    .n-input__suffix {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
