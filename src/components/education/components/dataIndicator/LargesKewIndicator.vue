<template>
    <div class="lc-skew-indicator" :class="[`lc-skew-indicator--${type}`]">
        <div class="lc-skew-indicator__wrapper">
            <div class="lc-skew-indicator__wrapper__table--bg">
                <div class="lc-skew-indicator__wrapper__table--bg--icon">
                    <slot>
                        <img :src="icon" alt="" />
                    </slot>
                </div>
            </div>
            <div class="lc-skew-indicator__wrapper__info">
                <div class="lc-skew-indicator__wrapper__info--label">
                    {{ label }}
                </div>
                <div class="lc-skew-indicator__wrapper__info--result">
                    <div class="lc-skew-indicator__wrapper__info--result--value">
                        <NNumberAnimation show-separator :from="0" :to="renderValue" active :precision="decimals" />
                    </div>
                    <div class="lc-skew-indicator__wrapper__info--result--unit" v-if="renderUnit">
                        {{ renderUnit }}
                    </div>
                    <div v-if="yearValue" class="lc-skew-indicator__wrapper__info--result--year" :class="{
                        down: yearValue < 0,
                        up: yearValue > 0,
                    }">
                        <div class="lc-skew-indicator__wrapper__info--result--year--label">
                            {{ yearLabel }}
                        </div>
                        <div class="lc-skew-indicator__wrapper__info--result--year--value">
                            <NNumberAnimation show-separator :from="0" :to="yearValue" active :precision="decimal" />%
                        </div>
                        <div class="lc-skew-indicator__wrapper__info--result--year--up" v-if="yearValue">{{ prefixIcon
                            }}</div>
                    </div>
                    <div class="lc-skew-indicator__wrapper__info--result--altericon" v-if="tip">
                        <LcTooltip>{{ tip }}</LcTooltip>
                    </div>
                </div>
                <div class="lc-skew-indicator__wrapper__info--sub" v-if="subHead">
                    <div class="lc-skew-indicator__wrapper__info--sub-wrapper">
                        <div class="lc-skew-indicator__wrapper__info--sub-content">{{ subContent }}</div>
                        <div v-if="subHead" class="lc-skew-indicator__wrapper__info--sub-head">{{ subHead }}</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import personIcon from "./images/skew/icon/person.png";
import { bigNumber } from "lowcode-share/es/share";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import { LcTooltip } from "@/components/education/components/tooltip";

const {
    label = "",
    value = 0,
    unit,
    yearLabel = "同比去年",
    yearValue = 0,
    fixed = true,
    decimal = 0,
    icon = personIcon,
    tip = "",
    type = "skew",
    subHead = "",
    subContent = "",
    subUnit = ""
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
    yearLabel: {
        type: String,
    },
    yearValue: {
        type: Number,
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
        type: String as PropType<"tile" | "skew">,
    },
    subHead: {
        type: String,
    },
    subContent: {
        type: String,
    },
    subUnit: {
        type: String
    },
    isShowIcon: {
        type: Boolean
    }
});

const decimals = computed(() => {
    const { unit: numUnit } = bigNumber(value);
    if (Number.isInteger(value) && !numUnit) {
        return 0;
    }
    return decimal;
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
const prefixIcon = computed(() => {
    return yearValue > 0 ? "↑" : "↓";
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
        min-width: 558px;
        min-height: 85px;
        position: relative;

        &__info {
            padding: 20px 0;
            padding-right: 20px;
            padding-left: 35%;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 22px;
            padding-top: 20px;

            &--label {
                font-size: 16px;
                color: #ffffff;
                line-height: 20px;
                text-align: left;
                font-style: normal;
                max-width: 100px;
            }

            &--result {
                font-family: HarmonyOS_Sans_SC_Medium;
                color: #ffffff;
                line-height: 37px;
                text-shadow: 0px 0px 20px rgba(0, 129, 255, 0.4);
                text-align: left;
                font-style: normal;
                display: flex;
                align-items: flex-end;

                &--value {
                    font-size: 30px;
                    color: #0fd4fb;
                }

                &--year {
                    margin-left: 15px;
                    display: flex;
                    gap: 8px;
                    font-family: HarmonyOS_Sans_SC;
                    font-size: 14px;
                    color: #8a94a8;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                }

                &--unit {
                    margin-left: 8px;
                    font-size: 14px;
                    line-height: 27px;
                    color: #0fd4fb;
                }

                &--altericon {
                    display: flex;
                    align-items: flex-end;
                    padding-left: 12px;
                    opacity: 0;
                    transition: opacity linear 0.3s;

                    :deep(svg) {
                        color: #0ffbf8;
                        width: 14px;
                        height: 14px;
                        margin-bottom: -6px;
                    }
                }
            }

            &--sub {

                display: flex;
                justify-content: center;
                align-items: center;

                &-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                &-content {
                    color: #0FD4FB;
                    font-size: 30px;
                }

                &--head {
                    color: #ffffff;
                    font-size: 16px;
                }

            }

            &--sub::before {
                content: "";
                display: inline-block;
                width: 1px;
                height: 31px;
                background: #ccc;
                margin: 0 12px 0 0;
                vertical-align: middle;
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
            content: "";
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
                width: 32px;
                object-fit: contain;
                position: absolute;
                left: 16.3%;
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

.down {
    color: #08c978;
}

.up {
    color: #ff6666;
}
</style>
