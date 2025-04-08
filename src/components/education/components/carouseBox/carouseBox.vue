<template>
    <div class="lc-carouse-box">
        <div class="lc-carouse-box__wrapper">
            <div class="lc-carouse-box__wrapper__arrow arrow--left" v-if="showArrow" @click="leftHandler">
                <img class="lc-carouse-box__wrapper__arrow--image" src="./images/lt-arrow.png" draggable="false" alt="" />
            </div>
            <div class="lc-carouse-box__wrapper__tabs" ref="tabButtonParentElRef">
                <div
                    class="lc-carouse-box__wrapper__tabs--train"
                    :class="{ 'is-transition': _isTransition }"
                    :style="{ '--carousel-offset': `translateX(${carouselOffset}px)` }"
                    ref="carouselTrainElRef"
                >
                    <button
                        class="lc-carouse-box__wrapper__tabs--train__button"
                        v-for="(item, index) in renderList"
                        :key="rowKey(item)"
                        :class="{ active: carouseIndex === index, 'is-even': isEven }"
                        @click="handleClick(item, index)"
                        ref="tabButtonRef"
                    >
                        <slot v-bind="{ record: item, isActive: carouseIndex === index, isEven, isTransition: _isTransition, index, handleClick }">
                            <div class="lc-carouse-box__wrapper__tabs--train__button--text" :title="item.label">
                                {{ item.label }}
                            </div>
                        </slot>
                    </button>
                </div>
            </div>
            <div class="lc-carouse-box__wrapper__arrow arrow--right" v-if="showArrow" @click="rightHandler">
                <img class="lc-carouse-box__wrapper__arrow--image" src="./images/rt-arrow.png" draggable="false" alt="" />
            </div>
        </div>
        <div class="lc-carouse-box__track" v-if="showTrack">
            <slot name="track">
                <img class="lc-carouse-box__track__image--pointer" src="./images/top-arrow.png" draggable="false" alt="" />
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, PropType, ref, watch, nextTick, shallowRef } from "vue";
import { type ChangeEvent, type TabListRaw } from "./types";
import throttle from "lodash-es/throttle";
import debounce from "lodash-es/debounce";
import { propsRaw } from "./props";

// 轮播索引
const carouseIndex = ref(0);
const _isTransition = ref(true);

// modeIndex 和 modelValue 是两个双向绑定，二选一vmodel, 初始化值，以modelIndex为准
const modelIndex = defineModel<number>("index", { default: -1 });
const modelValue = defineModel<TabListRaw["value"]>("value", { default: "" });

const { list, offsetAnimationTime = 250, rowKey = (item: TabListRaw) => item.value ?? Math.random(), showTrack = true, gap = 10, disabled = false } = defineProps(propsRaw);

const listSource = computed(() => {
    return list ?? [];
});

const showArrow = computed(() => !disabled);

// 如果modelIndex为-1，则以modelValue为准
if (modelIndex.value === -1) {
    modelIndex.value = listSource.value?.findIndex((item) => rowKey(item) === modelValue.value) ?? 0;
}

const $emit = defineEmits<{
    (e: "change", value: ChangeEvent): void;
}>();

const beforeAfterTempData = ref<{
    before: TabListRaw[];
    after: TabListRaw[];
    appendCount: number;
}>({
    before: [],
    after: [],
    appendCount: 0,
});

const renderList = computed(() => {
    // clone 一份放在结尾
    const listClone = listSource.value ?? [];
    return [...beforeAfterTempData.value.before, ...listClone, ...beforeAfterTempData.value.after];
});

const isEven = computed(() => carouseIndex.value! % 2 === 0);

function initCarouseIndex() {
    carouseIndex.value = modelIndex.value;
}
initCarouseIndex();
function createStepHandler(dir: number): () => void {
    return throttle(() => {
        let currentIndex = carouseIndex.value + dir;
        if (currentIndex < 0) {
            currentIndex = renderList.value.length - 1;
        } else if (currentIndex >= renderList.value.length) {
            currentIndex = 0;
        }
        handleClick(renderList.value[currentIndex], currentIndex);
    }, offsetAnimationTime);
}

const leftHandler = createStepHandler(-1);
const rightHandler = createStepHandler(1);

const tabButtonRef = shallowRef<HTMLButtonElement[]>([]);
const tabButtonParentElRef = shallowRef<HTMLDivElement>();
const carouselTrainElRef = shallowRef<HTMLDivElement>();
const forceCompile = ref(0);

watch(
    () => list,
    () => {
        updateCompile();
        nextTick(appendBeforeAfterData);
    },
    {
        deep: 1,
    }
);

onMounted(appendBeforeAfterData); // 初始化

// 追加前后临时数据
function appendBeforeAfterData() {
    if (!clientRect.value) return;
    const { maxAppendCount } = clientRect.value;
    const appendCount = maxAppendCount;
    if (appendCount === 0) return;
    beforeAfterTempData.value.appendCount = appendCount;
    initCarouseIndex(); // 初始化轮播索引
    carouseIndex.value += appendCount; // 轮播索引增加临时数据偏移值
    if (disabled) {
        beforeAfterTempData.value.before = [];
        beforeAfterTempData.value.after = [];
        return;
    }
    const listClone = listSource.value ?? [];
    beforeAfterTempData.value.before = listClone.slice(-appendCount).map(uuCloneKey); // 把结尾的{maxAppendCount}个追加到前面
    beforeAfterTempData.value.after = listClone.slice(0, appendCount).map(uuCloneKey); // 把开始的{maxAppendCount}个追加到后面
}

function uuCloneKey(item: TabListRaw, index: number): TabListRaw {
    return {
        ...item,
        value: rowKey(item) + "_clone_" + index + "_" + Date.now(),
    };
}

function updateCompile() {
    forceCompile.value++; // 强制更新
}

function onParentElResize() {
    if (!window.ResizeObserver || !tabButtonParentElRef.value) return;
    const observer = new ResizeObserver(
        debounce(() => {
            updateCompile();
            appendBeforeAfterData();
        }, offsetAnimationTime)
    );
    observer.observe(tabButtonParentElRef.value);
}
// 监听父元素的resize
onMounted(onParentElResize);

// 让选中的在中心点，计算中心点
const clientRect = computed(() => {
    forceCompile.value++; // 强制更新
    if (!tabButtonParentElRef.value || !tabButtonRef.value || !carouselTrainElRef.value) return;
    // 获取到父元素的宽度
    const width = tabButtonParentElRef.value.offsetWidth;
    // 获取到按钮的宽度
    const buttonMapsWidth = {
        normal: 0,
        active: 0,
    };
    for (let i = 0; i <= tabButtonRef.value.length; i++) {
        const buttonEl = tabButtonRef.value[i];
        // 获取到选中的按钮宽度
        if (buttonEl?.classList?.contains("active")) {
            buttonMapsWidth.active = buttonEl.offsetWidth;
        } else {
            // 获取到正常的按钮宽度
            buttonMapsWidth.normal = buttonEl?.offsetWidth;
        }

        // 如果获取到两个值，则退出
        if (buttonMapsWidth.active && buttonMapsWidth.normal) {
            break;
        }
    }
    // 获取到正常的按钮宽度
    const normalButtonWidth = buttonMapsWidth.normal;
    // 获取到选中的按钮宽度
    const activeButtonWidth = buttonMapsWidth.active;
    // 计算最多能容纳几个按钮
    const maxCount = width / normalButtonWidth;
    const maxButtonCount = maxCount; // 保留小数，计算偏移精度的偏移量需要用到
    const maxAppendCount = disabled ? 0 : Math.round(maxCount); // 用来确定最少需要追加多少个自定元素（处理loop用）
    // 获取到轮播轨道的宽度
    const carouselWidth = carouselTrainElRef.value.offsetWidth;

    return {
        normalButtonWidth,
        maxButtonCount,
        carouselWidth,
        maxAppendCount,
        offset: activeButtonWidth / 2, // 加上选中的按钮宽度一半, 让选中的按钮在中心点
    };
});

// 计算轮播偏移量

const carouselOffset = computed(() => {
    if (clientRect.value) {
        const { normalButtonWidth, maxButtonCount, offset, carouselWidth } = clientRect.value;
        const maxButtonCountHalf = maxButtonCount / 2;
        let offsetValue = (normalButtonWidth * (carouseIndex.value - maxButtonCountHalf) + offset) * -1;

        if (offsetValue >= 0) {
            // 如果偏移量大于0，则设置为0, 证明已经左边到头了
            offsetValue = 0;
        } else if (offsetValue <= -carouselWidth + normalButtonWidth * maxButtonCount) {
            // 证明已经到头了, 最起码需要展示全按钮在区域内容，区域不能空
            offsetValue = -carouselWidth + normalButtonWidth * maxButtonCount;
        }
        return offsetValue;
    }
    return 0;
});

function requestAnimationFrame(callback: () => void) {
    if (window.requestAnimationFrame) {
        window.requestAnimationFrame(callback);
    } else {
        callback();
    }
}

function transitionCallabck(callback: () => void, isNextTick: boolean = true) {
    requestAnimationFrame(() => {
        if (isNextTick) {
            nextTick(setTimeout.bind(null, callback, offsetAnimationTime));
        } else {
            setTimeout(callback, offsetAnimationTime);
        }
    });
}

function transitionCallabckLoop(index: number) {
    transitionCallabck(() => {
        // 关闭过度效果
        _isTransition.value = false;
        // 更新轮播索引，实现无限轮播
        carouseIndex.value = index;
    }, false);
}

const handleClick = throttle((_item: TabListRaw, index: number) => {
    if (disabled) return;
    // 开启过度效果
    if (!_isTransition.value) {
        _isTransition.value = true;
    }
    const appendCount = beforeAfterTempData.value.appendCount;
    let _index = index - appendCount;

    if (modelIndex.value == _index) return;
    carouseIndex.value = index;
    if (_index < 0) {
        transitionCallabckLoop(listSource.value.length + _index + appendCount);
        _index = listSource.value.length - 1;
    } else if (_index >= listSource.value.length) {
        transitionCallabckLoop(appendCount);
        _index = 0;
    }
    modelIndex.value = _index;
    const _newItem = listSource.value[_index];
    modelValue.value = _newItem?.value;
    const _newChangeEventData = {
        index: _index,
        label: _newItem?.label,
        value: _newItem?.value,
        data: _newItem,
    };

    $emit("change", _newChangeEventData);
}, offsetAnimationTime) as unknown as (_item: TabListRaw, index: number) => void;
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
