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
        <div class="lc-robot__wrapper" @mouseenter="isFocus = true" @mouseleave="isFocus = false">
            <robotChatPopup
                v-if="useShowPopup(imageHideDir.rt)"
                :class="{ popupShow: useShowPopup(imageHideDir.rt) && !isFocus }"
                :max-height="popupContextMaxH"
                :ai-config
                :is-focus
                :hid-dir="robotHideDir"
                :popup-size="popupSize"
                v-bind="$attrs"
            >
                <template #center>
                    <slot name="center" />
                </template>
            </robotChatPopup>
            <img class="lc-robot__wrapper__image" :class="[imageLayoutClass]" :src="robotSrc" draggable="false" alt="" />
            <robotChatPopup
                v-if="useShowPopup(imageHideDir.lt)"
                :class="{ popupShow: useShowPopup(imageHideDir.lt) && !isFocus }"
                :max-height="popupContextMaxH"
                :ai-config
                :is-focus
                :hid-dir="robotHideDir"
                :popup-size="popupSize"
                v-bind="$attrs"
            >
                <template #center>
                    <slot name="center" />
                </template>
            </robotChatPopup>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, toRef } from 'vue'
import { robotBQMap, imageShowTrigger, imageHideDir, type RobotBQMapKeys, type ImageShowTrigger, type ImageHideDir } from './const'
import robotChatPopup from './robot-chat-popup.vue'
import { type AiConfigProps } from './types'
import { useDragRobotPosition } from './drag'

const props = defineProps<{
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
const robotSrc = computed(() => props.src || robotBQMap[props.value || 's1'])

const popupSizeRef = toRef(() => props.popupSize || 'small')

const { isDraging, startDrag, stopDrag, robotOffset, xAdsorptionDir } = useDragRobotPosition(popupSizeRef)

const robotHideDir = computed(() => {
    return !props.draggable ? props.hidDir : xAdsorptionDir.value
})
const imageLayoutClass = computed(() => {
    return {
        [`lc-robot__wrapper__image--status-${robotHideDir.value}`]: props.trigger !== imageShowTrigger.none,
    }
})

function useShowPopup(dir: ImageHideDir) {
    return computed(() => props.showPopup && robotHideDir.value === dir).value
}

// 基于顶部位置
const { y: robotPositionTop } = toRefs(robotOffset)
</script>

<style lang="scss" scoped>
.lc-robot {
    &--draggable {
        position: v-bind(position);
        z-index: 9999;
        left: 100%;
        top: v-bind(robotPositionTop); // 改为使用顶部位置
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;

        &.lc-robot {
            &--dir-lt {
                left: 0px;
                transform: translate(0%, 0%);
            }

            &--dir-rt {
                left: 100%;
                transform: translate(-100%, 0%);
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

        &:hover {
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
                &:hover {
                    cursor: pointer;
                    transform: translateX(-45%) rotate(30deg);
                }
            }

            &--status-rt {
                transform: translateX(70%) rotate(-30deg) scaleX(-1);
                &:hover {
                    cursor: pointer;
                    transform: translateX(45%) rotate(-30deg) scaleX(-1);
                }
            }
        }
    }
}
.popupShow {
    display: none;
}
</style>
