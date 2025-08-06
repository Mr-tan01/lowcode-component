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
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { type AiConfigProps } from './types'
import { NScrollbar, NMarquee } from 'naive-ui/es'
import { type ImageHideDir } from './const'
const {
    isFocus = false,
    hidDir = 'rt',
    aiConfig = {
        sayHello: '您好，我是智能客服机器人，请问您需要什么帮助？',
        quick: [],
    },
    maxHeight = '75px',
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
})

const emit = defineEmits<{
    (e: 'clickQuick', item: AiConfigProps['quick'][number]): void
}>()

function clickQuick(item: AiConfigProps['quick'][number]) {
    emit('clickQuick', item)
}
</script>

<style lang="scss" scoped>
.lc-robot-chat-popup {
    position: relative;
    width: 0;
    height: 132px;
    background: url(./images/msg-popup-bg.png) no-repeat;
    background-size: 100% 100%;
    z-index: -1;
    opacity: 0;
    transition: linear 0.3s;

    &__content {
        padding: 13px 20px;
        padding-left: 30px;
        height: 100%;
        position: relative;

        &--inner {
            position: absolute;
            color: #fff;
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
                height: 100%;

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

    &__hide--lt {
        transform-origin: 0 50%;
        transform: translateX(-50%) scale(0);
    }

    &__hide--rt {
        transform-origin: 100% 50%;
        transform: translateX(50%) scale(0);
        background-image: url(./images/msg-popup-r-bg.png);
    }

    &--focus {
        width: 237px;
        transform: translateX(0) scale(1);
        z-index: 1;
        opacity: 1;
    }
}
</style>
