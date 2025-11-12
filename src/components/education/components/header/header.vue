<template>
    <div ref="headerRef" class="lcc-header" :style="headerBgStyle">
        <div class="lcc-header__prefix-slot">
            <slot name="prefix"> </slot>
        </div>
        <div class="lcc-header__wrapper">
            <div class="lcc-header__wrapper__navs">
                <LcCarouseBox v-model:index="modelIndex" :disabled="hideArrow" :list="listSource" :show-track="false" @change="carouseChange">
                    <template #default="{ index, record, isActive, handleClick }">
                        <div
                            class="lcc-header__wrapper__navs__item"
                            :class="{
                                active: hideArrow ? index === modelIndex : isActive,
                            }"
                        >
                            <n-popover
                                trigger="hover"
                                v-bind="$attrs"
                                placement="bottom"
                                arrow-class="header-arrow-class"
                                class="header-popover-class"
                                :style="{ '--popover-w': popoverW, '--popover-h': popoverH }"
                            >
                                <template #trigger>
                                    <a
                                        class="lcc-header__wrapper__navs__item__link"
                                        @click="
                                            jump({
                                                item: record as NavData,
                                                index,
                                            })
                                        "
                                        @mouseover="handleMouseover(record, index)"
                                        @mouseleave="handleMouseleave"
                                    >
                                        {{ record.label }}
                                    </a>
                                </template>
                                <div
                                    v-if="record.list?.length"
                                    class="lcc-header__wrapper__navs__drop"
                                    :style="{ '--grid-col': record.list?.length >= 3 ? 3 : record.list?.length }"
                                >
                                    <div
                                        v-for="(el, key) in record.list"
                                        :key
                                        class="lcc-header__wrapper__navs__drop__group"
                                        :style="{
                                            '--group-min-width': menuItemWidth === 'fixed' ? maxWidth + 'px' : 'auto',
                                        }"
                                    >
                                        <div class="lcc-header__wrapper__navs__drop__group__label">
                                            <div class="lcc-header__wrapper__navs__drop__group__label--icon">
                                                <img
                                                    class="lcc-header__wrapper__navs__drop__group__label--icon--image"
                                                    src="./images/right-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="lcc-header__wrapper__navs__drop__group__label--text" :title="el.label">
                                                {{ el.label }}
                                            </div>
                                        </div>
                                        <div class="lcc-header__wrapper__navs__drop__group__item__group">
                                            <div
                                                v-for="(child, ckey) in el.children"
                                                :key="ckey"
                                                class="lcc-header__wrapper__navs__drop__group__item__group__nav"
                                                :class="{
                                                    highlight: (isActive && selectedKey === child.path) || selectedKey === child.label,
                                                }"
                                                @click="
                                                    jump({
                                                        parent: el,
                                                        item: child,
                                                        index,
                                                        handleClick,
                                                    })
                                                "
                                            >
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
        <div class="lcc-header__suffix-slot">
            <slot name="suffix"> </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef, onMounted } from 'vue'
import { NPopover } from 'naive-ui/es/popover'
import { scale } from 'mmjs-core'
import { LcCarouseBox, type LcCarouseBoxChangeEvent } from '@/components/education/components/carouseBox'
import headerNavBg from './images/header-nav-bg.png'
import { headerNavBgs } from './const'
type ListRaw = {
    label: string
    children: NavData[]
}
export type NavData = {
    label: string
    path: string
    list?: ListRaw[]
}

export type jumpParams = {
    parent?: ListRaw | null
    item: NavData
    index: number
    handleClick?: (item: ListRaw, index: number) => void
}
const {
    navDatas,
    hideArrow,
    menuItemWidth = 'fixed',
    highlightHandler = null,
} = defineProps<{
    navDatas: NavData[]
    hideArrow?: boolean
    menuItemWidth?: 'auto' | 'fixed' // auto: 自适应宽度 fixed: 同等宽度
    highlightHandler?: (item: NavData) => string | null
}>()
const selectedKey = defineModel<string>('selectedKey', { default: '' })
const modelIndex = defineModel<number>('index', { default: 0 })
const listSource = computed(() => {
    return navDatas === void 0 ? [] : navDatas
})
const currentIndex = ref(2)
const maxWidth = ref(0)
const fontSize = ref(16)
const headerRef = useTemplateRef('headerRef')

function calculateTextWidth(text: string): number {
    const chineseCharRegex = /[\u4e00-\u9fa5]/g
    const englishCharRegex = /[a-zA-Z]/g
    const chineseCount = (text.match(chineseCharRegex) || []).length
    const englishCount = (text.match(englishCharRegex) || []).length
    // 中文字符数 * 字体大小 + 英文字符数 * 字体大小/2
    const width = chineseCount * fontSize.value + englishCount * fontSize.value * 0.5
    return scale(width)
}

const popoverW = computed(() => {
    const screenWidth = document.body.clientWidth
    return `${screenWidth / 1.8}px`
})

const popoverH = computed(() => {
    let headerDistTop = 0
    if (headerRef.value) {
        // 可能header没有放在顶部，所有就多加一个顶部的距离，能保持永远不超出屏幕
        headerDistTop = headerRef.value.getBoundingClientRect().top
    }
    const screenHeight = document.body.clientWidth
    return `${screenHeight / 2.3 - Number(headerDistTop.toFixed(0))}px`
})

onMounted(() => {
    if (navDatas.length) {
        const allChildren = navDatas.flatMap(item => item.list?.flatMap(el => el.children) || [])
        const allLabels = [...navDatas.map(item => item.label), ...allChildren.map(child => child.label)]
        if (menuItemWidth === 'fixed') {
            // 最大宽度的menuLabel
            const widths = allLabels.map(label => calculateTextWidth(label))
            maxWidth.value = Math.max(...widths)
        } else {
            maxWidth.value = 0
        }
    }
})

const $emit = defineEmits<{
    (e: 'jump', jumpParams: jumpParams): void
    (e: 'scroll', data: LcCarouseBoxChangeEvent): void
    (e: 'handleMouseover', data: { item: NavData; index: number; modelIndex: number }): void
    (e: 'handleMouseleave'): void
}>()

function jump({ parent, item, index, handleClick }: jumpParams) {
    selectedKey.value = highlightHandler?.(item) ?? item.path
    if (parent && !hideArrow && handleClick) {
        handleClick(parent, index)
    }
    currentIndex.value = index
    $emit('jump', { parent, item, index })
}

function carouseChange(value: LcCarouseBoxChangeEvent) {
    $emit('scroll', value)
}

function handleMouseover(record, index) {
    $emit('handleMouseover', { item: record, modelIndex: modelIndex.value, index })
}

function handleMouseleave() {
    $emit('handleMouseleave')
}

const headerBgStyle = computed(() => {
    if (!hideArrow) {
        return {
            backgroundImage: `url(${headerNavBg})`,
            backgroundRepeat: 'no-repeat',
        }
    }
    console.log(modelIndex.value, '==>')
    return {
        backgroundImage: `url(${headerNavBgs[modelIndex.value]})`,
        backgroundRepeat: 'no-repeat',
    }
})
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
    background-size: 1920px 100%;
    background-position: center top;
    --min-width: 1100px;
    position: relative;
    min-width: var(--min-width);
    // &::before {
    //     content: '';
    //     background: url('./images/focus-point-light.png') no-repeat;
    //     background-size: 100% 100%;
    //     filter: brightness(8);
    //     mix-blend-mode: screen;
    //     left: 50%;
    //     width: 245px;
    //     height: 100%;
    //     transform: translateX(-50%);
    //     position: absolute;
    //     bottom: -28%;
    //     user-select: none;
    //     pointer-events: none;
    //     z-index: 9;
    // }
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
                display: grid;
                grid-template-columns: repeat(var(--grid-col), 1fr);
                gap: 40px;
                background: linear-gradient(174deg, #123479 0%, #0b2952 66%, #10507d 100%);
                box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.31);
                border-radius: 8px;
                border: 1px solid #207097;
                padding: 15px 30px;
                box-sizing: border-box;
                border-radius: 8px;
                cursor: pointer;
                max-width: var(--popover-w) !important;
                max-height: var(--popover-h) !important;
                overflow-y: auto;
                &--grid {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }
                &::-webkit-scrollbar {
                    width: 6px;
                }
                &::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 3px;
                }
                &::-webkit-scrollbar-thumb {
                    background: rgb(8, 192, 189);
                    border-radius: 3px;
                    &:hover {
                        background: rgba(15, 251, 248, 1);
                    }
                }

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
                    min-width: var(--group-min-width);

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
