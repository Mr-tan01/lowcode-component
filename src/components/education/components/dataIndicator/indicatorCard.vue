<template>
    <div class="lc-indicator-card">
        <div class="lc-indicator-card__wrapper">
            <div class="lc-indicator-card__wrapper--result">
                <span class="lc-indicator-card__wrapper--result--value">
                    {{ renderValue }}
                </span>
                <span class="lc-indicator-card__wrapper--result--unit" v-if="fixed">
                    {{ unit }}
                </span>
            </div>
            <div class="lc-indicator-card__wrapper--text">
                {{ hint }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { bigNumber } from '@/components/education/common/utils/formate';
const SIZE = {
    small: 'small',
    medium: 'medium',
    large: 'large',
} as const;
type Size = typeof SIZE;
const {
    value = 0,
    hint = '',
    size = 'small',
    fixed = false,
    decimal = 0,
} = defineProps({
    value: {
        type: Number,
    },
    hint: {
        type: String,
    },
    size: {
        type: String as PropType<Size[keyof Size]>
    },
    fixed: {
        type: Boolean,
    },
    decimal: {
        type: Number,
    }
});

const renderValue = computed(() => {
    if(fixed) {
        return bigNumber(value, decimal).result;
    }
    return value;
});
const innerPad = {
    [SIZE.small]: '22px 32px 24px',
    [SIZE.medium]: '22px 54px 24px',
    [SIZE.large]: '22px 116px 24px',
};
const padValue = computed(() => {
    return innerPad[size];
});
const unit = computed(() => {
    if(fixed) {
        return bigNumber(value, decimal).unit;
    }
});
</script>

<style lang="scss" scoped>
.lc-indicator-card {
    z-index: 0;

    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        backdrop-filter: blur(26px);
        z-index: -1;
    }

    &__wrapper {
        background: url(./images/card/bg-border.png) no-repeat;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 22px 32px 24px;
        padding: v-bind(padValue);

        &:hover {
            background-image: url(./images/card/bg-border-selected.png);
        }



        &--result {
            font-family: HarmonyOS_Sans_SC_Medium;
            color: #FFFFFF;
            text-align: center;
            font-style: normal;

            &--value {
                font-size: 40px;
                line-height: 42px;
            }

            &--unit {
                font-size: 16px;
                line-height: 42px;
            }
        }

        &--text {
            font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
            font-weight: normal;
            font-size: 18px;
            color: #F2F3F4;
            line-height: 20px;
            text-align: center;
            font-style: normal;
            text-transform: none;
        }
    }
}
</style>