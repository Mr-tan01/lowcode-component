<template>
    <div class="lc-human-shapeCard">
        <div class="lc-human-shapeCard__wrapper">
            <div v-for="(item, key) in letData" :key="key" class="lc-human-shapeCard__wrapper__item">
                <span class="lc-human-shapeCard__wrapper__item__title tiele-left">{{ item.title }}</span>
                <div class="lc-human-shapeCard__wrapper__item__content content-left">
                    <div
                        class="lc-human-shapeCard__wrapper__item__content__val tooltip-container"
                        :data-tooltip="`${item.lefValue}${item.lefUnit || lefUnit}`"
                    >
                        <NNumberAnimation
                            show-separator
                            :from="0"
                            :to="renderValue(item.lefValue)"
                            active
                            :precision="renderdecimals(item.lefValue)"
                        />{{ renderLeftUnit(item.lefValue, item.lefUnit) }}
                    </div>

                    <div class="lc-human-shapeCard__wrapper__item__content__val">|</div>
                    <div
                        class="lc-human-shapeCard__wrapper__item__content__val tooltip-container"
                        :data-tooltip="`${item.rigValue}${item.rigUnit || rigUnit}`"
                    >
                        <NNumberAnimation
                            show-separator
                            :from="0"
                            :to="renderValue(item.rigValue)"
                            active
                            :precision="renderdecimals(item.rigValue)"
                        />{{ renderRightUnit(item.rigValue, item.rigUnit) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="lc-human-shapeCard__img">
            <slot name="image">
                <img src="./images/card/bg-human.png" alt="" />
            </slot>
        </div>
        <div class="lc-human-shapeCard__wrapper">
            <div v-for="(item, key) in rigData" :key="key" class="lc-human-shapeCard__wrapper__item">
                <span class="lc-human-shapeCard__wrapper__item__title tiele-right">{{ item.title }}</span>
                <div class="lc-human-shapeCard__wrapper__item__content">
                    <div
                        class="lc-human-shapeCard__wrapper__item__content__val tooltip-container"
                        :data-tooltip="`${item.lefValue}${item.lefUnit || lefUnit}`"
                    >
                        <NNumberAnimation
                            show-separator
                            :from="0"
                            :to="renderValue(item.lefValue)"
                            active
                            :precision="renderdecimals(item.lefValue)"
                        />{{ renderLeftUnit(item.lefValue, item.lefUnit) }}
                    </div>

                    <div class="lc-human-shapeCard__wrapper__item__content__val">|</div>
                    <div
                        class="lc-human-shapeCard__wrapper__item__content__val tooltip-container"
                        :data-tooltip="`${item.rigValue}${item.rigUnit || rigUnit}`"
                    >
                        <NNumberAnimation
                            show-separator
                            :from="0"
                            :to="renderValue(item.rigValue)"
                            active
                            :precision="renderdecimals(item.rigValue)"
                        />{{ renderRightUnit(item.rigValue, item.rigUnit) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NNumberAnimation } from 'naive-ui/es/number-animation'
import memoize from 'lodash-es/memoize'
import { bigNumber } from 'lowcode-share/es/share'

type Data = {
    title?: string
    lefValue?: number
    rigValue?: number
    lefUnit?: string
    rigUnit?: string
}
const {
    letData = [],
    rigData = [],
    lefUnit = '',
    rigUnit = '',
    decimal = 2,
    fixed = true,
} = defineProps<{
    letData?: Data[]
    rigData?: Data[]
    lefUnit?: string
    rigUnit?: string
    decimal?: number
    fixed?: boolean
}>()

const renderdecimals = memoize(value => {
    const { unit: numUnit } = bigNumber(value)
    if (Number.isInteger(value) && !numUnit) {
        return 0
    }
    return decimal
})
const renderValue = memoize(value => {
    if (fixed) {
        const { result } = bigNumber(value, decimal)
        return result
    }
    return value
})

const createUnitRenderer = defaultUnit =>
    memoize(
        (value, _unit) => {
            if (fixed) {
                const { unit: numUnit } = bigNumber(value, decimal)
                return `${numUnit}${_unit || defaultUnit}`
            }
            return _unit || defaultUnit
        },
        (value, _unit) => `${value}_${_unit || defaultUnit}`,
    )

const renderLeftUnit = createUnitRenderer(lefUnit)
const renderRightUnit = createUnitRenderer(rigUnit)
</script>

<style scoped lang="scss">
.lc-human-shapeCard {
    width: fit-content;
    display: flex;

    .tooltip-container {
        position: relative;
        cursor: pointer;
    }
    .tooltip-container::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(6, 56, 94, 1);
        color: rgba(15, 251, 248, 1);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.3s,
            visibility 0.3s;
        z-index: 10;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        pointer-events: none;
        margin-bottom: 5px;
        border: 1px solid rgba(14, 121, 188, 1);
    }

    .tooltip-container:hover::after {
        opacity: 1;
        visibility: visible;
    }

    &__img {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__item {
            display: flex;
            flex-direction: column;

            .tiele-left {
                text-align: right;
            }
            .tiele-right {
                text-align: left;
            }
            .content-left {
                justify-content: flex-end;
            }

            &__title {
                font-family:
                    PingFangSC,
                    PingFang SC;
                font-weight: 400;
                font-size: 16px;
                color: #ffffff;
                line-height: 22px;
                text-align: center;
            }

            &__content {
                font-family: HarmonyOS_Sans_SC_Medium;
                font-size: 20px;
                color: #0fd4fb;
                line-height: 25px;
                text-align: center;
                font-style: normal;
                display: flex;
                align-items: center;
                gap: 8px;

                &__val.tooltip-container {
                    transition: all 0.2s ease;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
