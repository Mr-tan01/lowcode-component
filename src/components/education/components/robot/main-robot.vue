<template>
    <div class="lc-main-robot">
        <div class="lc-main-robot__wrapper">
            <img class="lc-main-robot__img" src="./images/main-robot.png" draggable="false" alt="">
            <div class="lc-main-robot__wrapper__inner-input">
                <div class="lc-main-robot__wrapper__inner-input--content">
                    <div class="lc-main-robot__wrapper__inner-input--help" v-show="output.helpText">
                        <img class="lc-main-robot__wrapper__inner-input--help--voice" src="./images/voice.png"
                            draggable="false" alt="">
                        {{ output.helpText }}
                    </div>
                    <input type="text" :placeholder v-model="modelContext"
                        class="lc-main-robot__wrapper__inner-input--content__input">
                    <div class="lc-main-robot__wrapper__inner-input--content__suffix">
                        <img class="lc-main-robot__wrapper__inner-input--content__suffix--img"
                            src="./images/microphone.png" draggable="false" @mousedown="start" @mouseup="stop" alt="" />
                    </div>
                </div>
            </div>
            <div class="lc-main-robot__wrapper__star-wrap" ref="starWrapperRef">
                <div class="lc-main-robot__wrapper__star-wrap--star" v-for="(item, key) in renderStartData"
                    :style="customRotateStyle(key)" :key="item.key ?? key" ref="starElRefs" @mouseenter="mouseenter"
                    @mouseleave="mouseleave" @click="starClick(item, key)">
                    <LcIcon :domain="item.domain" :name="item.name" :size="item.size"></LcIcon>
                    <div class="lc-main-robot__wrapper__star-wrap--star__meta">
                        <div class="lc-main-robot__wrapper__star-wrap--star__meta--item" v-for="(el, ckey) in item.meta"
                            :key="ckey"
                            :style="{ '--left-offset-number': ckey, '--left-reverse-offset-number': reverseIndex(item.meta.length, ckey), }">
                            <div class="lc-main-robot__wrapper__star-wrap--star__meta--item--text">
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
import { computed, PropType, ref, watchEffect } from 'vue';
import { useSpeech } from './speech';
import { LcIcon } from '@/components/education/components/icon';
import { defStarData, StarType } from './const';
import { useStarRotate } from './main-robot-hook';
import memoize from 'lodash-es/memoize';

const {
    placeholder = 'AI 智能问数',
    stars = void 0,
    duration = 1000,
    animate = true,
    startAngle = 90,
    maxShowCount = 7,
    fullAngle = 360,
} = defineProps({
    placeholder: String,
    stars: Array as PropType<StarType[]>,
    duration: Number,
    animate: Boolean,
    startAngle: Number,
    maxShowCount: Number,
    fullAngle: Number,
});

const { start, stop, output, on } = useSpeech();
const {
    starWrapperRef,
    customRotateStyle,
    starLneght,
    starElRefs,
    angleOffset,
    averageAngle,
    startAngle: circleStartAngle,
    starMaxShowCount,
    displayAlternately,
    fullAngle: circleFullAngle
} = useStarRotate();


const reverseIndex = memoize((len, index) => {
    return len - (index + 1);
}, (len, index) => `${len}-${index}`);

const renderStartData = computed(() => stars?.length ? stars : defStarData);
watchEffect(() => {
    starLneght.value = renderStartData.value?.length || 0;
    circleStartAngle.value = startAngle;
    starMaxShowCount.value = maxShowCount;
    circleFullAngle.value = fullAngle;
    const yc = renderStartData.value.length - maxShowCount;
    yc < 0 ? [] : defStarData.slice(yc * -1).forEach((_, index) => {
        const newIndex = (renderStartData.value.length - yc) + index;
        displayAlternately.value.push(newIndex)
    });
});

//360 执行的速度 1000ms 执行一次 每帧旋转的角度为360/1000 即每帧旋转0.36度
// 时长 duration 旋转的总时长，计算速度
const step = computed(() => 360 / duration);
const time = computed(() => 1000 / duration);
const isAnimate = ref(animate);
let timer;

function _requestAnimationFrame(callback) {
    if (window.requestAnimationFrame) {
        window.requestAnimationFrame.call(this, callback);
    } else {
        callback();
    }
}
function autoRotate() {
    if (!isAnimate.value) return;
    setTimeout(() => {
        if (!isAnimate.value) return;
        _requestAnimationFrame(() => {
            angleOffset.value += step.value;
            if (angleOffset.value >= 360) {
                angleOffset.value = 0;
            }
            autoRotate();
        });
    }, time.value);
}
if (isAnimate.value) {
    autoRotate();
}

const $emit = defineEmits<{
    (e: 'click', item: StarType, index: number): void;
}>();

function starClick(item: StarType, index: number) {
    angleOffset.value = averageAngle.value * (index) * -1;
    $emit('click', item, index);
}

function mouseenter() {
    clearTimeout(timer);
    isAnimate.value = false;
}
function mouseleave() {
    timer = setTimeout(() => {
        if (isAnimate.value) return;
        isAnimate.value = animate;
        autoRotate();
    }, 2000);
}

const modelContext = defineModel('value', { default: '' });

on('result', () => {
    modelContext.value = output.value?.textContent || '';
});


</script>

<style lang="scss" scoped>
.lc-main-robot {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

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
                transition-property: transform, opacity, visibility;
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
                    :deep(.lc-icon) {
                        .lc-icon__image {
                            background-image: var(--img-selected-src);
                        }
                    }

                    .lc-main-robot {
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
                    bottom: 20%;
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
                            color: #FFFFFF;
                            line-height: 16px;
                            text-align: right;
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
                padding: 2% 5%;


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
                    font-family: HarmonyOS Sans SC Medium;

                    &::placeholder {
                        font-size: inherit;
                        color: #fff;
                    }
                }

                &__suffix {
                    margin-left: 5%;
                    width: 5%;

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