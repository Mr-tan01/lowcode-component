<template>
    <div class="lcc-header">
        <div class="lcc-header__prefix-slot">
            <slot name="prefix"> </slot>
        </div>
        <div class="lcc-header__wrapper">
            <div class="lcc-header__wrapper__navs">
                <LcCarouseBox :disabled="hideArrow" :list="listSource" :show-track="false" v-model:index="modelIndex" @change="carouseChange">
                    <template #default="{ index, record, isActive, handleClick }">
                        <div
                            class="lcc-header__wrapper__navs__item"
                            :class="{
                                active: isActive,
                            }"
                        >
                            <n-popover trigger="hover" arrow-class="header-arrow-class" class="header-popover-class">
                                <template #trigger>
                                    <a
                                        class="lcc-header__wrapper__navs__item__link"
                                        @click="
                                            jump({
                                                item: record as NavData,
                                                index,
                                            })
                                        "
                                    >
                                        {{ record.label }}
                                    </a>
                                </template>
                                <div class="lcc-header__wrapper__navs__drop" v-if="record.list?.length">
                                    <div class="lcc-header__wrapper__navs__drop__group" v-for="(el, key) in record.list" :key>
                                        <div class="lcc-header__wrapper__navs__drop__group__label">
                                            <div class="lcc-header__wrapper__navs__drop__group__label--icon">
                                                <img class="lcc-header__wrapper__navs__drop__group__label--icon--image" src="./images/right-arrow.png" alt="" />
                                            </div>
                                            <div class="lcc-header__wrapper__navs__drop__group__label--text" :title="el.label">
                                                {{ el.label }}
                                            </div>
                                        </div>
                                        <div class="lcc-header__wrapper__navs__drop__group__item__group">
                                            <div
                                                class="lcc-header__wrapper__navs__drop__group__item__group__nav"
                                                v-for="(child, ckey) in el.children"
                                                :key="ckey"
                                                :class="{ highlight: (isActive && selectedKey === child.path) || selectedKey === child.label }"
                                                @click="jump({ parent: el, item: child, index, handleClick })"
                                            >
                                                {{ child.label }}{{ selectedKey }}
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
        <div class="lcc-header__suffix-slot">
            <slot name="suffix"> </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NPopover } from "naive-ui/es/popover";
import { LcCarouseBox, type LcCarouseBoxChangeEvent } from "@/components/education/components/carouseBox";
type ListRaw = {
    label: string;
    children: NavData[];
};
export type NavData = {
    label: string;
    path: string;
    list?: ListRaw[];
};

export type jumpParams = {
    parent?: ListRaw | null;
    item: NavData;
    index: number;
    handleClick?: (item: ListRaw, index: number) => void;
};
const { navDatas, hideArrow, highlightHandler } = defineProps<{
    navDatas?: NavData[];
    hideArrow?: boolean;
    highlightHandler?: (item: NavData) => string;
}>();
const selectedKey = defineModel<string>("selectedKey", { default: "" });
const modelIndex = defineModel<number>("index", { default: 0 });
const listSource = computed(() => {
    return navDatas === void 0 ? [] : navDatas;
});

const $emit = defineEmits<{
    (e: "jump", jumpParams: jumpParams): void;
    (e: "scroll", data: LcCarouseBoxChangeEvent): void;
}>();

function jump({ parent, item, index, handleClick }: jumpParams) {
    selectedKey.value = highlightHandler?.(item) ?? item.path;
    parent && !hideArrow && handleClick?.(parent, index);
    $emit("jump", { parent, item, index });
}

function carouseChange(value: LcCarouseBoxChangeEvent) {
    $emit("scroll", value);
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
    position: relative;
    min-width: var(--min-width);
    &::before {
        content: "";
        background: url("./images/focus-point-light.png") no-repeat;
        background-size: 100% 100%;
        filter: brightness(8);
        mix-blend-mode: screen;
        left: 50%;
        width: 245px;
        height: 100%;
        transform: translateX(-50%);
        position: absolute;
        bottom: -28%;
        user-select: none;
        pointer-events: none;
        z-index: 9;
    }
    &__prefix-slot {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 0px;
    }

    &__suffix-slot {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: 30px;
    }

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
                    color: #fff;

                    &:hover {
                        cursor: pointer;
                        opacity: 0.8;
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
                background: linear-gradient(174deg, #123479 0%, #0b2952 66%, #10507d 100%);
                box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.31);
                border-radius: 8px;
                border: 1px solid #207097;
                padding: 15px 30px;
                box-sizing: border-box;
                border-radius: 8px;
                cursor: pointer;

                &::before {
                    content: "";
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
                            white-space: nowrap;
                            max-width: 165px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            font-family: HarmonyOS_Sans_SC_Bold;
                            font-size: 16px;
                            color: #f2f3f4;
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
                            color: #f2f3f4;
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
.highlight {
    color: rgba(15, 251, 248, 1);
}
</style>
