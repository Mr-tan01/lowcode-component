<template>
    <div
        class="lc-robot"
        :draggable
        :class="[
            {
                'lc-robot--draggable': draggable,
                'lc-robot--draging': isDraging,
            },
            `lc-robot--dir-${xAdsorptionDir}`,
        ]"
        @dragstart="startDrag"
        @dragend="stopDrag"
    >
        <div class="lc-robot__wrapper" tabindex="-1" @focus="isFocus = true" @blur="isFocus = false">
            <robotChatPopup
                v-if="useShowPopup(imageHideDir.rt)"
                :max-height="popupContextMaxH"
                :ai-config
                :is-focus
                :hid-dir="robotHideDir"
                :popup-size="popupSize"
                v-bind="$attrs"
            >
                <template v-for="(_, name) in $slots" #[name]="slotProps">
                    <slot :name="name" v-bind="slotProps" />
                </template>
            </robotChatPopup>
            <img class="lc-robot__wrapper__image" :class="[imageLayoutClass]" :src="robotSrc" draggable="false" alt="" />
            <robotChatPopup
                v-if="useShowPopup(imageHideDir.lt)"
                :max-height="popupContextMaxH"
                :ai-config
                :is-focus
                :hid-dir="robotHideDir"
                :popup-size="popupSize"
                v-bind="$attrs"
            >
                <template v-for="(_, name) in $slots" #[name]="slotProps">
                    <slot :name="name" v-bind="slotProps" />
                </template>
            </robotChatPopup>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { robotBQMap, imageShowTrigger, imageHideDir, type RobotBQMapKeys, type ImageShowTrigger, type ImageHideDir } from './const'
import robotChatPopup from './robot-chat-popup.vue'
import { type AiConfigProps } from './types'
import { useDragRobotPosition } from './drag'
const {
    value = 's1',
    width = '219px',
    height = '233px',
    trigger = 'none',
    hidDir = 'lt',
    showPopup = false,
    src = '',
    aiConfig = {
        sayHello: 'Hi，我是小教！ 您可以试着说',
        quick: [
            {
                text: '部门汇报模式',
            },
            {
                text: '任务查看模式',
            },
            {
                text: '1974年，第一次在东南亚打自由搏击就得了冠军；1980年打赢了日本重炮手雷龙，接着连续三年打败所有日本空手道高手，赢得全日本自由搏击冠军……',
            },
            {
                text: '智能问答模式',
            },
        ],
    },
    draggable = false,
    position = 'fixed',
    popupContextMaxH = undefined,
    popupSize = 'small',
} = defineProps<{
    src?: string
    value?: RobotBQMapKeys
    width?: string
    height?: string
    trigger?: ImageShowTrigger
    hidDir?: ImageHideDir
    showPopup?: boolean
    aiConfig?: AiConfigProps
    popupContextMaxH?: string
    draggable?: boolean
    position?: 'relative' | 'absolute' | 'fixed'
    popupSize?: 'small' | 'medium' | 'large'
}>()
const isFocus = defineModel<boolean>('isShow', { default: false })
const robotSrc = computed(() => src || robotBQMap[value])
const { isDraging, startDrag, stopDrag, robotOffset, xAdsorptionDir } = useDragRobotPosition()

const robotHideDir = computed(() => {
    return !draggable ? hidDir : xAdsorptionDir.value
})
const imageLayoutClass = computed(() => {
    return {
        [`lc-robot__wrapper__image--status-${robotHideDir.value}`]: trigger !== imageShowTrigger.none,
    }
})

function useShowPopup(dir: ImageHideDir) {
    return computed(() => showPopup && robotHideDir.value === dir).value
}

const { y: robotPositionBottom } = toRefs(robotOffset)
</script>

<style lang="scss" scoped>
.lc-robot {
    &:hover {
        cursor: pointer;
        .lc-robot__wrapper__image--status-lt {
            transform: translateX(-45%) rotate(30deg);
        }

        .lc-robot__wrapper__image--status-rt {
            transform: translateX(45%) rotate(-30deg) scaleX(-1);
        }
    }

    &--draggable {
        position: v-bind(position);
        z-index: 9999;
        left: 100%;
        top: v-bind(robotPositionBottom);
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;

        &.lc-robot {
            &--dir-lt {
                left: 0px;
                transform: translate(0%, -100%);
            }

            &--dir-rt {
                left: 100%;
                transform: translate(-100%, -100%);
            }
        }

        &:hover {
            cursor: grab;
        }
    }

    &--draging {
        transition: transform 0.2s ease-out;
        transform: scale(0.95);
        opacity: 0.8;
        filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
        &:hover {
            opacity: 0.1;
        }
    }

    &__wrapper {
        overflow: hidden;
        display: flex;
        outline: none;

        &:focus {
            .lc-robot {
                &__wrapper {
                    &__image {
                        transform: unset;
                        overflow: unset;
                        &--status-rt {
                            transform: scaleX(-1);
                        }
                    }
                }
            }
        }

        &__image {
            user-select: none;
            width: v-bind(width);
            height: v-bind(height);
            transition: transform linear 0.3s;

            &--status-lt {
                transform: translateX(-70%) rotate(30deg);
            }

            &--status-rt {
                transform: translateX(70%) rotate(-30deg) scaleX(-1);
            }
        }
    }
}
</style>
