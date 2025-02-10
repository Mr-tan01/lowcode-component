<template>
    <div class="lc-robot" :draggable :class="[{
        'lc-robot--draggable': draggable,
        'lc-robot--draging': isDraging,
    }, `lc-robot--dir-${xAdsorptionDir}`]" @dragstart="startDrag" @dragend="stopDrag">
        <div class="lc-robot__wrapper" tabindex="-1" @focus="isFocus = true" @blur="isFocus = false">
            <robotChatPopup :max-height="popupContextMaxH" :aiConfig :isFocus :hidDir="robotHideDir"
                v-if="useShowPopup(imageHideDir.rt)" v-bind="$attrs">
            </robotChatPopup>
            <img class="lc-robot__wrapper__image" :class="[imageLayoutClass]" :src="robotSrc" draggable="false" alt="">
            <robotChatPopup :max-height="popupContextMaxH" :aiConfig :isFocus :hidDir="robotHideDir"
                v-if="useShowPopup(imageHideDir.lt)" v-bind="$attrs">
            </robotChatPopup>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref, toRefs } from 'vue';
import { robotBQMap, imageShowTrigger, imageHideDir, type RobotBQMapKeys, type ImageShowTrigger, type ImageHideDir } from './const';
import robotChatPopup from './robot-chat-popup.vue';
import { type AiConfigProps } from './types';
import { useDragRobotPosition } from './drag';
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
                text: '智能问答模式',
            },
            {
                text: '智能问答模式',
            },
        ],
    },
    draggable = false,
    position = 'fixed',
} = defineProps({
    src: {
        type: String,
    },
    value: {
        type: String as PropType<RobotBQMapKeys>,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    trigger: {
        type: String as PropType<ImageShowTrigger>,
    },
    hidDir: {
        type: String as PropType<ImageHideDir>,
    },
    showPopup: {
        type: Boolean,
    },
    aiConfig: {
        type: Object as PropType<AiConfigProps>,
    },
    popupContextMaxH: {
        type: String,
    },
    draggable: {
        type: Boolean,
    },
    position: {
        type: String as PropType<'relative' | 'absolute' | 'fixed'>
    }
});
const isFocus = ref(false);
const robotSrc = computed(() => src || robotBQMap[value]);
const { isDraging, startDrag, stopDrag, robotOffset, xAdsorptionDir } = useDragRobotPosition();

const robotHideDir = computed(() => {
    return !draggable ? hidDir : xAdsorptionDir.value;
});
const imageLayoutClass = computed(() => {

    return {
        [`lc-robot__wrapper__image--status-${robotHideDir.value}`]: trigger !== imageShowTrigger.none,
    }
});

function useShowPopup(dir: ImageHideDir) {
    return computed(() => showPopup && robotHideDir.value === dir).value;
}

const {
    y: robotPositionBottom,
} = toRefs(robotOffset);
</script>

<style lang="scss" scoped>
.lc-robot {

    &:hover {
        cursor: pointer;
    }

    &--draggable {
        position: v-bind(position);
        z-index: 9999;
        left: 100%;
        top: v-bind(robotPositionBottom);
        transition: 0.2s linear;
      

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
        &:hover {
            cursor: move;
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
                transform: translateX(-50%) rotate(30deg);
            }

            &--status-rt {
                transform: translateX(50%) rotate(-30deg);

            }
        }
    }
}
</style>