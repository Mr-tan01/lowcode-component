<template>
    <div
        class="lc-robot-chat-popup"
        :class="[
            {
                'lc-robot-chat-popup--focus': isFocus,
            },
            `lc-robot-chat-popup__hide--${hidDir}`,
        ]"
    >
        <div class="lc-robot-chat-popup__content">
            <div class="lc-robot-chat-popup__content--inner">
                <div class="lc-robot-chat-popup__content--inner__sayhello">
                    {{ aiConfig.sayHello }}
                </div>
                <div class="lc-robot-chat-popup__content--inner__quick">
                    <slot name="center">
                        <n-scrollbar :style="{ maxHeight }">
                            <div
                                v-for="(item, index) in aiConfig.quick"
                                :key="index"
                                class="lc-robot-chat-popup__content--inner__quick__item"
                                @click="clickQuick(item)"
                            >
                                <img class="lc-robot-chat-popup__content--inner__quick__item--img" src="./images/voice.png" alt="" />
                                <div class="lc-robot-chat-popup__content--inner__quick__item--text" :title="item.text">
                                    <n-marquee v-if="item.text.length > 10" :speed="25" :gradient="false">
                                        {{ item.text }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.text }}
                                    </n-marquee>
                                    <div v-else>{{ item.text }}</div>
                                </div>
                            </div>
                        </n-scrollbar>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { type AiConfigProps } from './types'
import { NScrollbar, NMarquee } from 'naive-ui/es'
import { type ImageHideDir } from './const'
const {
    isFocus = false,
    hidDir = 'rt',
    aiConfig = {
        sayHello: 'Hi，我是小教！ 您可以试着说',
        quick: [],
    },
    maxHeight = '75px',
    popupSize = 'small',
} = defineProps({
    isFocus: {
        type: Boolean,
    },
    hidDir: {
        type: String as PropType<ImageHideDir>,
    },
    aiConfig: {
        type: Object as PropType<AiConfigProps>,
    },
    maxHeight: {
        type: String,
    },
    popupSize: {
        type: String as PropType<'small' | 'medium' | 'large'>,
    },
})

const emit = defineEmits<{
    (e: 'clickQuick', item: AiConfigProps['quick'][number]): void
}>()

function clickQuick(item: AiConfigProps['quick'][number]) {
    emit('clickQuick', item)
}

const imgWidth = computed(() => {
    return popupSize === 'small' ? '319px' : popupSize === 'medium' ? '446px' : '527px'
})
const imgHeight = computed(() => {
    return popupSize === 'small' ? '120px' : popupSize === 'medium' ? '319px' : '585px'
})
const popupBackground = computed(() => {
    const imageFileName = `msg-popup${hidDir === 'rt' ? '-r-' : '-'}bg-${popupSize}.png`
    const imageUrl = new URL(`./images/${imageFileName}`, import.meta.url).href
    return `url(${imageUrl})`
})
</script>

<style lang="scss" scoped>
.lc-robot-chat-popup {
    position: relative;
    height: v-bind(imgHeight);
    background: v-bind(popupBackground) no-repeat;
    background-size: 100% 100%;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: -1;
    opacity: 0;
    transition: linear 0.3s;

    &__content {
        padding: 13px 20px;
        padding-left: 30px;
        height: 100%;
        width: 100%;
        position: relative;

        &--inner {
            position: absolute;
            color: #fff;
            width: 100%;
            height: 100%;

            &__sayhello {
                font-family:
                    PingFangSC,
                    PingFang SC;
                font-weight: 500;
                font-size: 14px;
                color: #0ffbf8;
                line-height: 24px;
                text-align: left;
                margin-bottom: 8px;
            }

            &__quick {
                width: v-bind(imgWidth);
                height: 100%;
                padding-right: 50px;
                box-sizing: border-box;

                &__item {
                    display: flex;
                    align-items: center;
                    gap: 15px;

                    font-family:
                        PingFangSC,
                        PingFang SC;
                    font-weight: 400;
                    font-size: 14px;
                    color: #ffffff;
                    line-height: 24px;
                    text-align: left;

                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }

                &__item--text {
                    width: 75%;
                }
            }
        }
    }

    &--focus {
        width: v-bind(imgWidth);
        transform: translateX(0) scale(1);
        z-index: 1;
        opacity: 1;
    }
}
</style>
