<template>
    <div class="lc-switch-tabs">
        <LcCarouseBox :list="listSource" :offsetAnimationTime :rowKey v-bind="$attrs">
            <template #default="{ isActive, isEven, record: { label } }">
                <button class="lc-switch-tabs__wrapper__tabs--train__button"
                    :class="{ 'active': isActive, 'is-even': isEven, }">
                    <div class="lc-switch-tabs__wrapper__tabs--train__button--text" :title="label">
                        {{ label }}
                    </div>
                </button>
            </template>
        </LcCarouseBox>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, } from 'vue';
import { LcCarouseBox, LcCarouseBoxProps } from '@/components/education/components/carouseBox';
import { type TabListRaw } from './types';
import { defSwitchTabList } from './const';

const {
    list,
} = defineProps(LcCarouseBoxProps);

const listSource = computed(() => {
    return list ?? defSwitchTabList;
});
</script>

<style lang="scss" scoped>
.lc-switch-tabs {
    width: 100%;
    user-select: none;

    &__wrapper {
        &__tabs {
            &--train {
                &__button {
                    width: 175px;
                    height: 49px;
                    background-color: transparent;
                    outline: none;
                    border: 0;
                    padding-bottom: 10px;
                    box-sizing: border-box;
                    background: url(./images/lt-first.png) no-repeat center center / 100% 100%;
                    transition: background 0.3s linear;

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
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }


        }
    }
}
</style>