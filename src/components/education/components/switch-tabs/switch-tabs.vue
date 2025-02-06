<template>
    <div class="lc-switch-tabs">
        <div class="lc-switch-tabs__wrapper">
            <div class="lc-switch-tabs__wrapper__arrow arrow--left" @click="leftHandler">
                <img class="lc-switch-tabs__wrapper__arrow--image" src="./images/lt-arrow.png" alt="">
            </div>
            <div class="lc-switch-tabs__wrapper__tabs">
                <div class="lc-switch-tabs__wrapper__tabs--train">
                    <button class="lc-switch-tabs__wrapper__tabs--train__button" v-for="(item, index) in renderList"
                        :key="item.value" :class="{ 'active': modelValue === index, 'is-even': isEven, }"
                        @click="handleClick(item, index)">
                        <div class="lc-switch-tabs__wrapper__tabs--train__button--text">

                            {{ item.label }}
                        </div>
                    </button>
                </div>
            </div>
            <div class="lc-switch-tabs__wrapper__arrow arrow--right" @click="rightHandler">
                <img class="lc-switch-tabs__wrapper__arrow--image" src="./images/rt-arrow.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { type TabListRaw } from './types';
import { defSwitchTabList } from './const';
import throttle from 'lodash-es/throttle';

const modelValue = defineModel<number>('value', { default: 0 });
const {
    list,
} = defineProps({
    list: {
        type: Array as PropType<TabListRaw[]>,
        required: false,
    }
});
const $emit = defineEmits<{
    (e: 'change', value: { index: number, label: TabListRaw['label'], value: TabListRaw['value'], data: TabListRaw }): void;
}>();
const renderList = computed(() => list === void 0 ? defSwitchTabList : list);
const isEven = computed(() => modelValue.value! % 2 === 0);

function createStepHandler(dir: number) {
    return throttle(() => {
        let currentIndex = modelValue.value + dir;
        if (currentIndex < 0) {
            currentIndex = renderList.value.length - 1;
        } else if (currentIndex >= renderList.value.length) {
            currentIndex = 0;
        }
        handleClick(renderList.value[currentIndex], currentIndex);
    }, 300);
}


const leftHandler = createStepHandler(-1);
const rightHandler = createStepHandler(1);

const handleClick = (item: TabListRaw, index: number) => {
    modelValue.value = index;
    $emit('change', {
        index,
        label: item?.label,
        value: item?.value,
        data: item,
    });
}
</script>



<style lang="scss" scoped>
.lc-switch-tabs {
    width: 100%;

    &__wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        &__tabs {
            flex: 1;
            overflow: hidden;
            --mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.8) 10%, black 50%, rgba(0, 0, 0, 0.817) 90%, transparent 100%);
            mask: var(--mask-image);
            -webkit-mask: var(--mask-image);


            &--train {
                width: fit-content;
                display: flex;
                will-change: transform;

                &__button {
                    width: 175px;
                    height: 49px;
                    background-color: transparent;
                    outline: none;
                    border: 0;
                    padding-bottom: 10px;
                    box-sizing: border-box;
                    transition: 0.3s linear;
                    background: url(./images/lt-first.png) no-repeat center center / 100% 100%;

                    &:nth-child(odd) {
                        background-image: url(./images/rt-first.png);
                    }

                    &:nth-child(even) {
                        background-image: url(./images/rt-reverse.png);
                    }

                    // 偶数
                    &.is-even {
                        &:nth-child(even) {
                            background-image: url(./images/rt-first.png);

                        }

                        &:nth-child(odd) {
                            background-image: url(./images/rt-reverse.png);
                        }
                    }

                    &:hover {
                        cursor: pointer;
                    }

                    &.active {
                        width: 197px;
                        background-image: url(./images/active-bg.png) !important;
                    }



                    &--text {
                        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
                        font-weight: normal;
                        font-size: 18px;
                        color: #FFFFFF;
                        line-height: 18px;
                    }
                }
            }

        }

        &__arrow {
            &:hover {
                cursor: pointer;
            }

            &--image {
                width: 36px;
                height: 40px;
            }
        }

    }
}
</style>