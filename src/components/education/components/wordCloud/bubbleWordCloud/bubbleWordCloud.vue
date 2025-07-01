<template>
    <div class="lc-word-cloud" :class="[`lc-word-cloud--${type}`]">
        <div
            ref="wordCloudWrapper"
            class="lc-word-cloud__wrapper"
            @mousemove.capture="wrapperMosueMove"
            @mouseleave.capture="wrapperMosueLeave"
        >
            <div class="lc-word-cloud__wrapper__title">
                {{ title }}
            </div>
            <div
                v-for="(item, index) in renderData"
                :key="item.name"
                class="lc-word-cloud__wrapper__item"
                :style="customWordStyle(item, index)"
                @click="wordClick(item, index)"
            >
                <div class="lc-word-cloud__wrapper__item__text">
                    {{ word?.formatter?.(item, index) }}
                </div>
                <div class="lc-word-cloud__wrapper__item__tooltip">
                    <div class="lc-word-cloud__wrapper__item__tooltip__text">
                        {{ tooltip?.formatter?.(item, index) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import debounce from 'lodash-es/debounce'

type WordCloudData = {
    name: string
    value: number
    color?: string
}
const {
    maxWord = 50,
    data = [],
    ballSize = 30,
    word = {
        formatter: (record) => record.name,
    },
    tooltip = {
        formatter: (record) => record.name + ' ' + record.value,
    },
    title = '中心词汇',
    enableAnimate = true,
    animateSpeed = 100,
    animateStep = 0.05,
    type = 'circle',
} = defineProps<{
    gridSize: number
    maxWord?: number
    data?: WordCloudData[]
    ballSize?: number
    title?: string
    tooltip?: {
        formatter: (record: WordCloudData, index: number) => string
    }
    word?: {
        formatter?: (record: WordCloudData, index: number) => string
    }
    enableAnimate?: boolean
    animateSpeed?: number
    animateStep?: number
    type?: 'text' | 'text-circle' | 'circle' | 'shadow'
}>()
const forceCompute = ref(0)
const animateCount = ref(0)

const wordCloudWrapperRef = useTemplateRef('wordCloudWrapper')
useResizeObserver(wordCloudWrapperRef, () => {
    forceCompute.value++
})
const renderData = computed(() => data.sort((a, b) => a.value - b.value))

const $emit = defineEmits<{
    (e: 'click', record: WordCloudData, index: number): void
}>()

function wordClick(record: WordCloudData, index: number) {
    $emit('click', record, index)
}

const wordCloudWrapperBounds = computed(() => {
    const { width = 0, height = 0 } =
        wordCloudWrapperRef.value?.getBoundingClientRect() ?? {}

    return {
        width,
        height,
        radiusWidth: width / 2,
        radiusHeight: height / 2,
    }
})

const dataLength = computed(() => renderData.value.length)
const _baseAngle = Math.PI / 360
let speed = 1
const angleX = ref(speed * _baseAngle)
const angleY = ref(-speed * _baseAngle)

let x: number,
    y: number,
    z: number,
    cos: number,
    sin: number = 0

function rotateX() {
    cos = Math.cos(angleX.value)
    sin = Math.sin(angleX.value)
    y = y * cos - z * sin
    z = z * cos + y * sin
}

function rotateY() {
    cos = Math.cos(angleY.value)
    sin = Math.sin(angleY.value)
    x = x * cos - z * sin
    z = z * cos + x * sin
}

function customWordStyle(item: WordCloudData, index: number) {
    const { radiusHeight, radiusWidth } = wordCloudWrapperBounds.value ?? {}
    if (!radiusHeight || !radiusWidth) return {}
    let angleA = Math.acos((2 * (index + 1) - 1) / dataLength.value - 1)
    let angleB = angleA * Math.sqrt(dataLength.value * Math.PI)
    z = radiusHeight * Math.cos(angleA)
    y =
        radiusHeight *
        Math.sin(angleA - animateCount.value) *
        Math.sin(angleB - animateCount.value)
    x =
        radiusHeight *
        Math.sin(angleA - animateCount.value) *
        Math.cos(angleB - animateCount.value)

    rotateX()
    rotateY()
    return {
        'left': `${x + radiusWidth}px`,
        'top': `${y + radiusHeight}px`,
        'transform': `translate(-50%, -50%, ${z}px)`,
        'transformOrigin': '50% 50%',
        '--word-ball-size': `${Math.max((item.value / maxWord) * ballSize, 30)}px`,
        '--word-font-size': `${Math.max((item.value / maxWord) * 10, 12)}px`,
        '--word-opacity': 1,
        '---inset-shadow-color': z > 0 ? '#0FFBF8' : 'transparent',
        '---background-color': 'rgba(34, 118, 252, 0.2)',
        '--word-color': item.color ?? '#DBFAFF',
    }
}

const _autRotateAnimate = () => {
    animateCount.value += animateStep
    setTimeout(() => {
        requestAnimationFrame(autoRotate)
    }, animateSpeed)
}
let autoRotate = _autRotateAnimate
if (enableAnimate) {
    autoRotate()
}
const wrapperMosueMove = debounce((event: MouseEvent) => {
    const { width, height } = wordCloudWrapperBounds.value ?? {}
    angleY.value = (event.offsetX / width) * 100 * speed * _baseAngle
    angleX.value = (event.offsetY / height) * 100 * speed * _baseAngle
    animateCount.value = 0
    autoRotate = () => {}
}, 10)

function wrapperMosueLeave() {
    angleX.value = speed * _baseAngle
    angleY.value = -speed * _baseAngle
    if (enableAnimate) {
        autoRotate = _autRotateAnimate
        autoRotate()
    }
}
</script>

<style lang="scss" scoped>
.lc-word-cloud {
    width: 100%;
    height: 100%;
    display: flex;

    &--text {
        .lc-word-cloud {
            &__wrapper {
                &__item {
                    background: none;
                    box-shadow: none;
                    border: none;
                    backdrop-filter: none;
                    min-width: fit-content;
                    min-height: fit-content;
                    width: fit-content;

                    &__text {
                        white-space: nowrap;
                        max-width: fit-content;
                    }
                }
            }
        }
    }

    &--shadow {
        .lc-word-cloud {
            &__wrapper {
                &__item {
                    background: none;
                    border: none;
                    width: fit-content;
                    box-shadow:
                        inset 0px 0px 15px 0px #0ffbf8,
                        0px 0px 15px 0px #0ffbf8;
                }
            }
        }
    }

    &--text-circle {
        .lc-word-cloud {
            &__wrapper {
                &__item {
                    background: none;
                    box-shadow: none;
                    border: none;
                    backdrop-filter: none;
                    min-width: fit-content;
                    min-height: fit-content;
                    width: fit-content;

                    &:nth-last-child(1),
                    &:nth-last-child(2),
                    &:nth-last-child(3),
                    &:nth-last-child(4) {
                        box-shadow: none;
                        border: none;
                        min-width: var(--word-ball-size);
                        min-height: var(--word-ball-size);
                        backdrop-filter: blur(8px);
                    }

                    &:nth-last-child(1) {
                        background: rgba(15, 251, 248, 0.2);
                    }

                    &:nth-last-child(2) {
                        background: rgba(225, 188, 75, 0.2);
                    }

                    &:nth-last-child(3) {
                        background: rgba(0, 148, 255, 0.2);
                    }

                    &:nth-last-child(4) {
                        background: rgba(166, 207, 255, 0.2);
                    }

                    &__text {
                        white-space: nowrap;
                        max-width: fit-content;
                    }
                }
            }
        }
    }

    &__wrapper {
        position: relative;
        flex: 1;
        aspect-ratio: 1/1;
        perspective: 1000px;
        transform-style: preserve-3d;
        background: url(./images/border.svg) no-repeat center / 100%;
        border-radius: 50%;

        &__title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: HarmonyOS_Sans_SC;
            font-size: 28px;
            color: #ffffff;
            line-height: 37px;
            user-select: none;
        }

        &::after {
            content: '';
            position: absolute;
            width: 40%;
            height: 40%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0px 0px 15px 0px #0ffbf8;
            border: 1px solid #0ffbf8;
            background: #081314;
            border-radius: 50%;
            z-index: -1;
        }

        &::before {
            content: '';
            position: absolute;
            width: 70%;
            height: 70%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.01);
            box-shadow: inset 0px 0px 20px 0px rgba(42, 94, 102, 0.5);
            border: 1px dotted #0ffbf8;
            border-radius: 50%;
            z-index: -21;
        }

        &__item {
            position: absolute;
            background: var(---background-color);
            box-shadow: inset 0px 0px 15px 0px var(---inset-shadow-color);
            border: 1px solid #0ffbf8;
            min-width: var(--word-ball-size);
            min-height: var(--word-ball-size);
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px;
            box-sizing: border-box;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition-property: left, transform, top;
            will-change: transform, opacity;
            transition: linear 0.3s;
            opacity: var(--word-opacity);
            user-select: none;
            backdrop-filter: blur(8px);

            &:hover {
                box-shadow:
                    inset 0px 0px 15px 0px #0ffbf8,
                    0px 0px 15px 0px #0ffbf8;
                cursor: pointer;
                opacity: 1;
                z-index: 999;
                transform: translate(-50%, -50%, 0%);

                .lc-word-cloud__wrapper__item__tooltip {
                    display: block;
                    z-index: 1000;
                }
            }

            &__tooltip {
                position: absolute;
                top: 0;
                z-index: 100;
                background-color: rgba(0, 32, 61, 1);
                border: 1px solid rgba(15, 251, 248, 1);
                user-select: none;
                pointer-events: none;
                padding: 5px 10px;
                border-radius: 5px;
                width: fit-content;
                display: none;
                transform: translate(90%, 0%);

                &__text {
                    font-family: HarmonyOS_Sans_SC;
                    color: #fff;
                    font-size: 14px;
                    line-height: 30px;
                    user-select: none;
                    white-space: nowrap;
                }
            }

            &__text {
                max-width: var(--word-ball-size);
                font-family: HarmonyOS_Sans_SC;
                font-size: var(--word-font-size);
                line-height: var(--word-font-size);
                color: var(--word-color);
                text-align: center;
                white-space: normal;
                word-break: break-all;
            }
        }
    }
}
</style>
