<template>
    <div class="lc-planning-indicators">
        <div class="lc-planning-indicators__header">
            <LcSubhead
                :text="data?.header"
                type="center"
                font-size="12px"
                :max-length="4"
            />
        </div>
        <div class="lc-planning-indicators__item">
            <div class="lc-planning-indicators__item__left">
                <span class="lc-planning-indicators__item__title">{{
                    formatedText(
                        data?.leftItem?.title,
                        data?.leftItem?.maxLength,
                    )
                }}</span>
                <span class="lc-planning-indicators__item__left--value">
                    <span class="lc-number-value">
                        <NNumberAnimation
                            show-separator
                            :from="0"
                            :to="
                                renderValue(
                                    data?.leftItem.value,
                                    data?.leftItem.decimal,
                                )
                            "
                            active
                            :precision="data?.leftItem.decimal"
                    /></span>
                    <span class="lc-number-unit">{{
                        renderUnit(
                            data?.leftItem.value,
                            data?.leftItem.unit,
                            data?.leftItem?.decimal,
                        )
                    }}</span>
                </span>
            </div>
            <div class="lc-planning-indicators__item__center">
                <img :src="data?.icon" alt="" />
            </div>
            <div class="lc-planning-indicators__item__right">
                <span class="lc-planning-indicators__item__right">{{
                    formatedText(
                        data?.rightItem?.title,
                        data?.rightItem?.maxLength,
                    )
                }}</span>
                <span class="lc-planning-indicators__item__right--value">
                    <span class="lc-number-value"
                        ><NNumberAnimation
                            show-separator
                            :from="0"
                            :to="
                                renderValue(
                                    data?.rightItem.value,
                                    data?.rightItem?.decimal,
                                )
                            "
                            active
                            :precision="data?.rightItem.decimal"
                    /></span>
                    <span class="lc-number-unit">{{
                        renderUnit(
                            data?.rightItem?.value,
                            data?.rightItem?.unit,
                            data?.rightItem?.decimal,
                        )
                    }}</span>
                </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { NNumberAnimation } from 'naive-ui/es/number-animation'
import memoize from 'lodash-es/memoize'
import { bigNumber } from 'lowcode-share/es/share'
import { LcSubhead } from '@/components/education/components/headline'
import { overflowStr } from 'lowcode-share/es/share'
export type Item = {
    title: string
    value: number
    unit: string
    decimal?: number
    maxLength?: number
}
export type Data = {
    header: string
    icon: string
    leftItem: Item
    rightItem: Item
}
const { fixed = true } = defineProps<{
    unit: string
    fixed?: boolean
    data: Data
}>()

const renderValue = memoize((value: number | undefined, decimal = 0) => {
    if (fixed) {
        const { result } = bigNumber(value ?? 0, decimal)
        return result
    }
    return value
})
const renderUnit = memoize(
    (value: number | undefined, unit: string | undefined, decimal = 0) => {
        if (fixed) {
            const { unit: numUnit } = bigNumber(value ?? 0, decimal)
            return `${numUnit}${unit ?? ''}`
        }
        return unit ?? ''
    },
)

const formatedText = (text, maxLength) => {
    if (!text) return '-'
    return overflowStr(text, maxLength)
}
</script>
<style lang="scss" scoped>
.lc-planning-indicators {
    min-width: 310px;
    &__header {
        display: flex;
        justify-content: center;
        margin-bottom: 8px;
    }
    &__item {
        display: flex;
        align-items: center;
        padding: 8px 0;
        width: 100%;
        height: 72px;
        color: #ffffff;
        font-family:
            PingFangSC,
            PingFang SC;
        background: url('./images/card/bg-plan-card.png');
        &__title {
            font-weight: 400;
            font-size: 16px;
        }
        &__left {
            display: flex;
            flex-direction: column;
            flex: 1;
            text-align: right;
        }
        &__center {
            width: 101px;
            height: 77px;
            img {
                height: 100%;
                width: 100%;
            }
        }
        &__right {
            font-size: 16px;
            display: flex;
            flex-direction: column;
            text-align: left;
            flex: 1;
        }
    }
    .lc-number-value {
        font-family: HarmonyOS_Sans_SC_Medium;
        font-size: 30px;
        color: #0fd4fb;
    }
    .lc-number-unit {
        margin-left: 8px;
        font-family:
            PingFangSC,
            PingFang SC;
        font-weight: 400;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.77);
    }
}
</style>
