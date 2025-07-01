<template>
    <div class="lc-date-picker">
        <ConfigProvider>
            <n-date-picker type="daterange" :to="false" v-bind="$attrs">
                <template #separator>
                    <span class="color-white">-</span>
                </template>
            </n-date-picker>
        </ConfigProvider>
    </div>
</template>
<script lang="ts" setup>
import { NDatePicker } from 'naive-ui/es/date-picker'
import ConfigProvider from '../../common/components/ConfigProvider/index.vue'
</script>

<style lang="scss" scoped>
.lc-date-picker {
    .color-white {
        color: #fff;
    }

    :deep(.n-date-picker) {
        .n-input {
            --n-color: rgba(1, 27, 53, 1) !important;
            --n-color-focus: rgba(1, 27, 53, 1) !important;
            --n-border: 1px solid rgba(10, 103, 150, 1) !important;
            --n-border-focus: 1px solid rgba(10, 103, 150, 1) !important;
            --n-border-hover: 1px solid rgba(10, 103, 150, 1) !important;

            .n-input-wrapper {
                .n-input__input {
                    --n-text-color: #fff;
                    --n-placeholder-color: #fff;
                }
            }
        }

        .v-binder-follower {
            &-content {
                .n-date-panel-weekdays {
                    --n-item-text-color: #fff;
                    border-top: 1px solid rgba(28, 78, 141, 1);
                    border-bottom: 0;
                    margin-top: 10px;
                    padding-top: 10px;
                }

                .n-date-panel {
                    --n-color: rgba(26, 65, 114, 1) !important;
                    --n-panel-text-color: #fff !important;
                    --n-panel-color: rgba(26, 65, 114, 1) !important;
                    --n-panel-action-divider-color: rgba(
                        28,
                        78,
                        141,
                        1
                    ) !important;

                    .n-date-panel-dates {
                        --n-item-cell-width: 40px;
                        --n-item-cell-height: 45px;

                        .n-date-panel-date {
                            --n-item-cell-height: 40px;
                            --n-item-cell-width: 40px;
                            --n-item-size: 40px;
                            --n-item-color-included: rgba(18, 78, 126, 1);
                            font-size: 14px;

                            &--current {
                                color: rgba(15, 251, 248, 1);
                            }

                            &--excluded {
                                background: rgba(55, 142, 255, 0.1);
                                border-radius: 50%;
                            }

                            &--covered {
                                background: var(--n-item-color-included);
                            }

                            &--selected {
                                box-sizing: border-box;
                                border-radius: 50%;
                                color: #fff;

                                &::after {
                                    background: url(./images/selected-bg.png)
                                        no-repeat;
                                    background-size: cover;
                                }
                            }
                        }
                    }

                    &-actions {
                        border-top: 0;
                        &__suffix {
                            .n-button {
                                background: linear-gradient(
                                    180deg,
                                    rgba(15, 251, 248, 0) 0%,
                                    #0ffbf8 100%
                                );
                                border-radius: 2px;
                                border: 1px solid #0ffbf8;
                                backdrop-filter: blur(2.222222222222222px);
                                --n-height: auto !important;
                                margin-bottom: 20px;
                                margin-top: 10px;

                                &__content {
                                    font-family: HarmonyOS_Sans_SC_Bold;
                                    font-size: 16px;
                                    color: #ffffff;
                                    line-height: 27px;
                                    text-align: right;
                                    font-style: normal;
                                    text-transform: none;
                                    padding: 5px 25px;
                                    box-sizing: border-box;
                                }
                            }
                        }
                    }

                    &__vertical-divider {
                        display: none;
                    }

                    .n-date-panel-month {
                        --n-arrow-color: #fff !important;

                        &__month-year {
                            .n-date-panel-month__text {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
