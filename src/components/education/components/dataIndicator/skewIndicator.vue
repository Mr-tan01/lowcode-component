<template>
    <div class="lc-skew-indicator" :class="[`lc-skew-indicator--${type}`]">
        <div class="lc-skew-indicator__wrapper">
            <div class="lc-skew-indicator__wrapper__table--bg">
                <div class="lc-skew-indicator__wrapper__table--bg--icon">
                    <slot>
                        <img :src="icon" alt="">
                    </slot>
                </div>
            </div>
            <div class="lc-skew-indicator__wrapper__info">
                <div class="lc-skew-indicator__wrapper__info--label">
                    {{ label }}
                </div>
                <div class="lc-skew-indicator__wrapper__info--result">
                    <div class="lc-skew-indicator__wrapper__info--result--value">
                        <NNumberAnimation show-separator :from="0" :to="renderValue" active :precision="decimal" />
                    </div>
                    <div class="lc-skew-indicator__wrapper__info--result--unit" v-if="renderUnit">
                        {{ renderUnit }}
                    </div>
                    <div class="lc-skew-indicator__wrapper__info--result--altericon" v-if="tip">
                        <LcTooltip>{{ tip }}</LcTooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import personIcon from './images/skew/icon/person.png';
import { bigNumber } from '@/components/education/common/utils/formate';
import { NNumberAnimation } from 'naive-ui/es/number-animation';
import { LcTooltip } from '@/components/education/components/tooltip';

const {
    label = '',
    value = 0,
    unit,
    fixed = true,
    decimal = 0,
    icon = personIcon,
    tip = '',
    type = 'skew'
} = defineProps({
    label: {
        type: String,
    },
    value: {
        type: Number,
    },
    unit: {
        type: String,
    },
    fixed: {
        type: Boolean,
    },
    decimal: {
        type: Number,
    },
    icon: {
        type: String,
    },
    tip: {
        type: String,
    },
    type: {
        type: String as PropType<'tile' | 'skew'>,
    }
});

const renderValue = computed(() => {
    if (fixed) {
        const { result } = bigNumber(value, decimal);
        return result;
    }
    return value;
});

const renderUnit = computed(() => {
    if (fixed) {
        const { unit: numUnit } = bigNumber(value, decimal);
        return `${numUnit}${unit}`;
    }
    return unit;
});
</script>

<style lang="scss" scoped>
.lc-skew-indicator {
    width: fit-content;

    &--tile {
        background: url(./images/skew/tile-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        transition: background 0.3s ease-in-out;
        &:hover {
            background-image: url(./images/skew/tile-selected-bg.png);
        }
        .lc-skew-indicator {
            &__wrapper {
                min-height: 112px;
                &__info {
                    padding: 35px 30px;
                }
                &__table--bg {
                    display: none;
                }
                &::before,
                &::after {
                    display: none;
                }
            }
        }
    }

    &__wrapper {
        min-width: 393px;
        min-height: 85px;
        position: relative;

        &__info {
            padding: 20px 0;
            padding-left: 35%;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 22px;
            padding-top: 20px;

            &--label {
                font-size: 16px;
                color: #FFFFFF;
                line-height: 20px;
                text-align: left;
                font-style: normal;
            }

            &--result {
                font-family: HarmonyOS_Sans_SC_Medium;
                color: #FFFFFF;
                line-height: 37px;
                text-shadow: 0px 0px 20px rgba(0, 129, 255, 0.4);
                text-align: left;
                font-style: normal;
                display: flex;
                align-items: flex-end;

                &--value {
                    font-size: 30px;
                }

                &--unit {
                    font-size: 14px;
                    line-height: 27px;
                }

                &--altericon {
                    display: flex;
                    align-items: flex-end;
                    padding-left: 12px;
                    opacity: 0;
                    transition: opacity linear 0.3s;

                    :deep(svg) {
                        color: #0FFBF8;
                        width: 14px;
                        height: 14px;
                        margin-bottom: -6px;
                    }
                }
            }
        }

        &__icon {
            position: absolute;
            bottom: 15%;
            left: 10%;
            z-index: 0;

        }

        &::before,
        &::after {
            content: '';
            position: absolute;
            opacity: 0;
            transition: linear 0.3s;
        }


        &__table--bg {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: url(./images/skew/skew-bg.png);
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 100% 100%;
            transition: 0.3s linear;
            pointer-events: none;
            z-index: 1;

            &--icon {
                width: 28px;
                object-fit: contain;
                position: absolute;
                left: 15.5%;
                top: 10%;

                img,
                :deep(img) {
                    width: 100%;
                    object-fit: contain;
                }
            }
        }

        &::before {

            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 13px;
            height: 18px;
            background: url(./images/blue-r-arrow.png) no-repeat;
        }

        &::after {
            right: 0;
            top: 50%;
            transform: translate(50%, -50%);
            width: 13px;
            height: 18px;
            background: url(./images/blue-l-arrow.png) no-repeat;
        }

        &:hover {
            .lc-skew-indicator {
                &__wrapper {
                    &__table--bg {
                        background-image: url(./images/skew/skew-selected-bg.png);
                    }

                    &__info {
                        &--result {
                            &--altericon {
                                opacity: 1;
                            }
                        }
                    }
                }
            }

            &::before,
            &::after {
                transform: translate(0%, -50%);
                opacity: 1;
            }
        }
    }
}
</style>