<template>
    <div class="lc-funnel-tier">
        <div
            v-for="(serie, key) in computedOptions?.series"
            :key
            class="lc-funnel-tier__serie"
        >
            <div
                v-for="(item, index) in serie?.data"
                :key="index"
                class="lc-funnel-tier__serie__item"
            >
                <div class="lc-funnel-tier__serie__item__label">
                    {{ item.name }}
                </div>
                <div
                    class="lc-funnel-tier__serie__item__bar"
                    :style="{
                        '--inner-color': computedOptions.color![index],
                    }"
                >
                    <div class="lc-funnel-tier__serie__item__bar__line"></div>
                    <div
                        class="lc-funnel-tier__serie__item__bar__inner"
                        :style="{
                            '--inner-width': `${(item.value / serie.max) * 100}%`,
                        }"
                    >
                        <div
                            class="lc-funnel-tier__serie__item__bar__inner--text"
                        >
                            {{ serie?.label?.(item, serie) }}
                        </div>
                    </div>
                    <div class="lc-funnel-tier__serie__item__bar__line"></div>
                </div>
                <div class="lc-funnel-tier__serie__item__value">
                    {{ item.value }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import {
    defaultFunnelTierOptions,
    defaultFunnelTierSeriesOptions,
    type TierOptions,
} from './themeConfig'
import merge from 'lodash-es/merge'

const { options } = defineProps<{
    options: TierOptions
}>()

const computedOptions = computed(() => {
    const newOptions = merge({}, defaultFunnelTierOptions, options)
    newOptions.series = newOptions.series.map((serie) => {
        return merge({}, defaultFunnelTierSeriesOptions, serie)
    })
    return newOptions
})
</script>

<style lang="scss" scoped>
.lc-funnel-tier {
    width: 100%;
    height: 100%;

    &__serie {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        &__item {
            display: grid;
            grid-template-columns: 60px 1fr 50px;
            align-items: center;
            gap: 9px;
            width: 100%;
            font-family: HarmonyOS_Sans_SC;
            font-size: 14px;
            color: #ffffff;

            &__label {
                font-size: 14px;
                line-height: 20px;
                text-align: right;
            }

            &__value {
                font-size: 14px;
                line-height: 20px;
                text-align: left;
            }

            &__bar {
                flex: 1;
                text-align: center;
                min-height: 26px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                transition: transform linear 0.3s;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.05);
                }

                &__inner {
                    width: calc(var(--inner-width) - calc(26px * 2));
                    height: 26px;
                    background-color: var(--inner-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &--text {
                        font-size: 14px;
                        color: #ffffff;
                        line-height: 20px;
                        text-align: center;
                    }
                }

                &__line {
                    flex: 1;
                    height: 1px;
                    border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
                }
            }
        }
    }
}
</style>
