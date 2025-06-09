<template>
    <div
        class="lc-indicator-card"
        :class="{
            'lc-indicator-card--noborder': type === 'noborder',
        }"
    >
        <div class="lc-indicator-card__wrapper">
            <div class="lc-indicator-card__wrapper--content">
                <div class="lc-indicator-card__wrapper--tooltip" v-if="tip">
                    <LcTooltip>{{ tip }}</LcTooltip>
                </div>
                <div class="lc-indicator-card__wrapper--result">
                    <span class="lc-indicator-card__wrapper--result--value" :title="value.toString()">
                        <NNumberAnimation show-separator :from="0" :to="renderValue" active :precision="decimals" />
                    </span>
                    <span class="lc-indicator-card__wrapper--result--unit" v-if="fixed">
                        {{ unit }}
                    </span>
                </div>
                <div class="lc-indicator-card__wrapper--text">
                    {{ hint }}
                </div>
            </div>
            <slot name="footer">
                <div class="lc-indicator-card__footer"></div>
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import { bigNumber } from "lowcode-share/es/share";
import { LcTooltip } from "@/components/education/components/tooltip";

const SIZE = {
    small: "small",
    medium: "medium",
    large: "large",
} as const;
type Size = typeof SIZE;
const {
    value = 0,
    hint = "",
    size = "small",
    fixed = false,
    decimal = 0,
    valueColor = "#ffffff",
    hintColor = "#F2F3F4",
} = defineProps({
    value: {
        type: Number,
    },
    hint: {
        type: String,
    },
    size: {
        type: String as PropType<Size[keyof Size]>,
    },
    fixed: {
        type: Boolean,
    },
    decimal: {
        type: Number,
    },
    type: {
        type: String as PropType<"border" | "noborder">,
    },
    tip: {
        type: String,
    },
    valueColor: {
        type: String,
    },
    hintColor: {
        type: String,
    },
});

const renderValue = computed(() => {
    if (fixed) {
        return bigNumber(value, decimal).result;
    }
    return value;
});
const decimals = computed(() => {
    const { unit: numUnit } = bigNumber(value);
    if (Number.isInteger(value) && !numUnit) {
        return 0;
    }
    return decimal;
});
const innerPad = {
    [SIZE.small]: "22px 32px 0",
    [SIZE.medium]: "22px 54px 0",
    [SIZE.large]: "22px 116px 0",
};
const padValue = computed(() => {
    return innerPad[size];
});
const unit = computed(() => {
    if (fixed) {
        return bigNumber(value, decimal).unit;
    }
});
</script>

<style lang="scss" scoped>
.lc-indicator-card {
    z-index: 0;
    position: relative;

    &--noborder {
        .lc-indicator-card {
            &__wrapper {
                background-image: url(./images/card/bg-noborder.png);

                &:hover {
                    background-image: url(./images/card/bg-noborder-selected.png);
                }

                &--result {
                    &--value {
                        font-size: 30px;
                    }

                    &--unit {
                        margin-left: 8px;
                        font-size: 16px;
                    }
                }

                &--text {
                    font-size: 14px;
                }
            }
        }
    }

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        backdrop-filter: blur(26px);
        z-index: -1;
    }
    &__footer {
        height: 24px;
    }
    &__wrapper {
        background: url(./images/card/bg-border.png) no-repeat;
        background-repeat: no-repeat;
        background-size: 100% 100%;

        position: relative;
        &--content {
            padding: 22px 32px 0;
            padding: v-bind(padValue);
        }
        &--tooltip {
            position: absolute;
            right: 10px;
            top: 10px;
            :deep(.lc-tooltip__trigger_icon) {
                width: 16px;
            }
        }

        &:hover {
            background-image: url(./images/card/bg-border-selected.png);
        }

        &--result {
            font-family: HarmonyOS_Sans_SC_Medium;
            color: v-bind(valueColor);
            text-align: center;
            font-style: normal;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 5px;

            &--value {
                font-size: 40px;
                line-height: 42px;
            }

            &--unit {
                margin-left: 6px;
                font-size: 16px;
                line-height: 26px;
            }
        }

        &--text {
            font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
            font-weight: normal;
            font-size: 18px;
            color: v-bind(hintColor);
            line-height: 20px;
            text-align: center;
            font-style: normal;
            text-transform: none;
        }
    }
}
</style>
