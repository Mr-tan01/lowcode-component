<template>
    <div class="lcc-header">
        <div class="lcc-header__wrapper">
            <div class="lcc-header__wrapper__navs">
                <LcCarouseBox :disabled="hideArrow" :list="listSource" :show-track="false" v-model:index="modelIndex" @change="carouseChange">
                    <template #default="{ index, record, isActive }">
                        <div class="lcc-header__wrapper__navs__item" :class="{
                            'active': isActive,
                        }">
                            <n-popover trigger="hover" arrow-class="header-arrow-class" class="header-popover-class">
                                <template #trigger>
                                    <a class="lcc-header__wrapper__navs__item__link"
                                        @click="jump(null, record as NavData, index)">
                                        {{ record.label }}
                                    </a>
                                </template>
                                <div class="lcc-header__wrapper__navs__drop" v-if="record.list?.length">
                                    <div class="lcc-header__wrapper__navs__drop__group" v-for="(el, key) in record.list"
                                        :key>
                                        <div class="lcc-header__wrapper__navs__drop__group__label">
                                            <div class="lcc-header__wrapper__navs__drop__group__label--icon">
                                                <img class="lcc-header__wrapper__navs__drop__group__label--icon--image"
                                                    src="./images/right-arrow.png" alt="">
                                            </div>
                                            <div class="lcc-header__wrapper__navs__drop__group__label--text">
                                                {{ el.label }}
                                            </div>
                                        </div>
                                        <div class="lcc-header__wrapper__navs__drop__group__item__group">
                                            <div class="lcc-header__wrapper__navs__drop__group__item__group__nav"
                                                v-for="(child, ckey) in el.children" :key="ckey"
                                                @click="jump(el, child, ckey)">
                                                {{ child.label }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </n-popover>
                        </div>
                    </template>
                </LcCarouseBox>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { NPopover } from 'naive-ui/es/popover';
import { defNavData } from './const';
import { LcCarouseBox, type LcCarouseBoxChangeEvent, } from '@/components/education/components/carouseBox';

type ListRaw = {
    label: string;
    children: NavData[];
}
export type NavData = {
    label: string;
    path: string;
    list?: ListRaw[];
};

const {
    navDatas,
    hideArrow,
} = defineProps<{
    navDatas?: NavData[];
    hideArrow?: boolean;
}>();

const modelIndex = defineModel<number>('index', { default: 0, });
const listSource = computed(() => {
    return navDatas === void 0 ? defNavData : navDatas;
});

const $emit = defineEmits<{
    (e: 'jump', parent: ListRaw | null, item: NavData, i: number): void;
    (e: 'scroll', data: LcCarouseBoxChangeEvent): void;
}>();

function jump(parent: ListRaw | null, item: NavData, i: number) {
    $emit('jump', parent, item, i);
}

function carouseChange(value: LcCarouseBoxChangeEvent) {
    $emit('scroll', value);
}

</script>

<style lang="scss">
.header-popover-class {
    --n-padding: 0 !important;
    --n-color: transparent !important;

    .n-popover-arrow-wrapper {
        overflow: visible;

    }

    .header-arrow-class {
        background-color: #103265 !important;
        border-left: 1px solid #207097;
        border-top: 1px solid #207097;
        margin-bottom: -1px;
    }
}
</style>
<style lang="scss" scoped>
.lcc-header {
    width: 100%;
    height: 106px;
    background: url(./images/header-nav-bg.png) no-repeat;
    background-size: 1920px 100%;
    background-position: center top;
    --min-width: 1100px;
    min-width: var(--min-width);

    &__wrapper {
        width: var(--min-width);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        position: relative;

        &__navs {
            width: 100%;
            box-sizing: border-box;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 301;

            &__item {
                color: #fff;
                font-size: 18px;
                line-height: 28px;
                width: 170px;
                min-width: 170px;
                text-align: center;
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow: hidden;

                &__link {
                    display: block;
                    height: 70px;
                    line-height: 70px;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: transform linear 0.3s;

                    &::before {
                        content: '';
                        background: url('./images/focus-point-light.png') no-repeat;
                        background-size: 100% 100%;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        bottom: -43%;
                        user-select: none;
                        pointer-events: none;
                        z-index: 9;
                        display: none;
                    }

                    &:hover {
                        cursor: pointer;
                        opacity: 0.8;

                        &::before {
                            display: block;
                        }
                    }

                }

                &.active {
                    width: 245px;
                    min-width: 245px;
                    font-size: 30px;

                    .lcc-header__wrapper__navs__item__link {
                        transform: translateY(-10%);
                    }
                }
            }

            &__drop {
                --offsetY: 10px;
                width: 100%;
                display: flex;
                gap: 40px;
                background: linear-gradient(174deg, #123479 0%, #0B2952 66%, #10507D 100%);
                box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.31);
                border-radius: 8px;
                border: 1px solid #207097;
                padding: 15px 30px;
                box-sizing: border-box;
                border-radius: 8px;

                &::before {
                    content: '';
                    position: absolute;
                    top: calc(var(--offsetY) * -1);
                    left: 0;
                    width: 100%;
                    height: calc(100% + var(--offsetY));
                    z-index: -1;
                }

                &__group {
                    flex: 1;

                    &__label {
                        display: flex;
                        align-items: center;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

                        &--icon {
                            display: flex;
                            align-items: center;

                            &--image {
                                margin-right: 8px;
                                height: 19px;
                            }
                        }

                        &--text {
                            font-family: HarmonyOS_Sans_SC_Bold;
                            font-size: 16px;
                            color: #F2F3F4;
                            line-height: 24px;
                            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
                            text-align: left;
                            font-style: normal;
                            text-transform: none;
                        }
                    }

                    &__item__group {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        &__nav {
                            font-family: HarmonyOS_Sans_SC_Medium;
                            font-size: 16px;
                            color: #F2F3F4;
                            line-height: 24px;
                            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
                            text-align: left;
                            font-style: normal;
                            text-transform: none;
                            white-space: nowrap;

                            &:hover {
                                color: rgba(15, 251, 248, 1);
                            }

                        }
                    }
                }
            }
        }
    }
}
</style>