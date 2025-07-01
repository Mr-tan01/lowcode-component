<template>
    <div class="lc-bothway-card">
        <div class="lc-bothway-card__wrapper">
            <div class="lc-bothway-card__wrapper__info-range">
                <div
                    class="lc-bothway-card__wrapper__info-range__label flex-center"
                >
                    {{ label }}
                </div>
                <div class="lc-bothway-card__wrapper__info-range__wrapper">
                    <div
                        v-for="(item, key) in data"
                        :key
                        class="lc-bothway-card__wrapper__info-range__wrapper__info"
                    >
                        <slot :name="item.customSlot" :item="item">
                            <div
                                class="lc-bothway-card__wrapper__info-range__wrapper__info__value"
                                :title="item.value?.toString()"
                            >
                                <NNumberAnimation
                                    show-separator
                                    :from="0"
                                    :to="renderValue(item.value)"
                                    active
                                    :precision="renderdecimals(item.value)"
                                />
                            </div>
                            <div class="flex-end">
                                {{ renderUnit(item.value, item.unit) }}
                            </div>
                            <div
                                v-if="key !== data.length - 1"
                                class="lc-bothway-card__wrapper__info-range__wrapper__info__division flex-center"
                            >
                                |
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
            <div class="lc-bothway-card__wrapper__table--bg"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { bigNumber } from 'lowcode-share/es/share'
import { NNumberAnimation } from 'naive-ui/es/number-animation'
import memoize from 'lodash-es/memoize'
type Data = {
    value?: number
    unit?: string
    customSlot?: string
    customValue?: string | number
}
const {
    label = '',
    data = [],
    fixed = true,
    decimal = 0,
    unit = '',
} = defineProps<{
    label?: string
    data?: Data[]
    unit?: string
    fixed?: boolean
    decimal?: number
}>()

const renderdecimals = memoize((value) => {
    const { unit: numUnit } = bigNumber(value)
    if (Number.isInteger(value) && !numUnit) {
        return 0
    }
    return decimal
})
const renderValue = memoize((value) => {
    if (fixed) {
        const { result } = bigNumber(value, decimal)
        return result
    }
    return value
})

const renderUnit = memoize(
    (value, _unit) => {
        if (fixed) {
            const { unit: numUnit } = bigNumber(value, decimal)
            return `${numUnit}${_unit || unit}`
        }
        return _unit || unit
    },
    (value, _unit) => `${value}_${_unit || unit}`,
)
</script>

<style lang="scss" scoped>
.lc-bothway-card {
    width: fit-content;

    &__wrapper {
        min-width: 393px;
        display: flex;
        flex-direction: column;

        &__info-range {
            display: flex;
            gap: 25px;
            justify-content: space-between;
            padding: 0 50px 0 50px;
            box-sizing: border-box;

            &__label {
                font-family: HarmonyOS_Sans_SC;
                font-size: 16px;
                color: #ffffff;
                line-height: 20px;
                text-align: left;
                font-style: normal;
                text-transform: none;
            }

            &__wrapper {
                display: flex;
                gap: 10px;

                &__info {
                    display: flex;
                    gap: 10px;
                    color: #0fd4fb;

                    &__value {
                        font-family: HarmonyOS_Sans_SC_Medium;
                        font-size: 30px;
                        line-height: 37px;
                        text-shadow: 0px 0px 20px rgba(0, 129, 255, 0.4);
                        text-align: center;
                        font-style: normal;
                        text-transform: none;
                    }

                    &__division {
                        font-size: 18px;
                        color: rgba(15, 212, 251, 0.29);
                    }
                }
            }
        }

        &__table--bg {
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
.flex-end {
    display: flex;
    align-items: end;
}
.flex-center {
    display: flex;
    align-items: center;
}
</style>
