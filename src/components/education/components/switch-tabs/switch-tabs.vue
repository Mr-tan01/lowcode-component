<template>
    <div class="lc-switch-tabs">
        <div class="lc-switch-tabs__wrapper">
            <div class="lc-switch-tabs__wrapper__arrow arrow--left" @click="leftHandler">
                <img class="lc-switch-tabs__wrapper__arrow--image" src="./images/lt-arrow.png" alt="">
            </div>
            <div class="lc-switch-tabs__wrapper__tabs" ref="tabButtonParentElRef">
                <div class="lc-switch-tabs__wrapper__tabs--train"
                    :style="{ '--carousel-offset': `translateX(${carouselOffset}px)` }" ref="carouselTrainElRef">
                    <button class="lc-switch-tabs__wrapper__tabs--train__button" v-for="(item, index) in renderList"
                        :key="item.value" :class="{ 'active': modelValue === index, 'is-even': isEven, }"
                        @click="handleClick(item, index)" ref="tabButtonRef">
                        <div class="lc-switch-tabs__wrapper__tabs--train__button--text" :title="item.label">
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
import { computed, onMounted, PropType, ref } from 'vue';
import { type TabListRaw } from './types';
import { defSwitchTabList } from './const';
import throttle from 'lodash-es/throttle';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';

const modelValue = defineModel<number>('value', { default: 0 });
const {
    list,
    offsetAnimationTime = 300
} = defineProps({
    list: {
        type: Array as PropType<TabListRaw[]>,
        required: false,
    },
    offsetAnimationTime: {
        type: Number,
    }
});

const $emit = defineEmits<{
    (e: 'change', value: { index: number, label: TabListRaw['label'], value: TabListRaw['value'], data: TabListRaw }): void;
}>();
const renderList = computed(() => {
    // clone 一份放在结尾
    const listClone = list === void 0 ? defSwitchTabList : list;
    // TODO: 循环滚动
    return listClone.concat(cloneDeep(listClone));
});

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
    }, offsetAnimationTime);
}


const leftHandler = createStepHandler(-1);
const rightHandler = createStepHandler(1);

const tabButtonRef = ref<HTMLButtonElement[]>([]);
const tabButtonParentElRef = ref<HTMLDivElement>();
const carouselTrainElRef = ref<HTMLDivElement>();
const forceCompile = ref(0);

function onParentElResize() {
    if (!window.ResizeObserver || !tabButtonParentElRef.value) return;
    const observer = new ResizeObserver(debounce(() => {
        forceCompile.value++; // 强制更新
    }, offsetAnimationTime));
    observer.observe(tabButtonParentElRef.value);
}
// 监听父元素的resize
onMounted(onParentElResize);

// 让选中的在中心点，计算中心点
const centerPoint = computed(() => {
    forceCompile.value++; // 强制更新
    if (!tabButtonParentElRef.value || !tabButtonRef.value || !carouselTrainElRef.value) return;
    // 获取到父元素的宽度
    const { width } = tabButtonParentElRef.value.getBoundingClientRect();
    // 获取到按钮的宽度
    const buttonMapsWidth = {
        normal: 0,
        active: 0,
    }
    for (let i = 0; i <= tabButtonRef.value.length; i++) {
        const buttonEl = tabButtonRef.value[i];
        // 获取到选中的按钮宽度
        if (buttonEl.classList.contains('active')) {
            buttonMapsWidth.active = buttonEl.offsetWidth;
        } else {
            // 获取到正常的按钮宽度
            buttonMapsWidth.normal = buttonEl.offsetWidth;
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
    const maxButtonCount = Math.floor(width / normalButtonWidth);
    // 获取到轮播轨道的宽度
    const carouselWidth = carouselTrainElRef.value.offsetWidth;


    return {
        normalButtonWidth,
        maxButtonCount,
        carouselWidth,
        offset: activeButtonWidth / 2 // 加上选中的按钮宽度一半, 让选中的按钮在中心点
    }
});


// 计算轮播偏移量

const carouselOffset = computed(() => {
    if (centerPoint.value) {
        const { normalButtonWidth, maxButtonCount, offset, carouselWidth } = centerPoint.value;
        const maxButtonCountHalf = maxButtonCount / 2;
        let offsetValue = ((normalButtonWidth * (modelValue.value - maxButtonCountHalf)) + offset) * -1;

        if (offsetValue >= 0) {
            // 如果偏移量大于0，则设置为0, 证明已经左边到头了
            offsetValue = 0;
        } else if (offsetValue <= -carouselWidth + (normalButtonWidth * maxButtonCount)) {
            // 证明已经到头了, 最起码需要展示全按钮在区域内容，区域不能空
            offsetValue = -carouselWidth + (normalButtonWidth * maxButtonCount);
        }
        return offsetValue;
    }
    return 0;

});


const handleClick = throttle((item: TabListRaw, index: number) => {
    modelValue.value = index;

    $emit('change', {
        index,
        label: item?.label,
        value: item?.value,
        data: item,
    });
}, offsetAnimationTime);
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
                --transition-time: v-bind(offsetAnimationTime);
                width: fit-content;
                display: flex;
                will-change: transform;
                transition: transform calc(var(--transition-time) * 1ms) linear;
                transform: var(--carousel-offset);

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