<template>
    <div class="lc-main-robot">
        <div class="lc-main-robot__wrapper">
            <img class="lc-main-robot__img" src="./images/main-robot.png" draggable="false" alt="" />
            <div class="lc-main-robot__wrapper__inner-input">
                <div class="lc-main-robot__wrapper__inner-input--content">
                    <div v-show="output.helpText" class="lc-main-robot__wrapper__inner-input--help">
                        <img class="lc-main-robot__wrapper__inner-input--help--voice" src="./images/voice.png" draggable="false" alt="" />
                        {{ output.helpText }}
                    </div>
                    <input
                        v-model="modelContext"
                        type="text"
                        :placeholder
                        :disabled="forbidden"
                        class="lc-main-robot__wrapper__inner-input--content__input"
                    />
                    <div class="lc-main-robot__wrapper__inner-input--content__suffix">
                        <slot name="input-suffix">
                            <img
                                class="lc-main-robot__wrapper__inner-input--content__suffix--img"
                                src="./images/microphone.png"
                                draggable="false"
                                alt=""
                                @mousedown="handleMouseDown"
                                @mouseup="handleMouseUp"
                            />
                        </slot>
                    </div>
                </div>
            </div>
            <div ref="starWrapperRef" class="lc-main-robot__wrapper__star-wrap">
                <div
                    v-for="(item, key) in renderStartData"
                    :key="item.key ?? key"
                    ref="starElRefs"
                    class="lc-main-robot__wrapper__star-wrap--star"
                    :style="customRotateStyle(key)"
                    @mouseenter="mouseenter"
                    @mouseleave="mouseleave"
                >
                    <div class="lc-main-robot-icon">
                        <LcIcon
                            class="lc-main-robot-icon-center"
                            :domain="item.domain"
                            :name="item.name"
                            :size="item.size"
                            @click="starClick(item, key)"
                        ></LcIcon>
                    </div>

                    <div class="lc-main-robot__wrapper__star-wrap--star__meta">
                        <div
                            v-for="(el, ckey) in item.meta"
                            :key="ckey"
                            class="lc-main-robot__wrapper__star-wrap--star__meta--item"
                            :style="{
                                '--left-offset-number': ckey,
                                '--left-reverse-offset-number': reverseIndex(item.meta.length, ckey),
                            }"
                        >
                            <div
                                v-if="ckey === 0"
                                class="lc-main-robot__wrapper__star-wrap--star__meta--item--text"
                                :title="el.label"
                                :style="getTextStyle(key)"
                                @click="starClick(item, key)"
                            >
                                {{ el.label }}
                            </div>
                            <div
                                v-else
                                class="lc-main-robot__wrapper__star-wrap--star__meta--item--text"
                                :title="el.label"
                                :style="getTextStyle(key)"
                                @click="starItemClick(el, ckey)"
                            >
                                {{ el.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref, watchEffect, onUnmounted } from 'vue'
import { useSpeech } from './speech'
import { LcIcon } from '@/components/education/components/icon'
import { defStarData, StarType, StarItemType } from './const'
import { useStarRotate } from './main-robot-hook'
import memoize from 'lodash-es/memoize'
import { useMessage } from 'naive-ui'

const message = useMessage()

const {
    placeholder = 'AI 智能问数',
    stars = void 0,
    duration = 1000,
    animate = true,
    startAngle = 90,
    maxShowCount = 7,
    fullAngle = 360,
    forbidden = false,
    counterClockwise = false,
    flip = false,
    hideWhenBack = false,
} = defineProps({
    placeholder: String,
    stars: Array as PropType<StarType[]>,
    duration: Number,
    animate: Boolean,
    startAngle: Number,
    maxShowCount: Number,
    fullAngle: Number,
    forbidden: Boolean,
    counterClockwise: Boolean,
    flip: { type: Boolean, default: false },
    hideWhenBack: { type: Boolean, default: false },
})

const { start, stop, output, on } = useSpeech()
function handleMouseDown() {
    if (forbidden) {
        message.warning('此功能敬请期待')
    } else {
        start()
    }
}
function handleMouseUp() {
    if (!forbidden) {
        stop()
    }
}

const {
    starWrapperRef,
    customRotateStyle,
    getTextStyle,
    starLneght,
    starElRefs,
    angleOffset,
    averageAngle,
    startAngle: circleStartAngle,
    starMaxShowCount,
    displayAlternately,
    fullAngle: circleFullAngle,
    cleanup: cleanupStarRotate, // 新增清理函数
    enableFlip: hookFlip, // 翻转开关
    hideWhenBack: hookHideBack, // 隐藏星星
} = useStarRotate()
watchEffect(() => {
    hookFlip.value = flip
    hookHideBack.value = hideWhenBack
})
const reverseIndex = memoize(
    (len, index) => {
        return len - (index + 1)
    },
    (len, index) => `${len}-${index}`,
)

const renderStartData = computed(() => (stars?.length ? stars : defStarData))
watchEffect(() => {
    starLneght.value = renderStartData.value?.length || 0
    circleStartAngle.value = startAngle
    starMaxShowCount.value = maxShowCount
    circleFullAngle.value = fullAngle
    const yc = renderStartData.value.length - maxShowCount
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    yc < 0
        ? []
        : defStarData.slice(yc * -1).forEach((_, index) => {
              const newIndex = renderStartData.value.length - yc + index
              displayAlternately.value.push(newIndex)
          })
})

// 360 执行的速度 1000ms 执行一次 每帧旋转的角度为360/1000 即每帧旋转0.36度
// 时长 duration 旋转的总时长，计算速度
const step = computed(() => 360 / duration)
const time = computed(() => 1000 / duration)
const isAnimate = ref(animate)
let animationFrameId: number | null = null
let timerId: number | null = null

function autoRotate() {
    if (!isAnimate.value) return
    // 使用setTimeout来控制速度，但是这里我们使用requestAnimationFrame来更新动画，所以用setTimeout来延迟
    timerId = window.setTimeout(() => {
        if (!isAnimate.value) return
        animationFrameId = window.requestAnimationFrame(() => {
            if (counterClockwise) {
                // 逆时针
                angleOffset.value -= step.value
                if (angleOffset.value <= 0) {
                    angleOffset.value = 360
                }
            } else {
                angleOffset.value += step.value
                if (angleOffset.value >= 360) {
                    angleOffset.value = 0
                }
            }
            autoRotate()
        })
    }, time.value)
}
// 监听动画状态变化
watchEffect(() => {
    if (isAnimate.value) {
        autoRotate()
    } else {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
            animationFrameId = null
        }
        if (timerId) {
            clearTimeout(timerId)
            timerId = null
        }
    }
})

const $emit = defineEmits<{
    (e: 'click', item: StarType, index: number): void
    (e: 'itemClick', item: StarItemType, index: number): void
}>()

function starClick(item: StarType, index: number) {
    angleOffset.value = averageAngle.value * index * -1
    $emit('click', item, index)
}

function starItemClick(item: StarItemType, index: number): void {
    angleOffset.value = averageAngle.value * index * -1
    $emit('itemClick', item, index)
}

// 修改鼠标事件，使用ref存储timer
const mouseLeaveTimer = ref<number | null>(null)

function mouseenter() {
    if (mouseLeaveTimer.value) {
        clearTimeout(mouseLeaveTimer.value)
        mouseLeaveTimer.value = null
    }
    isAnimate.value = false
}

function mouseleave() {
    mouseLeaveTimer.value = window.setTimeout(() => {
        if (isAnimate.value) return
        isAnimate.value = animate
        autoRotate()
    }, 2000)
}

const modelContext = defineModel<string>('value', { default: '' })
// 组件卸载时清理
onUnmounted(() => {
    isAnimate.value = false

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
    }

    if (timerId) {
        clearTimeout(timerId)
    }

    // 清理语音识别
    stop()

    // 清理星星旋转相关的资源
    if (cleanupStarRotate) {
        cleanupStarRotate()
    }

    // 清理鼠标事件定时器
    if (mouseLeaveTimer.value) {
        clearTimeout(mouseLeaveTimer.value)
    }
})
on('result', () => {
    modelContext.value = output.value?.textContent || ''
})
</script>

<style lang="scss" scoped>
.lc-main-robot {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &-icon {
        display: flex;
        width: 84px;
        height: 88px;
        background: url('./images/base/base.png') no-repeat;
        background-size: cover;
        &-center {
            display: flex !important;
            justify-content: center;
            align-items: flex-start !important;
            padding-top: 15px;
        }
    }

    &__img {
        width: 100%;
        object-fit: contain;
    }

    &__wrapper {
        inset: 0;
        position: relative;

        &__star-wrap {
            position: absolute;
            inset: 0;
            width: 100%;

            &--star {
                width: 10%;
                position: absolute;
                left: 50%;
                top: 50%;
                display: flex;
                transform: translate(-50%, -50%);
                transition: 0.3s linear;
                transition-property: transform, opacity, visibility, left, top;
                will-change: transform;
                z-index: var(--z-index-number);

                @mixin mateItemShow() {
                    transform: translate(calc(var(--left-offset-number) * -7px), 0);
                    opacity: 1;
                    pointer-events: auto;
                    z-index: 99;
                }

                &:hover {
                    z-index: calc(var(--z-index-number) + 1);

                    .lc-main-robot {
                        &-icon {
                            background: url('./images/base/selected-base.png') no-repeat;
                            background-size: cover;
                        }
                        &__wrapper {
                            &__star-wrap--star {
                                &__meta {
                                    &--item {
                                        @include mateItemShow;
                                        transition-delay: calc(var(--left-offset-number) * 0.1s);
                                    }
                                }
                            }
                        }
                    }
                }

                :deep(.lc-icon) {
                    width: 100%;
                }

                &__meta {
                    position: absolute;
                    left: 30%;
                    bottom: 25%;
                    width: 202px;
                    display: flex;
                    flex-direction: column-reverse;
                    gap: 2px;
                    pointer-events: none;

                    &:hover {
                        pointer-events: auto;
                    }

                    &--item {
                        width: 100%;
                        box-sizing: border-box;
                        padding: 9px 20px;
                        background: url(./images/meat-rect-bg.png);
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        transition: linear 0.2s;
                        transform: translate(calc(var(--left-offset-number) * -18px), 0);
                        transition-property: opacity, transform;
                        transition-delay: calc(var(--left-reverse-offset-number) * 0.1s);
                        opacity: 0;
                        will-change: transform, opacity;
                        position: relative;
                        transform: rotateY(180deg);
                        &::after {
                            content: '';
                            z-index: -1;
                            position: absolute;
                            inset: 0;
                            backdrop-filter: blur(0.5px);
                            -webkit-backdrop-filter: blur(0.5px);
                        }

                        &:nth-of-type(1) {
                            @include mateItemShow;
                        }

                        &:hover {
                            background-image: url(./images/selected-meat-rect-bg.png);
                            @include mateItemShow;
                            cursor: pointer;
                        }

                        &--text {
                            font-family: AlimamaFangYuanTiVF-SemiBold, AlimamaFangYuanTiVF-SemiBold;
                            font-weight: normal;
                            font-size: 16px;
                            color: #ffffff;
                            line-height: 16px;
                            text-align: center;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                    }
                }
            }
        }

        &__inner-input {
            position: absolute;
            z-index: 10;
            left: 50%;
            top: 47%;
            transform: translate(-50%, -50%);
            display: flex;
            width: 74%;
            height: 8%;

            &--help {
                color: #fff;
                font-size: 14px;

                &--voice {
                    width: 14px;
                }
            }

            &--content {
                flex: 1;
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
                padding: 2%;

                &__input {
                    flex: 1;
                    width: 100%;
                    border: none;
                    background: transparent;
                    outline: none;
                    font-size: 24px;
                    padding: 0;
                    box-sizing: border-box;
                    color: #fff;
                    font-family: HarmonyOS_Sans_SC_Medium;

                    &::placeholder {
                        font-size: inherit;
                        color: #fff;
                    }
                }

                &__suffix {
                    margin-left: 5%;
                    display: flex;
                    align-items: center;

                    &--img {
                        width: 100%;
                        object-fit: contain;

                        &:hover {
                            cursor: pointer;
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
}
</style>
