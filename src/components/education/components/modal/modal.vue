<template>
    <n-modal v-bind="$attrs">
        <div class="lc-modal" :style="layoutStyle">
            <div class="lc-modal__header">
                <slot name="header">
                    <LcDecoratorTitle :text="title"></LcDecoratorTitle>
                </slot>
            </div>
            <div class="lc-modal__wrapper">
                
                <div class="lc-modal__wrapper__closeable" :class="{
                    [sizeMode]: true,
                }">
                    <slot name="closeable">
                        <button class="lc-modal__wrapper__closeable__button" @click="close">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                enable-background="new 0 0 512 512" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon points="405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 
                                375.202,405 405,375.202 285.798,256"></polygon>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </slot>
                </div>
                <slot></slot>
            </div>
        </div>
    </n-modal>
</template>

<script lang="ts" setup>
import { NModal } from 'naive-ui/es/modal';
import { computed, PropType } from 'vue';
import { options, type Options } from './config';
import { LcDecoratorTitle } from '@/components/education/components/decoratorTitle';

const {
    width = options.size.large.width,
    height = options.size.large.height,
    sizeMode = 'large',
    title = '',
} = defineProps({
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    sizeMode: {
        type: String as PropType<Options['sizeMode']>,
    },
    title: {
        type: String,
    },
});
const emit = defineEmits<{
    (e: 'update:show', value: boolean): void;
}>();

function getModalSize(mode: Options['sizeMode']) {
    return computed(() => {
        return options.size[mode] || { width, height, };
    });
}
const backgroundImage = computed(() => {
    return `url(${options.bgImgs[sizeMode]}) no-repeat`;
});
const layoutStyle = computed(() => {
    return {
        '--modal-width': getModalSize(sizeMode).value.width + 'px',
        '--modal-height': getModalSize(sizeMode).value.height + 'px',
        '--modal-bg': backgroundImage.value,
    };
});

function close() {
    emit('update:show', false);
}
</script>

<style lang="scss" scoped>
.lc-modal {
    width: var(--modal-width);
    height: var(--modal-height);
    background: var(--modal-bg);
    background-position: center center;
    background-size: 100% 101%;
    box-sizing: border-box;
    box-shadow: 0px 7px 21px 0px rgba(0, 40, 76, 1);
    position: relative;

    &__header {
        width: 401px;
        height: 35px;
        position: absolute;
        top: -5px;
        z-index: 200;
    }

    &__wrapper {
        padding: 10px;
        padding-top: 34px;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        z-index: 99;

        &__closeable {
            position: absolute;
            right: -8px;
            top: 0;
            --border-width: 2px;
            --button-width: 40px;
            --button-height: 40px;

            &.medium {
                --border-width: 1px;
                --button-width: 36px;
                --button-height: 36px;
            }

            &__button {
                width: var(--button-width);
                height: var(--button-height);
                border: var(--border-width) solid rgba(11, 110, 186, 1);
                border-radius: 2px;
                box-sizing: border-box;
                background: rgba(1, 38, 82, 1);
                padding: 0;
                transform: translate(100%, 0%);
                outline: none;
                margin-top: 2px;

                &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }

                &>svg {
                    fill: #fff;
                    font-size: 30px;
                }
            }
        }
    }
}
</style>