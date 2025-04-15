<template>
    <div class="lc-range-indicator">
        <div class="lc-range-indicator__wrapper">
            <div class="lc-range-indicator__wrapper__table--bg"></div>
            <div class="lc-range-indicator__wrapper__info-range">
                <div class="lc-range-indicator__wrapper__info" v-for="(item, key) in data" :key>
                    <div class="lc-range-indicator__wrapper__info__decorator--bg"></div>
                    <div class="lc-range-indicator__wrapper__info--result">
                        <div class="lc-range-indicator__wrapper__info--result--value">
                            <NNumberAnimation show-separator :from="0" :to="renderValue(item.value)" active
                                :precision="decimal" />
                        </div>
                        <div class="lc-range-indicator__wrapper__info--result--unit"
                            v-if="renderUnit(item.value, item.unit)">
                            {{ renderUnit(item.value, item.unit) }}
                        </div>
                    </div>
                    <div class="lc-range-indicator__wrapper__info--label">
                        {{ item.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { bigNumber } from 'lowcode-share/es/share';
import { NNumberAnimation } from 'naive-ui/es/number-animation';
import memoize from 'lodash-es/memoize';
type Data = {
    label?: string;
    value?: number;
    unit?: string;
}
const {
    data = [],
    fixed = true,
    decimal = 0,
    unit = '',
} = defineProps({
    data: {
        type: Object as PropType<Data[]>,
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
});

const renderValue = memoize((value) => {
    if (fixed) {
        const { result } = bigNumber(value, decimal);
        return result;
    }
    return value;
});

const renderUnit = memoize((value, _unit) => {
    if (fixed) {
        const { unit: numUnit } = bigNumber(value, decimal);
        return `${numUnit}${_unit || unit}`;
    }
    return unit;
});
</script>

<style lang="scss" scoped>
.lc-range-indicator {
    width: fit-content;

    &__wrapper {
        min-width: 393px;
        min-height: 85px;
        position: relative;

        &:hover {
            .lc-range-indicator {
                &__wrapper {
                    &__table--bg {
                        opacity: 0;
                    }
                    &__info {
                        &__decorator--bg {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        &__info-range {
            display: flex;
        }

        &__info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 14px;
            gap: 6px;
            position: relative;

            &:nth-last-of-type(1) {
                .lc-range-indicator {
                    &__wrapper {
                        &__info {

                            &__decorator--bg {
                                &::before {
                                    background-image: url(./images/range/radius-r-bg.png);
                                }
                            }
                        }
                    }
                }

            }


            &__decorator--bg {
                position: absolute;
                z-index: 0;
                width: 100%;
                height: 33px;
                bottom: -7px;
                opacity: 0;
                transition: linear 0.3s;
                
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url(./images/range/radius-l-bg.png);
                    background-repeat: no-repeat;
                    background-size: 100% 97%;
                    pointer-events: none;
                    z-index: 0;
                    transition: linear 0.3s;
                }
            }

            @mixin __decorator--bg() {
                .lc-range-indicator {
                    &__wrapper {
                        &__info {
                            &__decorator--bg {
                                &::before {
                                    @content;
                                }
                            }
                        }
                    }
                }
            }

            &:hover {
                @include __decorator--bg {
                    background-image: url(./images/range/hover-radius-bg.png);
                }

                &:nth-last-of-type(1) {

                    @include __decorator--bg {
                        background-image: url(./images/range/hover-radius-r-bg.png);
                    }
                }

                &::before,
                &::after {
                    transform: translate(0%, -50%);
                    opacity: 1;
                }
            }

            &::before,
            &::after {
                content: '';
                position: absolute;
                opacity: 0;
                transition: linear 0.3s;
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


            &--label {
                font-size: 14px;
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
                    margin-left: 8px;
                    font-size: 14px;
                    line-height: 27px;
                }
            }
        }

        &__table--bg {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 33px;
            background: url(./images/range/table-bg.png);
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 100% 100%;
            transition: 0.3s linear;
            pointer-events: none;
            z-index: 0;
            opacity: 1;
        }
    }
}
</style>