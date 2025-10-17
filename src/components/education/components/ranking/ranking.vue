<template>
    <div class="lc-ranking">
        <LcElasticScrollbar>
            <div class="lc-ranking__wrapper">
                <div
                    v-for="(item, key) in renderList"
                    :key
                    class="lc-ranking__wrapper__item"
                    :class="[`lc-ranking__wrapper__item--${type}`]"
                    :style="{
                        '--proportion': getCurrentProportion(item.value),
                        '--ranking-num': key,
                        '--pre-proportion': getPreProportion(key),
                    }"
                >
                    <div class="lc-ranking__wrapper__item__top">
                        <div class="lc-ranking__wrapper__item__top__start">
                            <div class="lc-ranking__wrapper__item__top__start__index">
                                {{ key + 1 }}
                            </div>
                            <div class="lc-ranking__wrapper__item__top__start__label">
                                {{ item.label }}
                            </div>
                        </div>
                        <div class="lc-ranking__wrapper__item__top__end">
                            <div class="lc-ranking__wrapper__item__top__end__value">
                                {{ fromValue(item) }}
                            </div>
                            <div class="lc-ranking__wrapper__item__top__end__unit">
                                {{ item.unit }}
                            </div>
                        </div>
                    </div>
                    <div class="lc-ranking__wrapper__item__inner">
                        <div class="lc-ranking__wrapper__item__inner__bar"></div>
                        <div v-if="showBall" class="lc-ranking__wrapper__item__inner__ball"></div>
                    </div>
                </div>
            </div>
        </LcElasticScrollbar>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { LcElasticScrollbar } from '@/components/education/components/elasticScrollbar'

export type RankingRecord = {
    label: string
    unit?: string | '{b}'
    value: number
    formatter?: '{a}' | '{b}' | ((e: RankingRecord) => string | number)
}
const {
    list,
    sort = 'order',
    animateIndex = 0,
    type = 'ranking',
    showBall = true,
    maxProportion,
} = defineProps<{
    list: RankingRecord[]
    sort?: 'order' | 'reverse' | 'none'
    animateIndex?: 0 | 1
    type?: 'ranking' | 'proprotion'
    showBall?: boolean
    maxProportion?: number
}>()
function complierTotal(data: RankingRecord[]) {
    return data.reduce((pre: number, cur) => (pre += cur.value), 0)
}
const total = computed(() => maxProportion ?? complierTotal(list))
const isAnimate = ref(animateIndex)
function getCurrentProportion(value?: RankingRecord['value']) {
    if (!value) return 0
    return (value / total.value) * 100 * isAnimate.value
}
function getPreProportion(i: number) {
    return (complierTotal(renderList.value.slice(0, i)) / total.value) * 100 * isAnimate.value
}

function fromValue(item: RankingRecord) {
    if (typeof item.formatter === 'function') {
        return item.formatter(item)
    }
    switch (item.formatter) {
        case '{b}':
            return ((item.value / total.value) * 100).toFixed(2)
        case '{a}':
            return item.value * total.value
        default:
            return item.value
    }
}
const renderList = computed(() => {
    switch (sort) {
        case 'none':
            return list
        case 'order':
            return list.sort((a, b) => b.value - a.value)
        case 'reverse':
            return list.sort((a, b) => a.value - b.value)
        default:
            return list
    }
})
onMounted(() => {
    isAnimate.value = 1
})
</script>

<style lang="scss" scoped>
.lc-ranking {
    display: flex;
    flex-direction: column;
    flex: 1;

    &__wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 20px;
        gap: 20px;

        &__item {
            width: 100%;

            @mixin rankingItemIndex {
                .lc-ranking {
                    &__wrapper {
                        &__item {
                            &__top {
                                &__start {
                                    &__index {
                                        @content;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &:nth-of-type(1) {
                @include rankingItemIndex() {
                    background: rgba(255, 179, 85, 0.1);
                    border: 1px solid #ffb454;
                }
            }

            &:nth-of-type(2) {
                @include rankingItemIndex() {
                    background: rgba(238, 111, 124, 0.1);
                    border: 1px solid #ee6f7c;
                }
            }

            &:nth-of-type(3) {
                @include rankingItemIndex() {
                    background: rgba(15, 251, 248, 0.1);
                    border: 1px solid #0ffbf8;
                }
            }

            &__top {
                display: flex;
                justify-content: space-between;

                @mixin fontcss() {
                    font-family: HarmonyOS_Sans_SC;
                    font-size: 14px;
                    color: #ffffff;
                    line-height: 20px;
                }

                &__start {
                    display: flex;
                    gap: 10px;

                    &__label {
                        @include fontcss();
                    }

                    &__index {
                        @include fontcss();
                        font-family: HarmonyOS_Sans_SC;
                        font-size: 14px;
                        color: #ffffff;
                        line-height: 20px;
                        background: rgba(166, 207, 255, 0.1);
                        border: 1px solid #a6cfff;
                        padding: 0 8px;
                        box-sizing: border-box;
                        align-self: flex-start;
                    }
                }

                &__end {
                    display: flex;
                    gap: 2px;

                    &__value {
                        @include fontcss();
                    }

                    &__unit {
                        @include fontcss();
                        opacity: 0.5;
                        text-wrap: nowrap;
                    }
                }
            }

            &__inner {
                height: 3px;
                background: #2276fc13;
                position: relative;
                margin-top: 8px;
                margin-bottom: 6px;

                @mixin transitionDelay() {
                    transition-delay: calc(var(--ranking-num) * 0.1s);
                }

                &__bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: calc(var(--proportion) * 1%);
                    height: 100%;
                    background: linear-gradient(50deg, rgba(15, 251, 248, 0) 0%, #0ffbf8 100%);
                    transition: linear 0.3s;
                    transition-property: width, left;
                    @include transitionDelay;
                }

                &__ball {
                    position: absolute;
                    top: 50%;
                    left: calc(var(--proportion) * 1%);
                    transform: translate(-50%, -50%);
                    width: 23px;
                    height: 23px;
                    background: url(./images/ball.png);
                    background-size: 100% 100%;
                    transition: left linear 0.3s;
                    @include transitionDelay;
                }
            }
        }

        &__item--proprotion {
            .lc-ranking {
                &__wrapper {
                    &__item {
                        &__inner {
                            &__bar {
                                left: calc(var(--pre-proportion) * 1%);
                            }

                            &__ball {
                                left: calc(calc(var(--proportion) + var(--pre-proportion)) * 1%);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
