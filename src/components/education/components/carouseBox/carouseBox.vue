<template>
    <div class="lc-carouse-box">
        <div class="lc-carouse-box__wrapper">
            <div v-if="showArrow" class="lc-carouse-box__wrapper__arrow arrow--left" @click="leftHandler">
                <img class="lc-carouse-box__wrapper__arrow--image" src="./images/lt-arrow.png" draggable="false" alt="" />
            </div>
            <div ref="tabButtonParentElRef" class="lc-carouse-box__wrapper__tabs">
                <div
                    ref="carouselTrainElRef"
                    class="lc-carouse-box__wrapper__tabs--train"
                    :class="{ 'is-transition': _isTransition }"
                    :style="{
                        '--carousel-offset': `translateX(${carouselOffset}px)`,
                    }"
                >
                    <button
                        v-for="(item, index) in renderList"
                        :key="rowKey(item)"
                        ref="tabButtonRef"
                        class="lc-carouse-box__wrapper__tabs--train__button"
                        :class="{
                            'active': carouseIndex === index,
                            'is-even': isEven,
                        }"
                        @click="handleClick(item, index)"
                    >
                        <slot
                            v-bind="{
                                record: item,
                                isActive: carouseIndex === index,
                                isEven,
                                isTransition: _isTransition,
                                index,
                                handleClick,
                            }"
                        >
                            <div class="lc-carouse-box__wrapper__tabs--train__button--text" :title="item.label">
                                {{ item.label }}
                            </div>
                        </slot>
                    </button>
                </div>
            </div>
            <div v-if="showArrow" class="lc-carouse-box__wrapper__arrow arrow--right" @click="rightHandler">
                <img class="lc-carouse-box__wrapper__arrow--image" src="./images/rt-arrow.png" draggable="false" alt="" />
            </div>
        </div>
        <div v-if="showTrack" class="lc-carouse-box__track">
            <slot name="track">
                <img class="lc-carouse-box__track__image--pointer" src="./images/top-arrow.png" draggable="false" alt="" />
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch, nextTick, shallowRef, onUnmounted } from 'vue'
import { type ChangeEvent, type TabListRaw } from './types'
import throttle from 'lodash-es/throttle'
import debounce from 'lodash-es/debounce'
import { propsRaw } from './props'

// 轮播索引
const carouseIndex = ref(0)
const _isTransition = ref(true)

// modeIndex 和 modelValue 是两个双向绑定，二选一vmodel, 初始化值，以modelIndex为准
const modelIndex = defineModel<number>('index', { default: -1 })
const modelValue = defineModel<TabListRaw['value']>('value', { default: '' })

const {
    list,
    offsetAnimationTime = 250,
    rowKey = (item: TabListRaw) => item.value ?? Math.random(),
    showTrack = true,
    gap = 10,
    disabled = false,
    backCenter = true,
} = defineProps(propsRaw)

const listSource = computed(() => {
    return list ?? []
})

const showArrow = computed(() => !disabled)

// 如果modelIndex为-1，则以modelValue为准
if (modelIndex.value === -1) {
    modelIndex.value = listSource.value?.findIndex(item => rowKey(item) === modelValue.value) ?? 0
}

const $emit = defineEmits<{
    (e: 'change', value: ChangeEvent): void
}>()

const beforeAfterTempData = ref<{
    before: TabListRaw[]
    after: TabListRaw[]
    appendCount: number
}>({
    before: [],
    after: [],
    appendCount: 0,
})

const renderList = computed(() => {
    // clone 一份放在结尾
    const listClone = listSource.value ?? []
    return [...beforeAfterTempData.value.before, ...listClone, ...beforeAfterTempData.value.after]
})

const isEven = computed(() => carouseIndex.value! % 2 === 0)

function initCarouseIndex() {
    carouseIndex.value = modelIndex.value
}
initCarouseIndex()

function createStepHandler(dir: number): () => void {
    return throttle(() => {
        let currentIndex = carouseIndex.value + dir
        if (currentIndex < 0) {
            currentIndex = renderList.value.length - 1
        } else if (currentIndex >= renderList.value.length) {
            currentIndex = 0
        }
        handleClick(renderList.value[currentIndex], currentIndex)
    }, offsetAnimationTime)
}

const leftHandler = createStepHandler(-1)
const rightHandler = createStepHandler(1)

const tabButtonRef = shallowRef<HTMLButtonElement[]>([])
const tabButtonParentElRef = shallowRef<HTMLDivElement>()
const carouselTrainElRef = shallowRef<HTMLDivElement>()

// 尺寸缓存
const sizeCache = ref<{
    normalButtonWidth: number
    maxButtonCount: number
    carouselWidth: number
    maxAppendCount: number
    offset: number
    parentWidth: number
    lastUpdate: number
}>({
    normalButtonWidth: 0,
    maxButtonCount: 0,
    carouselWidth: 0,
    maxAppendCount: 0,
    offset: 0,
    parentWidth: 0,
    lastUpdate: 0,
})

// 防抖更新尺寸
let updateSizeTimeout: number | null = null
function updateSizes() {
    if (updateSizeTimeout) {
        cancelAnimationFrame(updateSizeTimeout)
    }

    updateSizeTimeout = requestAnimationFrame(() => {
        if (!tabButtonParentElRef.value || !tabButtonRef.value.length || !carouselTrainElRef.value) {
            return
        }

        // 批量读取DOM属性，减少重排
        const parentWidth = tabButtonParentElRef.value.offsetWidth
        const carouselWidth = carouselTrainElRef.value.offsetWidth

        // 如果父元素宽度没有变化，可以跳过部分计算
        if (sizeCache.value.parentWidth === parentWidth && Date.now() - sizeCache.value.lastUpdate < 1000) {
            return
        }

        let normalButtonWidth = 0
        let activeButtonWidth = 0

        // 使用第一个非激活按钮作为标准宽度
        for (let i = 0; i < tabButtonRef.value.length; i++) {
            const buttonEl = tabButtonRef.value[i]
            if (buttonEl) {
                if (buttonEl.classList.contains('active')) {
                    activeButtonWidth = buttonEl.offsetWidth
                } else if (!normalButtonWidth) {
                    normalButtonWidth = buttonEl.offsetWidth
                }

                if (normalButtonWidth && activeButtonWidth) break
            }
        }

        // 如果没有找到非激活按钮，使用第一个按钮的宽度
        if (!normalButtonWidth && tabButtonRef.value[0]) {
            normalButtonWidth = tabButtonRef.value[0].offsetWidth
        }

        const maxCount = normalButtonWidth ? parentWidth / normalButtonWidth : 0
        const maxButtonCount = maxCount
        const maxAppendCount = disabled ? 0 : Math.round(maxCount)

        sizeCache.value = {
            normalButtonWidth: backCenter ? normalButtonWidth : 0,
            maxButtonCount: backCenter ? maxButtonCount : 0,
            carouselWidth: backCenter ? carouselWidth : 0,
            maxAppendCount: backCenter ? maxAppendCount : 0,
            offset: backCenter ? activeButtonWidth / 2 : 0,
            parentWidth,
            lastUpdate: Date.now(),
        }

        updateSizeTimeout = null
    })
}

watch(
    () => list,
    () => {
        nextTick(() => {
            appendBeforeAfterData()
            // 等待DOM更新后更新尺寸
            setTimeout(updateSizes, 50)
        })
    },
    { deep: true },
)

watch(
    () => modelIndex.value,
    () => {
        // 索引变化时不需要立即更新尺寸，只需要在下一次动画帧更新
        requestAnimationFrame(updateSizes)
    },
)

watch(
    () => modelValue.value,
    () => {
        const newIndex = listSource.value.findIndex(item => rowKey(item) === modelValue.value)
        if (newIndex !== -1 && newIndex !== modelIndex.value) {
            modelIndex.value = newIndex
        }
    },
)

onMounted(() => {
    appendBeforeAfterData()
    // 初始化后等待DOM渲染完成再测量尺寸
    setTimeout(updateSizes, 100)
})

// 追加前后临时数据
function appendBeforeAfterData() {
    if (!sizeCache.value.parentWidth) {
        updateSizes()
        return
    }

    const { maxAppendCount } = sizeCache.value
    if (maxAppendCount === 0) return

    beforeAfterTempData.value.appendCount = maxAppendCount
    initCarouseIndex()
    carouseIndex.value += maxAppendCount

    if (disabled) {
        beforeAfterTempData.value.before = []
        beforeAfterTempData.value.after = []
        return
    }

    const listClone = listSource.value ?? []
    beforeAfterTempData.value.before = listClone.slice(-maxAppendCount).map(uuCloneKey)
    beforeAfterTempData.value.after = listClone.slice(0, maxAppendCount).map(uuCloneKey)
}

function uuCloneKey(item: TabListRaw, index: number): TabListRaw {
    return {
        ...item,
        value: rowKey(item) + '_clone_' + index + '_' + Date.now(),
    }
}

// 监听父元素和按钮元素的变化
let resizeObserver: ResizeObserver | null = null
onMounted(() => {
    if (!window.ResizeObserver || !tabButtonParentElRef.value) return

    resizeObserver = new ResizeObserver(
        debounce(() => {
            updateSizes()
            appendBeforeAfterData()
        }, offsetAnimationTime),
    )

    resizeObserver.observe(tabButtonParentElRef.value)

    // 观察按钮尺寸变化
    const buttonObserver = new ResizeObserver(debounce(updateSizes, offsetAnimationTime))

    // 监听前几个按钮的尺寸变化
    nextTick(() => {
        if (tabButtonRef.value) {
            tabButtonRef.value.slice(0, 3).forEach(button => {
                buttonObserver.observe(button)
            })
        }
    })
})

onUnmounted(() => {
    if (resizeObserver) {
        resizeObserver.disconnect()
    }
    if (updateSizeTimeout) {
        cancelAnimationFrame(updateSizeTimeout)
    }
})

// 计算轮播偏移量
const carouselOffset = computed(() => {
    if (!backCenter) return 0

    const { normalButtonWidth, maxButtonCount, offset, carouselWidth } = sizeCache.value

    if (!normalButtonWidth || !maxButtonCount || !carouselWidth) {
        return 0
    }

    const maxButtonCountHalf = maxButtonCount / 2
    let offsetValue = (normalButtonWidth * (carouseIndex.value - maxButtonCountHalf) + offset) * -1

    if (offsetValue >= 0) {
        offsetValue = 0
    } else if (offsetValue <= -carouselWidth + normalButtonWidth * maxButtonCount) {
        offsetValue = -carouselWidth + normalButtonWidth * maxButtonCount
    }

    return offsetValue
})

function transitionCallabck(callback: () => void, isNextTick: boolean = true) {
    requestAnimationFrame(() => {
        if (isNextTick) {
            nextTick(setTimeout.bind(null, callback, offsetAnimationTime))
        } else {
            setTimeout(callback, offsetAnimationTime)
        }
    })
}

function transitionCallabckLoop(index: number) {
    transitionCallabck(() => {
        _isTransition.value = false
        carouseIndex.value = index
    }, false)
}

const handleClick = throttle((_item: TabListRaw, index: number) => {
    if (disabled) return

    if (!_isTransition.value) {
        _isTransition.value = true
    }

    const appendCount = beforeAfterTempData.value.appendCount
    let _index = index - appendCount

    if (modelIndex.value == _index) return

    carouseIndex.value = index

    if (_index < 0) {
        transitionCallabckLoop(listSource.value.length + _index + appendCount)
        _index = listSource.value.length - 1
    } else if (_index >= listSource.value.length) {
        transitionCallabckLoop(appendCount)
        _index = 0
    }

    modelIndex.value = _index

    const _newItem = listSource.value[_index]
    modelValue.value = _newItem?.value
    const _newChangeEventData = {
        index: _index,
        label: _newItem?.label,
        value: _newItem?.value,
        data: _newItem,
    }

    $emit('change', _newChangeEventData)
}, offsetAnimationTime) as unknown as (_item: TabListRaw, index: number) => void
</script>

<style lang="scss" scoped>
.lc-carouse-box {
    width: 100%;
    user-select: none;

    &__track {
        position: relative;
        width: 100%;
        padding-top: 30px;
        pointer-events: none;

        &__image {
            &--pointer {
                height: 14px;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translate(-50%, 0);
            }
        }
    }

    &__wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: calc(v-bind(gap) * 1px);

        &__tabs {
            overflow: hidden;
            --mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.8) 10%, black 50%, rgba(0, 0, 0, 0.817) 90%, transparent 100%);
            mask: var(--mask-image);
            -webkit-mask: var(--mask-image);

            &--train {
                --transition-time: v-bind(offsetAnimationTime);
                width: fit-content;
                display: flex;
                will-change: transform;
                transition: none;
                transform: var(--carousel-offset);

                &.is-transition {
                    transition: transform calc(var(--transition-time) * 1ms) linear;
                }

                &__button {
                    background-color: transparent;
                    outline: none;
                    border: none;
                    transition: none;

                    &:hover {
                        cursor: pointer;
                    }

                    &--text {
                        font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
                        font-weight: normal;
                        font-size: 18px;
                        color: #ffffff;
                        line-height: 18px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
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
